<template>
  <div class="alphabet__wrapper">
    <p
      v-for="letterMapping in alphabetMap"
      :key="letterMapping.latin.letter"
      class="alphabet__letter"
      :class="{ 'alphabet__letter_selected': symbolsToTransform.includes(letterMapping.cyrillic.letter) }"
      @click="updateSelectedSymbols(letterMapping.cyrillic.letter)"
    >
      {{ letterMapping.georgian.letter }} - {{ letterMapping.cyrillic.letter }}
    </p>
  </div>
</template>

<script lang="ts" src="./alphabet.ts" />
<style lang="scss" src="./alphabet.scss" />
