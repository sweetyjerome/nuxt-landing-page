<template>
  <button
    :class="['claim-now-btn', variantClass]"
    @click="emit('click')"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(['click'])

// Props for the button
const { label, variant } = defineProps({
  label: {
    type: String,
    default: 'Claim Now', // Default 
  },
  variant: {
    type: String,
    default: 'primary', // Default 
    validator: (value: string) => ['primary', 'secondary'].includes(value), // Only allow 'primary' or 'secondary'
  },
})

// Compute the class based on the variant
const variantClass = computed(() => {
  return variant === 'secondary' ? 'btn-secondary' : 'btn-primary'
})
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
  border: none;
  border-radius: 0.25rem;
  overflow: hidden;
  cursor: pointer;
  z-index: 0;
  transition: background-color 0.3s ease;
}

.btn-primary {
  background-color: var(--primary-accent);
}

.btn-primary:hover {
  background-color: var(--secondary-accent);
  transform: scale(1.05);
}

.btn-secondary {
  background-color: var(--secondary-accent);
}

.btn-secondary:hover {
  background-color: var(--primary-accent);
  transform: scale(1.05);
}

@media screen and (max-width: 425px) {
  .claim-now-btn {
    margin-top: 0.5rem;
    width: 50%;
    padding: 0.75rem 0.75rem;
    font-size: 0.8rem;
  }
}
</style>
