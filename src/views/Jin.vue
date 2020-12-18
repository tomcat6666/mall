<template>
  <div class="jin">
    {{ getTotal }}
    <router-link to="/cart">购物车</router-link>
    <router-link to="/goods">商品</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    // 获取到carts中的total
    ...mapState({
      getTotal: (state) => state.carts.total,
    }),
  },
  methods: {},
};
</script>
