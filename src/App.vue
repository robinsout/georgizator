<template>
  <div class="flag__container">
    <img
      alt="Georgian flag"
      class="flag__image"
      src="@/assets/flag-of-georgia.svg"
      width="125"
      height="125"
    >
  </div>
  <AlphabetView />
  <GeorgizatorView />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { RouterLink, RouterView } from 'vue-router';
import { useGeorgizator } from '@/stores/georgizator.store';
import AlphabetView from '@/views/AlphabetView.vue';
import GeorgizatorView from '@/views/GeorgizatorView.vue';

export default defineComponent({
  name: 'GeorgizatorApp',
  components: {
    // RouterLink,
    // RouterView,
    AlphabetView,
    GeorgizatorView,
  },
  setup() {
    useGeorgizator().initMapping();
    useGeorgizator().processText();
  },
});
</script>

<style lang="scss">
header {
  line-height: 1.5;
  max-height: 100vh;
}

.flag {
  &__container {
    display: flex;
    justify-content: center;
  }

  &__image {
    margin: 16px;
    top: 0;
    left: 0;
    width: 64px;
    height: 100%;
    border: 1px solid var(--color-border);
  }
}

nav {
  width: 60%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

hr {
  border: 0;
  border-top: 1px solid var(--color-border);
  margin: 1rem 0;
}
</style>
