/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
		extend: {
			colors: {
				customBlue: {
					100: 'rgba(1, 193, 254, 0.0)', // 10% прозрачность
					600: 'rgba(1, 193, 254, 0.6)', // 50% прозрачность
					900: 'rgba(1, 193, 254, 0.9)', // 90% прозрачность
				},
				customPurple: {
					100: 'rgba(3, 28, 64, 0.0)', // 10% прозрачность
					600: 'rgba(3, 28, 64, 0.6)', // 50% прозрачность
					900: 'rgba(3, 28, 64, 1)', // 90% прозрачность
				},
				customDarkPurple: {
					100: 'rgba(9, 0, 43, 0.0)', // 10% прозрачность
					600: 'rgba(9, 0, 43, 0.6)', // 50% прозрачность
					900: 'rgba(9, 0, 43, 1)', // 90% прозрачность
				},
				// ... другие цвета
			},
		},
	},
  plugins: [],
};
