<template>
  <div class="Products">
    <h2>商品列表</h2>
    <el-row :gutter="20">
      <el-col :span="6" v-for="(product, index) in products" :key="index">
        <div :title="product.description">{{product.name}} -- {{product.description}}</div>
        <div :title="product.description">{{product.price}} -- {{product.amount}} <i class="el-icon-circle-plus" @click="addCart(product)"></i> </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="20" v-for="(product, index) in getCartProduct" :key="index">
        <div>{{product.name}} * {{sum}}</div> <i class="el-icon-remove" @click="delCart(product)"></i>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data () {
    return {
      products: [
        {id:1, name: '苹果', price: '29.9', amount: '100', status: false, description: '大苹果，好吃脆又甜，买它！'},
        {id:2, name: '梨', price: '16.9', amount: '100', status: false, description: '大梨，好吃脆又甜，买它！'},
        {id:3, name: '车厘子', price: '399', amount: '100', status: false, description: '大车厘子，好吃脆又甜，买它！'},
        {id:4, name: '橘子', price: '9.9', amount: '100', status: false, description: '大橘子，好吃脆又甜，买它！'},
        {id:5, name: '香蕉', price: '15.8', amount: '100', status: false, description: '大香蕉，好吃脆又甜，买它！'},
        {id:6, name: '葡萄', price: '7.9', amount: '100', status: false, description: '大葡萄，好吃脆又甜，买它！'},
        {id:6, name: '西瓜', price: '19.9', amount: '100', status: false, description: '大西瓜，好吃脆又甜，买它！'},
        {id:7, name: '榴莲', price: '199', amount: '100', status: false, description: '大榴莲，好吃脆又甜，买它！'},
        {id:8, name: '草莓', price: '129', amount: '100', status: false, description: '大草莓，好吃脆又甜，买它！'},
        {id:9, name: '菠萝蜜', price: '132', amount: '100', status: false, description: '大菠萝蜜，好吃脆又甜，买它！'},
        {id:10, name: '柚子', price: '11.5', amount: '100', status: false, description: '大柚子，好吃脆又甜，买它！'},
        {id:11, name: '猕猴桃', price: '35', amount: '100', status: false, description: '大猕猴桃，好吃脆又甜，买它！'},
        {id:12, name: '杨梅', price: '50.1', amount: '100', status: false, description: '大杨梅，好吃脆又甜，买它！'},
      ],
      sum: 0
    }
  },
  computed: {
    // 获取购物车列表
    getCartProduct(){
      return this.products.filter(val => val.status)
    }
  },
  methods: {
    // 点击加购物车图标，添加商品到购物车中
    addCart(product){
      product.status = true
      product.amount -= 1
      this.sum += 1
    },
    delCart(product) {
      product.amount += 1
      this.sum -= 1
      if(this.sum === 0) product.status = false
    }
  }
}
</script>

<style scoped lang="scss">
.Products{
  text-align: center;
}
</style>