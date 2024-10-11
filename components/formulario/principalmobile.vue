<template>
  <div class="d-lg-none h-100">
    <v-lazy
    transition="fade-transition"
    >
    <v-img
    src="/sobre.webp"
    height="550"
    cover
    class="d-flex justify-center align-center pa-4"
    aria-label="formulario imagem - pagina sobre" alt="formulario imagem - sobre"
    >
        <v-card max-width="700" class="mx-auto">
                <v-card-item>
                    <FormularioForm />
                </v-card-item>
        </v-card>
    </v-img>
    </v-lazy>
    </div>
</template>