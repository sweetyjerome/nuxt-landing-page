<template>
  <section class="cta">
    <div class="cta-container">
      <!-- Left: Image -->
      <div class="cta-left">
        <img src="/img/bubble_2.png" alt="Bubble" class="cta-image" />
      </div>

      <!-- Right: Text Content -->
      <div class="cta-right">
        <h2 class="cta-heading">Ready to Win Big?</h2>
        <p class="cta-subtext">
          Sign up now and claim your 200 Free Spins on
          <strong>Atlantean Treasures: Mega Moolah</strong>.
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background: var(--primary-background);
  padding: 4rem 2rem;
  color: var(--primary-text);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

/* Left Image Section */
.cta-left {
  flex: 1;
  display: flex;
  justify-content: center;
}

.cta-image {
  max-width: 250px;
  height: auto;
}

/* Right Text Section */
.cta-right {
  flex: 1;
  text-align: left;
}

.cta-heading {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.cta-subtext {
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

/* Responsive: Stack vertically, hide image */
@media (max-width: 425px) {
  .cta-container {
    flex-direction: column;
    padding: 2rem 1rem;
    text-align: center;
  }
.cta-right {
  text-align: center;
  }
  .cta-left {
    display: none;
  }

  .cta-heading {
    font-size: 1.5rem;
  }

  .cta-subtext {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
}
</style>
