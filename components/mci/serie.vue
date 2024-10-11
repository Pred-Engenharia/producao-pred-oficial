<template>
    <div>
      <div class="bg-indigo-darken-4 d-flex align-center flex-column h-100"
           style="background-image: url('/2.webp'); background-position: 100%; background-size: cover; background-attachment: fixed;">
        <div style="background-color: rgba(26, 35, 126, .9);" class="w-100 h-100 px-5 py-8">
          <div class="w-100">
            <v-container>
              <p class="text-center mb-4 text-body-1 text-md-h5">{{ $t('mci_series_youtube') }} <span>{{ $t('elevate_maintenance') }}</span></p>
              <div style="height: 1px; background-image: linear-gradient(to left, transparent, white, transparent);"
                   class="mb-6 mx-auto w-75"></div>
              <div>
                <p class="text-right my-4 w-75 mx-auto text-body-2 text-md-body-1">{{ $t('maximize_availability') }}</p>
                <p class="text-caption w-75 mx-auto">{{ $t('exclusive_playlist_intro') }} <span>{{ $t('ozorio_rezende') }}</span>
                  {{ $t('deep_dive') }} <br><br><span class="text-body-1 mt-2">{{ $t('video_series') }}</span></p>
              </div>
              <div class="h-100 py-6 " style="position: relative;">
                <nuxt-link to="https://www.youtube.com/playlist?list=PLA8tyKb1AjYCrcGFOOtj0GiE_o5Q4Rpdk" target="_blank">
                    <v-img :src="`/mci/${$t('mci_image4')}`" min-height="100" max-width="800" cover alt="Thumbnail da playlist MCI no YouTube" class="mx-auto"
                    gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.5)"
                    ></v-img>
                    <div style="position: absolute; top: 0; bottom: 0; right: 0; left: 0; z-index: 1;" class="d-flex justify-center align-center h-100 w-100 text-red">
                      <v-icon icon="mdi-youtube" class="text-h3 text-md-h1"></v-icon>
                    </div>
                </nuxt-link>
              </div>
            </v-container>
          </div>
        </div>
      </div>
    </div>
  </template>
  