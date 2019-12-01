<template>
  <div class="home">
    <header class="header">
      <div class="logo">
        <span>长桥</span>
      </div>
      <div class="menu">
        <div class="info">
          爱丽达网络
          <span class="number">0.161</span>
          <span class="number">+0.102</span>
          <span class="number">+0.10%</span>
        </div>
        <InputSelect></InputSelect>
      </div>
    </header>
    <div class="wrapper">
      <div class="sider">
        <div class="navList-section">
          <router-link :to="{ path: '/market' }">
            <div class="nav market">
              <div class="nav-content ">行情</div>
            </div>
          </router-link>
          <router-link :to="{ path: '/message' }">
            <div class="nav message">
              <div class="nav-content ">资讯</div>
            </div>
          </router-link>
          <router-link :to="{ path: '/myproperty' }">
            <div class="nav myproperty">
              <div class="nav-content ">我的资产</div>
            </div>
          </router-link>
          <router-link :to="{ path: '/repository' }">
            <div class="nav repository">
              <div class="nav-content ">持仓</div>
            </div>
          </router-link>
          <router-link :to="{ path: '/history' }">
            <div class="nav history">
              <div class="nav-content ">交易历史</div>
            </div>
          </router-link>
          <router-link :to="{ path: '/account' }">
            <div class="nav account">
              <div class="nav-content ">账户</div>
            </div>
          </router-link>
        </div>
        <div class="nav quit">
          <div class="nav-content ">退出</div>
        </div>
      </div>
      <div class="article-section">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import InputSelect from "@/components/InputSelect.vue";

export default {
  name: "Home",
  components: {
    InputSelect
  }
};
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  .wrapper {
    display: flex;
    flex: 1;
    .article-section {
      flex: 1;
    }
    .sider {
      display: flex;
      flex-flow: wrap;
      width: 260px;
      align-content: space-between;
      .nav {
        cursor: pointer;
        width: 260px;
        height: 160px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        &.account .nav-content {
          background-image: url("../assets/images/icon_account.png");
          background-size: 48px 46px;
        }
        &.history .nav-content {
          background-image: url("../assets/images/icon_history.png");
          background-size: 48px 48px;
        }
        &.market .nav-content {
          background-image: url("../assets/images/icon_market.png");
          background-size: 44px 44px;
        }
        &.message .nav-content {
          background-image: url("../assets/images/icon_message.png");
          background-size: 44px 44px;
        }
        &.myproperty .nav-content {
          background-image: url("../assets/images/icon_myproperty.png");
          background-size: 44px 44px;
        }
        &.repository .nav-content {
          background-image: url("../assets/images/icon_repository.png");
          background-size: 44px 44px;
        }
        &.quit .nav-content {
          background-image: url("../assets/images/icon_quit.png");
          background-size: 44px 48px;
        }
        .nav-content {
          height: 88px;
          box-sizing: border-box;
          padding-top: 65px;
          background: center top no-repeat;
          color: #666666;
        }
        &:hover,
        &.cur {
          &.account .nav-content {
            background-image: url("../assets/images/icon_account_cur.png");
          }
          &.history .nav-content {
            background-image: url("../assets/images/icon_history_cur.png");
          }
          &.market .nav-content {
            background-image: url("../assets/images/icon_market_cur.png");
          }
          &.message .nav-content {
            background-image: url("../assets/images/icon_message_cur.png");
          }
          &.myproperty .nav-content {
            background-image: url("../assets/images/icon_myproperty_cur.png");
          }
          &.repository .nav-content {
            background-image: url("../assets/images/icon_repository_cur.png");
          }
          background: #fff9f7;
          &.quit {
            background: #ffffff;
            .nav-content {
              color: #666666;
            }
          }
          .nav-content {
            color: #ff5000;
          }
        }
      }
    }
  }
  .header {
    min-height: 126px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eeeeee;
    white-space: nowrap;
    .logo {
      height: 48px;
      display: flex;
      align-items: center;
      margin-left: 48px;
      padding-left: 290px;
      background: url("../assets/images/logo.png") left center no-repeat;
      background-size: 281px 48px;
      span {
        display: inline-block;
        margin-left: 9xp;
        padding-left: 8px;
        border-left: 1px solid #9b99ae;
        font-size: 30px;
        color: #050033;
        font-weight: bold;
      }
    }
    .menu {
      height: 65px;
      display: flex;
      align-items: center;
      margin-right: 82px;

      .info {
        font-size: 26px;
        color: #333333;
        margin-right: 30px;
        .number {
          margin-left: 26px;
          color: #10c8aa;
        }
      }
    }
  }
}
</style>
