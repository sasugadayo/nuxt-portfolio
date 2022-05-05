<template>
  <!-- ハンバーガーメニュー -->
  <div class="p-drawer-toggle" role="button" aria-label="open" @click="$emit('toggle')">
    <div class="p-bar"></div>
    <div class="p-bar"></div>
    <div class="p-bar"></div>
  </div>
</template>

<style lang="scss" scoped>
.p-drawer-toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  width: 35px;
  cursor: pointer;

  @include mq(sm) {
    display: none;
  }
}

.p-bar {
  width: 90%;
  height: 2px;
  background-color: #fff;
}
</style>
