import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { SERVER_CONFIG } from "../../../config/constants";
import { useSocketEvents } from "./useSocketEvents";

export function useSocketConnection(handlers) {
  const [isConnected, setIsConnected] = useState(false);
  const socket = useRef(null);
  const roomId = useRef(null);

  const events = useSocketEvents(socket, roomId, handlers);

  useEffect(() => {
    socket.current = io(SERVER_CONFIG.SERVER_URL, SERVER_CONFIG.SOCKET_OPTIONS);

    socket.current.on("connect", () => {
      setIsConnected(true);
      console.log("Connected to server:", SERVER_CONFIG.SERVER_URL);
    });

    socket.current.on("disconnect", () => {
      setIsConnected(false);
      console.log("Disconnected from server");
    });

    socket.current.on("matched", events.handleMatched);
    socket.current.on("offer", events.handleOffer);
    socket.current.on("answer", events.handleAnswer);
    socket.current.on("ice-candidate", events.handleIceCandidate);
    socket.current.on("waiting", () => console.log("Entered waiting queue"));
    socket.current.on("partnerLeft", events.handlePartnerLeft);

    return () => {
      if (socket.current) {
        socket.current.disconnect();
      }
    };
  }, []);

  const joinQueue = () => {
    console.log("Emitting joinQueue event");
    if (socket.current?.connected) {
      socket.current.emit("joinQueue");
    } else {
      console.error("Socket not connected when trying to join queue");
    }
  };

  const leaveRoom = () => {
    if (roomId.current && socket.current?.connected) {
      console.log("Leaving room:", roomId.current);
      socket.current.emit("leaveRoom", { roomId: roomId.current });
      roomId.current = null;
    }
  };

  return {
    isConnected,
    joinQueue,
    leaveRoom,
    socket: socket.current,
  };
}
