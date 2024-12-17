export const VIDEO_CHAT_STATUS = {
  IDLE: "idle",
  CONNECTING: "connecting",
  CAMERA_ERROR: "camera-error",
  READY: "ready",
  FINDING: "finding",
  CONNECTED: "connected",
  PARTNER_LEFT: "partner-left",
  CONNECTION_ERROR: "connection-error",
};

export const STATUS_MESSAGES = {
  [VIDEO_CHAT_STATUS.IDLE]: 'Click "Start Camera" to begin',
  [VIDEO_CHAT_STATUS.CONNECTING]: "Accessing camera...",
  [VIDEO_CHAT_STATUS.CAMERA_ERROR]:
    "Camera access denied. Please check permissions.",
  [VIDEO_CHAT_STATUS.READY]: 'Click "Find Partner" to start chatting',
  [VIDEO_CHAT_STATUS.FINDING]: "Finding a partner...",
  [VIDEO_CHAT_STATUS.CONNECTED]: "Connected! Chat away!",
  [VIDEO_CHAT_STATUS.PARTNER_LEFT]:
    'Partner left. Click "Next Partner" to continue',
  [VIDEO_CHAT_STATUS.CONNECTION_ERROR]: "Connection error. Please try again.",
};
