import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'
// @ts-expect-error This is how Tailwind CSS is imported
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'
import plugin from 'tailwindcss/plugin'

const config = {
  darkMode: 'class',
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{js,ts,jsx,tsx}'],

  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        poppins: ['Sofia Sans Condensed Variable', 'sans-serif'],
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        aurora: {
          from: {
            backgroundPosition: '50% 50%, 50% 50%',
          },
          to: {
            backgroundPosition: '350% 50%, 350% 50%',
          },
        },
        panVideo: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10%)',
          },
        },
        shine: {
          '0%': {
            backgroundPosition: '-250% 0%',
          },
          '100%': {
            backgroundPosition: '250% 0%',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        aurora: 'aurora 60s linear infinite',
        panVideo: 'panVideo 60s ease-in-out infinite',
        shine: 'shine 3s linear infinite',
      },
      backgroundImage: {
        gradient: 'linear-gradient(var(--gradient-from), var(--gradient-to))',
      },
    },
  },

  plugins: [
    require('tailwindcss-animate'),
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-spring'),
    require('@tailwindcss/typography'),
    addVariablesForColors,
    plugin(function ({ addUtilities, theme }) {
      const opacityValues = theme('opacity') as Record<string, string>
      const gradientOpacityUtilities = Object.entries(opacityValues).reduce<
        Record<string, Record<string, string>>
      >((acc, [key, value]) => {
        acc[`.bg-gradient\\/${key}`] = {
          'background-image': `linear-gradient(rgba(var(--gradient-from), ${value}), rgba(var(--gradient-to), ${value}))`,
        }
        return acc
      }, {})
      addUtilities(gradientOpacityUtilities)

      // Fixed arrow-hide utility
      addUtilities({
        '.arrow-hide': {
          '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: '0',
          },
          '-moz-appearance': 'textfield',
        },
      })
    }),
  ],
} satisfies Config

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'))
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  )

  addBase({
    ':root': newVars,
  })
}

export default config
