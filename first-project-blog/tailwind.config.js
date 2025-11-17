/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",           // app router üçün vacib!
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",         // pages router varsa
    "./components/**/*.{js,ts,jsx,tsx,mdx}",    // shadcn komponentləri
    "./src/**/*.{js,ts,jsx,tsx,mdx}",           // src varsa (səninkində yoxdur, amma zərər yox)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};