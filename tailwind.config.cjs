/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/**.tsx'],
  theme: {

    colors: {
      white: "#FFFFFF",
      transparent: "transparent",
      blue: "#3294F8",
      base: {
        title: "#E7EDF4",
        subtitle: "#C4D4E3",
        text: "#AFC2D4",
        span: "#7B96B2",
        label: "#3A536B",
        border: "#1C2F41",
        post: "#112131",
        profile: "#0B1B2B",
        bg: "#071422",
        input: "#040F1A",
      }
    },

    fontSize: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
    },

    extend: {
      fontFamily:{
        sans: 'Nunito, sans-serif',
      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}
