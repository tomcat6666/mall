<template>
  <div>
    购买的数量：{{ totalNum }}<br />
    <hr />
    <hr />
    <li v-for="(item, index) in cartList" :key="index">
      <button @click="clickCartFn({ state: '+', index })">+</button>
      {{ item.id }}------ {{ item.title }}----- {{ item.num }}
      <button @click="clickCartFn({ state: '-', index })">-</button>
    </li>
  </div>
</template>


<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      cartList: (state) => state.carts.castList,
      //   获取里面的total中的数据
      totalNum: (state) => state.carts.total,
    }),
  },
  methods: {
    //辅助函数的写法
    ...mapMutations({
      clickCartFn: "carts/totalNumadd",
    }),
  },
};
</script>
