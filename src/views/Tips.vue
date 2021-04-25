<template>
  <Main>
    <div class="container mx-auto p-1 text-white text-xl">
      <p class="mt-2">For frontend web-developers:</p>
      <p class="pl-4 text-lg mb-2">
        Responsiveness is probably the hardest part of building any website, it
        is very challenging to make your website responsive and predictable in
        all devices and browsers, for that I follow one simple principle, its
        called mobile first and it's very simple, all you have to do is to build
        your website for a mobile device then you walk your way up for bigger
        devices, this can be tricky and repetitive with vanilla CSS for that I
        recommend using some CSS libraries like bootstrap or materialUI,
        personally I use tailwindcss since it have amazing support for the
        mobile-first principle and it makes sure all your styles work on all
        browsers.
      </p>
      <p class="mt-2">For developers:</p>
      <p class="pl-4 text-lg mb-2">
        1. You test first Right ?, wait, Do you even test at all ?!, so yeah
        this is a very important tip, adapt the TDD (Test Driven Development) as
        fast as you can, honestly I can tell tens of reasons why you should do
        that, but instead I'll link a
        <a
          target="_blank"
          class="border-b-2"
          href="https://dev.to/toureholder/the-really-effective-part-of-tdd-is-not-so-much-whether-you-write-the-test-first-according-to-uncle-bob-3h6n"
          >blog</a
        >
        for you to read enjoy :).
      </p>
      <p class="pl-4 text-lg mb-2">
        2. How do you structure your code and folder structure ? is it fixed for
        all of your projects ? or does it change ?, Well this tip is all about
        that, cleaner code structure will allow you to configure it easily and
        add new feature seamlessly without pain, for that I recommend you learn
        about something called "Clean Architecture", its an amazing way to
        design projects and code in a way that if for any reason a crucial part
        needed to be replaced or you had to add another feature you will be able
        to do so without any preparation before, check out this
        <a
          target="_blank"
          class="border-b-2"
          href="https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"
          >blog</a
        >.
      </p>
      <p class="mt-2">For people who want to become full-stack developers:</p>
      <p class="pl-4 text-lg mb-2">
        Trust me no college or university can teach you to become a great
        developer, only you can, so my advice is for you to get up start
        building some projects, oh you don't know ? Boohoo that's what google is
        there for, just google whatever you want to build and you will find tons
        and tons of videos and blogs, you don't even need to understand
        everything to the core, with enough practice you eventually will, the
        moment you start believing in someone else to teach you more than
        yourself thats the moment you failed, so trust me and invest in yourself
        there is no better way, and you can always message me if you need
        sources to learn from I'm always happy to help :).
      </p>
    </div>
  </Main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Main from "../layouts/Main.vue";

export default defineComponent({
  components: {
    Main,
  },
  setup() {
    return {};
  },
});
</script>
