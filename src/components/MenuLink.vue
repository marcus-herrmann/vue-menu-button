<template>
    <li role="none" @click="$parent.closeHandler(false)"><slot></slot></li>
</template>

<script>
export default {

  mounted() {
    this.$slots.default.forEach(vNode => {
      let el = vNode.elm;
      el.setAttribute("role", "menuitem");
      el.setAttribute("tabindex", "-1");
      el.setAttribute("data-vue-menu-link", "");
    });
  }
};
</script>
