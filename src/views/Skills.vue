<template>
  <div class="text-center w-screen h-screen bg-primary p-5 text-white">
    <div class="container mx-auto">
      <router-link to="/" tag="a" class="border-b-2">back home</router-link>
      <h1 class="text-2xl mt-10">My top skills of all fields</h1>
      <p class="text-sm">
        *all of the langauges and technologies listed below are actually tools
        that I have used in real projects before and have deep understading of.
      </p>
      <div class="flex justify-center items-start mt-10 flex-wrap">
        <div v-for="cat in cats" :key="cat" class="flex flex-col m-3 mb-5">
          <h1 class="text-xl mb-2">{{ cat }}</h1>
          <p v-for="s in skills[cat]" :key="s">{{ s }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import data from "@/data";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Skills",
  components: {},
  setup() {
    return {
      skills: data.skills,
      cats: Object.keys(data.skills),
    };
  },
});
</script>

<style scoped>
.skill-enter-active {
  transition: all 3s ease;
}

.skill-enter-from {
  transform: scaleX(0) scaleY(0);
  background-color: red;
}
.skill-enter-to {
  transform: scaleX(1) scaleY(1);
}
</style>
