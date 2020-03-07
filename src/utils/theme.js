import { extendDefaultTheme } from "grommet"

const theme = {
  global: {
    colors: {
      icon: {
        "0": "#",
        "1": "2",
        "2": "e",
        "3": "2",
        "4": "e",
        "5": "2",
        "6": "e",
        dark: "#f8f8f8",
        light: "#2e2e2e",
      },
      text: {
        dark: "#f8f8f8",
        light: "#2e2e2e",
      },
      brand: "#99CA3B",
      "accent-1": "#A4297A",
      "dark": "#2e2e2e",
    },
    font: {
      family: '"Poppins", sans-serif',
      size: '16px'
    },
    breakpoints: {
      medium: {
        value: 1368,
      },
      small: {
        value: 900,
      },
    },
  },
  accordion: {
    border: {
      side: "bottom",
      color: "f8f8f8",
    },
  },
}

extendDefaultTheme(theme)

const globalStyle = `
body {
  margin: 130px 0px 0px 0px;
  background-color: #F8F8F8
}
`

export { theme, globalStyle }
