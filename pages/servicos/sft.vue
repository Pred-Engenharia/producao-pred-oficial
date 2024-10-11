<template>
    <div>
      <v-img
        class="d-md-none"
        height="350"
        cover
        :src="$t('service_image')"
        gradient="to top, rgba(0,0,0,.9), rgba(0,0,0,.75), transparent"
        alt="Imagem ilustrativa do serviço SFT"
      >
        <div
          class="d-flex flex-column justify-center align-center w-100 h-100 pa-4"
          style="background-image: linear-gradient(to top, rgba(0,0,0,.9), rgba(0,0,0,.75), transparent);"
        >
          <div>
            <v-icon icon="mdi-cogs" size="50" aria-label="Configurações"></v-icon>
          </div>
          <h1
            class="text-grey-lighten-1 text-h5 text-center font-weight-bold elevation-24 mt-2 pa-2"
          >
            SFT <br />{{ $t('sft_title') }}
          </h1>
        </div>
      </v-img>
      <!-- desktop -->
      <v-img
        class="d-none d-md-flex mt-14"
        cover
        height="600"
        :src="$t('service_image')"
        gradient="to top, rgba(0,0,0,.9), rgba(0,0,0,.75), transparent"
        alt="Imagem ilustrativa do serviço SFT"
      >
        <div
          class="d-flex flex-column justify-center align-center w-100 h-100 pa-4"
          style="background-image: linear-gradient(to top, rgba(0,0,0,.9), rgba(0,0,0,.75), transparent);"
        >
          <div>
            <v-icon icon="mdi-cogs" size="50" aria-label="Configurações"></v-icon>
          </div>
          <h1
            class="text-grey-lighten-1 text-h5 text-md-h2 text-center font-weight-bold elevation-24 mt-2 pa-4"
          >
            SFT <br />{{ $t('sft_title') }}
          </h1>
        </div>
      </v-img>
      <v-main class="pa-0">
        <div>
          <v-container>
            <div class="px-6 py-4">
              <h1 class="text-body-2 text-md-body-1 font-weight-bold text-center">
                {{ $t('sft_solution_description') }}
              </h1>
              <div
                style="width: 50%; height: 1px; background-image: linear-gradient(to left, transparent, #1A237E, transparent);"
                class="mx-auto my-6"
              ></div>
              <p class="text-grey-darken-3 text-caption my-2 text-center d-md-none">
                {{ $t('sft_subtitle') }}
              </p>
            </div>
            <div class="px-6 pb-1 d-md-none">
              <h1>{{ $t('sft_reliable_ally_title') }}</h1>
              <p class="text-caption my-2">{{ $t('sft_reliable_ally_description') }}</p>
              <v-img :src="$t('sft_image_1')" class="rounded" cover height="200" alt="Imagem de confiança e confiabilidade"></v-img>
              <div class="text-grey-darken-3">
                <p class="text-caption my-2">{{ $t('sft_thermal_imaging_description_1') }}</p>
                <p class="text-caption my-2">{{ $t('sft_unique_solution_description') }}</p>
                <v-img :src="$t('sft_image_2')" class="rounded mt-4" alt="Imagem de solução única"></v-img>
              </div>
            </div>
            <div class="d-none d-md-block">
              <v-row class="my-4">
                <v-col cols="5" class="d-flex flex-column justify-center align-center">
                  <h1 class="text-h6 mb-4 font-weight-black">{{ $t('sft_reliable_ally_title') }}</h1>
                  <p class="text-body-1 pa-2">{{ $t('sft_reliable_ally_description') }}</p>
                </v-col>
                <v-col cols="7">
                  <v-img :src="$t('sft_image_1')" class="rounded-xl" height="400" cover alt="Imagem de confiança e confiabilidade"></v-img>
                </v-col>
              </v-row>
              <v-row class="my-4">
                <v-col cols="6">
                  <v-img :src="$t('sft_image_2')" class="rounded align-left" height="600" cover alt="Imagem de solução única"></v-img>
                </v-col>
                <v-col cols="6" class="d-flex justify-center align-center">
                  <div>
                    <p class="text-body-1 pa-2 my-2">{{ $t('sft_more_than_camera_description') }}</p>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-container>
          <div class="px-6 py-4 bg-grey-lighten-2">
            <v-container>
              <div class="d-md-none">
                <h1 class="text-body-2 font-weight-bold text-center">{{ $t('support_vision') }}</h1>
                <div
                  style="width: 50%; height: 1px; background-image: linear-gradient(to left, transparent, #1A237E, transparent);"
                  class="mx-auto my-2"
                ></div>
                <div class="text-grey-darken-3">
                  <p class="text-caption my-2">{{ $t('support_vision_description') }}</p>
                  <v-img :src="$t('sft_image_3')" class="rounded mt-4" height="200" cover alt="Imagem de suporte visual"></v-img>
                </div>
                <h1 class="text-body-2 font-weight-bold text-center mt-4">{{ $t('process_control') }}</h1>
                <div
                  style="width: 50%; height: 1px; background-image: linear-gradient(to left, transparent, #1A237E, transparent);"
                  class="mx-auto my-2"
                ></div>
                <div class="text-grey-darken-3">
                  <p class="text-caption my-2">{{ $t('process_control_description_1') }}</p>
                  <v-img :src="$t('sft_image_3')" class="rounded mt-4" height="200" cover alt="Imagem de controle de processos"></v-img>
                </div>
                <div class="text-grey-darken-3 mt-2">
                  <p class="text-caption my-2">{{ $t('process_control_description_2') }}</p>
                  <v-img :src="$t('sft_image_4')" class="rounded my-6" height="300" cover alt="Imagem de soluções preditivas"></v-img>
                  <p class="text-caption my-2">{{ $t('pred_solutions_description') }}</p>
                  <p class="text-caption my-2">{{ $t('infrared_thermography_description') }}</p>
                </div>
              </div>
              <div class="d-none d-md-block">
                <div class="mb-6 text-center text-indigo-darken-4">
                  <h1>{{ $t('why_choose_sft') }}</h1>
                </div>
                <v-row>
                  <v-col>
                    <div>
                      <h1 class="text-body-1 font-weight-bold px-6 my-4">{{ $t('precision_reliability') }}</h1>
                      <p class="text-body-1 mt-8 px-6">{{ $t('precision_reliability_description') }}</p>
                    </div>
                  </v-col>
                  <v-col>
                    <v-img :src="$t('sft_image_3')" class="rounded mt-4" height="200" cover alt="Imagem de precisão e confiabilidade"></v-img>
                  </v-col>
                </v-row>
                <v-row class="text-grey-darken-3 my-6">
                  <v-col>
                    <div>
                      <h1 class="text-body-1 font-weight-bold px-6 my-4">{{ $t('support_vision') }}</h1>
                      <p class="text-body-1 mt-8 px-6">{{ $t('support_vision_description') }}</p>
                    </div>
                  </v-col>
                  <v-col>
                    <v-img :src="$t('sft_image_5')" class="rounded mt-4" height="200" cover alt="Imagem de suporte visual"></v-img>
                  </v-col>
                </v-row>
                <v-row class="text-grey-darken-3 my-6">
                  <v-col cols="5">
                    <v-img :src="$t('sft_image_4')" class="rounded mt-4" height="400" cover alt="Imagem de soluções preditivas"></v-img>
                  </v-col>
                  <v-col cols="7" class="d-flex justify-center align-center">
                    <div class="d-flex flex-column">
                      <div>
                        <h1 class="text-body-1 font-weight-bold px-6 my-4">{{ $t('process_control') }}</h1>
                        <p class="text-body-1 pa-2 my-2">{{ $t('process_control_description_1') }}</p>
                      </div>
                      <div>
                        <h1 class="text-body-1 font-weight-bold px-6 my-4">{{ $t('specialized_engineering') }}</h1>
                        <p class="text-body-1 pa-2 my-2">{{ $t('specialized_engineering_description') }}</p>
                      </div>
                    </div>
                  </v-col>
                </v-row>
                <p class="text-body-1 text-indigo-darken-4">{{ $t('sft_potential') }}</p>
              </div>
            </v-container>
          </div>
          <FormularioFormulariopages />
        </div>
      </v-main>
    </div>
  </template>

<script setup>
useSeoMeta({
  title: 'Pred Engenharia - SISTEMA FIXO DE TERMOGRAFIA',
  ogTitle: 'Pred Engenharia - SISTEMA FIXO DE TERMOGRAFIA',
  description: 'Imagine ter o controle completo das temperaturas críticas em suas operações industriais, mesmo em condições desafiadoras. Com o Sistema Fixo de Termografia (SFT) da Pred Engenharia, essa visão se torna realidade. Quer descobrir como o SFT pode transformar sua abordagem à segurança operacional e eficiência na indústria? Aperte abaixo para saber mais sobre essa ferramenta inteligente de monitoramento termográfico e leve sua operação a um novo patamar de precisão e confiabilidade.',
  ogDescription: 'Imagine ter o controle completo das temperaturas críticas em suas operações industriais, mesmo em condições desafiadoras. Com o Sistema Fixo de Termografia (SFT) da Pred Engenharia, essa visão se torna realidade. Quer descobrir como o SFT pode transformar sua abordagem à segurança operacional e eficiência na indústria? Aperte abaixo para saber mais sobre essa ferramenta inteligente de monitoramento termográfico e leve sua operação a um novo patamar de precisão e confiabilidade.',
  ogImage: 'https://www.predengenharia.com.br/services4.webp',
  twitterCard: 'summary_large_image',
  ogUrl: 'https://www.predengenharia.com.br/sobre',
  ogImageAlt:"SISTEMA FIXO DE TERMOGRAFIA"
})
</script>
  