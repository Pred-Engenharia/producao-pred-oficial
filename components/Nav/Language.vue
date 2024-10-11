<template>
  <v-list class="d-flex mr-4" variant="compact" aria-label="Lista de idiomas" role="list">
    <v-list-item class="w-auto pa-0" role="listitem">
      <v-btn
        variant="plain"
        block
        size="small"
        class="pa-0"
        @click="switchLocale('pt')"
        aria-label="Trocar para Português"
        role="button"
      >
      <NuxtImg src="/idioma/brasil.png" preload class="rounded" fit="cover" format="webp"  alt="Brazil flag" height="24" width="24"/>
      </v-btn>
    </v-list-item>
    <v-list-item class="w-auto pa-0" role="listitem">
      <v-btn
        variant="plain"
        block
        size="small"
        class="px-2"
        @click="switchLocale('en')"
        aria-label="Trocar para Inglês"
        role="button"
      >
      <NuxtImg src="/idioma/eua.png" preload class="rounded" fit="cover" format="webp"  alt="USA flag" height="24" width="24"/>
      </v-btn>
    </v-list-item>
    <v-list-item class="w-auto pa-0" role="listitem">
      <v-btn
        variant="plain"
        block
        size="small"
        class="pa-0"
        @click="switchLocale('es')"
        aria-label="Trocar para Espanhol"
        role="button"
      >
      <NuxtImg src="/idioma/espanha.png" preload class="rounded" fit="cover" format="webp"  alt="Spain flag" height="24" width="24"/>
      </v-btn>
    </v-list-item>
  </v-list>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
const switchLocale = (newLocale) => {
  locale.value = newLocale;
};
</script>
