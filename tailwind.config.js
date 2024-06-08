/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
  },
  plugins: [],
  corePlugins: {
    preflight: true,
    // 启用 @apply 指令
    applyUtils: true,
    postcss: true,
  },
}
