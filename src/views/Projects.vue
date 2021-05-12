<template>
  <Main>
    <div class="p-2 sm:p-5">
      <h1 class="text-white text-center text-5xl mb-20 md:mb-10 mt-5">
        Projects I've been a part of
      </h1>
      <div class="flex justify-center md:justify-around items-center flex-wrap">
        <div
          v-for="project in projects"
          :key="project"
          class="transform skew-y-12 w-full md:w-2/5 lg:w-1/5 bg-white m-1 sm:m-3 p-2 py-5"
        >
          <div class="transform -skew-y-12 text-center">
            <div class="text-xl mt-2">{{ project.title }}</div>
            <div class="text-4xl mb-2">{{ project.name }}</div>
            <img :src="require('../assets/projects/' + project.img + '.jpg')" />
            <p class="text=xl mt-2 mb-3 text-lg">{{ project.desc }}</p>
            <a
              class="border-b-2 border-black"
              target="_blank"
              :href="project.link"
              >Check it out!</a
            >
          </div>
        </div>
      </div>
      <p class="text-white text-center mt-8">
        And many many more, check out my
        <a
          target="_blank"
          href="https://github.com/rajihawa?tab=repositories"
          class="border-b-2"
          >github</a
        >
      </p>
    </div>
  </Main>
</template>

<script lang="ts">
import data from "@/data";
import { defineComponent } from "vue";
import Main from "../layouts/Main.vue";

export default defineComponent({
  components: { Main },
  setup() {
    return {
      projects: data.projects,
    };
  },
});
</script>
