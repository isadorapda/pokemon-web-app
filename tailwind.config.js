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
        buttonsShadow: ' 2px 4px 6px rgba(0, 0, 0, 0.15)',
      },
      gridTemplateColumns: {
        mainGridCols: 'repeat(3, minmax(10vw, 1fr))',
      },
      gridAutoRows: {
        mainGridRows: '50vh',
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
          redCard: '#FACEB1',
        },
        purple: {
          purpleFly: '#BC7BEF',
          purplePoison: '#7A34ED',
          purpleCard: '#C5ACC9',
        },
        blue: {
          blueWater: '#5CC8CF',
          blueIce: '#C2F4FF',
          blueGhost: '#8897CA',
          blueLogo: '#2A70FE',
          blueCard: '#A3D3DD',
        },
        yellow: {
          yellowElectric: '#F9E84E',
          yellowLogo: '#FFCD02',
          yellowCard: '#E7D7A2',
        },

        pink: {
          pinkPsychic: '#EE519D',
          pinkFairy: '#FA9AE5',
          pinkCard: '#F8E7EB',
        },
        brown: {
          brownGround: '#D98D57',
          brownRock: '#CABFAE',
          brownCard: '#C6B090',
        },
        gray: {
          grayNormal: '#A0A0A0',
          graySteel: '#C2C2C2',
          grayCard: '#D8D8D8',
        },
        blackDark: '#464545',
      },
    },
  },
  plugins: [],
}
