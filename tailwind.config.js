/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B1F3B',
        secondary: '#334155',
        accent: '#CBA135',
        bg: '#F8FAFC',
        text: '#0F172A',
        muted: '#475569',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Merriweather', 'Georgia', 'serif'],
      },
      maxWidth: {
        'container': '1280px',
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
      },
    },
  },
  plugins: [],
};