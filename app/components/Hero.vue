<template>
  <section class="hero">
    <!-- Game logo -->
    <img src="/img/atlantean_treasures_logo.png" alt="Game Logo" class="game-logo" />

    <div class="hero-content">
      <!-- Left Section: Heading, Subheading, and Video -->
      <div class="hero-left">
        <div class="info-box">
          <h5 class="info">Exclusive offer</h5>
        </div>
        <p class="hero-heading"> Grab 200 Free Spins</p>
        <p class="hero-subheading">For just 10$ deposit</p>
        <video autoplay muted loop playsinline class="hero-video">
          <source src="https://cdn.desdev.co/atlanteantreasures.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <button class="claim-now-btn">Claim Now</button>
      </div>

      <!-- Right Section: Images -->
      <div class="hero-right">
        <img src="/img/bubble_1.png" alt="Bubble-1" class="bubble" />
        <img src="/img/bubble_2.png" alt="Bubble-2" class="number" />
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
  padding: 2rem 6rem;
  background: url('/img/hero.jpg') no-repeat center center / cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-sizing: border-box;

  .game-logo {
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
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-right: 2rem;

    .info-box {
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
      font-size: 2rem;
      margin-bottom: 4rem;
      text-shadow: 1px 1px 8px #fff;
      color: #fff;
      line-height: 1;
    }

    .claim-now-btn {
      position: relative;
      padding: 0.75rem 2.5rem;
      font-size: 1.2rem;
      font-weight: normal;
      color: #fff;
      background-color: var(--primary-accent); // or transparent if needed
      border: none;
      border-radius: 0.75rem;
      overflow: hidden;
      cursor: pointer;
      z-index: 0;
      transition: background-color 0.3s ease;

      // Inner glow effect on hover
      &:hover {
        color: var(--primary-accent);
        background-color: var(--tertiary-accent);
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


    .hero-video {
      width: 100%;
      max-width: 400px;
      border-radius: 12px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    }
  }

  .hero-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

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