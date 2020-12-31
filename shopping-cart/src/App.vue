<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">商品列表</router-link> |
      <router-link to="/cart">购物车</router-link> |
      <router-link :to="{ name: 'Calculate' }">结算</router-link> -->

      <el-tabs
        tab-position="bottom"
        type="card"
        class="tabStyle"
        :class="liveStyle ? 'tabClick' : ''"
        @tab-click="handleClick"
      >
        <el-tab-pane
          v-for="(tab, index) in tabs"
          :key="index"
          :label="tab"
          :name="tab"
        ></el-tab-pane>
      </el-tabs>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      tabs: ["商品列表", "购物车", "结算"],
      liveStyle: false,
    };
  },
  methods: {
    handleClick(tab, event) {
      if (tab.active) this.liveStyle = true;
      if(tab.name === '商品列表') this.$router.push('/')
      else if(tab.name === '购物车') this.$router.push({path: '/cart'})
      else this.$router.push({name: 'Calculate'})
    },
  },
};
</script>

<style lang="scss" scoped>
#nav {
  text-align: center;
}
.tabStyle {
  &.tabClick {
    
  color: orangered;
  }
}
</style>
