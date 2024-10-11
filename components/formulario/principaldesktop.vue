<template>
    <div
    class="bg-grey-lighten-1 d-lg-flex d-none "
    style="height: 550px; position: relative; overflow: hidden;"
    >
        <NuxtImg src="/predred.webp" width="100%" height="300px" fit="cover"  format="webp" loading="lazy" style="position: absolute; bottom: 0; left: 0;" 
        aria-label="formulario imagem - pagina sobre - logo" alt="formulario imagem - sobre - logo"/>
        <div  style="width: 60%;">
            <NuxtImg src="/sobre.webp" height="550px" width="100%"  class="w-100" fit="cover"  format="webp" loading="lazy"
            aria-label="formulario imagem - pagina sobre" alt="formulario imagem - sobre" style="position: relative; z-index: 1;"/>
            </div>
            <div class="d-flex align-center  h-100 px-4" style="width: 40%;">
                <v-card style="width: 90%;">
                    <v-card-item>
                        <FormularioForm />
                    </v-card-item>
                </v-card>
            </div>
    </div>
</template>