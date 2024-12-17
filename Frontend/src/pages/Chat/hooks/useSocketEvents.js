import { useCallback } from "react";

export function useSocketEvents(socket, roomIdRef, handlers) {
  const handleMatched = useCallback(
    async (data) => {
      console.log("Received matched event:", data);
      if (data?.roomId) {
        console.log("Setting roomId:", data.roomId);
        roomIdRef.current = data.roomId;
        await handlers.onMatched(socket.current, data.roomId);
      }
    },
    [handlers.onMatched]
  );

  const handleOffer = useCallback(
    async ({ offer }) => {
      console.log("Received offer");
      await handlers.handleOffer(socket.current, roomIdRef.current, offer);
    },
    [handlers.handleOffer]
  );

  const handleAnswer = useCallback(
    async ({ answer }) => {
      console.log("Received answer");
      await handlers.handleAnswer(answer);
    },
    [handlers.handleAnswer]
  );

  const handleIceCandidate = useCallback(
    async ({ candidate }) => {
      console.log("Received ICE candidate");
      await handlers.handleNewICECandidate(candidate);
    },
    [handlers.handleNewICECandidate]
  );

  const handlePartnerLeft = useCallback(() => {
    console.log("Partner left the room");
    handlers.onPartnerLeft();
  }, [handlers.onPartnerLeft]);

  return {
    handleMatched,
    handleOffer,
    handleAnswer,
    handleIceCandidate,
    handlePartnerLeft,
  };
}
