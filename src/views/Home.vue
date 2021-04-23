<template>
  <div
    class="relative w-screen overflow-hidden z-10"
    :style="{ height: '115vh' }"
  >
    <div class="fixed w-full h-full">
      <div
        class="absolute overflow-hidden text-center w-full h-full flex justify-center items-center bg-primary z-10"
      >
        <div
          class="bg-primary-dark rounded-full w-64 h-64 sm:w-96 sm:h-96 xl:w-104 xl:h-104"
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
            :strength="80"
            type="translate"
            class="w-96 h-96 bg-primary-dark hidden md:block absolute top-0 left-0 rounded-full"
          ></kinesis-element>

          <kinesis-element
            :strength="60"
            type="translate"
            class="w-96 h-96 bg-primary-dark hidden sm:block absolute -top-36 -right-36 rounded-full"
          ></kinesis-element>
          <kinesis-element
            :strength="100"
            type="translate"
            class="w-60 h-60 bg-primary-dark hidden sm:block absolute bottom-10 right-1/4 rounded-full"
          ></kinesis-element>
          <kinesis-element
            :strength="25"
            type="translate"
            class="text-4xl text-white"
            >Portfolio</kinesis-element
          >
          <kinesis-element
            :strength="25"
            type="translate"
            class="text-7xl text-white mb-5"
            >{{ name }}</kinesis-element
          >
          <kinesis-element
            :strength="30"
            type="translate"
            v-for="title in titles"
            :key="title"
            class="text-2xl text-white"
            >{{ title }}</kinesis-element
          >
          <button
            class="home_next w-12 h-12 p-2 rounded-full focus:outline-none hover:bg-gray-300 transition-colors duration-200 text-blue-500 bg-white mt-12 text-2xl text-center flex justify-center items-center"
            v-html="'&#9660;'"
            @click.self="scrollToAbout"
          ></button>
        </kinesis-container>
      </transition>
    </div>
  </div>
  <div
    ref="moreRef"
    class="relative w-screen h-screen overflow-hidden flex justify-center items-center bg-transparent z-20"
  >
    <transition name="fade">
      <div
        v-if="more"
        class="w-full h-full flex justify-center items-center relative"
      >
        <Particles
          :options="particleOpts"
          id="tsparticles"
          class="w-full h-full absolute"
        />
        <div class="relative flex flex-col text-center z-30">
          <div class="text-white text-2xl sm:text-5xl text-center mb-7">
            What do you want to know ?
          </div>
          <div class="flex flex-wrap justify-center items-center">
            <transition-group name="list-complete">
              <router-link
                v-for="link in links"
                :to="link.to"
                class="list-complete-item p-2 m-2 cursor-pointer bg-secondary hover:bg-secondary-dark duration-200 text-2xl whitespace-nowrap text-white rounded-full h-40 w-40"
                :key="link.name"
              >
                {{ link.name }}
                <div>
                  <img
                    class="h-40"
                    :src="require('../assets/svg/' + link.icon + '.svg')"
                  />
                </div>
              </router-link>
            </transition-group>
          </div>
        </div>
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
    const more = ref(false);
    const moreRef = ref<HTMLDivElement | null>(null);
    const links = ref<{ name: string; icon: string; to: string }[]>([]);
    const linksIndex = ref(0);

    const scrollingListener = () => {
      const newValue = window.scrollY / window.screen.height;
      if (newValue < 0.5) {
        home.value = true;
        more.value = false;
        links.value = [];
        linksIndex.value = 0;
        scale.value = newValue * 9;
      } else {
        home.value = false;
        setTimeout(() => {
          more.value = true;
          fillLinksRec();
        }, 200);
      }
    };

    const fillLinksRec = () => {
      if (linksIndex.value > 4) {
        return;
      }
      links.value.push(data.home.links[linksIndex.value]);
      linksIndex.value = linksIndex.value + 1;
      setTimeout(() => {
        fillLinksRec();
      }, 200);
    };

    onMounted(() => {
      window.addEventListener("scroll", scrollingListener);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", scrollingListener);
    });

    const scrollToAbout = () => {
      moreRef.value?.scrollIntoView({ behavior: "smooth" });
    };

    return {
      titles: data.home.titles,
      name: data.home.name,
      scale,
      home,
      moreRef,
      more,
      scrollToAbout,
      particleOpts,
      links,
      linksIndex,
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

.list-complete-item {
  transition: all 0.8s ease;
  display: inline-block;
  margin-right: 10px;
}

.list-complete-enter-from,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-complete-leave-active {
  position: absolute;
}
</style>
