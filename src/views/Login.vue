<template>
  <div class="login">
    <h1>登录界面</h1>
    <Ezflycard>dfdsfdsffsdfdssfdsdffsdasdf</Ezflycard>
    <Jin>
      <template v-slot:header="item">
        替换掉具名插槽header中的里面的值{{ item.uname }} {{ item.age }}
      </template>
      <template v-slot:main> 替换掉具名插槽mian里面的值 </template>
      <template v-slot:footer> 替换掉具名插槽footer中的里面的值 </template>
    </Jin>
    <button @click="dianji">fetch进行异步请求</button>
    <li v-for="(item, index) in arr" :key="index">{{ item.goods_name }}</li>
    <div id="app">
      <h1>购物车</h1>
      <input type="checkbox" v-model="quanxuan" @change="clickQuanxuan" />
      全选&全不选
      <hr />
      <ul>
        <li v-for="(item, index) in carts" :key="index">
          <input
            type="checkbox"
            :value="item"
            v-model="cartList"
            @change="cartClick"
          />
          &nbsp; 标题：{{ item.title }}， 价格：{{ item.price }}， 数量：{{
            item.number
          }}&nbsp;
          <input type="text" size="1" v-model="item.number" />
          <input type="button" value="+" @click="addNum(index)" />
        </li>
      </ul>
      <hr />
      <hr />
      <h2>勾选商品{{ cartList }}</h2>
      <h2>总数量：{{ totalNum }}，总价：{{ totalPriceNum }}</h2>
    </div>
  </div>
</template>

<script>
import Jin from "./Jin.vue";
import Ezflycard from "@/components/Ezflycard.vue";
export default {
  data() {
    return {
      arr: [],
      quanxuan: false,
      //购物车商品
      cartList: [],
      carts: [
        { title: "商品1", price: 1, number: 1 },
        { title: "商品2", price: 2, number: 1 },
        { title: "商品3", price: 3, number: 1 },
      ],
      totalPriceNum: 0,
      totalNum: 0,
    };
  },
  created() {
    console.log("首次获取到路径上的参数", this.$route.params.id);
  },
  //   动态路由的获取
  // watch: {
  //   $route(newDate, oldDate) {
  //     console.log(newDate, oldDate);
  //   },
  // },
  beforeRouteUpdate(newData, oldData, next) {
    console.log(newData, oldData);
    next();
  },
  methods: {
    dianji() {
      fetch("/api/v1/goods/index.jsp")
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          this.arr = res.data.list;
        });
    },
    cartClick() {
      if (this.cartList.length == this.carts.length) {
        this.quanxuan = true;
      } else {
        this.quanxuan = false;
      }
      this.totalPrice();
    },
    clickQuanxuan() {
      if (!this.quanxuan) {
        this.cartList = [];
      } else {
        this.cartList = this.carts;
      }
      this.totalPrice();
    },
    addNum(index) {
      this.carts[index].number++;
      this.totalPrice();
    },
    totalPrice() {
      let total = 0;
      let num = 0;
      for (let i = 0; i < this.cartList.length; i++) {
        num += parseInt(this.cartList[i].number);
        total +=
          parseInt(this.cartList[i].number) *
          parseFloat(this.cartList[i].price);
      }
      this.totalPriceNum = total;
      this.totalNum = num;
    },
  },
  components: {
    Jin,
    Ezflycard,
  },
};
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
