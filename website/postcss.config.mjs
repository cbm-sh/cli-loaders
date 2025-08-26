/** @type {import('postcss-load-postCssConfig').Config} */
const postCssConfig = {
  plugins: {
    "@tailwindcss/postcss": {
      optimize: {
        minify: true,
      },
    },
  },
};

export default postCssConfig;
