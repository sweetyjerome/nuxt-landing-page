<template>
  <button :class="['base-button', variant]" @click="onClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary'
  onClick?: () => void
}>()
</script>

<style scoped lang="scss">
.base-button {
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 0.5rem;
  cursor: pointer;
  border: none;
  transition: background 0.3s ease;
  background-color: var(--primary-accent);
}
.claim-btn {
      padding: 0.75rem 2rem;
      font-size: 1.1rem;
      font-weight: bold;
      background-color: var(--primary-accent);
      border: none;
      border-radius: 0.5rem;
      color: #fff;
      cursor: pointer;
      transition: background 0.3s ease;

      &:hover {
        background-color: var(---accent);
      }
    }
.primary {
  background-color: var(--primary-accent);
  color: #fff;

  &:hover {
    background-color: darken(var(--primary-accent), 10%);
  }
}

.secondary {
  background-color: var(--secondary-accent);
  color: #fff;

  &:hover {
    background-color: darken(var(--secondary-accent), 10%);
  }
}
</style>
