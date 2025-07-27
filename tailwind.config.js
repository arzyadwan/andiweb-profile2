/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <-- Untuk fitur light/dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Kustomisasi 'prose' untuk ukuran heading ada di sini
      typography: ({ theme }) => ({
        invert: {
          css: {
            'h1': { fontSize: theme('fontSize.3xl') },
            'h2': { fontSize: theme('fontSize.2xl') },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}