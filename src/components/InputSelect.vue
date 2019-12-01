<template>
  <div class="input-select">
    <input
      type="text"
      placeholder="搜索股票"
      @input="inputHandler"
      v-model="companyName"
    />
    <ul
      class="select-box"
      v-show="companys && companys.length && selectboxShow"
    >
      <li
        v-for="company in companys"
        :key="company.id"
        class="select-option"
        @click="checkedCompany(company.id)"
      >
        <span class="company">{{ company.name }}</span>
        <span class="company-value">{{ company.value }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "InputSelect",
  components: {},
  data() {
    return {
      companys: [],
      companyName: "",
      selectboxShow: true,
      timer: undefined
    };
  },
  methods: {
    inputHandler() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.getCompanys();
      }, 500);
    },
    getCompanys() {
      let resultCompanys = [
        {
          id: 1,
          name: "阿里巴巴-SW",
          value: "09988"
        },
        {
          id: 2,
          name: "美团点评-W",
          value: "03690"
        },
        {
          id: 3,
          name: "小米集团-W",
          value: "01810"
        }
      ];
      this.companys = resultCompanys;
      this.selectboxShow = true;
    },
    checkedCompany(id) {
      this.companyName = this.companys.find(company => {
        return company.id === id;
      }).name;
      this.selectboxShow = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.input-select {
  position: relative;
  input {
    height: 64px;
    width: 700px;
    border: 0;
    box-sizing: border-box;
    border-radius: 6px;
    padding: 12px 0 12px 92px;
    background: #fff url("../assets/images/icon_search.png") 33px center
      no-repeat;
    background-size: 29px 30px;
    box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.1);
    outline: none;
    font-size: 26px;
  }
  .select-box {
    cursor: pointer;
    background: #fff;
    position: absolute;
    z-index: 2;
    top: 64px;
    width: 720px;
    box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.1);
    .select-option {
      display: flex;
      justify-content: space-between;
      height: 66px;
      box-sizing: 100%;
      padding: 0 33px;
      line-height: 66px;
      text-align: justify;
      font-size: 26px;
      .company {
        color: #000;
      }
      .company-value {
        color: #666;
      }
      &:hover {
        background: #f9f9f9;
      }
    }
  }
}
</style>
