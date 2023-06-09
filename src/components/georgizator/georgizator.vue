<template>
  <div class="georgizator">
    <div class="georgizator__transformation-percent">
      <span class="georgizator__label">Режим:</span>
      <span class="georgizator__value">{{ currentGeorgizationModeTitle }}</span>
    </div>
    <div class="georgizator__transformation-percent">
      <span class="georgizator__label">Грузификации алфавита: </span>
      <select
        v-model="transliterationPercent"
        class="georgizator__value georgizator__transformation-percent__select"
        :class="{ 'georgizator__transformation-percent__select_inactive': isCustomMode }"
      >
        <option
          v-for="percent in transformPercents"
          :key="percent"
          :value="percent"
        >
          <span>{{ percent }}%</span>
        </option>
      </select>
    </div>
    <hr>
    <div class="georgizator__content-wrapper">
      <span class="georgizator__label">Исходный текст</span>
      <div
        class="georgizator__input-text"
        contenteditable
        autofocus
        :innerText="inputContent"
        onclick="document.execCommand('selectAll', false, null)"
        @input="updateInputText"
      />
      <span class="georgizator__label">Грузифицированный текст</span>
      <div class="georgizator__output-text">
        {{ transformedText }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./georgizator.ts" />
<style lang="scss" src="./georgizator.scss" />
