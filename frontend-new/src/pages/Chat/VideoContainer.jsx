import React from "react";
import { VideoStream } from "./VideoStream";

export function VideoContainer({ localVideoRef, remoteVideoRef }) {
  return (
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
  );
}
