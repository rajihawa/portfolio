<template>
  <router-view v-slot="{ Component, route }">
    <!-- Use any custom transition and fallback to `fade` -->
    <transition :name="route.meta.transition || 'fade'">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  setup() {
    return {};
  },
});
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

::selection {
  background: #8a2be2;
}
#app {
  overflow-x: hidden;
  overflow-y: auto;
}

.fade-enter-active,
.fade-leave-active {
  position: absolute;
  width: 100%;
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
