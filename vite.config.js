const { resolve } = require("path");

module.exports = {
  base: "./", //set base here or in the build command
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        sub: resolve(__dirname, "home.html"),
        productlist: resolve(__dirname, "productlist.html"),
      },
    },
  },
};