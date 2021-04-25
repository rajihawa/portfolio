<template>
  <nav class="text-center py-1">
    <router-link to="/">
      <img class="h-14 mx-auto" src="../assets/logo.png" />
    </router-link>
    <div class="flex justify-around items-center mt-2">
      <router-link
        v-for="link in links"
        :key="link"
        :to="link.to"
        class="text-yellow-500 font-bold border-b-2 border-transparent hover:border-yellow-500 transition-colors duration-200"
        >{{ link.name }}</router-link
      >
    </div>
    <div class="mt-1 h-0.5 bg-yellow-500"></div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const links: { to: string; name: string }[] = [
      {
        to: "/about",
        name: "About",
      },
      {
        to: "/skills",
        name: "Skills",
      },
      {
        to: "/projects",
        name: "Projects",
      },
      {
        to: "/contact",
        name: "Contact",
      },
      {
        to: "/tips",
        name: "Tips",
      },
    ];

    return {
      links,
    };
  },
});
</script>

<style scoped>
.router-link-active {
  border-color: #f59e0b;
}
</style>
