import React from "react";
import { getTechDeviconClass } from "@/lib/devicon";

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = "text-base" }: TechIconProps) {
  const normalized = name.toLowerCase().trim();

  // Custom SVGs for AI / specialized tools not present in Devicon font
  if (normalized.includes("openai")) {
    return (
      <svg className="w-4 h-4 shrink-0 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.28 9.38a5.8 5.8 0 0 0-.48-4.58 5.88 5.88 0 0 0-4.04-2.88 5.8 5.8 0 0 0-5.18 1.1A5.88 5.88 0 0 0 8.04 2a5.8 5.8 0 0 0-4.64 2.45 5.88 5.88 0 0 0-.82 4.9 5.8 5.8 0 0 0-2.12 4.2 5.88 5.88 0 0 0 1.94 4.58 5.8 5.8 0 0 0 .48 4.58 5.88 5.88 0 0 0 4.04 2.88 5.8 5.8 0 0 0 5.18-1.1A5.88 5.88 0 0 0 16.5 22a5.8 5.8 0 0 0 4.64-2.45 5.88 5.88 0 0 0 .82-4.9 5.8 5.8 0 0 0 2.12-4.2 5.88 5.88 0 0 0-1.8-1.07zm-7.6 11.2a4.4 4.4 0 0 1-2.92.05l.38-.85a10.9 10.9 0 0 0 .6-1.5l.08-.26 1.86-1.07.72.42a4.4 4.4 0 0 1-.72 3.21zm4.4-2.4a4.39 4.39 0 0 1-1.92 2.19v-1.12c0-.58-.08-1.15-.22-1.7l1.42-.82.72.42c.3.56.4 1.2.3 1.84l-.3-.81zm1.2-5.4a4.39 4.39 0 0 1-1 2.74l-.97-.56c.48-.36.9-.8 1.24-1.3l.73-.88zm-3.6-2.07l-3.2 1.85-3.2-1.85 3.2-1.85 3.2 1.85z" />
      </svg>
    );
  }

  if (normalized.includes("pinecone")) {
    return (
      <svg className="w-4 h-4 shrink-0 text-cyan-600" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.5l5.5 3.5L12 11.5 6.5 8 12 4.5zM6 9.5l5 3v6l-5-3.2V9.5zm7 9v-6l5-3v5.8l-5 3.2z" />
      </svg>
    );
  }

  if (normalized.includes("weaviate")) {
    return (
      <svg className="w-4 h-4 shrink-0 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M8 12l2.5 3L16 9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (normalized.includes("llama") || normalized.includes("llama 3")) {
    return (
      <svg className="w-4 h-4 shrink-0 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a4 4 0 0 0-4 4v3H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4zm-2 4a2 2 0 1 1 4 0v3h-4V6zm-2 7h8v5H8v-5z" />
      </svg>
    );
  }

  if (normalized.includes("mistral")) {
    return (
      <svg className="w-4 h-4 shrink-0 text-amber-600" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 4h4v4H4V4zm12 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm12 0h4v4h-4v-4z" />
      </svg>
    );
  }

  if (normalized.includes("langchain")) {
    return (
      <svg className="w-4 h-4 shrink-0 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm10 10h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-6-6h2v6h-2z" />
      </svg>
    );
  }

  // Official Devicon Icon
  const deviconClass = getTechDeviconClass(name);
  return <i className={`${deviconClass} ${className} shrink-0`} />;
}
