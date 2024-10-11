<template>
    <div>
      <!-- Mobile Banner -->
      <div style="background-image: url('/bannermci.gif'); background-size: cover; background-position: center center;" class="pt-14 d-sm-none">
        <div class="h-100 w-100 pa-6" style="background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, .7), transparent);">
          <div class="d-flex justify-center flex-column align-center h-100 elevation-24 rounded pa-2" style="background-color: rgba(0, 0, 0, .3);">
            <v-img src="/mcilogo.webp" alt="MCI Logo" width="100" max-height="50"></v-img>
            <h1 class="text-body-1 text-white text-center mt-4">{{ $t('conditioned_maintenance1') }}<br>{{ $t('conditioned_maintenance2') }}</h1>
          </div>
          <div>
            <div style="width: 50%; height: 1px; background-image: linear-gradient(to left, transparent, #B71C1C, transparent);" class="mx-auto my-4"></div>
            <p class="text-caption text-red text-center font-weight-black">{{ $t('discover_mci_method') }}</p>
          </div>
        </div>
      </div>
      <!-- Desktop Banner -->
      <div class="d-none d-sm-flex w-100" style="height: 600px;">
        <div style="background-image: url('/bannermci.gif'); background-size: cover; background-position: center center;" class="pt-14 w-100 h-100">
          <div class="h-100 w-100 pa-6" style="background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, .7), transparent);">
            <v-container>
              <div class="d-flex justify-center flex-column align-center elevation-24 rounded pa-6" style="background-color: rgba(0, 0, 0, .3);">
                <v-img src="/mcilogo.webp" alt="MCI Logo" width="100" max-height="50" class="mt-6"></v-img>
                <h1 class="text-h3 text-white text-center mt-10 font-weight-medium">{{ $t('conditioned_maintenance1') }}<br>{{ $t('conditioned_maintenance2') }}</h1>
              </div>
              <div>
                <div style="width: 50%; height: 1px; background-image: linear-gradient(to left, transparent, #B71C1C, transparent);" class="mx-auto my-10"></div>
                <p class="text-h4 text-red text-center">{{ $t('discover_mci_method') }}</p>
              </div>
            </v-container>
          </div>
        </div>
      </div>
    </div>
  </template>
  