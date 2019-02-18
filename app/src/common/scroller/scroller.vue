<template>
  <div class="scroller-wrap" ref="scroll" :style="style">
    <div class="scroller-content">
      <slot/>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "scroller",
  props: {
    width: Number,
    height: Number,
    top: Number
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.scroll, {
      click: true,
      propType: 3
    });
  },
  computed: {
    style() {
      if (this.top) {
        return {
          position: "absolute",
          top: this.top + "px",
          bottom: 0
        };
      } else {
        return {
          width: this.width + "px",
          height: this.height + "px"
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.scroller-wrap {
  overflow: hidden;
  width: 100%;
  left: 0;
}
</style>

