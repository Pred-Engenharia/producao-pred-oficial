<template>
    <div>
        <div class="bg-indigo-darken-4 d-flex  align-center flex-column h-100 d-md-none">
            <div  class="w-100 h-100 px-5 py-8">
                <div class="w-100 ">
                    <div class=" mt-4 mb-2 ml-2  text-h6 font-weight-bold text-white" style="color: #BDBDBD;">
                        {{ $t('know_us') }}
                    </div>
                    <div    
                    style="width: 70%; height: 1px; background-image: linear-gradient(to left, transparent,white);" 
                    class="mb-6 mx-2"></div>
                    <NuxtImg src="/30anos.webp"   format="webp" loading="lazy" class="rounded w-100" alt="30 anos Pred"  height="300" />
                </div>
                <div class="pt-6 d-flex h-100" style="overflow: hidden;">
                    <div style="width: 20px;  background-image: linear-gradient(to bottom, #B71C1C ,transparent);" class="mr-4"></div>
                    <div >{{ $t('about_description') }}</div>
                </div>
                <v-btn
                    variant="tonal"
                    size="small"
                    append-icon="mdi-arrow-top-right"
                    class="mt-6 text-grey-lighten-5 ml-4 text-caption"
                    color="indigo-lighten-5"
                    to="/sobre"
                    >{{ $t('Learn_more_about_us') }}</v-btn>
            </div>
        </div>
        <!-- sobre desktop -->
        <div class="d-none d-md-block "
        style="height: 500px"
        >
            <div class="h-100 w-100 pa-4" >
                <v-container>
                    <div class="px-10">
                    <div class="d-flex align-center justify-center mt-6 mb-10">
                        <div class=" mr-10">  <NuxtImg src="/partelogo2.webp"  format="webp" loading="lazy" alt="parte logo Pred"  width="40" height="35"  /></div>
                        <h1 class="text-deep-purple-darken-4 font-weight-black text-h4">{{ $t('know_us') }}</h1>
                    </div>
                    <v-row dense  class="flex justify-center">
                        <v-col cols="6" xl="5">
                            <NuxtImg src="/30anos.webp" fit="cover" format="webp" loading="lazy"  class="rounded w-100" alt="30 anos Pred" height="300" />
                        </v-col>
                        <v-col cols="5" xl="4">
                            <div class="ml-6" >
                                <div  class="text-lg-body-1 text-caption text-black montserrat-font">{{ $t('about_description') }}</div>
                            </div>
                            <v-btn                           
                            append-icon="mdi-arrow-top-right"
                            class="mt-10 ml-6 text-caption"
                            variant="flat"
                            to="/sobre"
                            color="red-accent-4"
                            >{{ $t('Learn_more_about_us') }}</v-btn>
                        </v-col>
                    </v-row>
                </div>
                </v-container>
            </div>
        </div>
    </div>
</template>


<style scoped>
    .montserrat-font {
    font-family: 'Montserrat', sans-serif;
    }
</style>