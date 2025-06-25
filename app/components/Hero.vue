<template>
  <section class="hero">
    <!-- Game Logo -->
    <img src="/img/atlantean_treasures_logo.png" alt="Game Logo" class="game-logo" />

    <div class="hero-content">
      <!-- Gameplay Video -->
      <div class="video">
        <video autoplay muted loop playsinline>
          <source src="https://cdn.desdev.co/atlanteantreasures.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      <!-- Main Content -->
      <div class="content">
        <h1>Grab 200 Free Spins on<br />Atlantean Treasures: Mega Moolah!</h1>
        <p class="subheadline">
          Spin your way to riches – just deposit $10 and claim your free spins!
        </p>

        <div class="jackpot">
          <p v-if="pending">Fetching Jackpot...</p>
          <p v-else-if="error">Jackpot unavailable</p>
          <p v-else>
            Current Jackpot: <span class="amount">{{ formattedJackpot }}</span>
          </p>
        </div>

        <!--<Button variant="primary">Claim Now</Button> -->
      </div>

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
  height: 100vh;
  background: url('/img/hero.jpg') no-repeat center center / cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  overflow: hidden;
  padding-top: 2rem;

.game-logo {
  width: 300px;
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
    flex: 1;

    @media (max-width: 1024px) {
      flex-direction: column;
      gap: 2rem;
    }
  }

  .video {
    flex: 1;
    max-width: 350px;

    video {
      width: 100%;
      border-radius: 12px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    }
  }

  .content {
    flex: 2;
    max-width: 600px;
    text-align: center;
    color: white;

    h1 {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    .subheadline {
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
      color: var(--tertiary-accent);
    }

    .jackpot {
      font-size: 1.3rem;
      margin-bottom: 2rem;

      .amount {
        font-size: 1.6rem;
        font-weight: bold;
        color: var(--primary-text);
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
      animation: popUp 1s 0.3s ease-out forwards;
    }

    .number {
      animation: popUp 1s 0.6s ease-out forwards;
    }
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
