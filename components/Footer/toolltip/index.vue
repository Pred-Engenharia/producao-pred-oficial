<template>
    <section class="whatsapp-section">
      <v-tooltip :text="$t('contact_us') || 'Fale conosco'" aria-label="Fale conosco" role="tooltip" aria-labelledby="Fale conosco">
        <template v-slot:activator="{ props }">
          <v-icon
            v-bind="props"
            icon="mdi-whatsapp"
            color="green-darken-4"
            size="50"
            aria-label="Contate-nos no WhatsApp"
            @click="sendWhatsAppMessage"
          >
          </v-icon>
        </template>
      </v-tooltip>
    </section>
</template>
  
  <script setup>
  const sendWhatsAppMessage = () => {
    const isMobile = window.innerWidth < 576;

    const phoneNumber = '+552733375977';
    const message = 'Olá, gostaria de mais informações.';
    const url = isMobile
      ? `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  </script>
  
  <style scoped>
  .whatsapp-section {
    position: fixed;
    width: 50px;
    height: 50px;
    right: 30px;
    bottom: 10%;
    z-index: 100000;
  }
  </style>
  