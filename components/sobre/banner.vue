<template>
    <div>
        <v-img src="/1.webp" class="text-center" max-height="600" min-height="400" cover>
            <div
                class="w-100 h-100 d-flex justify-center align-center pa-2"
                style="background-color: rgba(0, 0, 0, .75);"
                aria-hidden="true"
            >
                <v-container>
                    <div class="elevation-24 pa-8 rounded text-center" style="background-color: rgba(0, 0, 0, .3);" aria-hidden="true">
                        <h1 class="text-h5 text-sm-h4 text-md-h4 font-weight-black text-white">{{ $t('specialized_solutions') }}</h1>
                        <p class="my-8 text-caption text-md-body-1 font-weight-light text-grey-lighten-1">
                            {{ $t('pred_engineering') }}
                            <span class="text-body-1 text-white">{{ $t('om_industry_services') }}</span>
                        </p>
                        <div
                            style="width: 50%; height: 1px; background-image: linear-gradient(to left, transparent, #B71C1C, transparent);"
                            class="mx-auto mt-2"
                            aria-hidden="true"
                        ></div>
                    </div>
                </v-container>
            </div>
        </v-img>
    </div>
</template>
