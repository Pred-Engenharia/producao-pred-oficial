<template>
    <div
      class="d-none d-md-block"
      style="background-image: url('/bgmci.webp'); background-size: cover; height: 1000px; overflow: hidden; background-position: left left;"
    >
      <v-container>
        <div>
          <v-img src="/2.webp" width="300" cover alt="MCI" ></v-img>
          <div>
            <p class="text-h5 text-uppercase w-50 text-grey-lighten-1 montserrat-font">
              {{ $t('mci_titile1') }}
              <span class="text-white Roboto-font font-weight-black">{{ $t('mci_titile2') }}<br>{{ $t('mci_titile3') }}</span>
              {{ $t('mci_titile4') }}
            </p>
          </div>
          <div style="border: 10px solid white; width: 750px; height: 420px;" class="d-flex justify-center align-center pa-3 mt-10">
            <v-img :src="`/${$t('mci_image1')}`" cover height="400" alt="MCI Image 1"></v-img>
          </div>
          <div class="my-4">
            <p class="text-grey-lighten-1 montserrat-font" style="width: 750px;">
              {{ $t('mci_description1') }}
              <span style="position: relative;" class="mr-2">
                MCI<span class="text-caption" style="position: absolute; top: -5px;">®</span>
              </span>
              {{ $t('mci_description2') }}
              <span style="position: relative;" class="mr-2">
                MCI<span class="text-caption" style="position: absolute; top: -5px;">®</span>
              </span>
              {{ $t('mci_description3') }}
            </p>
          </div>
          <v-btn
            append-icon="mdi-arrow-top-right"
            variant="flat"
            color="#B71C1C"
            to="/mci"
            class="text-caption"
          >
            {{ $t('mci_learn_more') }}
          </v-btn>
        </div>
      </v-container>
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
  