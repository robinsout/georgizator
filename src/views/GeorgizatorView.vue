<template>
  <main>
    <h1>Грузификатор</h1>
    <Georgizator />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Georgizator from '@/components/georgizator/georgizator.vue';

export default defineComponent({
  name: 'GeorgizatorView',
  components: {
    Georgizator,
  },
});
</script>
