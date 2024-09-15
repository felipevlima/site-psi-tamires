/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'background': '#EDE7E4',
      'header-background': '#A18276',
      'secondary-background': '#CEB7AE',
      'brown-text': '#A18276',
      'secondary-text': '#333333',
      'button-green': '#70826B',
      'custom-gray': '#D9D9D9',
      'custom-pink': '#F59999',
      'link-pink': '#F1D6B8'
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Noto Serif', 'serif'],
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
}

