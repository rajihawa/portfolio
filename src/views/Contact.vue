<template>
  <Main>
    <div class="container mx-auto p-1 text-white text-xl">
      <p class="m-2">
        If you are a recruiter and want to connect with me, please do that in
        <a
          target="_blank"
          class="border-b-2"
          href="https://www.linkedin.com/in/raji-hawa-b77bb61b0/"
          >linkedIn</a
        >
        and if I was open for offers we we'll be in touch soon.
      </p>
      <p class="text-xl m-2">
        If you want to connect with me for any other reasons, you can send me an
        email on this address:
        <a class="border-b-2" href="mailto:rajihawa@protonmail.com"
          >rajihawa@protonmail.com</a
        >, I get lots of emails so it just might take a few days for me to get
        back to you.
      </p>
      <p class="text-xl m-2">
        You can also follow me on instagram I don't really post anything there,
        but you can send me memes :D, @raji.hawa
      </p>
      <p class="text-xl m-2">
        Also here's a cozy pic of my doggo to bless your day, you're welcome ;)
        <img class="h-96 mx-auto" src="../assets/ruby.jpg" />
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
