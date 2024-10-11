<template>
  <div
    class="d-md-none bg-indigo-darken-3"
    style="max-height: 570px; overflow: hidden;"
  >
    <v-container>
      <div>
        <v-img src="/2mobile.webp" width="50" height="35" cover alt="MCI" ></v-img>
        <div>
          <p class="text-caption text-uppercase w-100 text-grey-lighten-1 montserrat-font">
            {{ $t('mci_titile1') }}
            <span class="text-white Roboto-font font-weight-black">{{ $t('mci_titile2') }}<br>{{ $t('mci_titile3') }}</span>
            {{ $t('mci_titile4') }}
          </p>
        </div>
        <div style="border: 5px solid white; height: 190px;" class="d-flex justify-center align-center pa-2 mt-4 w-100">
          <v-img :src="`/${$t('mci_image1')}`" cover height="180" width="320" alt="MCI Image 1"></v-img>
        </div>
        <div class="my-4">
          <p class="text-white montserrat-font text-caption" >
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
          variant="tonal"
          color="indigo-lighten-5"
          to="/mci"
          class="text-caption"
          append-icon="mdi-arrow-top-right"
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
