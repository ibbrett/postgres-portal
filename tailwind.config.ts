import type {Config} from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        seahawk: {
          blue: '#002244', // college navy
          green: '#69BE28', // action green
          gray: '#A5ACAF', // wolf gray
        },
        portal: {
          dark: '#ddd',
          light: '#555',
        },
        palette: {
          inactive: '#d7f9fd',
          active: '#89ecf9',
          placeholder: '#a6a6a6',
          hover: '#9CEFFA',
          text: '#04A0F9',
          ring: '#69BE28',
        },
      },
    },
  },
  plugins: [],
}
export default config
