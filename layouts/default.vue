<template>
  <div class="l-wrapper">
    <TheHeader class="l-header" />
    <main class="l-main">
      <Nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<style lang="scss" scoped>
.l-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.l-header {
  position: fixed;
  z-index: 100;
}

.l-main {
  flex: 1;
  overflow-x: hidden;
  padding-top: 4em;
}
</style>
