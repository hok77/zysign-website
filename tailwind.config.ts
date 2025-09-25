import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#165DFF',
        secondary: '#36CFC9',
        alibaba: '#FF6A00',
        dark: '#1D2129',
        light: '#F2F3F5',
        muted: '#86909C'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif']
      },
    },
  },
  plugins: [],
} satisfies Config