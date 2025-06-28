<template>
  <section class='cta'>
  <div class="cta-container">
    <div class="cta-content">
      <h2 class="cta-heading">Ready to Win Big?</h2>
      <p class="cta-subtext">
        Sign up now and claim your 200 Free Spins on <strong>Atlantean Treasures: Mega Moolah</strong>.
      </p>
      <Button label="Claim Now" variant="primary" @click="" />
    </div>
  </div>
</section>
<CtaFooter />
</template>

<script setup lang="ts">
</script>

<style scoped>
.cta-container {
  background: linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 56%, rgba(0, 212, 255, 1) 100%);
  padding: 4rem 1.5rem;
  text-align: center;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.cta-content {
  color: var(--primary-text);
}

.cta-heading {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
}

.cta-subtext {
  font-size: 1rem;
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
