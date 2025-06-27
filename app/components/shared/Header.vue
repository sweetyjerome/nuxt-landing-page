<template>
  <header class="header">
    <div class="container">
      <!-- Logo -->
      <div class="logo">King Neptune</div>
      <!-- Buttons -->
      <nav class="nav">
        <a href="/" class="btn btn--secondary btn--md" aria-label="Sign In">Sign In</a>
        <a href="/" class="btn btn--primary btn--md" aria-label="Sign Up">Sign Up</a>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-color: #1a1a1a;
  color: var(--primary-text);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.logo {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 1.5rem;
  color: var(--primary-text);
}

.nav {
  display: flex;
  gap: 1rem;
  padding: 0 1.5rem;
}
@media (max-width: 425px) {
  .header {
    padding: 0.5rem 0;

    .container {
      flex-direction: column; /* Stack logo and nav vertically */
      align-items: center;
      gap: 0.5rem;
    }

    .logo {
      font-size: 1.25rem; /* Reduce logo font size */
    }

    .nav {
      flex-direction: column; /* Stack buttons vertically */
      gap: 0.5rem;

      a {
        display: none;
        font-size: 0.9rem; /* Reduce button font size */
        padding: 0.4rem 0.8rem; /* Adjust button padding */
      }
    }
  }
}
</style>