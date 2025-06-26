<template>
  <section class="hero">
    <!-- Game logo -->
    <img src="/img/atlantean_treasures_logo.png" alt="Game Logo" class="game-logo" />

    <div class="hero-content">
      <!-- Left Section: Heading, Subheading -->
      <div class="hero-left">
        <div class="info-box">
          <h5 class="info">Exclusive offer</h5>
        </div>
        <p class="hero-heading"> Grab 200 Free Spins</p>
        <p class="hero-subheading">Now is the time to grab your riches</p>
      <!--   
        <video autoplay muted loop playsinline class="hero-video">
          <source src="https://cdn.desdev.co/atlanteantreasures.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video> -->
        <p></p>
        <button class="claim-now-btn">Claim Now</button>
      </div>

      <!-- Right Section: Images and video -->
      <div class="hero-right">
         <!-- <img src="/img/bubble_1.png" alt="Bubble-1" class="bubble" /> -->
        <video autoplay muted loop playsinline class="hero-video"> 
          <source src="https://cdn.desdev.co/atlanteantreasures.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { jackpot, pending, error } = await useCasinoJackpotApi()

const formattedJackpot = computed(() =>
  jackpot.value
    ? new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(jackpot.value)
    : ''
)
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  width: 100vw;
  height: 80vh;
  padding: 0 6rem;
  background: url('/img/hero.jpg') no-repeat center center / cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-sizing: border-box;

  .game-logo {
    align-self: flex-start;
    margin-top: 9rem;
    width: 230px;
    transform: scale(0.5);
    opacity: 0;
    animation: popScale 0.8s ease-out 1.2s forwards;
  }

  .hero-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    padding: 2rem;

    @media (max-width: 1024px) {
      flex-direction: column;
      gap: 2rem;
    }
  }

  .hero-left {
    flex: 0 0 70%; // Take 60% of the width
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 60vh;
    padding-top: 2rem;

    .info-box {
      margin-bottom:1rem;
      background-color: #28a745;
      color: #fff;
      padding: 2px 8px;
      border-radius: 20px;
      text-align: center;
      display: inline-block;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

    .info {
      font-size: small;
      font-weight: normal;
    }

    .hero-heading {
      font-size: 4rem;
      font-weight: bold;
      color: #fff;
      text-shadow: 1px 1px 8px #fff;
      line-height: 1;
    }

    .hero-subheading {
      font-size: 1.4rem;
      margin-bottom: 2rem;
      text-shadow: 1px 1px 5px #fff;
      color: #fff;

      font-weight: bold;
    }

    .claim-now-btn {
      margin-top: 1.5rem;
      align-self: center;
      position: relative;
      padding: 0.75rem 2.5rem;
      font-size: 1.2rem;
      font-weight: normal;
      color: var(--tertiary-accent);
      background-color: var(--primary-accent); // or transparent if needed
      border: none;
      border-radius: 0.75rem;
      overflow: hidden;
      cursor: pointer;
      z-index: 0;
      transition: background-color 0.3s ease;


      &:hover {
        color: var(--tertiary-accent);
        background-color: var(--secondary-accent);
      }
    }

    @keyframes animate-border {
      0% {
        background-position: 0% 50%;
      }

      100% {
        background-position: 400% 50%;
      }
    }

  }

  .hero-right {
    padding-right: 3rem;
    flex: 0 0 30%; // Take 40% of the width
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    img {
      width: 120px;
      opacity: 0;
      transform: translateY(20px);
    }

    .bubble {
      animation: popScale 1s 0.3s ease-out forwards;
    }

    .number {
      animation: popScale 1s 0.6s ease-out forwards;
    }
    .hero-video {
      width: 120%;
      border-radius: 12px; // Add a 12px border radius
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.5); // Optional: Add a shadow for better appearance
    }
  }
  @media (max-width: 1024px) {
      flex-direction: column; // Stack sections vertically on smaller screens
      gap: 2rem;

      .hero-left,
      .hero-right {
        flex: 1; // Both sections take equal width when stacked
      }
    }
}

@keyframes popScale {
  0% {
    transform: scale(0.5);
    opacity: 0.5;
  }

  60% {
    transform: scale(1.1);
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>