<template>
  <section class="hero">
    <div v-if="pending">
      <LoadingSpinner />
    </div>

    <div v-else>
      <!-- Game logo and jackpot value -->
      <div class="logo-container">
        <img src="/img/atlantean_treasures_logo.png" alt="Game Logo" class="game-logo" />
        <div v-if="formattedJackpot" class="jackpot-chip">{{ formattedJackpot }}</div>
      </div>

      <div class="hero-content">
        <!-- Left Section: Heading, Subheading -->
        <div class="hero-left">
          <div class="info-box">
            <h5 class="info">Exclusive offer</h5>
          </div>
          <p class="hero-heading">Grab 200 Free Spins</p>
          <p class="hero-subheading">It's time to grab your riches!</p>

          <Button label="Claim Now" variant="primary" @click="handleClaimNow" />
          <p class="terms">
            Deposit just $10 and activate your 200 free spins instantly.<br />Full terms below.
          </p>
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
    </div>


  </section>
</template>

<script setup lang="ts">
const { jackpot, pending, error } = useCasinoJackpotApi()

const formattedJackpot = computed(() =>
  jackpot.value
    ? new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(jackpot.value)
    : ''
);

// Handle button click
const handleClaimNow = () => {
  console.log('Claim Now button clicked!');
};
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  padding: 0 6rem;
  background: url('/img/hero.jpg') no-repeat center center / cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: 425px) {
    padding: 0 1rem;
    background-size: contain; // Makes the image fit without cropping
    background-position: top;
    min-height: 100vh;
    text-align: center;
  }


  .logo-container {
    gap: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;

    .game-logo {
      align-self: center;
      margin-top: 8rem;
      width: 280px;
      transform: scale(0.5);
      opacity: 0;
      animation: popScale 0.8s ease-out 0.5s forwards;
    }

    .jackpot-chip {

      background: radial-gradient(circle, rgba(248, 251, 63, 1) 0%, rgba(224, 157, 49, 1) 100%);
      color: #000;
      border: 2px solid #fff;
      border-radius: 20px;
      padding: 0.5rem 1rem;
      font-size: 1.8rem;
      font-weight: bold;
      text-align: center;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

  }

  @media (max-width: 425px) {
    .logo-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 8rem;

      .game-logo {
        width: 150px;
        margin-top: -5rem;
        transform: scale(1);
      }

      .jackpot-chip {
        margin-top: 0;
        font-size: 1rem;
        padding: 0.3rem 0.6rem;
      }
    }
  }

  .hero-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    padding: 2rem;

    @media (max-width: 425px) {
      padding: 0;
      display: flex;
      flex-direction: column;
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
      margin-bottom: 1rem;
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

    .terms {
      font-size: 0.8rem;
      color: #b3aeae;
      margin-top: 1rem;
    }

    @keyframes animate-border {
      0% {
        background-position: 0% 50%;
      }

      100% {
        background-position: 400% 50%;
      }
    }

    //------------------------- media queries -------------------------
    @media screen and (max-width: 425px) {
      .hero-left {
        flex: 1; // Take full width on smaller screens
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        padding: 1rem;
      }

      .info-box {

        margin-bottom: 0.3rem;
      }

      .info {
        font-size: 0.6rem;
      }

      .hero-heading {
        font-size: 1.8rem; // Adjusted for smaller screens
      }

      .hero-subheading {
        font-size: 1rem; // Adjusted for smaller screens
      }

      .terms {
        font-size: 0.6rem; // Adjusted for smaller screens
        margin-top: 0.3rem;
      }

    }

  }

  //-------------------------- Right Section -------------------------
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

    .hero-video {
      width: 120%;
      border-radius: 12px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    }

    //-------------------------- media queries -------------------------
    @media screen and (max-width: 425px) {
      .hero-right {
        flex: 1; // Take full width on smaller screens
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        width: 100%;
      }
        .hero-video {
          width: 100%; 
          max-width: 300px; 
          border-radius: 8px;
          margin: 5% 0 5% 20%;
         // margin-left: 2rem;
          display: block; // Ensure the video is treated as a block element
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
}
</style>