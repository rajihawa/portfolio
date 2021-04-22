<template>
  <div
    class="relative w-screen overflow-hidden z-10"
    :style="{ height: '100vh' }"
  >
    <div class="fixed w-full h-full">
      <div
        class="absolute overflow-hidden text-center w-full h-full flex justify-center items-center bg-purple-600 z-10"
      >
        <div
          class="bg-purple-800 rounded-full w-64 h-64 sm:w-96 sm:h-96"
          :style="{
            transform: 'scale(' + scale + ')',
          }"
        ></div>
      </div>
      <transition name="fade">
        <kinesis-container
          v-if="home"
          class="relative overflow-hidden text-center w-full h-full flex justify-center items-center bg-transparent flex-col z-20"
        >
          <kinesis-element
            :strength="30"
            type="translate"
            class="w-96 h-96 bg-purple-800 hidden md:block absolute top-0 left-0 rounded-full"
          ></kinesis-element>

          <kinesis-element
            :strength="30"
            type="translate"
            class="w-96 h-96 bg-purple-800 hidden sm:block absolute -top-36 -right-36 rounded-full"
          ></kinesis-element>
          <kinesis-element
            :strength="30"
            type="translate"
            class="w-60 h-60 bg-purple-800 hidden sm:block absolute bottom-10 right-1/4 rounded-full"
          ></kinesis-element>
          <kinesis-element
            :strength="25"
            type="depth"
            class="text-4xl text-white"
            >Portfolio</kinesis-element
          >
          <kinesis-element
            :strength="25"
            type="depth"
            class="text-7xl text-white mb-5"
            >{{ name }}</kinesis-element
          >
          <kinesis-element
            :strength="30"
            type="depth"
            v-for="title in titles"
            :key="title"
            class="text-2xl text-white"
            >{{ title }}</kinesis-element
          >
          <button
            class="home_next w-12 h-12 p-2 rounded-full focus:outline-none hover:bg-gray-300 transition-colors duration-200 text-purple-600 bg-white mt-12 text-2xl text-center flex justify-center items-center"
            v-html="'&#9660;'"
            @click.self="scrollToAbout"
          ></button>
        </kinesis-container>
      </transition>
    </div>
  </div>
  <div
    ref="aboutRef"
    class="relative w-screen h-screen overflow-hidden flex justify-center items-center bg-transparent z-20"
  >
    <transition name="fade">
      <div
        v-if="about"
        class="w-full h-full flex justify-center items-center relative"
      >
        <Particles
          :options="particleOpts"
          id="tsparticles"
          class="w-full h-full absolute"
        />
        <div class="text-white text-5xl text-center">More coming soon...</div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";
import data from "@/data";
import { KinesisContainer, KinesisElement } from "vue-kinesis";
import particleOpts from "../particleOptions";

export default defineComponent({
  name: "Home",
  components: {
    KinesisContainer,
    KinesisElement,
  },
  setup() {
    const scale = ref(0);
    const home = ref(true);
    const about = ref(false);
    const aboutRef = ref<HTMLDivElement | null>(null);

    const scrollingListener = () => {
      const newValue = window.scrollY / window.screen.height;
      console.log(newValue);
      if (newValue < 0.89) {
        home.value = true;
        about.value = false;
        scale.value = newValue * 5;
      } else {
        home.value = false;
        setTimeout(() => {
          about.value = true;
        }, 200);
      }
    };

    onMounted(() => {
      window.addEventListener("scroll", scrollingListener);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", scrollingListener);
    });

    const scrollToAbout = () => {
      aboutRef.value?.scrollIntoView({ behavior: "smooth" });
    };

    return {
      titles: data.home.titles,
      name: data.home.name,
      scale,
      home,
      aboutRef,
      about,
      scrollToAbout,
      particleOpts,
    };
  },
});
</script>

<style scoped>
.home_next {
  animation: bounce 1s infinite alternate;
  -webkit-animation: bounce 1s infinite alternate;
}
@keyframes bounce {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-15px);
  }
}
</style>
