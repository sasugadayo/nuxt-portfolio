<template>
  <header class="p-header">
    <div class="p-header-container">
      <!-- ロゴ -->
      <component :is="isTopPage ? 'h1' : 'p'" class="p-header-title">
        <nuxt-link to="/">My Portfolio</nuxt-link>
      </component>

      <!-- メニュー -->
      <nav class="p-menu">
        <ul class="p-menu__list">
          <li class="p-menu__item">
            <nuxt-link to="/#about" class="p-menu__item-link">about</nuxt-link>
          </li>
          <li class="p-menu__item">
            <nuxt-link to="/#skill" class="p-menu__item-link"
              >my skills</nuxt-link
            >
          </li>
          <li class="p-menu__item">
            <nuxt-link to="/works" class="p-menu__item-link">works</nuxt-link>
          </li>
          <li class="p-menu__item">
            <nuxt-link to="/contact" class="p-menu__item-link"
              >contact</nuxt-link
            >
          </li>
        </ul>
      </nav>

      <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
    </div>
  </header>
</template>

<script>
import TheSideNavToggle from '@/components/Navigation/TheSideNavToggle'
export default {
  components: {
    TheSideNavToggle,
  },
  data() {
    return {
      displaySidenav: false,
    }
  },
  computed: {
    // TOPページかどうか
    isTopPage() {
      if (this.$route.name === 'index') return true
      return false
    },
  },
}
</script>

<style lang="scss" scoped>
.p-header {
  width: 100%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  background-color: $base-color-primary;
}

.p-header-container {
  height: 64px;
  padding: 0 1.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @include mq() {
    padding: 0 4em;
  }
}

.p-header-title {
  color: $text-color-primary;
  font-family: $font-ubuntu;
  font-size: fz(18);
  font-weight: bold;
  letter-spacing: 0;

  @include mq() {
    font-size: fz(24);
  }
}

.p-menu__list {
  list-style: none;
  display: flex;
  margin-right: -0.75em;
}
.p-menu__item-link {
  font-family: $font-ubuntu;
  font-weight: bold;
  text-transform: capitalize;
  line-height: 64px;
  display: inline-block;
  padding: 0 0.25em;
  position: relative;
  // font-size: 13px;

  @include mq(sm) {
    font-size: 16px;
  }
  @include mq() {
    padding: 0 0.75em;
  }

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background-color: $key-color-black;
    transition: all 0.3s ease-in-out;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
}
.p-menu {
  @include mq(sm, max) {
    display: none;
  }
}
</style>
