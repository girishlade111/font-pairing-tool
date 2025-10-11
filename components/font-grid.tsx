"use client"

import { useState, useEffect } from "react"
import { FontCard } from "@/components/font-card"
import { FontPairingDetail } from "@/components/font-pairing-detail"
import { SearchBar } from "@/components/search-bar"
import { fontData } from "@/lib/font-data"

export function FontGrid() {
  const [selectedFont, setSelectedFont] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredFonts, setFilteredFonts] = useState(fontData)

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredFonts(fontData)
    } else {
      const query = searchQuery.toLowerCase()
      const filtered = fontData.filter(
        (font) => font.name.toLowerCase().includes(query) || font.category.toLowerCase().includes(query),
      )
      setFilteredFonts(filtered)
    }
  }, [searchQuery])

  const handleFontClick = (fontName: string) => {
    setSelectedFont(fontName)
  }

  const handleClose = () => {
    setSelectedFont(null)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  return (
    <div>
      <div className="mb-8">
        <SearchBar onSearch={handleSearch} />
      </div>

      {filteredFonts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No fonts found matching "{searchQuery}"</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredFonts.map((font) => (
            <FontCard key={font.name} font={font} onClick={() => handleFontClick(font.name)} />
          ))}
        </div>
      )}

      {selectedFont && <FontPairingDetail fontName={selectedFont} onClose={handleClose} />}
    </div>
  )
}
