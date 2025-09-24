import { useEffect, useState } from "react";

const WS_URL = import.meta.env.VITE_WS_URL || "ws://localhost:8080";

export const useSocket = () => {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(WS_URL);

    ws.onopen = () => {
      console.log(`✅ Connected to WebSocket: ${WS_URL}`);
      setSocket(ws);
    };

    ws.onclose = () => {
      console.log("❌ WebSocket closed");
      setSocket(null);
    };

    ws.onerror = (err) => {
      console.error("⚠️ WebSocket error", err);
    };

    return () => {
      ws.close();
    };
  }, []);

  return socket;
};
