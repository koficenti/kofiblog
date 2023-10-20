import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'md': "850px",
    },
    extend: {
      colors: {
        'custom-black': '#1E1E1E',
        'custom-gray': '#323232',
        'custom-light-gray': '#3D3D3D',
      },
    },
  },
  plugins: [],
}
export default config
