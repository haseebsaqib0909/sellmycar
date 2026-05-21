"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

interface RegPlateInputProps {
  size?: "default" | "large";
  buttonLabel?: string;
  onSubmit?: (reg: string) => void;
}

export default function RegPlateInput({
  size = "default",
  buttonLabel = "Get my free valuation",
  onSubmit,
}: RegPlateInputProps) {
  const router = useRouter();
  const [reg, setReg] = useState("");

  function handleChange(value: string) {
    const cleaned = value.toUpperCase().replace(/[^A-Z0-9 ]/g, "").slice(0, 8);
    setReg(cleaned);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = reg.trim();
    if (!trimmed) return;

    if (onSubmit) {
      onSubmit(trimmed);
      return;
    }
    const encoded = encodeURIComponent(trimmed.replace(/\s+/g, ""));
    router.push(`/valuation?reg=${encoded}`);
  }

  const plateTextSize =
    size === "large" ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl";
  const plateHeight = size === "large" ? "h-20 sm:h-24" : "h-16 sm:h-20";

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-2xl mx-auto">
        {/* Plate */}
        <div
          className={`flex items-stretch border-2 border-black rounded-md overflow-hidden bg-plate-yellow shadow-[0_4px_16px_rgba(0,0,0,0.12)] flex-1 ${plateHeight}`}
        >
          {/* GB badge */}
          <div className="bg-[#003399] flex flex-col items-center justify-center px-2.5 sm:px-3 shrink-0">
            {/* Stylized Union Jack */}
            <div className="relative w-6 h-4 mb-1 overflow-hidden rounded-[1px] bg-[#003399]">
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 bg-white"></div>
                <div className="absolute top-0 bottom-0 left-1/2 w-[2px] -translate-x-1/2 bg-white"></div>
                <div className="absolute top-1/2 left-0 right-0 h-[1px] -translate-y-1/2 bg-[#C8102E]"></div>
                <div className="absolute top-0 bottom-0 left-1/2 w-[1px] -translate-x-1/2 bg-[#C8102E]"></div>
              </div>
            </div>
            <div className="text-white font-extrabold text-[10px] sm:text-xs leading-none tracking-wider">
              GB
            </div>
          </div>

          {/* Plate text input */}
          <input
            type="text"
            value={reg}
            onChange={(e) => handleChange(e.target.value)}
            className={`flex-1 bg-plate-yellow text-black font-black uppercase ${plateTextSize} text-center tracking-[0.15em] outline-none placeholder:text-black/25 min-w-0`}
            placeholder="YOUR REG"
            aria-label="Enter your registration plate"
            spellCheck={false}
            autoComplete="off"
          />
        </div>

        {/* CTA button */}
        <button
          type="submit"
          className={`bg-brand hover:bg-brand-hover active:scale-[0.98] text-white font-semibold rounded-md px-6 sm:px-8 transition-all duration-200 whitespace-nowrap shadow-lg shadow-brand/20 ${
            size === "large"
              ? "text-base sm:text-lg py-4"
              : "text-base py-3 sm:py-4"
          }`}
        >
          {buttonLabel}
        </button>
      </div>
    </form>
  );
}
