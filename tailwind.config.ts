import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "yellow-dark": "rgba(255, 178, 0, 1.0)",
        "yellow-light": "rgba(255, 255, 0, 1.0)",
        "surface": "rgba(34, 34, 34, 1.0)",
      },
      container: {
        center: true,
      },
      fontFamily: {
        sans: [
          "Helvetica Neue",
          "Helvetica",
          "Arial"
        ],
        mono: [
          "Consolas",
          "Monaco",
          "Lucida Console",
          "ui-monospace",
          "SF Mono",
          "SFMono-Regular",
          "Menlo",
          "DejaVu Sans Mono",
          "monospace",
        ],
      },
      screens: {
        "grainger": {"raw": "(min-height: 0px) and (max-height: 900px)"},
      }
    },
  },
  plugins: [],
}
export default config
