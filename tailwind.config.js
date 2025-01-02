/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        background: {
          primary: 'var(--colors-background-primary)',
          secondary: 'var(--colors-background-secondary)',
          tertiary: 'var(--colors-background-tertiary)',
          hover: 'var(--colors-background-hover)',
        },
        text: {
          primary: 'var(--colors-text-primary)',
          secondary: 'var(--colors-text-secondary)',
          muted: 'var(--colors-text-muted)',
        },
        accent: {
          primary: 'var(--colors-accent-primary)',
          secondary: 'var(--colors-accent-secondary)',
          terminal: 'var(--colors-accent-terminal)',
          hover: 'var(--colors-accent-hover)',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #2867F0, #19B0EC)',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      animation: {
        bounce: 'bounce 1.5s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
