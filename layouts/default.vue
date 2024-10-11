<template>
  <v-app>
    <v-app-bar scroll-behavior="hide" scroll-threshold="300">
      <v-app-bar-title>
        <nuxt-link to="/" aria-label="Home">
          <NuxtImg src="/logo.webp" preload  format="webp"  alt="Logo Pred Engenharia" height="30" width="150"/>
        </nuxt-link>
      </v-app-bar-title>
      <template #append>
        <section class="d-flex align-center">
          <NavDrawermobile />
          <NavNavoptions />
          <NavNavusers />
          <NavLanguage />
        </section>
      </template>
    </v-app-bar>
    <main>
      <slot />
    </main>
    <FooterToolltip />
    <Footer />
  </v-app>
</template>
