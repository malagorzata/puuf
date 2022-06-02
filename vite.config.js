const { resolve } = require("path");

module.exports = {
  base: "./", //set base here or in the build command
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        sub: resolve(__dirname, "home.html"),
        productlist: resolve(__dirname, "productlist.html"),
        productpage: resolve(__dirname, "productview.html"),
        about: resolve(__dirname, "about-timeline.html"),
        orderconfirm: resolve(__dirname, "orderConfirmation.html"),
        shoppingbag: resolve(__dirname, "shoppingBag.html"),
        shoppingflow: resolve(__dirname, "shoppingFlow.html"),
        services: resolve(__dirname, "services.html"),
      },
    },
  },
};
