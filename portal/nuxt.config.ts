// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["@monorepo/first-ui", "@monorepo/second-ui"],
});
