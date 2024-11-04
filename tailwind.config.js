/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: {
    //   "aman": "#28544d",  // Here default color with name "aman" as been added
    // },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        aman: "#28544d",   // New color aman is available to me
      },
    },
  },
  plugins: [],
};
