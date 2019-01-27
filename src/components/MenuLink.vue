<template>
    <li role="none" data-vue-menu-link><slot @click="emitClick"></slot></li>
</template>

<script>
export default {
  methods: {
    emitClick() {
      this.$emit("click");
    }
  },
  mounted() {
    this.$slots.default.forEach(vNode => {
      let el = vNode.elm;
      el.setAttribute("role", "menuitem");
      el.setAttribute("tabindex", "-1");
    });
  }
};
</script>
