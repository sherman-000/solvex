import React from "react";
import { BetweenHorizonalStart, Image, LetterText, ScanEye, Video } from "lucide-react";

export default function FeatureCombo() {
  return (
    <div className="border border-[#3c3c3c] bg-[#09090b] p-3 gap-y-2 font-space-mono flex flex-col rounded-md">
      <div className="flex items-center justify-start gap-x-2 font-geist">
        <Video color="#2b7fff" size={20} />
        <div>Invisible to Screen Recorders</div>
      </div>
      <div className="flex items-center justify-start gap-x-2 font-geist">
        <BetweenHorizonalStart color="#d633ff" size={20} />
        <div>Avoids Tab Switching</div>
      </div>
      <div className="flex items-center justify-start gap-x-2 font-geist">
        <Image color="#ff8757" size={20} />
        <div>Invisible Screenshot Taker</div>
      </div>
      <div className="flex items-center justify-start gap-x-2 font-geist">
        <LetterText color="#31ff53" size={20} />
        <div>Screenshot to Text (OCR)</div>
      </div>
      <div className="flex items-center justify-start gap-x-2 font-geist">
        <ScanEye color="#31e7ff" size={20} />
        <div>Unfocusable (Doesn't steal focus)</div>
      </div>
    </div>
  );
}
