/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#3813bf",
        
"secondary": "#8ea3ff",
        
"accent": "#f2c500",
        
"neutral": "#2A3037",
        
"base-100": "#EFF0F0",
        
"info": "#8EBFE1",
        
"success": "#46D8AC",
        
"warning": "#F2D16E",
        
"error": "#E4211B",
        },
      },
    ],
  },


  plugins: [require("daisyui")],
}
