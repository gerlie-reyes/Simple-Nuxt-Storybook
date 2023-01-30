<template>
  <div>
    <a v-if="!isNuxtLink" :href="href" :target="linkTarget">
      <slot></slot>
    </a>
    <nuxt-link v-else :to="href">
      <slot></slot>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "TheLink",
  props: {
    href: String,
    target: { String, default: "" },
    isNuxtLink: {Boolean, default: false},
  },
  computed: {
    linkTarget() {
      if (!this.target.length) {
        return "_blank";
      }

      return this.target;
    }
  },
};
</script>

<style></style>
