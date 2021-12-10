module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}'],
  content: [],
    theme: {
      colors: {
        brand1: '#B0FBBC',
        brand2: '#82F9A1',
        primary: '#ECF8FF',
        secondary: '#C9E2F0',
      },
      backgroundColor: {
        brand1: '#416883',
        brand2: '#5E8CA7',
        primary: '#111A20',
        secondary: '#1C2C35',
        tertiary: '#243B4A',
      },
      borderColor: {
        primary: 'var(--color-border-primary)',
        secondary: 'var(--color-border-secondary)',
        tertiary: 'var(--color-border-tertiary)',
      },
    },
    extend: {},
  plugins: [],
}
