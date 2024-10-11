<template>  
  <div 
    class="d-md-none"
    style="height: 600px; overflow: hidden; position: relative;"
  >
  
    <div style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; background-image: linear-gradient(to bottom, transparent,rgba(0,0,0, .8), rgba(26,35,126, 1), rgba(26,35,126, 1), rgba(26,35,126, 1));"></div>
    <div class="pl-10 mt-16 pt-6" style="position: relative;">
      <v-img src="/partelogo2.webp" width="150" alt="Logo da empresa" eager></v-img>
      <div style="position: absolute; top: 0; left: 0; bottom: 0; right: 0; z-index: 10;">
        <div class="d-flex align-center montserrat-font" style="height: 180px;">
          <div class="d-flex h-100 ">
            <p class="align-self-center text-h4 montserrat-font text-white font-weight-black ml-12 pl-10 mt-2" aria-label="Years of experience">{{ $t('years') }}</p>
            <p class="montserrat-font font-weight-black text-white pt-10 pl-2" style="font-size: 75px;">30</p>
            <p class="align-self-center  pt-8 text-h5 montserrat-font text-white font-weight-black" aria-label="Years label">{{ $t('years_label') }}</p>
          </div>
        </div>
        <div>
          <div class="ml-10">
            <h2 class="text-white text-body-1 font-weight-thin" aria-label="Trusted partner">{{ $t('trusted_partner') }}</h2>
            <h2 class="text-white text-body-1  montserrat-font ml-16" aria-label="Industrial solutions">{{ $t('industrial_solutions') }}</h2>
          </div>

          <p class="text-caption text-white montserrat-font pl-10 pr-4 my-6">
            {{ $t('description_banners') }}
            <span class="mr-4" style="position: relative;">S3i<span class="text-caption" style="position: absolute; top: -5px;">®</span></span>{{ $t('description_bannerss') }}
          </p>

          <v-btn variant="tonal"class="ml-8 text-caption" color="indigo-lighten-5" to="/sobre" aria-label="Learn more" append-icon="mdi-arrow-top-right">{{ $t('Learn_more_about_us') }}</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
    .montserrat-font {
      font-family: 'Montserrat', sans-serif;
    }
    .Roboto-font {
      font-family: 'Roboto', sans-serif;
    }
</style>
