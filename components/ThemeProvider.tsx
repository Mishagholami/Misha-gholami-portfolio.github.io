"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { ColorScheme } from "./ColorSchemeSelector"

interface ThemeContextType {
  colorScheme: ColorScheme
  setColorScheme: (scheme: ColorScheme) => void
  getThemeClasses: () => {
    bg: string
    cardBg: string
    text: string
    textSecondary: string
    accent: string
    border: string
    hover: string
  }
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

const themeClasses = {
  "brown-cream": {
    bg: "bg-cream-50",
    cardBg: "bg-cream-100",
    text: "text-brown-800",
    textSecondary: "text-brown-600",
    accent: "bg-brown-600 hover:bg-brown-700",
    border: "border-brown-200",
    hover: "hover:bg-cream-200",
  },
  "sage-mint": {
    bg: "bg-sage-50",
    cardBg: "bg-mint-50",
    text: "text-sage-900",
    textSecondary: "text-sage-700",
    accent: "bg-sage-600 hover:bg-sage-700",
    border: "border-sage-200",
    hover: "hover:bg-sage-100",
  },
  "navy-gold": {
    bg: "bg-navy-50",
    cardBg: "bg-gold-50",
    text: "text-navy-900",
    textSecondary: "text-navy-700",
    accent: "bg-gold-600 hover:bg-gold-700",
    border: "border-navy-200",
    hover: "hover:bg-navy-100",
  },
  "plum-rose": {
    bg: "bg-plum-50",
    cardBg: "bg-rose-50",
    text: "text-plum-900",
    textSecondary: "text-plum-700",
    accent: "bg-rose-600 hover:bg-rose-700",
    border: "border-plum-200",
    hover: "hover:bg-plum-100",
  },
  "forest-sage": {
    bg: "bg-forest-50",
    cardBg: "bg-forest-100",
    text: "text-forest-900",
    textSecondary: "text-forest-700",
    accent: "bg-emerald-600 hover:bg-emerald-700",
    border: "border-forest-200",
    hover: "hover:bg-forest-200",
  },
}

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("brown-cream")

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-color-scheme") as ColorScheme
    if (saved && themeClasses[saved]) {
      setColorScheme(saved)
    }
  }, [])

  const handleSetColorScheme = (scheme: ColorScheme) => {
    setColorScheme(scheme)
    localStorage.setItem("portfolio-color-scheme", scheme)
  }

  const getThemeClasses = () => themeClasses[colorScheme]

  return (
    <ThemeContext.Provider
      value={{
        colorScheme,
        setColorScheme: handleSetColorScheme,
        getThemeClasses,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
