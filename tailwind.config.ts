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
        "yellow-dark": "rgba(204, 102, 238, 1.0)",
        "yellow-light": "rgba(227, 155, 250, 1.0)",
        "surface": {
          "100": "rgba(var(34, 34, 34, 1.0)",
          "150": "rgba(var(51, 51, 51, 1.0)",
        },
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
