<template>
  <div class="cta-logos">
    <img src="/img/18plus.png" alt="18+ Play Responsibly" />
    <img src="/img/mastercard.webp" alt="Mastercard" />
    <img src="/img/visa.webp" alt="Visa" />
  </div>
</template>

<style scoped lang="scss">
.cta-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem 1rem;
  background-color: #1a1a1a;

  img {
    height: 80px;
    max-width: 100%;
    object-fit: contain;
    opacity: 0.6;
    transition: opacity 0.3s ease-in-out;

    &:hover {
      opacity: 0.85;
    }
  }

  @media (max-width: 425px) {
    flex-direction: row;
    gap: 0.5rem;

    img {
      height: 30px;
    }
  }
}
</style>