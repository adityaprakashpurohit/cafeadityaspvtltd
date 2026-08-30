/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          espresso: 'rgb(var(--brand-espresso) / <alpha-value>)',
          cream: 'rgb(var(--brand-cream) / <alpha-value>)',
          beige: 'rgb(var(--brand-beige) / <alpha-value>)',
          offwhite: 'rgb(var(--brand-offwhite) / <alpha-value>)',
          green: 'rgb(var(--brand-green) / <alpha-value>)',
          terracotta: 'rgb(var(--brand-terracotta) / <alpha-value>)',
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'Inter', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(58, 38, 24, 0.05)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
