<template>
  <v-app>
    <v-app-bar scroll-behavior="hide" scroll-threshold="300">
      <v-app-bar-title>
        <nuxt-link to="/" aria-label="Home">
          <NuxtImg src="/logo.webp" preload  format="webp"  alt="Logo Pred Engenharia" height="30" width="150"/>
        </nuxt-link>
      </v-app-bar-title>
      <template #append>
        <section class="d-flex align-center">
          <NavDrawermobile />
          <NavNavoptions />
          <NavNavusers />
          <NavLanguage />
        </section>
      </template>
    </v-app-bar>
    <main>
      <slot />
    </main>
    <FooterToolltip />
    <Footer />

    <div v-if="!politica" style="position: fixed; min-height: 100px; bottom: 0; left: 0; right: 0; z-index: 10000;" class="bg-grey-lighten-4 elevation-10">
      
      <v-row class="px-10 py-5" align="center">
        <v-col cols="12" md="8">
          <div class=" d-flex align-center ga-1 ga-md-4">
            <v-icon icon="mdi-information" class="text-h4 text-indigo-darken-4"></v-icon>
            <p class="text-disabled text-caption text-md-body-1"> Nosso site apenas utiliza os cookies estritamente necessários para garantir sua funcionalidade, para saber mais, acesse nossa política de privacidade.</p>
          </div>

          <div class="ml-6">
            <v-btn variant="text" class="text-caption" color="indigo-darken-4" to="/privacidade">Política de Privacidade</v-btn>
            <v-menu location="top" z-index="1000000000">
                <template v-slot:activator="{ props }">
                  <v-btn variant="text" class="text-caption" color="indigo-darken-4"  v-bind="props">Política de Cookies</v-btn>
                </template>
                <v-card max-height="500" max-width="500" class="pa-4">
                  <v-card-title>
                    <div class="d-flex justify-space-between align-center ga-2">
                      <p class="text-caption font-weight-bold"> <span><v-icon icon="mdi-cookie"></v-icon></span> Uso de Cookies no Site - <span class="text-indigo-darken-4">Pred Engenharia</span></p>
                      <v-btn icon="mdi-close"  class="text-caption" variant="tonal"></v-btn>
                    </div>
                    
                  </v-card-title>

                  <v-card-item>
                    <p class="text-caption">Este site utiliza <span class="font-weight-bold">Google Analytics 4 (GA4)</span> , um serviço de análise da Google, para coletar dados anônimos sobre sua navegação. Essas informações nos ajudam a entender como você interage com o conteúdo, identificar melhorias e otimizar a experiência.</p>
                    <p class="text-caption font-weight-bold mt-6"> Cookies do GA4 Ativados</p>
                    <p class="text-caption mt-4">Os cookies abaixo são configurados pelo GA4 para medição de audiência:</p>
                    <div class="mt-4">
             
                      <div class="d-flex text-caption font-weight-bold justify-center w-100 pa-2" style="border-bottom: .5px solid #000; border-top: .5px solid #000;">
                        <p class="w-25 ">Cookie</p>
                        <p class="w-50 ">Finalidade</p>
                        <p class="w-25 text-center">Validade</p>
                      </div>
  

                      <div>
                        <div class="pa-2 d-flex align-center" style="border-bottom: .5px solid #000;">
                          <p class="w-25 text-caption ml-2"><span class="bg-grey-lighten-1 pa-1 rounded">_ga</span></p>
                          <p class="w-50 text-caption">Identifica usuários únicos (client ID) para distinguir visitantes.</p>
                          <p class="w-25 text-caption text-center">2 anos</p>
                        </div>

                        <div class="pa-2 d-flex align-center" style="border-bottom: .5px solid #000;">
                          <p class="w-25 text-caption ml-2"><span class="bg-grey-lighten-1 pa-1 rounded">{{ '_ga_<ID>' }} </span></p>
                          <p class="w-50 text-caption">Armazena o estado da sessão atual (ex.: atividades durante a navegação).</p>
                          <p class="w-25 text-caption text-center">2 anos</p>
                        </div>

                        <div class="pa-2 d-flex align-center" style="border-bottom: .5px solid #000;">
                          <p class="w-25 text-caption ml-2"><span class="bg-grey-lighten-1 pa-1 rounded">_gid</span></p>
                          <p class="w-50 text-caption">Registra uma ID única para a sessão do dia.</p>
                          <p class="w-25 text-caption text-center">24 horas</p>
                        </div>
                      </div>


                      <div>
                        <p class="text-caption font-weight-bold mt-6"> Observações técnicas:</p>
                        <ul class="text-caption ml-6">
                          <li>Os cookies são first-party (domínio próprio) e não compartilham dados pessoais com terceiros</li>
                          <li>A Google pode reduzir automaticamente a validade em navegadores como Safari (7 dias) e Chrome (400 dias sem retorno)</li>
                        </ul>
                      </div>

                      <div class="text-caption">
                        <p class="text-caption font-weight-bold mt-6"><span><v-icon icon="mdi-lock" size="x-small"></v-icon></span> Política de Privacidade</p>
                        <p class="ml-4 mt-2">Para detalhes sobre:</p>
                        <ul class="text-caption ml-10">
                          <li>Como os dados são processados.</li>
                          <li>Direitos do usuário (acesso, retificação, exclusão).</li>
                          <li>Bases legais de tratamento.</li>
                        </ul>
                        <p class="text-caption mt-1" >Consulte nossa <v-btn color="indigo-darken-4" to="/privacidade" variant="text" class="text-caption">Política de Privacidade</v-btn> Completa.</p>
                      </div>


                      <div>
                        <p class="text-caption font-weight-bold mt-6">Por que isso importa?</p>
                        <p class="text-caption mt-1 ml-4">O GA4 nos permite:</p>

                        <ul class="text-caption ml-10">
                          <li>Identificar páginas mais acessadas.</li>
                          <li>Medir eficácia de campanhas (ex.: tráfego de redes sociais).</li>
                          <li>Melhorar performance técnica (ex.: tempo de carregamento).</li>
                        </ul>

                        <p class="text-caption font-weight-bold mt-4">Dados são agregados e anonimizados, sem identificação individual</p>
                      </div>
                    </div>
                  </v-card-item>

                </v-card>
            </v-menu>
          </div>

        </v-col>
        <v-spacer></v-spacer>
         <v-col cols="12" md="3">
            <div class="text-center">
              <v-btn variant="outlined" color="indigo-darken-4" @click="politica = true">Prosseguir</v-btn>
            </div>
        </v-col>
      </v-row>
      
      
      
      
      

    </div>
  </v-app>
</template>

<script setup>

const politica = useCookie('politica - privacidade/cookie', {
  maxAge: 60 * 60 * 24 * 30, // 30 dias
  path: '/',
  sameSite: 'lax',
  secure: true,
}) || false
</script>