<template>
  <section>
    <h1>Home</h1>
    <the-link href="/about" linkType="nuxt-link">Test</the-link>
  </section>
</template>

<script>
import TheLink from "../components/Atoms/Link/Link.vue";

export default {
  name: "IndexPage",
  components: {
    TheLink,
  },
};
</script>
