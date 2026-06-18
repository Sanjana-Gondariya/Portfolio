/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#090A0F',
        surface: {
          1: '#11131A',
          2: '#181B24',
          3: '#202431',
        },
        foreground: '#F4F4F5',
        secondary: '#A1A1AA',
        muted: '#71717A',
        lime: '#E5F75C',
        purple: '#8B8CFF',
        cyan: '#7ED6FF',
        warning: '#FFD84D',
        success: '#A3FF7A',
        border: 'rgba(255,255,255,0.12)',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'panel': 'inset 0 1px 0 rgba(255,255,255,0.06)',
        'lime-glow': '0 0 24px rgba(229, 247, 92, 0.15)',
      },
      animation: {
        'pulse-soft': 'pulse-soft 2.5s ease-in-out infinite',
        'scan': 'scan 8s linear infinite',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
};
