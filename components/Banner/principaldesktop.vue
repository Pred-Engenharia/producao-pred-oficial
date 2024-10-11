<template>
  <div 
    class="d-none mt-16 d-md-flex justify-end align-center"
    style="background-image: url('/banner.webp'); background-size: cover; height: 900px; overflow: hidden; background-position: left left; position: relative;"
  >
    <div style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; background-color: rgba(0, 0, 0, .2);"></div>
    <div class="h-75 w-50 pl-16 pr-4" style="position: relative">
      <v-img src="/partelogo2.webp" width="200" alt="Logo da empresa"></v-img>
      <div style="position: absolute; top: 0; left: 0; bottom: 0; right: 0; z-index: 10;">
        <div class="d-flex align-center montserrat-font" style="height: 200px;">
          <div class="d-flex h-100 pl-16 ml-16">
            <p class="align-self-center text-h4 montserrat-font text-white font-weight-black ml-1" aria-label="Years of experience">{{ $t('years') }}</p>
            <p class="montserrat-font font-weight-black text-white" style="font-size: 140px;">30</p>
            <p class="align-self-center mt-16 pt-8 text-lg-h3 text-h4 montserrat-font text-white font-weight-black" aria-label="Years label">{{ $t('years_label') }}</p>
          </div>
        </div>
        <div>
          <div class="pl-16">
            <h2 class="text-white text-lg-h4 font-weight-thin" aria-label="Trusted partner">{{ $t('trusted_partner') }}</h2>
            <h2 class="text-white text-lg-h4 montserrat-font ml-12" aria-label="Industrial solutions">{{ $t('industrial_solutions') }}</h2>
          </div>
          <p class="w-75 text-lg-subtitle-1 text-body-1 text-white montserrat-font pl-16 my-10">
            {{ $t('description_banners') }}
            <span class="mr-4" style="position: relative;">S3i<span class="text-caption" style="position: absolute; top: -5px;">®</span></span>{{ $t('description_bannerss') }}
          </p>  
          <v-btn class="ml-16 text-caption" append-icon="mdi-arrow-top-right" color="indigo-darken-4" to="/sobre" aria-label="Learn more">{{ $t('Learn_more_about_us') }}</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
    .montserrat-font {
    font-family: 'Montserrat', sans-serif;
    }
</style>
