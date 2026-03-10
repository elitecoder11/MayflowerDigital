"use client";

import { useEffect } from "react";

type DemoModalProps = {
  isOpen: boolean;
  demoUrl: string | null;
  onClose: () => void;
};

export function DemoModal({ isOpen, demoUrl, onClose }: DemoModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !demoUrl) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-white shadow-2xl">
      {/* Sticky bar so you can always get back */}
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-2.5 shadow-sm">
        <button
          onClick={onClose}
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200"
        >
          ← Back to Mayflower Digital
        </button>
        <button
          onClick={onClose}
          className="rounded-lg p-2 text-slate-500 hover:bg-slate-200 hover:text-slate-800"
          aria-label="Close demo"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex-1 min-h-0">
        <iframe
          src={demoUrl}
          title="Website demo"
          className="h-full w-full border-0"
        />
      </div>
    </div>
  );
}
