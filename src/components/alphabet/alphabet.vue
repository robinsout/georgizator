<template>
  <div>
    <p v-for="letterMapping in alphabetMap" :key="letterMapping.latin">
      {{ letterMapping.georgian.letter }} - {{ letterMapping.cyrillic.letter }}
    </p>
  </div>
</template>

<script lang="ts" src="./alphabet.ts" />
<style lang="scss" src="./alphabet.scss" />
