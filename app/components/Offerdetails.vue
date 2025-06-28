<template>
  <section class="offer-details">
    <div class="details-wrapper">
      <h2 class="title">Offer Details</h2>

      <div class="offer-item">
        <h4>Who’s it for?</h4>
        <p>New players only, aged 18 or over.</p>
      </div>
      <div class="offer-item">
        <h4>How do I get involved?</h4>
        <ul>
          <li>Register an account with a valid email and ID.</li>
          <li>Make a <strong>minimum deposit of $10</strong>.</li>
          <li>Free Spins are activated automatically after deposit.</li>
          <li>Offer must be claimed within <strong>7 days of registration</strong>.</li>
        </ul>
      </div>
      <div class="offer-item">
        <h4>What are the Eligible Games?</h4>
        <ul>
          <li><strong>Atlantean Treasures: Mega Moolah</strong></li>
          <li><em>Other eligible games: [placeholder – please update if applicable]</em></li>
        </ul>
      </div>
      <div class="offer-item">
        <h4>What’s in it for me?</h4>
        <ul>
          <li><strong>200 Free Spins</strong> on Atlantean Treasures: Mega Moolah</li>
          <li>Each spin is valued at <strong>$0.10</strong></li>
          <li>Winnings are subject to a <strong>35x wagering requirement</strong></li>
        </ul>
      </div>
      <div class="offer-item">
        <h4>When do I get my reward?</h4>
        <ul>
          <li>Free Spins are credited <strong>immediately after deposit</strong></li>
          <li>You must launch the game to activate your spins</li>
          <li>Spins expire <strong>7 days</strong> after registration</li>
        </ul>
      </div>

      <div class="offer-item">
        <h4>Any other key details?</h4>
        <ul>
          <li>Game volatility: <strong>Medium*</strong></li>
          <li>Free Spins are <strong>non-withdrawable</strong></li>
          <li>Standard promotional terms apply</li>
          <li><em>*Volatility rating is based on internal metrics and may vary by region.</em></li>
        </ul>
      </div>
      

      <p class="disclaimer">*Terms and conditions apply. Please play responsibly.</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.offer-details {
  background: #000;
  color: #fff;

  .details-wrapper {
    padding: 3rem 9rem 3rem 9rem;
    max-width: 100%;
    text-align: left;

    .offer-item {
      margin-bottom: 1.5rem;
      padding: 1rem;
      border-left: 2px solid #a1a1a1;
      background-color: #242323;
      border-radius: 6px;
    }

    .offer-item h4 {
      margin-top: 0;
      margin-bottom: 0.5rem;
      //font-size: 1.125rem; 
      font-weight: 600;
      color: var(--primary-text);
    }

    .offer-item p,
    .offer-item ul {
      margin: 0;
      font-size: 1rem;
      color: var(--primary-text);
    }

    .offer-item ul {
      padding-left: 1.2rem;
      list-style-type: disc;
    }

    .offer-item li {
      margin-bottom: 0.5rem;
    }
  }

  .title {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-weight: bold;
    color: var(--primary-text);
    text-align: left; 
  }

  p {
    font-size: small;
  }

  .disclaimer {
    font-size: small;
    opacity: 0.7;
    text-align: left;
  }

  @media (max-width: 425px) {
    .details-wrapper {
      padding: 0 1rem; 
    }

    .offer-item {
      padding: 0.75rem; 
    }

    .offer-item h3 {
      font-size: 1rem; 
    }

    .offer-item p,
    .offer-item ul {
      font-size: 0.7rem;
    }

    .title {
      font-size: 1.25rem; 
      text-align: center;
    }

    .disclaimer {
      font-size: 0.8rem; 
      text-align: center;
    }
  }
}
</style>
