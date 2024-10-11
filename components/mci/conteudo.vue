<template>
    <v-container>
      <div class="py-6">
        <p class="text-caption text-center my-4">
          {{ $t('rbm_notice') }}
        </p>
        <!-- Imagem 1 -->
        <v-img :src="`/mci/${$t('mci_image3')}`" alt="MCI Image 3" class="rounded my-6 mx-auto"></v-img>
        <!-- Parágrafo 1 -->
        <p class="text-body-1 my-8">
          {{ $t('mci_intro') }} <span class="font-weight-bold">{{ $t('unprecedented_efficiency') }}</span>
          {{ $t('mci_offer') }} <span class="font-weight-bold">{{ $t('mci_method') }}</span>
        </p>
        <!-- Imagem 2 -->
        <v-img :src="`/${$t('mci_image1')}`" alt="MCI Image 1" class="rounded my-4 mx-auto" max-width="600"></v-img>
        <!-- Parágrafo 2 -->
        <p class="text-body-1 my-4">
          {{ $t('mci_cycle_intro') }} <span class="font-weight-bold">{{ $t('perigometro') }}</span>
          {{ $t('perigometro_role') }} <span class="font-weight-bold">{{ $t('perigometro') }}</span>
          {{ $t('perigometro_benefit') }}
        </p>
        <!-- Parágrafo 3 -->
        <p class="mt-4 text-body-2">
          {{ $t('mci_cycle_benefit') }}
        </p>
        <!-- Imagem 3 -->
        <v-img :src="`/mci/${$t('mci_image2')}`" alt="MCI Image 2" class="rounded my-4 mx-auto" max-width="700"></v-img>
        <!-- Parágrafo 4 -->
        <p class="my-4 text-body-1">
          {{ $t('mci_exceptional') }} <span class="font-weight-bold">{{ $t('mci_simplicity') }}</span>
          {{ $t('mci_philosophy_intro') }}
          <span class="text-indigo-darken-4">{{ $t('mci_philosophy') }}</span>
          {{ $t('mci_philosophy_detail') }}
        </p>
      </div>
    </v-container>
  </template>
  