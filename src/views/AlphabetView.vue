<template>
  <main>
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
