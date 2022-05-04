<template>
  <div class="l-wrapper">
    <TheHeader
      class="l-header"
      @sidenavToggle="displaySidenav = !displaySidenav"
    />
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />
    <main class="l-main">
      <Nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheSidenav from '@/components/Navigation/TheSidenav'

export default {
  components: {
    // Header,
    TheHeader,
    TheSidenav,
  },
  data() {
    return {
      displaySidenav: false,
    }
  },
}
</script>

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
