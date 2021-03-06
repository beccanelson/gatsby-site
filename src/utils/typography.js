import Typography from "typography"
import theme from "./theme"

const typography = new Typography({
  headerFontFamily: ["Rubik", "sans-serif"],
  bodyFontFamily: ["Lora", "serif"],
  headerWeight: 500,
  baseFontSize: 19,
  bodyColor: theme.text,
  baseLineHeight: 1.75,
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
