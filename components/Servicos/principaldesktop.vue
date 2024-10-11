<template>
  <div 
    class="pb-16 d-none d-md-block"
    style="background-image: url('/pred_site_03.webp'); background-size: cover; overflow: hidden;" 
  >
    <div class="d-flex pa-16 align-center">
      <div class="mr-10">
        <v-img src="/partelogo2.webp" alt="Logo da empresa Parte" width="40"></v-img>
      </div>
      <h1 class="text-white montserrat-font font-weight-black" aria-label="Título dos serviços">{{ $t('services') }}</h1>
      <LanguageSwitcher />
    </div>
    <div class="w-100 d-flex py-4" style="background-color: rgba(255, 0, 0, .1); height: 400px;">
      <div class="w-50" >
        <v-img src="/services1.webp" cover  alt="Imagem representativa do serviço de engenharia" aria-label="Imagem do serviço de engenharia"></v-img>
      </div>
      <div class="w-50 px-4 mt-4 " >
        <div class="mb-2">
          <h1 class="text-lg-h4 text-h6 text-white montserrat-font">
            <strong class="text-red-accent-4"># 1</strong> <span style="opacity: .8;">{{ $t('engineering') }}</span>
          </h1>
        </div>
        <div class="my-6">
          <p class="text-white pr-4 text-lg-subtitle-2 text-caption">{{ $t('engineering_desc') }}</p>
        </div>
        <v-btn       
          append-icon="mdi-arrow-top-right"
          class="mt-2 text-caption"
          to="/servicos/engenharia-manutencao-e-confiabilidade"
          aria-label="Serviços de Engenharia, Manutenção e Confiabilidade"
          color="#1A237E"
        >{{ $t('learn_more') }}</v-btn>
      </div>
    </div>
    <div class="w-100 d-flex py-4" style="background-color: rgba(25, 31, 52, .12); height: 400px">
      <div class="w-50 pl-16 pr-4" >
        <div class="ml-6 mt-4">     
          <div class="mb-2">
            <h1 class="text-lg-h4 text-h6 text-white">
              <strong class="text-red-accent-4"># 2</strong> <span style="opacity: .8;">{{ $t('inspection') }}</span>
            </h1>
          </div>
          <div class="my-6">
            <p class="text-white text-lg-subtitle-2 text-caption">{{ $t('inspection_desc') }}</p>
          </div>
          <v-btn       
            append-icon="mdi-arrow-top-right"
            class="mt-4 text-caption"
            to="/servicos/inspecoes"
            color="#1A237E"
            aria-label="Serviços de Inspeções Técnicas"
          >{{ $t('learn_more') }}</v-btn>
        </div>
      </div>
      <div class="w-50">
        <v-img src="/services2.webp" cover alt="Imagem representativa do serviço de inspeções" aria-label="Imagem do serviço de inspeções"></v-img>
      </div>
    </div>
    <div class="w-100 d-flex py-4" style="background-color: rgba(255, 0, 0, .1); height: 400px">
      <div class="w-50" >
        <v-img src="/services3.webp"  cover alt="Imagem representativa do serviço S3I" aria-label="Imagem do serviço S3I"></v-img>
      </div>
      <div class="w-50 px-8 mt-4">
        <div class="mb-4">
          <h1 class="text-lg-h4 text-h6 text-white">
            <strong class="text-red-accent-4"># 3 </strong>
            <strong>
              <span style="position: relative;" class="mr-2">S3I<span class="text-caption" style="position: absolute; top: 0;">®</span></span>
            </strong>
            <span style="opacity: .8;"> - {{ $t('s3i') }}</span>
          </h1>
        </div>
        <div class="my-6">
          <p class="text-white pr-6 text-lg-subtitle-2 text-caption">{{ $t('s3i_desc') }}</p>
        </div>
        <v-btn       
          append-icon="mdi-arrow-top-right"
          class="mt-4 text-caption"
          to="/servicos/s3i"
          color="#1A237E"
          aria-label="Sistema S3i"
        >{{ $t('learn_more') }}</v-btn>
      </div>
    </div>
    <div class="w-100 d-flex py-4" style="background-color: rgba(25, 31, 52, .12); height: 400px">
      <div class="w-50 pl-16 pr-4">
        <div class="ml-6 mt-4">                 
          <div class="mb-2">
            <h1 class="text-lg-h4 text-h6 text-white">
              <strong class="text-red-accent-4"># 4</strong> <strong>SFT</strong> <span style="opacity: .8;"> - {{ $t('sft') }}</span>
            </h1>
          </div>
          <div class="my-6">
            <p class="text-white text-lg-subtitle-2 text-caption">{{ $t('sft_desc') }}</p>
          </div>
          <v-btn       
            append-icon="mdi-arrow-top-right"
            class="mt-4 text-caption"
            to="/servicos/sft"
            color="#1A237E"
            aria-label="Sistema SFT"
          >{{ $t('learn_more') }}</v-btn>
        </div>
      </div>
      <div class="w-50">
        <v-img src="/services4.webp" cover alt="Imagem representativa do serviço SFT" aria-label="Imagem do serviço SFT"></v-img>
      </div>
    </div>
  </div>
</template>

<style scoped>
    .montserrat-font {
    font-family: 'Montserrat', sans-serif;
    }
</style>
