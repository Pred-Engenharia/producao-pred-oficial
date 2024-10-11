<template>
    <div>
        <v-img
            class="d-md-none"
            height="350"
            cover
            :src="$t('service_image3')"
            gradient="to top, rgba(0,0,0,.9), rgba(0,0,0,.75), transparent"
        >
            <div class="d-flex flex-column justify-center align-center w-100 h-100 pa-4" style="background-image: linear-gradient(to top, rgba(0,0,0,.9), rgba(0,0,0,.75), transparent);">
                <div><v-icon icon="mdi-cellphone-cog" size="50"></v-icon></div>
                <h1 class="text-grey-lighten-1 text-h5 text-center font-weight-bold elevation-24 mt-2 pa-2">S3I<br>{{ $t('s3i_title') }}</h1>
            </div>
        </v-img>
        <!-- desktop -->
        <v-img
            class="d-none d-md-flex mt-14"
            cover
            height="600"
            :src="$t('service_image3')"
            gradient="to top, rgba(0,0,0,.9), rgba(0,0,0,.75), transparent"
            alt="Imagem ilustrativa do serviço S3I"
        >
            <div class="d-flex flex-column justify-center align-center w-100 h-100 pa-4" style="background-image: linear-gradient(to top, rgba(0,0,0,.9), rgba(0,0,0,.75), transparent);">
                <div><v-icon icon="mdi-cellphone-cog" size="50"></v-icon></div>
                <h1 class="text-grey-lighten-1 text-h5 text-md-h2 text-center font-weight-bold elevation-24 mt-2 pa-4">S3I<br>{{ $t('s3i_title') }}</h1>
            </div>
        </v-img>
        <v-main class="pa-0">
            <div>
                <v-container>
                    <div class="px-6 py-4">
                        <h1 class="text-body-2 text-md-body-1 font-weight-bold text-center">{{ $t('solution_description') }}</h1>
                        <div 
                        style="width: 50%; height: 1px; background-image: linear-gradient(to left, transparent, #1A237E, transparent);" 
                        class="mx-auto my-6"></div>
                        <p class="text-grey-darken-3 text-caption text-md-body-2 text-center">{{ $t('subtitle') }}</p>
                    </div>

                    <div class="px-6 pb-4">
                        <v-img :src="$t('image_1')" class="rounded mx-auto my-4" max-width="700"></v-img>
                        <div class="text-grey-darken-3">
                            <p class="text-caption text-md-body-1 my-2">{{ $t('description_1') }}</p>
                            <p class="text-caption text-md-body-1 my-2">{{ $t('description_2') }}</p>
                            <p class="text-caption text-md-body-1 my-2">{{ $t('description_3') }}</p>
                        </div>
                    </div>
                </v-container>
                <section class="px-6 py-4 bg-grey-lighten-2">
                    <v-container>
                        <h1 class="text-body-2 text-md-body-1 font-weight-bold text-center">{{ $t('traceability_intelligence_title') }}</h1>
                        <div 
                        style="width: 50%; height: 1px; background-image: linear-gradient(to left, transparent, #1A237E, transparent);" 
                        class="mx-auto my-6"></div>

                        <div class="text-grey-darken-3 my-6">
                            <p class="text-caption text-md-body-1 my-2">{{ $t('traceability_intelligence_description_1') }}</p>
                            <p class="text-caption text-md-body-1 my-2">{{ $t('traceability_intelligence_description_2') }}</p>
                        </div>
                        <v-img :src="$t('image_2')" class="rounded my-6" max-width="700"></v-img>
                        <div class="bg-grey-lighten-3 mt-4 rounded pa-6">
                            <p class="text-body-2 text-md-body-1 py-2 px-4">{{ $t('exclusivities_title') }}</p>
                            <v-list-item prepend-icon="mdi-cellphone-cog" class="text-caption text-md-body-2 mb-2">
                                {{ $t('exclusivity_1') }}
                            </v-list-item>
                            <v-list-item prepend-icon="mdi-cellphone-cog" class="text-caption text-md-body-2 mb-2">
                                {{ $t('exclusivity_2') }}
                            </v-list-item>
                            <v-list-item prepend-icon="mdi-cellphone-cog" class="text-caption text-md-body-2 mb-2">
                                {{ $t('exclusivity_3') }}
                            </v-list-item>
                            <v-list-item prepend-icon="mdi-cellphone-cog" class="text-caption text-md-body-2 mb-2">
                                {{ $t('exclusivity_4') }}
                            </v-list-item>
                            <v-list-item prepend-icon="mdi-cellphone-cog" class="text-caption text-md-body-2 mb-2">
                                {{ $t('exclusivity_5') }}
                            </v-list-item>
                            <v-list-item prepend-icon="mdi-cellphone-cog" class="text-caption text-md-body-2 mb-2">
                                {{ $t('exclusivity_6') }}
                            </v-list-item>
                            <v-list-item prepend-icon="mdi-cellphone-cog" class="text-caption text-md-body-2">
                                {{ $t('exclusivity_7') }}
                            </v-list-item>
                        </div>
                        <v-img :src="$t('image_3')" class="rounded my-6 mx-auto"   alt="Imagem ilustrativa do serviço S3I"></v-img>
                    </v-container>
                </section>     
                <!--outra secção-->
                <section>
                    <FormularioFormulariopages />
                </section>             
            </div>
        </v-main>
    </div>
</template>


<script setup>
  useSeoMeta({
    title: 'Pred Engenharia - SISTEMA INTELIGENTE DE INTERVENÇÃO INDUSTRIAL',
    ogTitle: 'Pred Engenharia - SISTEMA INTELIGENTE DE INTERVENÇÃO INDUSTRIAL',
    description: 'Convidamos você a explorar uma nova era na gestão industrial. Imagine uma ferramenta que não apenas simplifica, mas também aprimora cada etapa da sua manutenção. Aperte abaixo para mergulhar no mundo do S3i® e descubra como ele pode elevar sua operação a novos patamares de excelência.',
    ogDescription: 'Convidamos você a explorar uma nova era na gestão industrial. Imagine uma ferramenta que não apenas simplifica, mas também aprimora cada etapa da sua manutenção. Aperte abaixo para mergulhar no mundo do S3i® e descubra como ele pode elevar sua operação a novos patamares de excelência.',
    ogImage: 'https://www.predengenharia.com.br/services3.webp',
    twitterCard: 'summary_large_image',
    ogUrl: 'https://www.predengenharia.com.br/servicos/s3i',
    ogImageAlt:"SISTEMA INTELIGENTE DE INTERVENÇÃO INDUSTRIAL"
  })
</script>
