// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/tailwindcss"],


  target: 'static', // برای ساختن یک سایت استاتیک
  build: {
    publicPath: '/portfolio/' // تغییر مسیر به نام مخزن شما
  },
  router: {
    base: '/portfolio/' // تنظیم مسیر پایه
  }
});
