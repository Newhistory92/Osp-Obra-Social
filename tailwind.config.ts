
/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e03c31",
        secondary: "#ff8200",
        tertiary: "#1d252d",
        quaternary: "#fbdd40",
        quinary: "#86bbd8"
      },
      zIndex: {
        '100': '100',
        '90': '90',
        '80': '80',
        '70': '70',
        '60': '60',
        '50': '50',
        '40': '40',
        '30': '30',
        '20': '20',
        '10': '10',
        '0': '0',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
   
   
  ],
});


