const {nextui} = require("@nextui-org/react");
/** 
 const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}','./node_modules/flowbite/**/*.js'],
	theme: {
	  extend: {},
	},
	darkMode: "class",
	plugins: [nextui(), require('flowbite/plugin')], 

  };
  