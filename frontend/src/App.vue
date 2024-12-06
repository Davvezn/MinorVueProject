
<template>
  <div id="app">
    <Header />
    <HomePage />
  </div>
</template>

<script>
import Header from './components/header.vue';
import HomePage from './views/Homepage.vue';

export default {
  components: {
    Header,
    HomePage,
  },
};
</script>