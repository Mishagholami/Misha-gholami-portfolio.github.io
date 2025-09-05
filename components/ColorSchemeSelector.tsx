"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Palette, Check } from "lucide-react"

export type ColorScheme = "brown-cream" | "sage-mint" | "navy-gold" | "plum-rose" | "forest-sage"

interface ColorSchemeOption {
  id: ColorScheme
  name: string
  description: string
  primary: string
  secondary: string
  accent: string
  preview: {
    bg: string
    card: string
    text: string
    accent: string
  }
}

const colorSchemes: ColorSchemeOption[] = [
  {
    id: "brown-cream",
    name: "Warm Brown & Cream",
    description: "Original warm, earthy palette",
    primary: "#5f361a",
    secondary: "#fefcf8",
    accent: "#a17040",
    preview: {
      bg: "bg-cream-50",
      card: "bg-cream-100",
      text: "text-brown-800",
      accent: "bg-brown-600",
    },
  },
  {
    id: "sage-mint",
    name: "Sage & Mint",
    description: "Fresh, natural green tones",
    primary: "#2d5a3d",
    secondary: "#f0f9f4",
    accent: "#4a7c59",
    preview: {
      bg: "bg-emerald-50",
      card: "bg-emerald-100",
      text: "text-emerald-900",
      accent: "bg-emerald-600",
    },
  },
  {
    id: "navy-gold",
    name: "Navy & Gold",
    description: "Professional, sophisticated palette",
    primary: "#1e3a8a",
    secondary: "#fefce8",
    accent: "#d97706",
    preview: {
      bg: "bg-blue-50",
      card: "bg-amber-50",
      text: "text-blue-900",
      accent: "bg-amber-600",
    },
  },
  {
    id: "plum-rose",
    name: "Plum & Rose",
    description: "Creative, artistic color scheme",
    primary: "#7c2d92",
    secondary: "#fdf2f8",
    accent: "#be185d",
    preview: {
      bg: "bg-purple-50",
      card: "bg-pink-50",
      text: "text-purple-900",
      accent: "bg-pink-600",
    },
  },
  {
    id: "forest-sage",
    name: "Forest & Sage",
    description: "Deep, nature-inspired tones",
    primary: "#1f2937",
    secondary: "#f3f4f6",
    accent: "#059669",
    preview: {
      bg: "bg-gray-50",
      card: "bg-gray-100",
      text: "text-gray-900",
      accent: "bg-emerald-600",
    },
  },
]

interface ColorSchemeSelectorProps {
  currentScheme: ColorScheme
  onSchemeChange: (scheme: ColorScheme) => void
}

export default function ColorSchemeSelector({ currentScheme, onSchemeChange }: ColorSchemeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed top-20 right-4 z-40">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center border border-gray-200 hover:shadow-xl transition-shadow"
      >
        <Palette className="w-6 h-6 text-gray-700" />
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -10 }}
          className="absolute top-16 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 p-6"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-4">Choose Color Scheme</h3>
          <div className="space-y-3">
            {colorSchemes.map((scheme) => (
              <motion.button
                key={scheme.id}
                onClick={() => {
                  onSchemeChange(scheme.id)
                  setIsOpen(false)
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full p-4 rounded-xl border-2 transition-all ${
                  currentScheme === scheme.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300 bg-gray-50"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900">{scheme.name}</h4>
                    <p className="text-sm text-gray-600">{scheme.description}</p>
                  </div>
                  {currentScheme === scheme.id && <Check className="w-5 h-5 text-blue-500" />}
                </div>
                <div className="flex space-x-2">
                  <div
                    className="w-8 h-8 rounded-full border border-gray-300"
                    style={{ backgroundColor: scheme.primary }}
                  />
                  <div
                    className="w-8 h-8 rounded-full border border-gray-300"
                    style={{ backgroundColor: scheme.secondary }}
                  />
                  <div
                    className="w-8 h-8 rounded-full border border-gray-300"
                    style={{ backgroundColor: scheme.accent }}
                  />
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}
