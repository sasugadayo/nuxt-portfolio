<template>
  <div class="p-sidenav-container">
    <!-- サイドバーのバックドロップ背景 -->
    <div v-if="show" class="p-sidenav-backdrop" @click="$emit('close')"></div>
    <!-- トランジション -->
    <transition name="p-slide-side">
      <!-- サイドナブ -->
      <div v-if="show" class="p-sidenav">
        <div
          class="p-drawer-toggle"
          role="button"
          aria-label="close"
          @click="$emit('close')"
        >
          <div class="p-bar"></div>
          <div class="p-bar"></div>
        </div>
        <!-- ハンバーガーメニュー -->
        <ul class="p-nav-list" @click="$emit('close')">
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
.p-sidenav-container {
  height: 100%;
  width: 100%;
}

.p-sidenav-backdrop {
  width: 100%;
  height: 100%;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}

.p-sidenav {
  height: 100%;
  width: 300px;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10000;
  position: fixed;
  top: 0;
  right: 0;
  box-sizing: border-box;
  padding: 30px;
}

.p-slide-side-enter-active,
.p-slide-side-leave-active {
  transition: all 0.3s ease-out;
}

.p-slide-side-enter,
.p-slide-side-leave-to {
  transform: translateX(100%);
}

.p-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
  margin-top: 50px;
}

.p-slide-menu {
  &__item {
    margin: 20px 0;

    a {
      text-decoration: none;
      color: #fff;
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
  position: absolute;
  right: 32px;
  top: 15px;
}

.p-bar {
  height: 2px;
  background: #fff;
  transition: all 0.3s ease-in-out 0.5s;
}

.p-bar:nth-child(1) {
  transform: rotate(135deg) translateY(-10px);
  transform-origin: bottom;
}

.p-bar:nth-child(2) {
  transform: rotate(-135deg) translateY(10px);
  transform-origin: top;
}
</style>
