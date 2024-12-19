import React, { forwardRef } from "react";

export const VideoStream = forwardRef(({ className, ...props }, ref) => (
  <video ref={ref} className={`video-stream ${className}`} {...props} />
));
