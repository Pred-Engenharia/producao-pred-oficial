<template>
  <div>
    <v-img
      class="d-md-none"
      height="350"
      gradient="to top, rgba(0,0,0,.9), transparent"
      cover
      src="/services2.webp"
      dark
      alt="Termografia e análise de vibração"
    >
      <div class="d-flex flex-column justify-center align-center w-100 h-100 pa-4" style="background-image: linear-gradient(to top, rgba(0,0,0,.9), transparent);">
        <div><v-icon icon="mdi-account-search" size="50"></v-icon></div>
        <h1 class="text-grey-lighten-1 text-h5 text-center font-weight-bold elevation-24 mt-2 pa-2">{{ $t('main_content1') }}</h1>
      </div>
    </v-img>
    <v-img
      class="d-none d-md-flex mt-14"
      gradient="to top, rgba(0,0,0,.9), transparent"
      height="600"
      cover
      src="/services2.webp"
      dark
      alt="Termografia e análise de vibração"
    >
      <div class="d-flex flex-column justify-center align-center w-100 h-100 pa-4" style="background-image: linear-gradient(to top, rgba(0,0,0,.9), transparent);">
        <div><v-icon icon="mdi-account-search" size="50"></v-icon></div>
        <h1 class="text-grey-lighten-1 text-h5 text-md-h2 text-center font-weight-bold elevation-24 mt-2 pa-4">{{ $t('main_content1') }}</h1>
      </div>
    </v-img>
    <v-main class="pa-0">
      <v-container>
        <section class="px-6 py-4 ">
          <div class="ml-6">
          <h1 class="text-h6">{{ $t('heading_termografia') }}</h1>
          <div style="width: 70%; height: 1px; background-image: linear-gradient(to left, transparent, transparent, #1A237E);" class="mb-4 mt-2"></div>
          <p class="text-grey-darken-3 text-caption">{{ $t('termografia_description') }}</p>
        </div>
        <v-img src="/inspecoes/1.webp" class="rounded mt-6 mx-auto" alt="Inspeção por ultrassom"></v-img>
        </section>
        <section class="bg-grey-lighten-2 px-6 pb-2" aria-label="Análise de vibração">
          <v-container>  
            <div class="ml-6 py-2">
              <div class="mt-4 text-h6 font-weight-bold">{{ $t('heading_vibration_analysis') }}</div>
              <div style="width: 60%; height: 1px; background-image: linear-gradient(to left, transparent, transparent, #1A237E);" class="my-6"></div>
              <p class="text-caption font-weight-light">{{ $t('vibration_analysis_description') }}</p>
            </div>
            <div>
              <v-img src="/inspecoes/2.webp" class="rounded my-6 mx-auto" max-width="600" alt="Análise de vibração"></v-img>
              <div>
                <p class="text-caption text-md-body-1 my-4">{{ $t('vibration_analysis_technique') }}</p>
              </div>
            </div>
          </v-container>
        </section>
        <v-container aria-label="inspeção por ultrassom">
          <div class="bg-white px-6">
            <div class="ml-6 py-4">
              <h1 class="text-h6 font-weight-bold">{{ $t('heading_ultrasound_inspection') }}</h1>
              <div style="width: 100%; height: 1px; background-image: linear-gradient(to left, transparent, transparent, #1A237E);" class="my-6"></div>
              <p class="text-grey-darken-3 text-caption text-medium-emphasis font-weight-light">{{ $t('ultrasound_inspection_description') }}</p>
            </div>
            <div>
              <v-img src="/inspecoes/3.webp" class="rounded" alt="Inspeção por ultrassom"></v-img>
              <p class="text-caption text-md-body-1 my-4">{{ $t('ultrasound_inspection_technique') }}</p>
              <p class="text-caption text-md-body-1 my-4">{{ $t('ultrasound_inspection_trust') }}</p>
            </div>
          </div>
        </v-container>

        <section class="px-6 py-4" aria-label="inspeção sensitiva">
          <div class="ml-6 py-4">
            <h1 class="text-h6 font-weight-bold">{{ $t('heading_sensitive_inspection') }}</h1>
            <div style="width: 100%; height: 1px; background-image: linear-gradient(to left, transparent, transparent, #1A237E);" class="my-6"></div>
            <p class="text-grey-darken-3 text-caption text-medium-emphasis font-weight-light">{{ $t('sensitive_inspection_description') }}</p>
          </div>
          <div>
            <v-img src="/inspecoes/4.webp" class="rounded" alt="Inspeção sensitiva"></v-img>
            <p class="text-caption text-md-body-1 my-4">{{ $t('sensitive_inspection_technique') }}</p>
            <p class="text-caption text-md-body-1 my-4">{{ $t('sensitive_inspection_advanced_technology') }}</p>
            <p class="text-caption text-md-body-1 my-4">{{ $t('sensitive_inspection_trust') }}</p>
          </div>
        </section >
      </v-container>
       <section aria-label="Formulário - Pred Engenharia">
        <FormularioFormulariopages />
       </section>
    </v-main>
  </div>
</template>

<script setup>
  useSeoMeta({
    title: 'Pred Engenharia - SERVIÇOS TÉCNICOS DE INSPEÇÃO',
    ogTitle: 'Pred Engenharia - SERVIÇOS TÉCNICOS DE INSPEÇÃO',
    description: 'Na Pred Engenharia, oferecemos mais do que simples inspeções; oferecemos uma visão detalhada e abrangente do estado dos seus equipamentos industriais. Nossos serviços técnicos de inspeção vão além do óbvio, utilizando tecnologias avançadas e abordagens inovadoras para revelar os segredos que podem estar escondidos nas entranhas da sua operação. Seja por meio da termografia, análise de vibração, inspeção sensitiva ou outras técnicas especializadas, estamos aqui para fornecer insights valiosos que impulsionam a eficiência, a segurança e a confiabilidade dos seus ativos.',
    ogDescription: 'Na Pred Engenharia, oferecemos mais do que simples inspeções; oferecemos uma visão detalhada e abrangente do estado dos seus equipamentos industriais. Nossos serviços técnicos de inspeção vão além do óbvio, utilizando tecnologias avançadas e abordagens inovadoras para revelar os segredos que podem estar escondidos nas entranhas da sua operação. Seja por meio da termografia, análise de vibração, inspeção sensitiva ou outras técnicas especializadas, estamos aqui para fornecer insights valiosos que impulsionam a eficiência, a segurança e a confiabilidade dos seus ativos.',
    ogImage: 'https://www.predengenharia.com.br/services2.webp',
    twitterCard: 'summary_large_image',
    ogUrl:"https://www.predengenharia.com.br/servicos/inspecoes",
    ogImageAlt:"Termografia e análise de vibração"
  })
</script>
