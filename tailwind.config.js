import primeVuePlugin from "tailwindcss-primeui";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["selector"],
    content: ["./resources/**/*.{html,js,vue,ts}"],
    theme: {
        plugins: [primeVuePlugin]
    }
};
