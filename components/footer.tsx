import { Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="mt-16 pb-8 text-center text-sm text-muted-foreground">
      <div className="flex items-center justify-center gap-1.5">
        <span>Crafted by</span>
        <a
          href="https://x.com/mapalodesign"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors font-medium"
        >
          @mapalodesign
          <Twitter className="h-3.5 w-3.5" />
        </a>
        <span>with</span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-slate-400 font-semibold">
          v0
        </span>
      </div>
    </footer>
  )
}
