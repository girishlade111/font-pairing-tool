interface FontPreviewProps {
  headingFont: string
  bodyFont: string
}

export function FontPreview({ headingFont, bodyFont }: FontPreviewProps) {
  return (
    <div className="p-4 rounded-md bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700">
      <h2
        className="text-2xl mb-3 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400"
        style={{ fontFamily: headingFont }}
      >
        Typography is the art and technique of arranging type
      </h2>
      <p className="text-base text-slate-700 dark:text-slate-300" style={{ fontFamily: bodyFont }}>
        Good typography makes the reading experience more enjoyable and helps to communicate your message effectively.
        The right font pairing can create harmony and establish a strong visual hierarchy in your designs.
      </p>
    </div>
  )
}
