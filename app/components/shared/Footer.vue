
<script lang="ts" setup>
const currentYear: Ref<Number> = ref(new Date().getFullYear())
</script>

<template>
  <footer class="footer">
      <div class="container">
        <p>&copy; {{ currentYear }} King Neptune Casino. All rights reserved.</p>
      </div>
  </footer>
</template>


<style lang="scss" scoped>
footer {
 background-color: #1a1a1a;
  color: var(--primary-text);
  padding: 1rem 0;
  position:sticky;
  inset:0;
  p {
    font-size:.75rem;
     margin: 0 auto;
  }
}
</style>
