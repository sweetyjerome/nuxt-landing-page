<template>
   <Steps />
  <section class="offer-details-wrapper">
    <div class="left-section">
      <h2>Get.<br />Set.<br />Play.</h2>
    </div>

    <div class="right-section">
      <ul class="bullet-points">

        <li>Register your account</li>
        <li>Deposit $10 to activate the free spins</li>
        <li>Offer expires within 7 days from signing up</li>
        <li>Medium game volatility</li>
        <li>Spin value is £0.10 per spin with a 35x wagering requirement.</li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.offer-details-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background-color: #1a1a1a; 
  color: #fff;
  min-height: 400px;
  overflow: hidden;
}

.left-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary-accent); 
  padding: 2rem;
}

.left-section h2 {
  font-size: 5vw;
  font-weight: 900;
  line-height: 1.2;
  text-align: center;
  color: #000;
  text-transform: uppercase;
}

.right-section {
  flex: 1;
  padding: 2rem;
  display: flex;
  align-items: center;
}

.bullet-points {
  padding: 1.5rem;
  border-radius: 12px;
  list-style-type: disc;
  color: #fff;
  font-size: 1rem;
}

.bullet-points li {
  margin-bottom: 1rem;
}


@media (max-width: 425px) {
  .offer-details-wrapper {
    flex-direction: column;
  }

  .left-section,
  .right-section {
    flex: none;
    width: 100%;
    padding: 1.5rem;
    min-height: 300px;
  }

  .left-section h2 {
    font-size: 12vw;
  }

  .bullet-points {
    font-size: .75rem;
    padding: 2rem;
  }
}
</style>
