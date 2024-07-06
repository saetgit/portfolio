// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/tailwindcss"],


  target: 'static', // برای ساختن یک سایت استاتیک
  build: {
    publicPath: 'git@github.com:saetgit/portfolio.git'
  }
});
