<template>
  <div>
    <form @submit.prevent="sendEmail" class="pa-2">
      <div>
        <div class="px-2  d-flex align-center">
          <NuxtImg src="/partelogo.webp"   format="webp" loading="lazy" alt="Parte da logo"  height="20" width="19" />
          <p class="text-h6 text-indigo-darken-4 ml-2">{{ $t('contact_us') }}</p>
        </div>
        <div
          style="width: 70%; height: 1px; background-image: linear-gradient(to left, transparent, #1A237E);"
          class="mb-4 mx-2"
        ></div>
      </div>
      <span class="text-caption text-black">{{ $t('name') }}</span>
      <v-text-field
        v-model="name"
        :error-messages="nameError"
        type="text"
        variant="outlined"
        density="compact"
      ></v-text-field>
      <span class="text-caption text-black">{{ $t('email') }}</span>
      <v-text-field
        v-model="email"
        :error-messages="emailError"
        type="email"
        required
        density="compact"
        variant="outlined"
        :hint="$t('email_hint')"
      ></v-text-field>
      <span class="text-caption text-black">{{ $t('phone') }}</span>
      <v-text-field
        v-model="phone"
        :error-messages="phoneError"
        variant="outlined"
        type="text"
        density="compact"
        :hint="$t('phone_hint')"
      ></v-text-field>
      <span class="text-caption text-black">{{ $t('whatsapp') }}</span>
      <v-text-field
        v-model="whatsapp"
        :error-messages="whatsappError"
        variant="outlined"
        type="text"
        density="compact"
      ></v-text-field>
      <p class="text-caption py-2">Conheça nossa
        <nuxt-link to="/privacidade" style="text-decoration: none;">Política de Privacidade</nuxt-link>
        - <a href="mailto:privacidade@pred.com.br" style="text-decoration: none;">privacidade@pred.com.br</a></p>
      <p class="text-center text-caption bg-light-green-darken-4 rounded mb-2" v-if="progress">E-mail encaminhado com sucesso!</p>
      <v-btn
        variant="flat"
        append-icon="mdi-arrow-top-right"
        color="indigo-darken-4"
        @click="sendEmail"
        width="100%"
        :disabled="!isFormValid"
        :loading="loading"
      >{{ $t('send') }}</v-btn>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const name = ref('');
const phone = ref('');
const email = ref('');
const whatsapp = ref('');
const nameError = ref('');
const phoneError = ref('');
const emailError = ref('');
const whatsappError = ref('');
const loading = ref(false)
const progress = ref (false)


const validateName = () => {
  if (name.value.length >= 3) {
    nameError.value = '';
    return true;
  } else {
    nameError.value = '';
    return false;
  }
};

const validatePhone = () => {
  if (/^[0-9]{7,}$/.test(phone.value)) {
    phoneError.value = '';
    return true;
  } else {
    phoneError.value = '';
    return false;
  }
};

const validateEmail = () => {
  if (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(email.value)) {
    emailError.value = '';
    return true;
  } else {
    emailError.value = 'Digite um email válido.';
    return false;
  }
};


const isFormValid = computed(() => {
  return validateName() && validatePhone() && validateEmail()
});

const sendEmail = async () => {
  if (!isFormValid.value) {
    validateName();
    validatePhone();
    validateEmail();
    return;
  }

  try {
    loading.value = true;
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        phone: phone.value,
        whatsapp: whatsapp.value
      })
    });
    if (!response.ok) throw new Error('Erro ao enviar email');
    loading.value = false;
    progress.value = true;
    name.value = '';
    phone.value = '';
    whatsapp.value = '';
    email.value = '';
  } catch (error) {
    alert('Erro ao enviar email: ' + error.message);
    loading.value = false
  }
};

watch(progress, (val) => {
  if (!val) return
  setTimeout(() => ( progress.value= false), 2000)
});

</script>
