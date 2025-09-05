"use client"

import { createContext, useContext, type ReactNode } from "react"

interface ThemeContextType {
  theme: string
}

const ThemeContext = createContext<ThemeContextType>({ theme: "deep-ocean-silver" })

export function ThemeProvider({ children }: { children: ReactNode }) {
  return <ThemeContext.Provider value={{ theme: "deep-ocean-silver" }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
