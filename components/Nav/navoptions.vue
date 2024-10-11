<template>
    <div class="d-none d-md-flex">
      <v-list class="d-flex" role="list">
        <v-list-item role="listitem">
          <v-btn
            variant="plain"
            width="100%"
            to="/sobre"
            class="text-caption"
            aria-label="Sobre nós"
            role="button"
          >
            {{ $t('about_us') || 'Sobre nós'}}
          </v-btn>
        </v-list-item>
        <v-menu>
          <template #activator="{ props: menu }">
            <v-list-item role="listitem">
              <v-btn
                variant="plain"
                width="100%"
                v-bind="menu"
                append-icon="mdi-chevron-down"
                class="text-caption"
                aria-label="Nossos serviços"
                aria-expanded="false"
                role="button"
              >
                {{ $t('our_services') || 'Nossos serviços'}}
              </v-btn>
            </v-list-item>
          </template>
          <v-list density="compact" role="list">
            <v-list-item role="listitem">
              <v-btn
                to="/servicos/engenharia-manutencao-e-confiabilidade"
                class="w-100 text-caption"
                variant="plain"
                size="small"
                aria-label="Serviços de Engenharia, Manutenção e Confiabilidade"
                role="button"
              >
                {{ $t('engineering_maintenance_reliability_services') || 'Serviços de Engenharia, Manutenção e Confiabilidade'}}
              </v-btn>
            </v-list-item>
            <v-list-item role="listitem">
              <v-btn
                to="/servicos/inspecoes"
                class="w-100 text-caption"
                variant="plain"
                size="small"
                aria-label="Serviços de Inspeções Técnicas"
                role="button"
              >
                {{ $t('technical_inspection_services') || 'Serviços de Inspeções Técnicas'}}
              </v-btn>
            </v-list-item>
            <v-list-item role="listitem">
              <v-btn
                to="/servicos/s3i"
                class="w-100 text-caption"
                variant="plain"
                size="small"
                aria-label="Sistema S3i"
                role="button"
              >
                {{ $t('s3i_system') || 'Sistema S3i'}}
              </v-btn>
            </v-list-item>
            <v-list-item role="listitem">
              <v-btn
                to="/servicos/sft"
                class="w-100 text-caption"
                variant="plain"
                size="small"
                aria-label="Sistema SFT"
                role="button"
              >
                {{ $t('sft_system') || 'Sistema SFT'}}
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-list-item role="listitem">
          <v-btn
            variant="plain"
            width="100%"
            href="https://suporte.s3i.com.br/blog/"
            class="text-caption"
            aria-label="Blog"
            role="button"
          >
            {{ $t('blog') || 'Blog'}}
          </v-btn>
        </v-list-item>
        <v-list-item role="listitem">
          <NavContato />
        </v-list-item>
      </v-list>
    </div>
  </template>
  