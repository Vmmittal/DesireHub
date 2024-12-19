import { useCallback, useRef } from "react";

const configuration = {
  iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
};

export function useWebRTC({ localVideoRef, remoteVideoRef }) {
  const peerConnection = useRef(null);
  const localStream = useRef(null);

  const startLocalStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      localStream.current = stream;
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
      return stream;
    } catch (err) {
      console.error("Error accessing media devices:", err);
      throw err;
    }
  };

  const handleICECandidate = (socket, roomId) => {
    if (!peerConnection.current) return;

    peerConnection.current.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit("ice-candidate", {
          roomId,
          candidate: event.candidate,
        });
      }
    };
  };

  const createOffer = async (socket, roomId) => {
    if (!peerConnection.current) return;

    try {
      const offer = await peerConnection.current.createOffer();
      await peerConnection.current.setLocalDescription(offer);
      socket.emit("offer", { roomId, offer });
    } catch (err) {
      console.error("Error creating offer:", err);
    }
  };

  const handleOffer = async (socket, roomId, offer) => {
    if (!peerConnection.current) return;

    try {
      await peerConnection.current.setRemoteDescription(
        new RTCSessionDescription(offer)
      );
      const answer = await peerConnection.current.createAnswer();
      await peerConnection.current.setLocalDescription(answer);
      socket.emit("answer", { roomId, answer });
    } catch (err) {
      console.error("Error handling offer:", err);
    }
  };

  const handleAnswer = async (answer) => {
    if (!peerConnection.current) return;

    try {
      await peerConnection.current.setRemoteDescription(
        new RTCSessionDescription(answer)
      );
    } catch (err) {
      console.error("Error handling answer:", err);
    }
  };

  const handleNewICECandidate = async (candidate) => {
    if (!peerConnection.current) return;

    try {
      await peerConnection.current.addIceCandidate(
        new RTCIceCandidate(candidate)
      );
    } catch (err) {
      console.error("Error adding ICE candidate:", err);
    }
  };

  const createPeerConnection = useCallback(
    async (socket, roomId, isInitiator = true) => {
      try {
        peerConnection.current = new RTCPeerConnection(configuration);

        // Add local tracks to connection
        localStream.current.getTracks().forEach((track) => {
          peerConnection.current.addTrack(track, localStream.current);
        });

        // Handle incoming tracks
        peerConnection.current.ontrack = ({ streams: [stream] }) => {
          console.log("Received remote stream");
          if (remoteVideoRef.current) {
            remoteVideoRef.current.srcObject = stream;
          }
        };

        // Set up ICE handling
        handleICECandidate(socket, roomId);

        // If initiator, create and send offer
        if (isInitiator) {
          await createOffer(socket, roomId);
        }

        return peerConnection.current;
      } catch (err) {
        console.error("Error creating peer connection:", err);
        throw err;
      }
    },
    []
  );

  const closeConnection = useCallback(() => {
    if (peerConnection.current) {
      peerConnection.current.close();
      peerConnection.current = null;
    }

    if (remoteVideoRef.current) {
      remoteVideoRef.current.srcObject = null;
    }
  }, []);

  return {
    startLocalStream,
    createPeerConnection,
    closeConnection,
    handleOffer,
    handleAnswer,
    handleNewICECandidate,
  };
}
