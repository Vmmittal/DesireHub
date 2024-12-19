import React, { useState, useRef, useCallback } from "react";
import { VideoStream } from "./VideoStream";
import { Controls } from "./Controls";
import { StatusMessage } from "./StatusMessage";
import { useWebRTC } from "./hooks/useWebRTC";
import { useSocketConnection } from "./hooks/useSocketConnection";
import "./VideoChat.css";

export default function VideoChat() {
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

  const { isConnected, joinQueue, leaveRoom } = useSocketConnection({
    onMatched: handleMatched,
    onPartnerLeft: () => {
      console.log("Partner left, updating status...");
      setStatus("partner-left");
      closeConnection();
    },
    webRTCHandlers: {
      handleOffer,
      handleAnswer,
      handleNewICECandidate,
    },
  });

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

  return (
    <div className="video-chat">
      <div className="video-container">
        <VideoStream
          ref={localVideoRef}
          className="local-video"
          muted
          autoPlay
          playsInline
        />
        <VideoStream
          ref={remoteVideoRef}
          className="remote-video"
          autoPlay
          playsInline
        />
      </div>

      <StatusMessage status={status} isConnected={isConnected} />

      <Controls
        status={status}
        onStart={handleStart}
        onFindPartner={handleFindPartner}
        onNext={handleNext}
        onStop={handleStop}
      />
    </div>
  );
}
