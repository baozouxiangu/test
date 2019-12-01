<template>
  <div class="message-wrapper">
    <div class="message-index">
      <div class="message-header">
        <div class="messageType-filter" v-show="messageTypes.length">
          <span class="text">{{
            messageTypes.find(type => {
              return type.id === messageTypeSelectedId;
            }).name
          }}</span>
          <BubbleSelect
            :selectList="messageTypes"
            :selectedId="messageTypeSelectedId"
            @changeSelected="changeMessageType"
          ></BubbleSelect>
        </div>
        <div class="messageRange-filter" v-show="messageRanges.length">
          <span class="text">{{
            messageRanges.find(type => {
              return type.id === messageRangeSelectedId;
            }).name
          }}</span>
          <BubbleSelect
            :selectList="messageRanges"
            :selectedId="messageRangeSelectedId"
            @changeSelected="changeMessageRange"
          ></BubbleSelect>
        </div>
      </div>
      <div class="message-index-list">
        <div
          v-for="messageIndex in messageIndexList"
          :key="messageIndex.id"
          :class="[
            'message-index-option',
            { cur: messageIndex.id === messageIndexSelectedId }
          ]"
          @click="changeMessageIndexSelectedId(messageIndex.id)"
        >
          <div class="message-index-option-content">
            <div class="data">
              {{ messageIndex.date }}
              <em></em>
            </div>
            <div class="title">
              {{ messageIndex.title }}
            </div>
            <div class="profile">
              {{ messageIndex.profile }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="message-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import BubbleSelect from "@/components/BubbleSelect.vue";

export default {
  name: "Message",
  components: {
    BubbleSelect
  },
  data() {
    return {
      messageTypes: [
        {
          name: "资讯",
          value: "全部资讯",
          id: 1
        },
        {
          name: "新闻",
          value: "新闻",
          id: 2
        },
        {
          name: "快讯",
          value: "快讯",
          id: 3
        }
      ],
      messageTypeSelectedId: 1,
      messageRanges: [
        {
          name: "全部",
          value: "全部市场",
          id: 1
        },
        {
          name: "美股",
          value: "美股",
          id: 2
        },
        {
          name: "港股",
          value: "港股",
          id: 3
        }
      ],
      messageRangeSelectedId: 1,
      messageIndexList: [
        {
          id: 1,
          date: "2019.11.06 09:53:08",
          title: "香港财财政司司长：相信香港能够维持全球竞争力。",
          profile:
            "格隆汇 11 月 6 日 | 相信财政司司长陈茂波出席一个金融科技展致辞时表示..."
        },
        {
          id: 2,
          date: "2019.11.06 09:53:08",
          title: "香港财财政司司长：相信香港能够维持全球竞争力。",
          profile:
            "格隆汇 11 月 6 日 | 相信财政司司长陈茂波出席一个金融科技展致辞时表示..."
        }
      ],
      messageIndexSelectedId: 1
    };
  },
  mounted() {
    this.$router
      .push({
        path: "/message/detail",
        query: { messageId: this.messageIndexSelectedId }
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    changeMessageType(id) {
      this.messageTypeSelectedId = id;
    },
    changeMessageRange(id) {
      this.messageRangeSelectedId = id;
    },
    changeMessageIndexSelectedId(id) {
      this.messageIndexSelectedId = id;
      this.$router
        .push({
          path: "/message/detail",
          query: { messageId: id }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.message-wrapper {
  display: flex;
  height: 100%;
  .message-index {
    display: flex;
    flex-direction: column;
    width: 650px;
    .message-index-list {
      flex: 1;
      border-left: 1px #eeeeee solid;
      .message-index-option {
        cursor: pointer;
        box-sizing: border-box;
        padding: 0 0 0 44px;
        &.cur {
          background-color: #f9f9fc;
        }
        .message-index-option-content {
          padding: 30px 60px 25px 0;
          border-bottom: 1px solid #eeeeee;
          .data {
            line-height: 30px;
            color: #9a9a9a;
            font-size: 20px;
            height: 30px;
            white-space: nowrap;
            position: relative;
            em {
              box-sizing: border-box;
              width: 18px;
              height: 18px;
              position: absolute;
              border: 4px solid #ff5500;
              border-radius: 9px;
              background: #fff;
              left: -53px;
              top: 50%;
              transform: translate(0, -50%);
            }
          }
          .title {
            margin-top: 13px;
            line-height: 40px;
            font-size: 26px;
            color: #333;
          }
          .profile {
            margin-top: 12px;
            line-height: 34px;
            font-size: 22px;
            color: #666;
          }
        }
      }
    }
    .message-header {
      display: flex;
      justify-content: space-between;
      height: 94px;
      .messageType-filter {
        display: flex;
        align-items: center;
        justify-items: space-between;
        font-size: 30px;
        color: #000;
        .text {
          margin-right: 23px;
        }
      }
      .messageRange-filter {
        display: flex;
        align-items: center;
        justify-items: space-between;
        font-size: 26px;
        color: #535759;
        .text {
          margin-right: 5px;
        }
      }
    }
  }
  .message-content {
    flex: 1;
  }
}
</style>
