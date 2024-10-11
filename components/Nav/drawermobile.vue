<template>
  <div class="d-md-none">
    <v-list class="bg-transparent" role="list">
      <v-list-item class="w-100" role="listitem">
        <v-menu :close-on-content-click="false" aria-haspopup="true" class="w-100">
          <template #activator="{ props }">
            <v-icon
              icon="mdi-menu"
              size="large"
              v-bind="props"
              aria-label="Conta do Usuário"
              role="button"
            ></v-icon>
          </template>
          <v-card width="95vw">
            <v-list nav block class="w-100" width="100%" role="menu">
              <v-list-item
                variant="tonal"
                density="compact"
                href="http://www.pred.com.br/sgv/login/index.asp"
                class="text-caption w-100"
                aria-label="Acessar Intranet"
                block
                role="menuitem"
              >
                <v-btn
                  prepend-icon="mdi-account-hard-hat-outline"
                  block
                  width="100%"
                  variant="text"
                  class="text-caption"
                  aria-label="Acessar Intranet"
                  role="button"
                >
                  {{ $t('intranet') }}
                </v-btn>
              </v-list-item>
              <v-list-item
                href="http://www.pred.com.br/salavip/manutencao/default.asp"
                variant="tonal"
                density="compact"
                class="text-caption"
                size="small"
                aria-label="Acessar Sala Vip"
                role="menuitem"
              >
                <v-btn
                  prepend-icon="mdi-account-cog-outline"
                  block
                  width="100%"
                  variant="text"
                  class="text-caption"
                  aria-label="Acessar Sala Vip"
                  role="button"
                >
                  {{ $t('vip') }}
                </v-btn>
              </v-list-item>
              <v-list-item
                href="https://suporte.s3i.com.br/blog/"
                density="compact"
                class="text-caption"
                size="small"
                aria-label="Acessar blog"
                color="#1A237E"
                variant="flat"
                role="menuitem"
              >
                <v-btn
                  prepend-icon="mdi-post"
                  block
                  width="100%"
                  class="text-caption"
                  color="#1A237E"
                  variant="flat"
                  aria-label="Acessar blog"
                  role="button"
                >
                  {{ $t('blog') }}
                </v-btn>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </v-list-item>
    </v-list>
  </div>
</template>
