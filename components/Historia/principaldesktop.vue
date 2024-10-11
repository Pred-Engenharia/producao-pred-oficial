<template>
    <v-container class="py-4 h-100 d-none d-sm-block" >
      <div class="px-10 " style="height: 500px;">
        <div class="d-flex align-center justify-center my-6">
          <div class="mr-10">
            <NuxtImg src="/partelogo3.webp" width="40" height="35"   format="webp" loading="lazy" aria-label="Parte logo 3" alt="Parte logo 3"/>
          </div>
          <h1 class="text-deep-purple-darken-4 font-weight-black">{{ $t('our_journey') }}</h1>
        </div>
        <v-lazy
        transition="fade-transition"
        >
        <v-carousel hide-delimiter-background cycle height="400" :show-arrows="false" class="rounded-xl mb-4">
          <v-carousel-item :src="`/historias/${$t('historia_image1')}`" alt="Historia Image 1" cover></v-carousel-item>
          <v-carousel-item :src="`/historias/${$t('historia_image2')}`" alt="Historia Image 2" cover></v-carousel-item>
          <v-carousel-item :src="`/historias/${$t('historia_image3')}`" alt="Historia Image 3" cover></v-carousel-item>
          <v-carousel-item :src="`/historias/${$t('historia_image4')}`" alt="Historia Image 4" cover></v-carousel-item>
          <v-carousel-item :src="`/historias/${$t('historia_image5')}`" alt="Historia Image 5" cover></v-carousel-item>
        </v-carousel>
      </v-lazy>
      </div>
    </v-container>
  </template>
  