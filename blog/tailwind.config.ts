import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        'DEFAULT': 'var(--border-radius)',
      },
      fontFamily: {
        sans: ['var(--font-dm-serif-display)'],
        mono: ['var(--font-poppins)'],
        code: ['var(--font-source-code-pro)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          DEFAULT: '#15b47b',
          '50': '#edfcf5',
          '100': '#d2f9e4',
          '200': '#a9f1ce',
          '300': '#6ce2b0',
          '400': '#39ce94',
          '500': '#15b47b',
          '600': '#0a9163',
          '700': '#087452',
          '800': '#095c43',
          '900': '#084c38',
          '950': '#032b20',
        },
        secondary: {
          DEFAULT: '#F2F2F2',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#F2F2F2',
          600: '#D9D9D9',
          700: '#BFBFBF',
          800: '#A6A6A6',
          900: '#8C8C8C',
        },
        accent: {
          DEFAULT: '#F2F2F2',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#F2F2F2',
          600: '#D9D9D9',
          700: '#BFBFBF',
          800: '#A6A6A6',
          900: '#8C8C8C',
        },
        success: {
          DEFAULT: '#4CAF50',
          50: '#E8F5E9',
          100: '#C8E6C9',
          200: '#A5D6A7',
          300: '#81C784',
          400: '#66BB6A',
          500: '#4CAF50',
          600: '#43A047',
          700: '#388E3C',
          800: '#2E7D32',
          900: '#1B5E20',
        },
        warning: {
          DEFAULT: '#FFC107',
          50: '#FFF8E1',
          100: '#FFECB3',
          200: '#FFE082',
          300: '#FFD54F',
          400: '#FFCA28',
          500: '#FFC107',
          600: '#FFB300',
          700: '#FFA000',
          800: '#FF8F00',
          900: '#FF6F00',
        },

        danger: {
          DEFAULT: '#F44336',
          50: '#FFEBEE',
          100: '#FFCDD2',
          200: '#EF9A9A',
          300: '#E57373',
          400: '#EF5350',
          500: '#F44336',
          600: '#E53935',
          700: '#D32F2F',
          800: '#C62828',
          900: '#B71C1C',
        },

        info: {
          DEFAULT: '#2196F3',
          50: '#E3F2FD',
          100: '#BBDEFB',
          200: '#90CAF9',
          300: '#64B5F6',
          400: '#42A5F5',
          500: '#2196F3',
          600: '#1E88E5',
          700: '#1976D2',
          800: '#1565C0',
          900: '#0D47A1',
        },
      },

      

      maxWidth: {
        'content-width': 'var(--content-width)',
        'blog-content-width': 'var(--blog-content-width)'
      },

      height: {
        'navbar-height': 'var(--navbar-height)',
      },

      spacing: {
        'content-padding': 'var(--content-padding)',
        'content-padding-x': 'var(--content-padding-x)',
        'hero-pt': 'var(--hero-padding-top)',
        'navbar-height': 'var(--navbar-height)',
      }
    },
  },
  plugins: [],
}
export default config