<template>
  <div class="georgizator">
    <div class="georgizator__transformation-percent">
      <span class="georgizator__label">Процент грузификации: </span>
      <select v-model="transliterationPercent" class="georgizator__transformation-percent__select">
        <option v-for="percent in transformPercents" :key="percent" :value="percent">
          {{ percent }}
        </option>
      </select>
    </div>
  </div>
  <div class="georgizator__content-wrapper">
    <span class="georgizator__label">Исходный текст</span>
    <div
      class="georgizator__input-text"
      contenteditable
      autofocus
      @input="updateInputText"
    >
      {{ inputContent }}
    </div>
    <span class="georgizator__label">Грузифицированный текст</span>
    <div class="georgizator__output-text">
      {{ transformedText }}
    </div>
  </div>
</template>

<script lang="ts" src="./georgizator.ts" />
<style lang="scss" src="./georgizator.scss" />
