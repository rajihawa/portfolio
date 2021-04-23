<template>
  <div class="h-screen w-screen  bg-primary text-white sm:p-5 flex justify-center items-center">
    <div class="container p-5 bg-secondary-dark rounded-md bg-opacity-30" >
      <router-link to="/" tag="a" class="
      border-b-2">back home</router-link>
      <h1 class=" sm:text-3xl mt-5 mb-3">Who am I ?</h1>
      <p class="mb-1">Hey, I'm Raji Hawa :)</p>
      <p>
        I'm a self-taught full stack web and mobile developer, solution architect
        and devops engineer, I'm 20 years old and started this path ever since
        10th grade so to be exact I've been professionally coding for {{mil}}
        milliseconds! :D
      </p>
      <p>
        I'm kinda addicted to learn new technologies and programming languages
        (yeah I know its weird lol),<br />
        Currently I'm comfortable in using over 9 frontend frameworks and
        languages including mobile and over 20 libraries and languages for the
        backend!!.<br />
        My tech stack is always changing depends on the open source market and new
        updates, <br />but for now its: <br />
        <ul class="ml-10">
          <li>Vue js (Composition API + vuex + vue router + tailwindcss + Typescript ) for the frontend.</li>
          <li>Golang (Gorilla toolkit) for the backend.</li>
          <li>Flutter (Bloc) for native (IOS + Android).</li>
          <li>RethinkDB for the database</li>
          <li>Docker to ship my apps</li>
          <li>Kubernetes (K3s and EKS) to orchestrate my projects</li>
          <li>AWS for cloud provider</li>
          <li>Arch linux as my main OS running on windows Hyper-V</li>
          <li>Surface Book 3 as my main workstation</li>
        </ul>
      </p>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  setup() {
    const mil = ref(0)

  const recTime = () => {
    setTimeout(() => {
        const a = new Date();
      const b = new Date("7/1/2016");
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      mil.value = a-b
      recTime()
      },1)
  }

    onMounted(()=> {
      recTime()
    })
    return {
      mil
    }
  },
})
</script>
