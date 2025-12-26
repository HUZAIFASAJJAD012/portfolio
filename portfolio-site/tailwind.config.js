/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0070f3',
        secondary: '#6b21a8',
        dark: '#111827',
        light: '#f9fafb'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '33%': { transform: 'translateY(-20px) translateX(10px)' },
          '66%': { transform: 'translateY(10px) translateX(-10px)' },
        },
        blob: {
          '0%, 100%': { 
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': { 
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': { 
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
        },
      }
    },
  },
  plugins: [],
};
