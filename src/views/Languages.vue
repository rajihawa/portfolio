<template>
  <div
    class="text-center w-screen h-screen overflow-x-hidden bg-cover bg-no-repeat bg-center flex justify-center items-center"
    :style="{
      backgroundImage: 'url(' + require('../assets/lang_bg.jpg') + ')',
    }"
  >
    <div
      class="flex w-full sm:h-full items-center justify-center mx-2 sm:my-2 sm:flex-col-reverse"
    >
      <div class="sm:flex">
        <div
          v-for="image in images"
          :key="image"
          class="m-1 flex justify-start mx-auto"
        >
          <img
            :src="image[0] != 'h' ? require('../assets/langs/' + image) : image"
            class="w-9 h-9 sm:w-12 sm:h-12 sm:m-1 md:w-24 md:h-24"
          />
        </div>
      </div>
      <div class="flex-1 sm:flex sm:h-96 items-end">
        <transition-group name="skill">
          <div
            v-for="level in levels"
            :key="level"
            class="m-1 h-9 sm:w-12 md:w-24 origin-left sm:origin-bottom"
            :class="[colorPicker(level), 'w-4/6', 'sm:h-4/6']"
          ></div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import data from "@/data";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "Languages",
  components: {},
  setup() {
    const levels = ref<number[]>([]);
    const index = ref(0);
    const images = ref<string[]>([]);

    const getImgUrl = (path: string) => {
      return require(path);
    };

    const recurseFillLangs = () => {
      if (index.value >= data.languages.length) {
        return;
      }
      levels.value.push(data.languages[index.value].level);

      images.value.push(data.languages[index.value].img);

      index.value = index.value + 1;
      setTimeout(() => {
        recurseFillLangs();
      }, 400);
    };

    onMounted(() => {
      recurseFillLangs();
    });

    const colorPicker = (level: number): string => {
      if (level == 10) {
        return "bg-green-700";
      } else if (level >= 9) {
        return "bg-green-500";
      } else if (level >= 8) {
        return "bg-green-300";
      } else if (level >= 7) {
        return "bg-blue-500";
      } else if (level >= 6) {
        return "bg-blue-300";
      } else if (level > 3) {
        return "bg-yellow-500";
      } else {
        return "bg-red-500";
      }
    };

    return {
      levels,
      images,
      colorPicker,
      getImgUrl,
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
