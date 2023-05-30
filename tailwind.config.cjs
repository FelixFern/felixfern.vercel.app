/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                main: "#141414",
                accent: "#FF985F",
                textmain: "#FFFFFF",
                textsecondary: "#E1E1E1",
            },
            letterSpacing: {
                widest: ".25rem",
            },
            fontFamily: {
                nunitoSans: "'Nunito Sans', sans-serif",
                sourceSans: "'Source Sans Pro', sans-serif",
                robotoMono: "'Roboto Mono', monospace;",
            },
            border: {
                1: "1px",
            },
        },
    },
    plugins: [],
};
