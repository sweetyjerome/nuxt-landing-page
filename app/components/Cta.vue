<template>
  <div class="cta-container">
    <div class="cta-content">
      <h2 class="cta-heading">Ready to Win Big?</h2>
      <p class="cta-subtext">
        Sign up now and claim your 200 Free Spins on <strong>Atlantean Treasures: Mega Moolah</strong>.
      </p>
      <Button @click="" />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.cta-container {
  background: radial-gradient(circle,rgba(24, 64, 27, 1) 0%, rgba(66, 101, 153, 1) 100%);
  padding: 4rem 1.5rem;
  text-align: center;
  border-radius: 1.5rem;
  margin: 3rem auto;
  max-width: 800px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.cta-content {
  color: var(--primary-text);
}

.cta-heading {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.cta-subtext {
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
}



@media (max-width: 450px) {
  .cta-container {
    padding: 2rem 1rem; 
    max-width: 100%; 
    margin: 1.5rem 1rem; 

  .cta-heading {
    font-size: 1.5rem; 
  }

  .cta-subtext {
    font-size: 1rem; 
    margin-bottom: 1rem; 
  }
}
}
</style>
