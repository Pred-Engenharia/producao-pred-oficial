<template >
    <div class="pt-14">
         <section aria-label="Banner Página Sobre - Pred Engenharia">
            <SobreBanner />
         </section>
        <v-main class="pa-0">
            <section class="pa-4">
                <div class="d-flex mb-4 pa-2" style="max-height: 400px;">
                    <div style="width: 5px;  background-image: linear-gradient(to bottom, #B71C1C ,transparent, transparent);" class="mr-4 d-sm-none"></div>
                    <p class="text-body-2 mx-auto my-4 font-weight-bold">{{ $t('main_content') }}
                        <span class="text-body-1">{{ $t('main_areas') }}</span>
                    </p>
                </div>
                <v-img src="/sobre/2.webp" class="rounded mx-auto" max-width="600" alt="Imagem representativa corporativa - Pred Engenharia"></v-img>
            </section>

            <section class="bg-indigo-darken-4 mt-2 py-2 rounded-ts-xl">
                <v-container>
                    <p class="text-body-2 text-md-body-1 py-2 px-4">{{ $t('intro_paragraph') }}</p>
                    <v-list-item prepend-icon="mdi-checkbox-marked-circle-auto-outline" class="text-caption text-md-body-2 mb-2">
                        <span class="text-body-1">{{ $t('technical_services_area') }}</span> {{ $t('technical_services_description') }}
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-checkbox-marked-circle-auto-outline" class="text-caption text-md-body-2 mb-2">
                        <span class="text-body-1">{{ $t('it_area') }}</span> {{ $t('it_description') }}
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-checkbox-marked-circle-auto-outline" class="text-caption text-md-body-2 mb-2">
                        <span class=" text-body-1">{{ $t('industrial_automation_area') }}</span> {{ $t('industrial_automation_description') }}
                    </v-list-item>
                </v-container>
            </section>
            <section aria-label="Formulário - Pred Engenharia">
                <FormularioFormulariopages />
            </section>
            
        </v-main>
    </div>
</template>

<script setup>
  useSeoMeta({
    title: 'Pred Engenharia - Sobre Nós',
    ogTitle: 'Pred Engenharia - Sobre Nós',
    description: 'Especializada em soluções de confiabilidade e produtividade para áreas de O&M',
    ogDescription: 'Especializada em soluções de confiabilidade e produtividade para áreas de O&M',
    ogImage: 'https://www.predengenharia.com.br/1.webp',
    twitterCard: 'summary_large_image',
    ogUrl: 'https://www.predengenharia.com.br/sobre',
    ogImageAlt:"Sobre Nós"
  })
</script>

