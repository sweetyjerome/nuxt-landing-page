<template>
  <section class="hero">
    <!-- Game logo -->
    <img src="/img/atlantean_treasures_logo.png" alt="Game Logo" class="game-logo" />

    <div class="hero-content">
      <!-- Gameplay video -->
      <div class="video">
        <h1>200 Free Spins!</h1>
        <p class="offer-sub">Exclusive offer just for you</p>
        <video autoplay muted loop playsinline>
          <source src="https://cdn.desdev.co/atlanteantreasures.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      <!-- Main Content
      <div class="content">
        <div class="content-box">
          <h1>200 Free Spins!</h1>
          <p class="offer-sub">Exclusive offer just for you</p>

          <div class="jackpot">
            <p v-if="pending">Fetching Jackpot...</p>
            <p v-else-if="error">Jackpot unavailable</p>
            <p v-else>
              Current Jackpot: <span class="amount">{{ formattedJackpot }}</span>
            </p>
          </div>

          <button class="glow-button">Claim Now</button>
          <p class="terms">Deposit just $10 and grab your riches</p>
        </div>
      </div>  -->


      <!-- Right Graphics -->
      <div class="decorations">
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
  height: 100dvh;
  background: url('/img/hero.jpg') no-repeat center center / cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  overflow: hidden;
  padding-top: 2rem;

  .game-logo {
    width: 200px;
    transform: scale(0.5);
    opacity: 0;
    animation: popScale 0.8s ease-out 1.2s forwards;
  }

  .hero-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 100dvw;
    padding: 1rem;
    flex: 1;

    @media (max-width: 1024px) {
      flex-direction: column;
      gap: 2rem;
    }
  }

  .video {
    flex: 1;
    width: 350px;
    padding-left: 5rem;

    video {
      width: 90%;
      border-radius: 12px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    }
  }

  .content {
    flex: 2;
    max-width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    .content-box {
      background-color: rgba(0, 0, 0, 0.5);
      padding: 2rem;
      border-radius: 1rem;
      text-align: center;
      width: 100%;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);

      h1 {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
        color: #fff;
        font-family: 'Bubblegum Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 400;
        animation: popUp 0.8s ease-out forwards;
        text-shadow: 2px 2px 15px #000000;
      }

      .offer-sub {
        font-size: 1rem;
        color: var(--tertiary-accent);
        margin-bottom: 1.5rem;
      }

      .jackpot {
        font-size: 1.2rem;
        margin-bottom: 2rem;

        .amount {
          font-size: 1.4rem;
          font-weight: bold;
          color: var(--primary-text);
        }
      }

      .glow-button {
        position: relative;
        padding: 0.75rem 2rem;
        font-size: 1.1rem;
        font-weight: bold;
        color: #fff;
        background: transparent;
        border: 2px solid var(--primary-accent);
        border-radius: 0.5rem;
        cursor: pointer;
        overflow: hidden;
        z-index: 1;

        &:before {
          content: "";
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(90deg,
              transparent,
              var(--primary-accent),
              transparent);
          animation: borderRun 2s linear infinite;
          z-index: -1;
        }

        &:hover::before {
          filter: brightness(1.3);
        }
      }

      .terms {
        font-size: 0.8rem;
        margin-top: 0.8rem;
        color: #ccc;
      }
    }
  }

  .decorations {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
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

@keyframes borderRun {
  0% {
    background-position: 200% 0;
  }

  100% {
    background-position: -200% 0;
  }
}

@keyframes popUp {
  to {
    transform: translateY(15px);
    opacity: 1;
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
