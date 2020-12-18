<template>
  <div>
    购买总数量：{{ total }}
    <li v-for="(item, index) in goodslist" :key="index">
      <button @click="addGoodsNum({ type: '+', index })">+</button>
      {{ item.id }}----{{ item.goods_name }}-----{{ item.num
      }}<button @click="addGoodsNum({ type: '-', index })">-</button>
    </li>
    <router-view></router-view>
  </div>
</template>

<script>
//进行类似于解构赋值的语法
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      total: (state) => state.goods.total,
      goodslist: (state) => state.goods.goodsList,
    }),
  },
  methods: {
    ...mapMutations({
      addGoodsNum: "goods/addGoodsNum",
    }),
  },
};
</script>