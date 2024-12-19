import React from "react";
import { STATUS_MESSAGES } from "./constants";

export function StatusMessage({ status, isConnected }) {
  if (!isConnected) {
    return <p className="status">Connecting to server...</p>;
  }

  return <p className="status">{STATUS_MESSAGES[status]}</p>;
}
