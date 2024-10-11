<template>
    <v-container class="h-100 d-sm-none">
      <div class="mt-4 mb-2 ml-2 text-h6 text-black">
        {{ $t('our_journey') }}
      </div>
      <div style="width: 70%; height: 1px; background-image: linear-gradient(to left, transparent, white);" class="mb-8 mx-2"></div>
      <v-lazy
        transition="fade-transition"
      >
      <v-carousel hide-delimiter-background cycle height="300" :show-arrows="false" class="rounded-lg mb-4">
        <v-carousel-item :src="`/historias/${$t('historia_image21')}`" alt="Historia Image 2" cover class="rounded-lg"></v-carousel-item>
        <v-carousel-item :src="`/historias/${$t('historia_image31')}`" alt="Historia Image 3" cover class="rounded-lg"></v-carousel-item>
        <v-carousel-item :src="`/historias/${$t('historia_image41')}`" alt="Historia Image 4" cover class="rounded-lg"></v-carousel-item>
        <v-carousel-item :src="`/historias/${$t('historia_image51')}`" alt="Historia Image 5" cover class="rounded-lg"></v-carousel-item>
        <v-carousel-item :src="`/historias/${$t('historia_image61')}`" alt="Historia Image 6" cover class="rounded-lg"></v-carousel-item>
      </v-carousel>
    </v-lazy>
    </v-container>

  </template>
  