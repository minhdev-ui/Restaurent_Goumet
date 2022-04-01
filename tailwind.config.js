module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#F6121C',
        'text-italic': '#282828',
        'gray-f7': '#f7f7f7',
        'hoverBtn': '#dd000a',
      },
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      letterSpacing: {
        '1': '0em',
        '2': '0.025em',
        '3': '0.05em',
        '4': '0.1em',
        '5': '0.2em',
      },
      spacing: {
        '30%': '30%',
        '2px': '2px',
        'screen': '100vh'
      },
      minWidth: {
        '1/2': '50%',
        '2/3': '66.67%',
        '1140p': '1140px'
      },
      maxWidth: {
        '1/2': '50%',
        '2/3': '66.67%',
        '1140p': '1140px',
        '1/6': '16.666667%'
      },
      minHeight: {
        '30vh': '30vh'
      },
      backgroundImage: {
        'overlay-theme': "url('/src/images/overlay-themr.jpg')",
        'chef-theme': "url('/src/images/ODRAJ80.jpg')"
      },
      fontSize: {
        '40p': '40px'
      }
    },
  },
  plugins: [],
}