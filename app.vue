<template class="testeover">
  <NuxtLoadingIndicator />
  <NuxtLayout class="page-transition">
    <NuxtPage />
  </NuxtLayout>
</template>


<style>

.testeover{
  overflow-x: hidden;
}

.page-transition-enter-active, .page-transition-leave-active {
  transition: opacity 20s;
}

.page-transition-enter, .page-transition-leave-to {
  opacity: 0;
}

</style>
