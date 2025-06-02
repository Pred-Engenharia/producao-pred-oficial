<template>
    <v-dialog max-width="500px">
        <template v-slot:activator="{ props }">
            <v-btn 
                variant="flat"
                width="100%" 
                prepend-icon="mdi-card-account-mail"
                v-bind="props"
                color="#1A237E"
                class="text-caption"
                aria-label="Contatos"
            >
                {{ $t('Contact') }}
            </v-btn>
        </template>
        <template v-slot:default="{ isActive }">
            <v-card class="pb-6" aria-labelledby="dialog-title" aria-describedby="dialog-content">
                <div class="text-end pa-2">
                     <v-btn
                        icon="mdi-close-box-multiple-outline" 
                        @click="isActive.value = false"
                        aria-label="Fechar"
                        variant="text"
                        size="small"
                    ></v-btn>

                </div>
                   
                <v-card-item>
                    <FormularioForm />
                </v-card-item>
            </v-card>
        </template>
    </v-dialog>
</template>
