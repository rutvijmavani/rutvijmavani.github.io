import { Outfit } from 'next/font/google';
import { Ovo } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                lightHover : '#fcf4ff',
                darkHover : '#2a004a',
                darkTheme : '#11001F'
            },
            fontFamily: {
                outfit : ["Outfit" , "sans-serif"],
                ovo : ["Ovo" , "serif"]
            }
        },
    },
    plugins: [],
};
