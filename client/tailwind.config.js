/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
      'node_modules/flowbite-react/lib/esm/**/*.js'
  
  ],
  theme: {
    extend: {
      margin: {
        '37': '8.75rem', // You can adjust the value according to your needs
      },
      screens: {
        'fg': '639px', // set the minimum width for lg breakpoint
      },
    },
  },
 

    plugins: [
        require('flowbite/plugin'),
        require('flowbite/plugin')({
          charts: true,
      }),
    ]


}

