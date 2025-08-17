import { defineConfig } from 'tailwindcss';

/
 * Tailwind CSS configuration for CleanSSR
 * This configuration defines custom colors and animations
 * for a minimalistic website design for the CleanSSR technology cleaning company.
 */
export default defineConfig({
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#6b5b94', // Primary purple color for CleanSSR
          light: '#9b7db8',   // Lighter shade of purple for hover effects
        },
        white: '#ffffff',      // Primary white color for CleanSSR
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out', // Fade-in animation for elements
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
});