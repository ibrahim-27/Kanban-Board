/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-bg': '#F2F6FE',
        'theme-primary': '#754BE5',
        'theme-secondary': '#1E0059',
        'text-secondary': '#74707B',
        'text-primary': '#0E0818',
        'tag-cyan': '#00FFFF',
        'tag-dark-green': '#006400',
        'tag-sky-blue': '#87CEEB',
        'tag-pink': '#FFC0CB',
        'tag-orange': '#FFA500',
        'tag-red': '#fc9090',
        'tag-blue': '#0000FF',
        'tag-green': '#008000',
        'tag-purple': '#800080',
        'tag-yellow': '#FFFF00',
      },
    },
  },
  plugins: [],
}

