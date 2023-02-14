export default {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/app.scss";
        `,
      },
    },
  },
};
