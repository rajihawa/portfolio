<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style>
body {
  padding: 0;
  margin: 0;
}
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
