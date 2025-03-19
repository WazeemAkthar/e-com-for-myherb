/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
      ],
    theme: {
      extend: {
        // Add your custom styles here
        colors: {
          'primary': '#1D4ED8',    // Custom primary color
          'secondary': '#9333EA',  // Custom secondary color
          'custom-gray': '#4B5563',
        },
        backgroundImage: {
            'custom-cart': 'radial-gradient(70.71% 70.71% at 50% 50%, #FFE5E5 0%, #FFE0DA 25%, #D7FF89 100%)',
          },
        fontSize: {
          'xs': '.75rem',
          'sm': '.875rem',
          'base': '1rem',
          'xl': '1.25rem',
          '2xl': '1.5rem',
        },
        spacing: {
          '72': '18rem',
          '84': '21rem',
          '96': '24rem',
        },
        borderRadius: {
          'xl': '1rem',
          '2xl': '1.5rem',
          '3xl': '2rem',
        },
      },
    },
    plugins: [],
  }