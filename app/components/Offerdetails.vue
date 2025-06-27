<template>
  <section class="offer-details">
    <div class="details-wrapper">
      <h2 class="title">Offer Details</h2>
      <p>Available to new players only. Minimum deposit of $10 required to activate 200 Free Spins on Atlantean
        Treasures: Mega Moolah. <br>
        Each spin is valued at $0.10. Winnings from spins carry a 35x wagering requirement. 
        <br> Free Spins must be used
        within 7 days of registration.
        Game volatility: Medium*.</p>
      <div class="offer-grid">
        <!-- <div class="offer-item">
          <strong>Game Name:</strong> Atlantean Treasures: Mega Moolah
        </div>
        <div class="offer-item">
          <strong>Free Spins:</strong> 200
        </div>
        <div class="offer-item">
          <strong>Minimum Deposit:</strong> $10
        </div>
        <div class="offer-item">
          <strong>Spin Value:</strong> $0.10
        </div>
        <div class="offer-item">
          <strong>Wagering Requirement:</strong> 35x
        </div>
        <div class="offer-item">
          <strong>Offer Expiry:</strong> 7 days from signing up
        </div>
        <div class="offer-item">
          <strong>Game Volatility:</strong> Medium
        </div> -->
      </div>

      <p class="disclaimer">*Terms and conditions apply. Please play responsibly.</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.offer-details {
  //background: linear-gradient(to right, #00293c, #014152);
  background: rgba(15, 15, 15, 0.5);
  color: #fff;
  padding: 2rem 1rem;

  .details-wrapper {
    max-width: 1000px;
    margin: 0 auto;
    text-align: left;
  }

  .title {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-weight: bold;
    color: var(--primary-text);
  }
p{
  font-size: small;
}
  .offer-grid {
    margin-bottom: 2rem;

    .offer-item {
      background: rgba(255, 255, 255, 0.05);
      padding: 1rem;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
      font-size: 1rem;
      line-height: 1.5;

      strong {
        color: #00ffd0;
      }
    }
  }

  .disclaimer {
    font-size: small;
    opacity: 0.7;
  }
}
</style>
