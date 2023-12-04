// vue.config.js
export const css = {
    loaderOptions: {
        sass: {
            additionalData: `@import "@/styles/_variables.scss";`,
        },
    },
};
  