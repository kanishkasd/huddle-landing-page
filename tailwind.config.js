/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    theme: {
    extend: 
        {
            colors: {
                'violet': 'hsl(257, 40%, 49%)',
                'soft-magenta': 'hsl(300, 69%, 71%)'

            },
            fontFamily: {
               'poppins': [ 'Poppins', 'sans-serif' ]
            },

            boxShadow: {
              DEFAULT: '1px 1px 2px black'}
        },
    },
    plugins: [],
}

