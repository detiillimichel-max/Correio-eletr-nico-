/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gemini: {
          blue:    '#1a73e8',
          purple:  '#7c3aed',
          dark:    '#0f0f1a',
          card:    '#1a1a2e',
          border:  '#2a2a3e',
          text:    '#e2e8f0',
          muted:   '#64748b',
          bubble:  '#1e3a5f',
          mine:    '#1a3a6e',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'sans-serif']
      }
    }
  },
  plugins: []
}
