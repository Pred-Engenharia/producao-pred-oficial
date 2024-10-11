<template>
  <div class="bg-grey-lighten-3 d-sm-none">
    <div class="rounded-ts-xl">
      <div class="h-100 w-100 d-flex justify-center align-center bg-grey-lighten-3">
        <div class="w-100 px-4 py-6">
          <div class="pt-3 px-2 pb-2 text-h5 text-indigo-darken-4 font-weight-bold">
            {{ $t('services') }}
          </div>
          <div 
            style="width: 70%; height: 1px; background-image: linear-gradient(to left, transparent, transparent, #1A237E);" 
            class="mb-4 mx-2">
          </div>
          <v-card
            class="mx-auto w-100 mb-4 rounded-xl elevation-4"
            v-for="(servico, i) in services"
            :key="i"
            flat
          >
            <nuxt-link :to="servico.to" class="text-decoration-none" aria-label="Link para serviço">
              <v-img
                class="align-end text-white"
                height="200"
                :src="servico.src"
                :alt="$t(servico.titleKey)"
                cover
                gradient="to bottom, transparent, rgba(0,0,0,.4), rgba(0,0,0,1)"
              >
                <v-card-title class="text-right text-caption">
                  {{ $t(servico.titleKey) }}
                </v-card-title>
              </v-img>
              <v-card-text class="text-black">
                {{ $t(servico.contentKey) }}
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  class="px-6 font-weight-bold text-caption"
                  color="primary"
                  variant="text"
                  size="small"
                  :to="servico.to"
                  aria-label="leia mais"
                >{{ $t('learn_more') || 'leia mais'}}</v-btn>
              </v-card-actions>
            </nuxt-link>
          </v-card>
        </div>                              
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const services = ref([
  {
    id: 1,
    titleKey: 'engineering',
    subtile: false,
    src: '/services1.webp',
    contentKey: 'engineering_desc',
    to: '/servicos/engenharia-manutencao-e-confiabilidade'
  },
  {
    id: 2,
    titleKey: 'inspection',
    subtile: false,
    src: '/services2.webp',
    contentKey: 'inspection_desc',
    to: '/servicos/inspecoes'
  },
  {
    id: 3,
    titleKey: 's3i',
    subtile: false,
    src: '/services3.webp',
    contentKey: 's3i_desc',
    to: '/servicos/s3i'
  },
  {
    id: 4,
    titleKey: 'sft',
    subtile: false,
    src: '/services4.webp',
    contentKey: 'sft_desc',
    to: '/servicos/sft'
  },
])
</script>
