<template>
  <div class="offer-steps">
    <div class="steps">
      <div class="step">
        <div class="bubble">1</div>
        <h3>Sign Up</h3>
        <p>Download the app or create an account online</p>
      </div>
      <div class="step">
        <div class="bubble">2</div>
        <h3>Deposit</h3>
        <p>Deposit a minimum of $10 within 7 days</p>
      </div>
      <div class="step">
        <div class="bubble">3</div>
        <h3>Play</h3>
        <p>Get 200 free spins on Atlantean Treasures: Mega Moolah!</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.offer-steps {
  text-align: center;
  padding: 4rem 1rem;
  background-color: var(--primary-background);
  color: #fff;

  .step-title {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 2rem;
  }

  .steps {
    display: flex;
    justify-content: center;
    gap: 2rem;

    .step {
      max-width: 250px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .bubble {
        background: var(--tertiary-background);
        color: var(--primary-background);
        width: 65px;
        height: 65px;
        font-size: 1.8rem;
        font-weight: 700;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 15px rgba(94, 255, 126, 0.3);
        margin-bottom: 1rem;
      }

      h3 {
        
        margin-bottom: 0.5rem;
        color: var(--primary-text);
        text-transform: uppercase;
      }

      p {
        font-size: 0.95rem;
        color: #ccc;
      }
    }
  }

  @media (max-width: 425px) {
    .steps {
      flex-direction: column;
      align-items: center;
    }

    .step {
      margin-bottom: 2rem;
    }
  }
}
</style>
