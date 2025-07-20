/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
  		'max-width': '1280px',
  		center: 'true',
  		padding: {
  			DEFAULT: '1rem',
  			sm: '1rem',
  			md: '1rem',
  			lg: '1rem',
  			xl: '1rem'
  		}
  	},

    extend: {
		 fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
	},
  },
  plugins: [],
}

