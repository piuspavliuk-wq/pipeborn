import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:       '#050505',
        card:     '#141414',
        cardtop:  '#262626',
        divider:  '#3d3d3d',
        muted:    '#afafaf',
        body:     '#919191',
        accent:   '#2563EB',
        accent2:  '#3B82F6',
        accent3:  '#60A5FA',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'system-ui', 'sans-serif'],
        manrope: ['Manrope', 'system-ui', 'sans-serif'],
        mono:    ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
