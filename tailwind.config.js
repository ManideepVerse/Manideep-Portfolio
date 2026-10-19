/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Syne', 'Inter', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'ui-monospace', 'monospace']
      },
      colors: {
        background: '#05070B',
        surface: '#0A0E15',
        line: '#1B2230',
        foreground: '#F1F5F9',
        muted: '#94A3B8',
        accent: '#22D3EE'
      }
    },
  },
  plugins: [tailwindScrollbar],
};
