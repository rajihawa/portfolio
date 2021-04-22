<template>
  <div
    class="absolute top-0 flex sm:flex-col sm:left-0 sm:h-screen w-screen sm:w-auto justify-around items-center"
  >
    <router-link to="/"><LinkButton>Home</LinkButton></router-link>
    <router-link to="/languages"
      ><LinkButton>Languages</LinkButton></router-link
    >
    <router-link to="/about"><LinkButton>About</LinkButton></router-link>
  </div>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import LinkButton from "@/components/LinkButton.vue";

export default defineComponent({
  components: {
    LinkButton,
  },
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
#app {
  overflow-x: hidden;
  overflow-y: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
