import { extendTheme, withDefaultColorScheme, withDefaultSize } from "@chakra-ui/react"

export const theme = extendTheme({
  styles: {
    global:{
      body:{
        bg:"gray.900",
        color: "gray.50"
      }
    }
  },
  fonts: {
    body: "Roboto",
    heading: "Roboto"
  },
  colors: {
    gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "850": "#2C2B38",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2",
    },
    brand: {
      "800": "#073C3A",
      "700": "#105956",
      "600": "#17807A",
      "550": "#1C9993",
      "500": "#20B2AA",
    },
    red:{
      
    }
  }
},
withDefaultColorScheme({ colorScheme: "brand" })
)