<script setup lang="ts">
interface PropType {
  type: 'button' | 'submit' | 'reset'
}
withDefaults(defineProps<PropType>(), {
  type: 'button',
})
</script>

<template>
  <button :type="type"><slot>Button</slot></button>
</template>

<style scoped>
button {
  font-size: 24pt;
}
</style>
