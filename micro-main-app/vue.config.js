const path = require("path");

module.exports={
    configureWebpack: {
        resolve: {
          alias: {
            "@": path.resolve(__dirname, "src"),
          },
        },
    },
    devServer:{
        port: 4041,
        open: true,
    }
}