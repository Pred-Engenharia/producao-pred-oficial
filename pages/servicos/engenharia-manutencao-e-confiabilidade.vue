<template >
    <div>
        <v-img
        class="d-md-none"
        gradient="to top, rgba(0,0,0,.9), rgba(0,0,0,.7),transparent"
        height="350"
        cover
        src="/services1.webp"
        alt="Imagem descritiva - Pred Engenharia"
        >
            <div class=" d-flex flex-column justify-center align-center w-100 h-100 pa-4" style="background-image: linear-gradient(to top, rgba(0,0,0,.9), rgba(0,0,0,.7),transparent);">
                <div><v-icon icon="mdi-cog-play" size="50"></v-icon></div>
                <h1 class="text-grey-lighten-1 text-h5 text-center font-weight-bold elevation-24 mt-2 pa-2">{{ $t('services_maintenance_reliability') }}</h1>
            </div>
        </v-img>
        <!-- DESKTOP -->
        <v-img
        class="d-none d-md-flex mt-14"
        gradient="to top, rgba(0,0,0,.9), rgba(0,0,0,.7),transparent"
        height="600"
        cover
        src="/services1.webp"
        alt="Imagem descritiva - Pred Engenharia"
        >
            <div class=" d-flex flex-column justify-center align-center w-100 h-100 pa-4" style="background-image: linear-gradient(to top, rgba(0,0,0,.9), rgba(0,0,0,.7),transparent);">
                <div><v-icon icon="mdi-cog-play" size="50"></v-icon></div>
                <h1 class="text-grey-lighten-1 text-h5 text-md-h2 text-center font-weight-bold elevation-24 mt-6 pa-4">{{ $t('services_maintenance_reliability') }}</h1>
            </div>
        </v-img>
        <v-main class="pa-0">
            <section>
                <v-container>
                    <div class="px-6 py-6 ml-6">
                        <h1 class="text-h6 font-weight-bold">{{ $t('efficient_maintenance_systematization') }}</h1>
                        <div 
                        style="width: 100%; height: 1px; background-image: linear-gradient(to left, transparent, transparent,#1A237E);" 
                        class="mb-4 my-6"></div>                    
                    </div>
                    <div class="px-6 pb-4">
                        <v-img  :src="`/man/${$t('service_man_image1')}`"  class="rounded my-6" max-width="700"></v-img>
                        <div class="text-grey-darken-3 my-4">
                            <p class="text-caption my-2">{{ $t('efficient_maintenance_text1') }} <span class="font-italic">{{ $t('efficient_maintenance_text2') }}</span>, {{ $t('efficient_maintenance_text3') }}</p>
                            <p class="text-body-2 text-md-body-1 my-6">{{ $t('efficient_maintenance_text4') }}</p>
                            <p class="text-body-2 text-md-body-1 my-6">{{ $t('efficient_maintenance_text5') }}</p>
                        </div>
                    </div>
                </v-container>
                <section class="px-4 py-4 bg-grey-lighten-2 h-100" >
                    <v-container>
                        <div class=" pa-2">
                            <h4 class="text-body-2 text-md-body-1 pa-2">{{ $t('efficient_maintenance_text6') }}</h4>
                            <div class="bg-grey-lighten-3 my-4 py-2 rounded">
                                <v-list-item prepend-icon="mdi-cog-play" class="text-caption text-md-body-2 mb-2">
                                    {{ $t('asset_registration') }}
                                </v-list-item>
                                <v-list-item prepend-icon="mdi-cog-play" class="text-caption text-md-body-2 mb-2">
                                    {{ $t('mobile_computing_integration') }}
                                </v-list-item>
                                <v-list-item prepend-icon="mdi-cog-play" class="text-caption text-md-body-2 mb-2">
                                    {{ $t('technical_list_creation') }}
                                </v-list-item>
                                <v-list-item prepend-icon="mdi-cog-play" class="text-caption text-md-body-2">
                                    {{ $t('maintenance_staff_optimization') }}
                                </v-list-item>
                                <v-list-item prepend-icon="mdi-cog-play" class="text-caption text-md-body-2">
                                    {{ $t('erp_migration_support') }}
                                </v-list-item>
                            </div>
                            <div class="text-body-2 text-md-body-1 mt-6 Roboto-font">{{ $t('outdated_solutions_warning') }}</div>
                            <p class="text-body-2 text-md-body-1 ">{{ $t('discover_pred_services') }}</p>
                        </div>
                    </v-container>
                </section>
                <!--outra secção-->
                <section class="bg-white px-6" >
                    <v-container>
                        <div class=" py-4 ml-6 my-4">
                            <h1 class="text-h6 font-weight-bold">{{ $t('lubrication_engineering') }}</h1>
                            <div 
                            style="width: 100%; height: 1px; background-image: linear-gradient(to left, transparent, transparent,#1A237E);" 
                            class="mb-6 mt-6"></div>
                            <p class="text-grey-darken-3 text-caption text-medium-emphasis font-weight-light my-4">{{ $t('lubrication_failures') }}</p>
                        </div>
                        <div >
                            <p class="text-body-2 text-md-body-1 mb-2">{{ $t('lubrication_services_intro') }}</p>
                            <v-img :src="`/man/${$t('service_man_image2')}`" class="rounded mx-auto my-4" max-width="500"></v-img>
                        </div>
                    </v-container>
                </section>
                  <!--outra secção-->
                  <section class="bg-white px-6 py-2 my-4" >
                    <v-container>
                        <div class=" py-2 ml-4 " >
                            <div class=" mt-4  text-h4 font-weight-bold" >
                                {{ $t('maintenance_planning') }}
                            </div>
                            <div    
                            style="width: 70%; height: 1px; background-image: linear-gradient(to left, transparent, transparent,#1A237E);" 
                            class="my-6"></div>
                            <p class="text-white text-caption s font-weight-light">{{ $t('maintenance_planning') }}</p>
                        </div>
                        <div >
                            <v-img  :src="`/man/${$t('service_man_image3')}`" class="rounded-shaped my-6 mx-auto" max-width="700"></v-img>
                            <div>
                                <p class="text-body-2 text-md-body-1 mt-4">{{ $t('maintenance_planning_field_or_office') }}</p>
                                <p class="text-body-2 text-md-body-1 my-3">{{ $t('maintenance_planning_text') }}</p>
                            </div>                      
                        </div>
                    </v-container>
                </section>
                <!--outra secção-->
                <section  class="bg-white px-6 py-4">
                    <v-container>
                        <div class=" py-2 ml-6" >
                            <div class=" mt-4 text-h6 font-weight-bold " >
                                {{ $t('maintenance_diagnosis') }}
                            </div>
                            <div    
                            style="width: 70%; height: 1px; background-image: linear-gradient(to left, transparent, transparent,#1A237E);" 
                            class="my-6"></div>
                            <p class="text-indigo-darken-4 text-body-1 s font-weight-light font-italic">{{ $t('maintenance_diagnosis_cost_reduction') }}</p>
                        </div>
                        <div >
                            <v-img  :src="`/man/${$t('service_man_image4')}`" class="rounded-shaped my-6 mx-auto" max-width="600"></v-img>
                            <p class="text-body-2 text-md-body-1 mt-4">{{ $t('maintenance_diagnosis_text1') }}</p>
                            <p class="text-body-2 text-md-body-1 mt-4">{{ $t('maintenance_diagnosis_text2') }}</p>
                        </div>
                    </v-container>
                </section>


                <!--outra secção-->
                <section class="px-4 py-4 bg-grey-lighten-1 h-100" >
                    <v-container>
                        <div class=" pa-2">
                            <div class="px-6 py-4">
                            <h1 class="text-h6 font-weight-bold">{{ $t('team_training') }}</h1>
                            <div 
                            style="width: 100%; height: 1px; background-image: linear-gradient(to left, transparent, transparent,#1A237E);" 
                            class="my-6"></div>
                            <p class="text-grey-darken-3 text-body-2 text-md-body-1">{{ $t('team_training_text1') }}</p>
                        </div>
                        <div class="bg-grey-lighten-3 mt-2 pa-6 rounded">
                            <p class="text-body-2 py-2 px-4 text-md-body-1">{{ $t('team_training_text2') }}</p>
                            <p class="text-body-2 py-2 px-4 text-md-body-1 mb-6">{{ $t('team_training_text2') }}</p>
                            <v-list-item prepend-icon="mdi-cog-play" class="text-indigo-darken-4 text-caption text-md-body-2 mb-2">
                                {{ $t('team_training_list1') }}
                            </v-list-item>
                            <v-list-item prepend-icon="mdi-cog-play" class="text-indigo-darken-4 text-caption text-md-body-2 mb-2">
                                {{ $t('team_training_list2') }}
                            </v-list-item>
                            <v-list-item prepend-icon="mdi-cog-play" class="text-indigo-darken-4 text-caption text-md-body-2 mb-2">
                                {{ $t('team_training_list3') }}
                            </v-list-item>
                            <p class="text-body-2 py-2 px-4 text-md-body-1">{{ $t('team_training_text3') }}</p>
                        </div>
                    </div>
                    </v-container>
                </section>
                   <!--outra secção-->
                <section class="bg-white px-6 py-4" >
                    <v-container>
                        <div class=" py-4 ml-6">
                            <h1 class="text-h6 font-weight-bold">{{ $t('in_company_training') }}</h1>
                            <div 
                            style="width: 100%; height: 1px; background-image: linear-gradient(to left, transparent, transparent,#1A237E);" 
                            class="my-6"></div>
                            <p class="text-grey-darken-3 text-caption text-medium-emphasis font-weight-light">{{ $t('specialized_technical_visits') }}</p>
                        </div>
                        <div >
                            <v-img src="/man/5.webp" class="rounded my-6 mx-auto" max-width="600"></v-img>
                            <p class="text-body-2  text-md-body-1 mb-3">{{ $t('interactive_training_material') }}</p>
                            <p class="text-body-2 text-md-body-1 mb-2">
                            </p>
                            <p class="text-body-2 text-md-body-1">{{ $t('additional_services') }}</p>
                        </div>
                    </v-container>
                </section>
                <section>
                    <FormularioFormulariopages />
                </section>
            </section>
        </v-main>
    </div>
</template>

<script setup>
  useSeoMeta({
    title: 'Pred Engenharia - SERVIÇOS DE ENGENHARIA DE MANUTENÇÃO & CONFIABILIDADE',
    ogTitle: 'Pred Engenharia - SERVIÇOS DE ENGENHARIA DE MANUTENÇÃO & CONFIABILIDADE',
    description: 'Na Pred Engenharia, oferecemos uma gama completa de serviços de engenharia projetados para otimizar a performance dos seus equipamentos e processos industriais. De diagnósticos precisos a treinamentos especializados, nossa equipe de especialistas está aqui para impulsionar a eficiência, reduzir custos e maximizar a produtividade da sua operação. Descubra como nossos serviços de ponta podem elevar o seu negócio para novos patamares de sucesso.',
    ogDescription: 'Na Pred Engenharia, oferecemos uma gama completa de serviços de engenharia projetados para otimizar a performance dos seus equipamentos e processos industriais. De diagnósticos precisos a treinamentos especializados, nossa equipe de especialistas está aqui para impulsionar a eficiência, reduzir custos e maximizar a produtividade da sua operação. Descubra como nossos serviços de ponta podem elevar o seu negócio para novos patamares de sucesso.',
    ogImage: 'https://www.predengenharia.com.br/services1.webp',
    twitterCard: 'summary_large_image',
    ogUrl: 'https://www.predengenharia.com.br/servicos/engenharia-manutencao-e-confiabilidade',
    ogImageAlt:"SERVIÇOS DE ENGENHARIA DE MANUTENÇÃO & CONFIABILIDADE"
  })
</script>
