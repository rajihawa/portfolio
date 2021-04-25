<template>
  <Main>
    <div class="text-center p-1 text-white">
      <div class="container mx-auto">
        <h1 class="text-2xl">My top skills of all fields</h1>
        <p class="text-sm">
          *all of the langauges and technologies listed below are actually tools
          that I have used in real projects before and have deep understading
          of.
        </p>
        <div class="flex justify-center items-start mt-10 flex-wrap">
          <div v-for="cat in cats" :key="cat" class="flex flex-col m-3 mb-5">
            <h1 class="text-xl mb-2">{{ cat }}</h1>
            <p v-for="s in skills[cat]" :key="s">{{ s }}</p>
          </div>
        </div>
      </div>
    </div>
  </Main>
</template>

<script lang="ts">
import data from "@/data";
import { defineComponent } from "vue";
import Main from "../layouts/Main.vue";

export default defineComponent({
  name: "Skills",
  components: {
    Main,
  },
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
