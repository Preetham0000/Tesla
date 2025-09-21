module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html"
    ],
    theme: {
      extend: {
        colors: {
          'tesla-red': '#dc2626',
        },
        fontFamily: {
          'sans': ['Inter', 'system-ui', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }