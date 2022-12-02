<template>
  <a :href="href" :target="linkTarget">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    href: String,
    target: { String, default: "" },
  },
  computed: {
    linkTarget() {
      if (!this.target.length) {
        return "_blank";
      }

      return this.target;
    },
  },
};
</script>

<style></style>
