/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            DEFAULT: '#1E3A8A', // --primary-color
            hover: '#1E40AF',   // --primary-hover
            dark: '#1e3a8a',
            darker: '#172554'
          },
          orange: {
            DEFAULT: '#F97316', // --secondary-color
            hover: '#EA580C',   // --secondary-hover
          },
          accent:  'hsl(var(--a) / <alpha-value>)',
          dark:    '#1F2937',   // --dark
          light:   '#F3F4F6',   // --gray-lighter
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'premium-gradient': 'linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: true,
    logs: false,
  },
}
