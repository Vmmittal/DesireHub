import { useState, useRef, useCallback } from "react";
import { useWebRTC } from "./useWebRTC";
import { useSocketConnection } from "./useSocketConnection";

export function useVideoChat() {
  const [status, setStatus] = useState("idle");
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  const {
    startLocalStream,
    createPeerConnection,
    closeConnection,
    handleOffer,
    handleAnswer,
    handleNewICECandidate,
  } = useWebRTC({ localVideoRef, remoteVideoRef });

  const handleMatched = useCallback(
    async (socket, roomId) => {
      console.log("Match found! Creating peer connection...");
      setStatus("connected");
      try {
        await createPeerConnection(socket, roomId);
      } catch (err) {
        console.error("Error creating peer connection:", err);
        setStatus("connection-error");
      }
    },
    [createPeerConnection]
  );

  const handlePartnerLeft = useCallback(() => {
    console.log("Partner left, updating status...");
    setStatus("partner-left");
    closeConnection();
  }, [closeConnection]);

  const socketHandlers = {
    onMatched: handleMatched,
    onPartnerLeft: handlePartnerLeft,
    handleOffer,
    handleAnswer,
    handleNewICECandidate,
  };

  const { isConnected, joinQueue, leaveRoom } =
    useSocketConnection(socketHandlers);

  const handleStart = async () => {
    try {
      setStatus("connecting");
      await startLocalStream();
      setStatus("ready");
    } catch (err) {
      console.error("Camera access error:", err);
      setStatus("camera-error");
    }
  };

  const handleFindPartner = () => {
    console.log("Finding partner...");
    setStatus("finding");
    joinQueue();
  };

  const handleNext = () => {
    console.log("Looking for next partner...");
    leaveRoom();
    handleFindPartner();
  };

  const handleStop = () => {
    console.log("Stopping session...");
    leaveRoom();
    closeConnection();
    setStatus("idle");
  };

  return {
    status,
    isConnected,
    localVideoRef,
    remoteVideoRef,
    handlers: {
      handleStart,
      handleFindPartner,
      handleNext,
      handleStop,
    },
  };
}
