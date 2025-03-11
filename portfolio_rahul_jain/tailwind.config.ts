// import type { Config } from 'tailwindcss'

// const config = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: 'var(--primary)',
//         secondary: 'var(--secondary)',
//         'text-light': 'var(--text-light)',
//         'text-lighter': 'var(--text-lighter)',
//         white: '#ffffff',
//         black: '#000000',
//         gray: {
//           100: '#f7f7f7',
//           200: '#ebebeb',
//           300: '#e1e1e1',
//           400: '#cacaca',
//           500: '#a0a0a0',
//           600: '#777777',
//           700: '#666666',
//           800: '#333333',
//           900: '#1a1a1a'
//         }
//       },
//       screens: {
//         'sm': '37.5em',    // 600px
//         'md': '56.25em',   // 900px
//         'lg': '75em',      // 1200px
//         'xl': '112.5em',   // 1800px
//       },
//       fontSize: {
//         'xs': '1.2rem',
//         'sm': '1.4rem',
//         'base': '1.6rem',
//         'lg': '1.8rem',
//         'xl': '2rem',
//         '2xl': '2.2rem',
//         '3xl': '2.8rem',
//         '4xl': '4rem',
//         '5xl': '6rem',
//       },
//       spacing: {
//         '18': '4.5rem',
//         '72': '18rem',
//         '84': '21rem',
//         '96': '24rem',
//       },
//       boxShadow: {
//         'custom': '0 5px 15px 0 rgba(0, 0, 0, 0.15)',
//       },
//     },
//   },
//   plugins: [],
// } satisfies Config

// export default config



import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
      },
    },
  },
  plugins: [],
}

export default config