"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { FontPreview } from "@/components/font-preview"
import { fontData } from "@/lib/font-data"
import { X } from "lucide-react"

interface FontPairingDetailProps {
  fontName: string
  onClose: () => void
}

export function FontPairingDetail({ fontName, onClose }: FontPairingDetailProps) {
  const font = fontData.find((f) => f.name === fontName)

  if (!font) return null

  return (
    <Dialog open={true} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-700 py-8 my-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span
              style={{ fontFamily: font.name }}
              className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-500 dark:from-slate-300 dark:to-slate-100"
            >
              {font.name} Pairings
            </span>
            <DialogClose asChild>
              <button className="rounded-full p-1 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                <X className="h-4 w-4" />
              </button>
            </DialogClose>
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-6 mt-4">
          {font.pairings.map((pairing) => (
            <div
              key={pairing.font}
              className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 shadow-sm"
            >
              <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                <span style={{ fontFamily: font.name }}>{font.name}</span>
                <span className="text-slate-400">+</span>
                <span style={{ fontFamily: pairing.font }}>{pairing.font}</span>
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex gap-2">
                <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-slate-300 to-slate-200 dark:from-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-200 text-[10px]">
                  {font.category}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-slate-300 to-slate-200 dark:from-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-200 text-[10px]">
                  {pairing.category}
                </span>
              </p>
              <FontPreview
                headingFont={font.category === "serif" ? font.name : pairing.font}
                bodyFont={font.category === "serif" ? pairing.font : font.name}
              />
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
