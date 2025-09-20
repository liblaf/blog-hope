<script setup lang="ts">
import { Blog } from "vuepress-theme-hope/blog";
import BingHeroBackground from "vuepress-theme-hope/presets/BingHeroBackground.js";
import HitokotoBlogHero from "vuepress-theme-hope/presets/HitokotoBlogHero.js";
</script>

<template>
  <Blog>
    <template #heroInfo="data">
      <BingHeroBackground />
      <HitokotoBlogHero v-bind="data" />
    </template>
  </Blog>
</template>
