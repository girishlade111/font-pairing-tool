"use client"

import type { FontType } from "@/lib/font-data"

interface FontCardProps {
  font: FontType
  onClick: () => void
}

export function FontCard({ font, onClick }: FontCardProps) {
  return (
    <div className="relative group">
      {/* Metallic border overlay that appears on hover */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-transparent border-2 border-slate-300 dark:border-slate-600 shadow-[0_0_10px_rgba(195,207,226,0.3)] pointer-events-none"></div>

      {/* Actual card with fixed border width */}
      <div
        className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 cursor-pointer transition-all bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 group-hover:from-slate-100 group-hover:to-white dark:group-hover:from-slate-800 dark:group-hover:to-slate-700 backdrop-blur-sm h-full"
        onClick={onClick}
      >
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl truncate" style={{ fontFamily: font.name }}>
            {font.name}
          </h3>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-slate-300 to-slate-200 dark:from-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-200">
            {font.category}
          </span>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent my-2"></div>
        <p className="text-base line-clamp-3" style={{ fontFamily: font.name }}>
          The quick brown fox jumps over the lazy dog.
        </p>
      </div>
    </div>
  )
}
