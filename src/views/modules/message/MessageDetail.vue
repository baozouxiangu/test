<template>
  <div class="messagedetail-wrapper">
    <div v-if="!messageDetail">加载中 {{ $route.query.messageId }}</div>
    <div v-else>
      <h1 class="title">
        {{ messageDetail.title }}
      </h1>
      <div class="info">
        {{ messageDetail.author }} 发布于 {{ messageDetail.date }}
      </div>
      <div class="content" v-html="messageDetail.text"></div>
    </div>
    <div class="relay">
      <a href="" class="relay_icon weibo"></a>
      <a href="" class="relay_icon wechat"></a>
      <a href="" class="relay_icon twitter"></a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { messageDetail: undefined };
  },
  mounted() {
    this.getData();
  },
  watch: {
    $route() {
      this.getData();
    }
  },
  methods: {
    getData() {
      this.messageDetail = {
        title: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        author: "长桥",
        date: "2019.11.04 21:30:12",
        text: `<p>sssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
        <p>sssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p><p>sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p><p>sssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
        <p>sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
        <p>sssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
        <p>sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
        <img src='http://dg1.jigsc.cn/wenda8/images/a6ad9024c244ffbd20427c37a1e691a8.jpg'/>`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.messagedetail-wrapper {
  border-left: 1px solid #eeeeee;
  padding: 15px 400px 0 58px;
  .relay {
    margin-top: 48px;
    font-size: 0;
    .relay_icon {
      width: 80px;
      height: 80px;
      display: inline-block;
      vertical-align: top;
      border: 4px solid #eeeeee;
      border-radius: 40px;
      margin-right: 48px;
      &.wechat {
        background: url("../../../assets/images/icon_wechat.png") center center
          no-repeat;
        background-size: 42px 34px;
      }
      &.twitter {
        background: url("../../../assets/images/icon_twitter.png") center center
          no-repeat;
        background-size: 42px 34px;
      }
      &.weibo {
        background: url("../../../assets/images/icon_weibo.png") center center
          no-repeat;
        background-size: 42px 34px;
      }
    }
  }
  .title {
    font-size: 66px;
    font-weight: bold;
    color: #000;
    line-height: 108px;
  }
  .info {
    white-space: nowrap;
    font-size: 26px;
    line-height: 34px;
    padding: 10px 0;
    color: #333333;
    .date {
      color: #666;
    }
  }
  .content {
    margin-top: 31px;
    line-height: 43px;
    font-size: 25px;
    color: #333;
    img {
      margin-top: 40px;
      display: block;
    }
  }
}
</style>
