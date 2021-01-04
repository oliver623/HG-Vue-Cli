<template>
  <div class="Products">
    <div class="head">商品列表</div>
    <div class="body">
      <el-row :gutter="30">
        <el-col
          :span="6"
          v-for="(product, index) in products"
          :key="index"
          class="product"
        >
          <div class="bold" :title="product.name">
            {{ product.name }}
          </div>
          <div class="light" :title="product.description">
            {{ product.description }}
          </div>
          <div class="price" :title="product.price">
            价格：{{ product.price }}
          </div>
          <div class="light">
            <i
              v-if="product.checkSum !== 0"
              class="el-icon-remove"
              @click="delCart(product)"
            ></i>
            库存：{{ product.sum }}
            <i class="el-icon-circle-plus" @click="addCart(product)"></i>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="foot">
      <el-button plain @click="goCart">去购物车</el-button>
      <el-button plain @click="goCal">去结算</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "苹果",
          price: "29.9",
          sum: 10,
          checkSum: 0,
          description: "大苹果，好吃脆又甜，买它！",
        },
        {
          id: 2,
          name: "梨",
          price: "16.9",
          sum: 12,
          checkSum: 0,
          description: "大梨，好吃脆又甜，买它！",
        },
        {
          id: 3,
          name: "车厘子",
          price: "399",
          sum: 3,
          checkSum: 0,
          description: "大车厘子，好吃脆又甜，买它！",
        },
        {
          id: 4,
          name: "橘子",
          price: "9.9",
          sum: 5,
          checkSum: 0,
          description: "大橘子，好吃脆又甜，买它！",
        },
        {
          id: 5,
          name: "香蕉",
          price: "15.8",
          sum: 8,
          checkSum: 0,
          description: "大香蕉，好吃脆又甜，买它！",
        },
        {
          id: 6,
          name: "葡萄",
          price: "7.9",
          sum: 2,
          checkSum: 0,
          description: "大葡萄，好吃脆又甜，买它！",
        },
        {
          id: 6,
          name: "西瓜",
          price: "19.9",
          sum: 6,
          checkSum: 0,
          description: "大西瓜，好吃脆又甜，买它！",
        },
        {
          id: 7,
          name: "榴莲",
          price: "199",
          sum: 3,
          checkSum: 0,
          description: "大榴莲，好吃脆又甜，买它！",
        },
        {
          id: 8,
          name: "草莓",
          price: "129",
          sum: 11,
          checkSum: 0,
          description: "大草莓，好吃脆又甜，买它！",
        },
        {
          id: 9,
          name: "菠萝蜜",
          price: "132",
          sum: 1,
          checkSum: 0,
          description: "大菠萝蜜，好吃脆又甜，买它！",
        },
        {
          id: 10,
          name: "柚子",
          price: "11.5",
          sum: 7,
          checkSum: 0,
          description: "大柚子，好吃脆又甜，买它！",
        },
        {
          id: 11,
          name: "猕猴桃",
          price: "35",
          sum: 9,
          checkSum: 0,
          description: "大猕猴桃，好吃脆又甜，买它！",
        },
        {
          id: 12,
          name: "杨梅",
          price: "50.1",
          sum: 10,
          checkSum: 0,
          description: "大杨梅，好吃脆又甜，买它！",
        },
      ],
    };
  },
  watch:{
    // 获取购物车列表
    products:{
      handler(val, old) {
        let cartProduct = this.products.filter((val) => val.checkSum!==0);
        this.$store.commit('getCartProduct', cartProduct)
      },
      immediate:true,
      deep: true
    }
  },
  methods: {
    // 点击加购物车图标，添加商品到购物车中
    addCart(product) {
      // sum:总计商品数量
      // checkSum:购物车中的商品数量
      if (product.sum === 0) this.$message.warning("没有库存了！");
      else {
        product.sum -= 1;
        product.checkSum += 1;
      }
    },
    // 减购物车
    delCart(product) {
      if (product.checkSum !== 0) {
        product.sum += 1;
        product.checkSum -= 1;
      } else {
        this.$message.warning("购物车已经空了，别在减啦！");
      }
    },

    // 跳转购物车页面
    goCart() {
      this.$router.push("/cart");
    },
    // 跳转结算页面
    goCal() {
      this.$router.push({ name: "Calculate" });
    },
  },
};
</script>

<style scoped lang="scss">
.Products {
  text-align: center;

  .head {
    color: #43425d;
    font-size: 30px;
    font-family: PingFang SC;
    font-weight: 600;
    margin-bottom: 40px;
    opacity: 0.8;
  }

  .body {
    .product {
      margin: 10px;
      width: 320px;
      height: 100px;
      background: #f9f9f9;
      box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.07);
      opacity: 1;
      border-radius: 4px;
      cursor: pointer;
      .bold {
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: 600;
        color: #43425d;
        opacity: 1;
      }
      .light {
        font-size: 13px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #43425d;
        opacity: 0.7;

        .el-icon-circle-plus {
          color: #ff734a;
        }
        .el-icon-remove {
          color: #4f7cf7;
        }
      }
      .price {
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: 600;
        color: orangered;
        opacity: 1;
      }
    }
  }
  .foot {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
