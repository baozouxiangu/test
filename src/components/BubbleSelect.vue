<template>
  <div :class="['bubble-select', { cur: selectboxShow }]">
    <div class="bubble-select-trigger" @click="showTrigger"></div>
    <div
      class="bubble-select-box"
      v-show="selectboxShow && selectList && selectList.length"
    >
      <div
        v-for="option in selectList"
        :key="option.id"
        :class="['bubble-select-option', { cur: option.id === selectedId }]"
        @click="changeSelected(option.id)"
      >
        <span>{{ option.value }}</span>
        <em></em>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputSelect",
  components: {},
  data() {
    return {
      selectboxShow: false
    };
  },
  props: {
    selectList: Array,
    selectedId: {
      type: Number,
      default: 1
    }
  },
  methods: {
    changeSelected(id) {
      this.$emit("changeSelected", id);
      this.selectboxShow = false;
    },
    showTrigger() {
      this.selectboxShow = !this.selectboxShow;
    }
  }
};
</script>

<style lang="scss" scoped>
.bubble-select {
  cursor: pointer;
  position: relative;
  width: 32px;
  height: 32px;
  .bubble-select-box {
    position: absolute;
    z-index: 2;
    top: 62px;
    right: -14px;
    padding: 16px 20px;
    border-radius: 6px;
    box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.1);
    background: #ffffff;
    .bubble-select-option {
      white-space: nowrap;
      height: 60px;
      box-sizing: border-box;
      line-height: 60px;
      padding: 0 21px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 26px;
      color: #4b5052;
      span {
        margin-right: 36px;
      }
      em {
        width: 12px;
        height: 12px;
        background: url("../assets/images/icon_selected.png") center center
          no-repeat;
        background-size: 12px 12px;
        visibility: hidden;
      }
      &:hover,
      &.cur {
        background-color: #f9f9f9;
      }
      &.cur em {
        visibility: visible;
      }
    }
  }

  .bubble-select-trigger {
    width: 100%;
    height: 100%;
    border-radius: 3px;
    background: #fff url("../assets/images/icon_select.png") center center
      no-repeat;
    background-size: 12px 8px;
    font-size: 12px;
    font-weight: bold;
  }
  &.cur .bubble-select-trigger {
    background-color: #f0f0f0;
    background-image: url("../assets/images/icon_select_cur.png");
  }
}
</style>
