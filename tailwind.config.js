module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    // "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand: 'red',
        primary: '#6b7280',
        text: '#111827',
      }
    },
  },
  plugins: [],
}