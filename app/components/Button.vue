<template>
  <button class="claim-now-btn" @click="emit('click')">
    <slot>Claim Now</slot>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(['click'])
</script>

<style scoped>
.claim-now-btn {
  margin-top: 1.5rem;
  align-self: center;
  position: relative;
  padding: 0.75rem 2.5rem;
  font-size: 1.2rem;
  font-weight: normal;
  color: var(--primary-text);
  background-color: var(--primary-accent);
  border: none;
  border-radius: 0.25rem;
  overflow: hidden;
  cursor: pointer;
  z-index: 0;
  transition: background-color 0.3s ease;
}

.claim-now-btn:hover {
  color: var(--primary-text);
  background-color: var(--secondary-accent);
  transform: scale(1.05);
}
</style>
