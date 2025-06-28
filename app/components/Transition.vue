<template>
  <div class="section-transition" />
</template>

<style scoped lang="scss">
.section-transition {
  width: 100%;
  height: 80px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transform: translateY(-20px); 
  z-index: 2;
  position: relative;
  pointer-events: none;
}
</style>
