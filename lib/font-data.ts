export interface PairingType {
  font: string
  category: "serif" | "sans-serif"
}

export interface FontType {
  name: string
  category: "serif" | "sans-serif"
  pairings: PairingType[]
}

export const fontData: FontType[] = [
  // Sans-serif fonts
  {
    name: "Roboto",
    category: "sans-serif",
    pairings: [
      { font: "Playfair Display", category: "serif" },
      { font: "Lora", category: "serif" },
      { font: "Merriweather", category: "serif" },
    ],
  },
  {
    name: "Open Sans",
    category: "sans-serif",
    pairings: [
      { font: "Lora", category: "serif" },
      { font: "Roboto Slab", category: "serif" },
      { font: "Playfair Display", category: "serif" },
    ],
  },
  {
    name: "Lato",
    category: "sans-serif",
    pairings: [
      { font: "Merriweather", category: "serif" },
      { font: "Playfair Display", category: "serif" },
      { font: "Georgia", category: "serif" },
    ],
  },
  {
    name: "Montserrat",
    category: "sans-serif",
    pairings: [
      { font: "Merriweather", category: "serif" },
      { font: "Crimson Text", category: "serif" },
      { font: "Lora", category: "serif" },
    ],
  },
  {
    name: "Raleway",
    category: "sans-serif",
    pairings: [
      { font: "Lora", category: "serif" },
      { font: "Merriweather", category: "serif" },
      { font: "Playfair Display", category: "serif" },
    ],
  },
  {
    name: "Poppins",
    category: "sans-serif",
    pairings: [
      { font: "Playfair Display", category: "serif" },
      { font: "Lora", category: "serif" },
      { font: "Merriweather", category: "serif" },
    ],
  },
  {
    name: "Source Sans Pro",
    category: "sans-serif",
    pairings: [
      { font: "Source Serif Pro", category: "serif" },
      { font: "Playfair Display", category: "serif" },
      { font: "Lora", category: "serif" },
    ],
  },
  {
    name: "Nunito",
    category: "sans-serif",
    pairings: [
      { font: "Merriweather", category: "serif" },
      { font: "Playfair Display", category: "serif" },
      { font: "Lora", category: "serif" },
    ],
  },
  {
    name: "Work Sans",
    category: "sans-serif",
    pairings: [
      { font: "Crimson Text", category: "serif" },
      { font: "Playfair Display", category: "serif" },
      { font: "Lora", category: "serif" },
    ],
  },
  {
    name: "Inter",
    category: "sans-serif",
    pairings: [
      { font: "Lora", category: "serif" },
      { font: "Playfair Display", category: "serif" },
      { font: "Merriweather", category: "serif" },
    ],
  },
  {
    name: "Noto Sans",
    category: "sans-serif",
    pairings: [
      { font: "Noto Serif", category: "serif" },
      { font: "Playfair Display", category: "serif" },
      { font: "Lora", category: "serif" },
    ],
  },
  {
    name: "PT Sans",
    category: "sans-serif",
    pairings: [
      { font: "PT Serif", category: "serif" },
      { font: "Playfair Display", category: "serif" },
      { font: "Lora", category: "serif" },
    ],
  },
  {
    name: "Rubik",
    category: "sans-serif",
    pairings: [
      { font: "Lora", category: "serif" },
      { font: "Merriweather", category: "serif" },
      { font: "Playfair Display", category: "serif" },
    ],
  },
  {
    name: "Karla",
    category: "sans-serif",
    pairings: [
      { font: "Merriweather", category: "serif" },
      { font: "Lora", category: "serif" },
      { font: "Playfair Display", category: "serif" },
    ],
  },
  {
    name: "Quicksand",
    category: "sans-serif",
    pairings: [
      { font: "Lora", category: "serif" },
      { font: "Playfair Display", category: "serif" },
      { font: "Merriweather", category: "serif" },
    ],
  },
  {
    name: "Mulish",
    category: "sans-serif",
    pairings: [
      { font: "Playfair Display", category: "serif" },
      { font: "Lora", category: "serif" },
      { font: "Merriweather", category: "serif" },
    ],
  },
  {
    name: "Fira Sans",
    category: "sans-serif",
    pairings: [
      { font: "Merriweather", category: "serif" },
      { font: "Lora", category: "serif" },
      { font: "Playfair Display", category: "serif" },
    ],
  },
  {
    name: "Barlow",
    category: "sans-serif",
    pairings: [
      { font: "Playfair Display", category: "serif" },
      { font: "Lora", category: "serif" },
      { font: "Merriweather", category: "serif" },
    ],
  },
  {
    name: "Josefin Sans",
    category: "sans-serif",
    pairings: [
      { font: "Lora", category: "serif" },
      { font: "Playfair Display", category: "serif" },
      { font: "Merriweather", category: "serif" },
    ],
  },
  {
    name: "Urbanist",
    category: "sans-serif",
    pairings: [
      { font: "Playfair Display", category: "serif" },
      { font: "Lora", category: "serif" },
      { font: "Merriweather", category: "serif" },
    ],
  },

  // Serif fonts
  {
    name: "Playfair Display",
    category: "serif",
    pairings: [
      { font: "Roboto", category: "sans-serif" },
      { font: "Open Sans", category: "sans-serif" },
      { font: "Source Sans Pro", category: "sans-serif" },
    ],
  },
  {
    name: "Merriweather",
    category: "serif",
    pairings: [
      { font: "Montserrat", category: "sans-serif" },
      { font: "Open Sans", category: "sans-serif" },
      { font: "Roboto", category: "sans-serif" },
    ],
  },
  {
    name: "Lora",
    category: "serif",
    pairings: [
      { font: "Roboto", category: "sans-serif" },
      { font: "Open Sans", category: "sans-serif" },
      { font: "Montserrat", category: "sans-serif" },
    ],
  },
  {
    name: "Crimson Text",
    category: "serif",
    pairings: [
      { font: "Work Sans", category: "sans-serif" },
      { font: "Montserrat", category: "sans-serif" },
      { font: "Open Sans", category: "sans-serif" },
    ],
  },
  {
    name: "Roboto Slab",
    category: "serif",
    pairings: [
      { font: "Roboto", category: "sans-serif" },
      { font: "Open Sans", category: "sans-serif" },
      { font: "Lato", category: "sans-serif" },
    ],
  },
  {
    name: "Source Serif Pro",
    category: "serif",
    pairings: [
      { font: "Source Sans Pro", category: "sans-serif" },
      { font: "Open Sans", category: "sans-serif" },
      { font: "Roboto", category: "sans-serif" },
    ],
  },
  {
    name: "Noto Serif",
    category: "serif",
    pairings: [
      { font: "Noto Sans", category: "sans-serif" },
      { font: "Open Sans", category: "sans-serif" },
      { font: "Roboto", category: "sans-serif" },
    ],
  },
  {
    name: "PT Serif",
    category: "serif",
    pairings: [
      { font: "PT Sans", category: "sans-serif" },
      { font: "Open Sans", category: "sans-serif" },
      { font: "Roboto", category: "sans-serif" },
    ],
  },
  {
    name: "Libre Baskerville",
    category: "serif",
    pairings: [
      { font: "Montserrat", category: "sans-serif" },
      { font: "Open Sans", category: "sans-serif" },
      { font: "Source Sans Pro", category: "sans-serif" },
    ],
  },
  {
    name: "Cormorant Garamond",
    category: "serif",
    pairings: [
      { font: "Montserrat", category: "sans-serif" },
      { font: "Open Sans", category: "sans-serif" },
      { font: "Raleway", category: "sans-serif" },
    ],
  },
  {
    name: "Bitter",
    category: "serif",
    pairings: [
      { font: "Raleway", category: "sans-serif" },
      { font: "Open Sans", category: "sans-serif" },
      { font: "Roboto", category: "sans-serif" },
    ],
  },
  {
    name: "Vollkorn",
    category: "serif",
    pairings: [
      { font: "Lato", category: "sans-serif" },
      { font: "Open Sans", category: "sans-serif" },
      { font: "Roboto", category: "sans-serif" },
    ],
  },
  {
    name: "Cardo",
    category: "serif",
    pairings: [
      { font: "Montserrat", category: "sans-serif" },
      { font: "Open Sans", category: "sans-serif" },
      { font: "Raleway", category: "sans-serif" },
    ],
  },
  {
    name: "Arvo",
    category: "serif",
    pairings: [
      { font: "Lato", category: "sans-serif" },
      { font: "Open Sans", category: "sans-serif" },
      { font: "Montserrat", category: "sans-serif" },
    ],
  },
  {
    name: "Lora",
    category: "serif",
    pairings: [
      { font: "Roboto", category: "sans-serif" },
      { font: "Open Sans", category: "sans-serif" },
      { font: "Montserrat", category: "sans-serif" },
    ],
  },
  {
    name: "Playfair Display SC",
    category: "serif",
    pairings: [
      { font: "Lato", category: "sans-serif" },
      { font: "Open Sans", category: "sans-serif" },
      { font: "Raleway", category: "sans-serif" },
    ],
  },
  {
    name: "Eczar",
    category: "serif",
    pairings: [
      { font: "Roboto", category: "sans-serif" },
      { font: "Open Sans", category: "sans-serif" },
      { font: "Work Sans", category: "sans-serif" },
    ],
  },
  {
    name: "Spectral",
    category: "serif",
    pairings: [
      { font: "Karla", category: "sans-serif" },
      { font: "Rubik", category: "sans-serif" },
      { font: "Work Sans", category: "sans-serif" },
    ],
  },
  {
    name: "Alegreya",
    category: "serif",
    pairings: [
      { font: "Lato", category: "sans-serif" },
      { font: "Roboto", category: "sans-serif" },
      { font: "Open Sans", category: "sans-serif" },
    ],
  },
  {
    name: "Domine",
    category: "serif",
    pairings: [
      { font: "Open Sans", category: "sans-serif" },
      { font: "Roboto", category: "sans-serif" },
      { font: "Montserrat", category: "sans-serif" },
    ],
  },
]
