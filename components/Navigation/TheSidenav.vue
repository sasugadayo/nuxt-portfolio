<template>
  <div class="sidenav-container">
    <!-- サイドバーのバックドロップ背景 -->
    <div v-if="show" class="sidenav-backdrop" @click="$emit('close')"></div>
    <!-- トランジション -->
    <transition name="slide-side">
      <!-- サイドナブ -->
      <div v-if="show" class="sidenav">
        <div class="drawer-toggle" role="button" @click="$emit('close')">
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <!-- ハンバーガーメニュー -->
        <ul class="nav-list" @click="$emit('close')">
          <li class="p-slide-menu__item">
            <nuxt-link to="/#about" class="p-slide-menu__item-link"
              >about</nuxt-link
            >
          </li>
          <li class="p-slide-menu__item">
            <nuxt-link to="/#skill" class="p-slide-menu__item-link"
              >my skills</nuxt-link
            >
          </li>
          <li class="p-slide-menu__item">
            <nuxt-link to="/works" class="p-slide-menu__item-link"
              >works</nuxt-link
            >
          </li>
          <li class="p-slide-menu__item">
            <nuxt-link to="/contact" class="p-slide-menu__item-link"
              >contact</nuxt-link
            >
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TheSidenav',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.sidenav-container {
  height: 100%;
  width: 100%;
}

.sidenav-backdrop {
  width: 100%;
  height: 100%;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}

.sidenav {
  height: 100%;
  width: 300px;
  background-color: white;
  z-index: 10000;
  position: fixed;
  top: 0;
  right: 0;
  box-sizing: border-box;
  padding: 30px;
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}

.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(100%);
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.p-slide-menu {
  &__item {
    margin: 20px 0;
    a {
      text-decoration: none;
      color: black;
      font-size: 1.5rem;

      &:hover,
      &:active,
      .nuxt-link-active {
        color: #f7797d;
      }
    }
  }
}

.p-drawer-toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 35px;
  width: 35px;
  cursor: pointer;
}

.bar {
  height: 2px;
  background: black;
  transition: all 0.3s ease-in-out 0.5s;
}

.bar:nth-child(1) {
  transform: rotate(135deg) translateY(-10px);
  transform-origin: bottom;
}

.bar:nth-child(2) {
  transform: rotate(-135deg) translateY(10px);
  transform-origin: top;
}
</style>
