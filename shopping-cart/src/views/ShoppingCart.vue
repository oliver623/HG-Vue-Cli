<template>
  <div class="ShoppingCart">
    <div class="head">我的购物车</div>
    <div class="body" v-for="(cart, index) in cart" :key="index">
      <div class="bold"> {{cart.name}}</div>
      <div class="light"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  data() {
    return {
      cart:[]
    };
  },

  mounted(){
    this.cart = this.$store.state.getCartProduct
  }
  
};
</script>

<style scoped lang="scss">
.ShoppingCart {
  text-align: center;
    .head {
    color: #43425d;
    font-size: 30px;
    font-family: PingFang SC;
    font-weight: 600;
    margin-bottom: 40px;
    opacity: 0.8;
  }
}
</style>
