<template>
    <div ref="menu">
        <button
                data-vue-menu-button
                ref="button"
                :aria-expanded="isOpen.toString()"
                aria-haspopup="true"
                :aria-controls="id"
                @click="toggleMenu"
                @keyup.down="openMenuAndFocus(0)"
                @keyup.up="openMenuAndFocus(-1)"
        >
            <slot name="menu-button"></slot>
        </button>
        <ul
                data-vue-menu
                v-show="isOpen"
                ref="list"
                role="menu"
                :id="id"
                @keyup.down="focusNext"
                @keyup.up="focusPrev"
                @close_menu="closeHandler(false)"
        >
            <slot name="menu-content"></slot>
        </ul>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      isOpen: false,
      focusables: null,
      focusedMenuItem: null,
      id: null
    };
  },
  mounted() {
    this.focusables = this.$refs.list.querySelectorAll("[tabindex='-1']");
    this.id = Math.random()
      .toString(36)
      .substring(2, 15);
  },
  created() {
    const escapeHandler = e => {
      if (e.key === "Escape" && this.isOpen) {
        this.closeHandler(true);
      }
    };
    document.addEventListener("keydown", escapeHandler);
    document.addEventListener("click", this.documentClick);

    this.$once("hook:destroyed", () => {
      document.removeEventListener("keydown", escapeHandler);
    });
  },
  destroyed() {
    document.removeEventListener("click", this.documentClick);
  },
  methods: {
    documentClick(e) {
      let el = this.$refs.menu;
      let target = e.target;
      if (el !== target && !el.contains(target)) {
        this.closeHandler();
      }
    },
    toggleMenu() {
      this.$emit("click", !this.isOpen);
      this.isOpen = !this.isOpen;
    },
    focusNext() {
      if (this.focusedMenuItem + 1 >= this.focusables.length) {
        this.focusedMenuItem = 0;
      } else {
        this.focusedMenuItem = this.focusedMenuItem + 1;
      }
      this.setMenuItemFocus(this.focusedMenuItem);
    },
    focusPrev() {
      if (this.focusedMenuItem === 0) {
        this.focusedMenuItem = this.focusables.length - 1;
      } else {
        this.focusedMenuItem = this.focusedMenuItem - 1;
      }
      this.setMenuItemFocus(this.focusedMenuItem);
    },
    setMenuItemFocus(index) {
      setTimeout(() => {
        this.focusables[index].focus();
      }, 0);
    },
    closeHandler(moveFocusToMenuButtonAfterClose) {
      this.isOpen = false;
      this.focusedMenuItem = null;

      if (moveFocusToMenuButtonAfterClose) {
        setTimeout(() => {
          this.$refs.button.focus();
        }, 0);
      }
    },
    openMenuAndFocus(index) {
      this.isOpen = true;
      this.focusedMenuItem = index === -1 ? this.focusables.length - 1 : index;
      this.setMenuItemFocus(this.focusedMenuItem);
    }
  }
};
</script>
