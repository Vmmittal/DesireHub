import React from "react";

export function Controls({ status, onStart, onFindPartner, onNext, onStop }) {
  return (
    <div className="controls">
      {status === "idle" && (
        <button onClick={onStart} className="control-btn start">
          Start Camera
        </button>
      )}

      {status === "ready" && (
        <button onClick={onFindPartner} className="control-btn find">
          Find Partner
        </button>
      )}

      {["connected", "partner-left"].includes(status) && (
        <>
          <button onClick={onNext} className="control-btn next">
            Next Partner
          </button>
          <button onClick={onStop} className="control-btn stop">
            Stop
          </button>
        </>
      )}
    </div>
  );
}
