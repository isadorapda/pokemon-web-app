/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mainFont: 'Roboto Flex, sans-serif',
      },
      boxShadow: {
        shadowLight: '1px 3px 15px rgba(0, 0, 0, 0.15)',
      },
      gridTemplateColumns: {
        mainGrid: 'repeat(3, minmax(440px, 1fr))',
      },
      colors: {
        greens: {
          greenGrass: ' #74B77A',
          greenBug: '#6B8562',
          greenCard: '#A6CDBD',
        },
        redish: {
          redFire: '#F28C60',
          redFight: '#FA4F4F',
          redDragon: '#971D15',
        },
        purple: {
          purpleFly: '#BC7BEF',
          purplePoison: '#7A34ED',
        },
        blue: {
          blueWater: '#5CC8CF',
          blueIce: '#C2F4FF',
          blueGhost: '#8897CA',
        },

        yellowElectric: '#F9E84E',

        pink: {
          pinkPsychic: '#EE519D',
          pinkFairy: '#FA9AE5',
        },
        brown: {
          brownGround: '#D98D57',
          brownRock: '#CABFAE',
        },
        gray: {
          grayNormal: '#EBEBEB',
          graySteel: '#C2C2C2',
        },
        blackDark: '#464545',
      },
    },
  },
  plugins: [],
}
