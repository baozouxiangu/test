import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Account from "@/views/modules/Account.vue";
import History from "@/views/modules/History.vue";
import Market from "@/views/modules/Market.vue";
import Message from "@/views/modules/message/Message.vue";
import MessageDetail from "@/views/modules/message/MessageDetail.vue";
import Repository from "@/views/modules/Repository.vue";
import MyProperty from "@/views/modules/MyProperty.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/account",
        name: "Account",
        component: Account
      },
      {
        path: "/history",
        name: "History",
        component: History
      },
      {
        path: "/market",
        name: "Market",
        component: Market
      },
      {
        path: "/message",
        alias: "",
        name: "Message",
        component: Message,
        children: [
          {
            path: "/message/detail",
            name: "MessageDetail",
            component: MessageDetail
          }
        ]
      },
      {
        path: "/repository",
        name: "Repository",
        component: Repository
      },
      {
        path: "/myproperty",
        name: "MyProperty",
        component: MyProperty
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
