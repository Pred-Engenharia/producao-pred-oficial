// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  sourcemap: true,
  imports: {
    autoImport: true,
    injectAtEnd: true,
  },
  modules: ['vuetify-nuxt-module', ['@nuxtjs/google-fonts', {
    families: {
        Roboto: true,
        Montserrat: true,
    }
  }], '@nuxtjs/i18n', '@nuxt/image'],

  i18n: {
    locales: [
      { code: 'pt', iso: 'pt-BR', name: 'Português' },
      { code: 'en', iso: 'en-US', name: 'English' },
      { code: 'es', iso: 'es-ES', name: 'Español' },
    ],
    detectBrowserLanguage: {
      useCookie: true, 
      cookieKey: 'i18n_redirected', 
      alwaysRedirect: true, 
      fallbackLocale: 'pt',
    },
    defaultLocale: 'pt',
    vueI18n: './i18n.config.ts'
  },
  vuetify: {
    moduleOptions: {
      prefixComposables: true,
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt',
      },
      charset: "utf-8",
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: "keywords", content: "Inspeções, Preditiva, Manutenção, S3I, Sistema inteligente de Intervenção Industrial, SERVIÇOS TÉCNICOS DE INSPEÇÃO, MCI, Manutenção Condicionada a Inspeção, OBTENHA TODO O POTENCIAL NA SUA MANUTENÇÃO DE FORMA SIMPLES E ESTRUTURADA, SERVIÇOS DE ENGENHARIA DE MANUTENÇÃO & CONFIABILIDADE, SERVIÇOS TÉCNICOS DE INSPEÇÃO, SISTEMA FIXO DE TERMOGRAFIA, SFT, S3I, SUA PARCEIRA CONFIÁVEL EM SOLUÇÕES INDUSTRIAIS" },
        { name: "author", content: "Pred Engenharia" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Pred Engenharia" },
        { name: "twitter:description", content: "A Pred Engenharia é uma provedora de soluções para gestão de ativos e processos, com foco na garantia da segurança, confiabilidade e produtividade das atividades. Atuando na indústria e na área de serviços desde 1993, suas inovadoras soluções são fornecidas ao mercado através de três áreas de negócios: Serviços Técnicos, Tecnologia da Informação e Automação Industrial." },
        { name: "twitter:image", content: "https://www.predengenharia.com.br/30anos.webp" },
      ],
      link: [
        { rel: "canonical", href: "https://www.predengenharia.com.br/" },
      ]
    }
  }
});