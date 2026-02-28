import React, { useEffect, useState } from "react";

export default function TimeTracker() {
  const [seconds, setSeconds] = useState(60 * 60 + 24 * 60 + 8); 
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [running]);

  const hh = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mm = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className=" text-white rounded-[18px] shadow-[0_10px_28px_rgba(15,23,42,0.06)] p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="font-black text-white">Time Tracker</div>
      </div>

      <div className="text-[34px] font-black mt-4 tracking-tight">
        {hh}:{mm}:{ss}
      </div>

      <div className="flex gap-2.5 mt-3.5">
        <button 
          className="w-11 h-11 rounded-full bg-white text-[#0f172a] border-0 cursor-pointer font-black flex items-center justify-center transition-transform active:scale-95"
          onClick={() => setRunning((r) => !r)}
        >
          {running ? "⏸" : "▶"}
        </button>
        <button 
          className="w-11 h-11 rounded-full bg-red-500 text-white border-0 cursor-pointer font-black flex items-center justify-center transition-transform active:scale-95"
          onClick={() => { setRunning(false); setSeconds(0); }}
        >
          Stop
        </button>
      </div>
    </div>
  );
}