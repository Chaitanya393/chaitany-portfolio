/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0D0D0D',
        surface1: '#141414',
        surface2: '#1A1A1A',
        primary: '#F5F5F5',
        secondary: '#888888',
        electric: '#2563EB',
        cyanAccent: '#06B6D4',
        amberAccent: '#F59E0B',
        hairline: '#2A2A2A',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'scan': 'scan 6s linear infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'typing': 'blink 1s step-end infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        blink: {
          '50%': { 'border-color': 'transparent' },
        }
      }
    },
  },
  plugins: [],
}
