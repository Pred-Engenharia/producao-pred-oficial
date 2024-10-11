<template>
    <div 
        class="w-100 d-none d-md-flex"
        style="height: 300px; position: relative;"
        aria-labelledby="visão-titulo"
    >
        <div style="position: absolute; top: 0; bottom: 0; right: 0; left: 0; background-color: rgba(21, 101, 192, .7); z-index: 10;" aria-hidden="true"></div>
        <div style="position: absolute; top: 0; bottom: 0; right: 0; left: 0; background-color: rgba(0, 0, 0, .4); z-index: 12;" aria-hidden="true"></div>
        <div style="width: 25%;" aria-hidden="true"></div>
        <v-img src="/visao.webp" cover width="75%" height="300"
        role="img" aria-label="Imagem de fundo representando a visão da empresa"
        ></v-img>
        <!-- Conteúdo -->
        <div style="position: absolute; top: -6%; bottom: 0; right: 0; left: 4%; z-index: 15;">
            <div style="height: 320px; width: 40%;" class="bg-red-accent-4 ml-16 rounded-te-xl rounded-be-xl rounded-bs-xl d-flex justify-center align-center">
                <div class="px-8">
                    <p id="section-title" class="text-lg-h6 text-body-1 montserrat-font">
                        {{ $t('pred_engineering_description') }}
                    </p>
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
