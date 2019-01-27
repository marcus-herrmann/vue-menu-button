<template>
    <li
            data-vue-menu-item
            role="menuitem"
            tabindex="-1"
            @click="emitClick"
            @keyup.enter="emitClick"
            @keyup.space="emitClick"
    >
        <slot></slot>
    </li>
</template>

<script>
    export default {
        methods: {
            emitClick() {
                this.$emit("click");
            }
        }
    };
</script>
