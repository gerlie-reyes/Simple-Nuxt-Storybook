<template>
  <div>
    <a v-if="!isNuxtLink" :href="href" :target="linkTarget">
      <slot></slot>
    </a>
    <NuxtLink v-else :to="href">
      <slot></slot>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "TheLink",
  props: {
    href: String,
    target: { String, default: "" },
    linkType: String,
  },
  computed: {
    linkTarget() {
      if (!this.target.length) {
        return "_blank";
      }

      return this.target;
    },
    isNuxtLink() {
      return this.linkType === "nuxt-link";
    },
  },
};
</script>

<style></style>
