import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1200px'
            }
        },
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                surface: {
                    DEFAULT: 'hsl(var(--surface))',
                    secondary: 'hsl(var(--surface-secondary))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                    hover: 'hsl(var(--primary-hover))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                    hover: 'hsl(var(--secondary-hover))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                neutral: {
                    DEFAULT: 'hsl(var(--neutral))',
                    foreground: 'hsl(var(--neutral-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                    hover: 'hsl(var(--accent-hover))'
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                    border: 'hsl(var(--card-border))'
                }
            },
            borderRadius: {
                lg: 'var(--radius-lg)',
                md: 'var(--radius)',
                sm: 'calc(var(--radius) - 4px)',
                xl: 'var(--radius-xl)'
            },
            boxShadow: {
                'soft': 'var(--shadow-soft)',
                'medium': 'var(--shadow-medium)',
                'large': 'var(--shadow-large)'
            },
            fontSize: {
                'xs': 'var(--font-size-xs)',
                'sm': 'var(--font-size-sm)',
                'base': 'var(--font-size-base)',
                'lg': 'var(--font-size-lg)',
                'xl': 'var(--font-size-xl)',
                '2xl': 'var(--font-size-2xl)',
                '3xl': 'var(--font-size-3xl)',
                '4xl': 'var(--font-size-4xl)',
                '5xl': 'var(--font-size-5xl)'
            },
            lineHeight: {
                'tight': 'var(--line-height-tight)',
                'normal': 'var(--line-height-normal)',
                'relaxed': 'var(--line-height-relaxed)'
            },
            transitionDuration: {
                'fast': '150ms',
                'normal': '300ms',
                'slow': '500ms'
            },
            keyframes: {
                'accordion-down': {
                    from: {
                        height: '0'
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)'
                    }
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)'
                    },
                    to: {
                        height: '0'
                    }
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' }
                },
                'fadeInUp': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(30px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'gradient': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' }
                },
                'typing': {
                    '0%': { width: '0' },
                    '100%': { width: '100%' }
                },
                'blink': {
                    '0%, 50%': { borderColor: 'transparent' },
                    '51%, 100%': { borderColor: 'currentColor' }
                },
                'steam-rise': {
                    '0%': {
                        opacity: '1',
                        transform: 'translateY(0) scale(1)'
                    },
                    '100%': {
                        opacity: '0',
                        transform: 'translateY(-20px) scale(0.8)'
                    }
                },
                'coffee-sway': {
                    '0%, 100%': { transform: 'rotate(-2deg)' },
                    '50%': { transform: 'rotate(2deg)' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'float': 'float 3s ease-in-out infinite',
                'fadeInUp': 'fadeInUp 0.6s ease-out',
                'gradient': 'gradient 15s ease infinite',
                'typing': 'typing 3.5s steps(40, end), blink 0.75s step-end infinite',
                'steam-rise': 'steam-rise 2s ease-in-out infinite',
                'coffee-sway': 'coffee-sway 2s ease-in-out infinite'
            }
        }
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.handwriting': {
                    fontFamily: '"Kalam", "Comic Sans MS", cursive',
                    fontWeight: '400',
                },
                '.paper-card': {
                    background: 'linear-gradient(135deg, #fff 0%, #fff 100%)',
                    borderRadius: '12px',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    boxShadow: '0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                },
                '.paper-card:hover': {
                    boxShadow: '0 5px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                },
                '.hover-lift': {
                    transition: 'all 0.3s ease',
                },
                '.hover-lift:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 5px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                },
                '.coffee-steam': {
                    animation: 'steam-rise 2s ease-in-out infinite',
                },
                '.coffee-cup': {
                    animation: 'coffee-sway 2s ease-in-out infinite',
                }
            })
        }
    ],
}
