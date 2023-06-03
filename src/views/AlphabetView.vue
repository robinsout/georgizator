<template>
  <main class="alphabet-view__container">
    <Alphabet />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Alphabet from '@/components/alphabet/alphabet.vue';

export default defineComponent({
  name: 'AlphabetView',
  components: {
    Alphabet,
  },
});
</script>

<style lang="scss" scoped>
.alphabet-view__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-bottom: 12px;
}
</style>
