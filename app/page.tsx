import { FontGrid } from "@/components/font-grid"
import { MeteorShower } from "@/components/meteor-shower"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto relative overflow-hidden">
      <MeteorShower />
      <header className="mb-8 text-center relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-slate-300 pb-1">
          Google Fonts Pairing Tool
        </h1>
        <p className="text-muted-foreground mb-6 tracking-tight">
          Discover perfect font combinations for your web projects
        </p>
      </header>
      <FontGrid />
      <Footer />
    </main>
  )
}
