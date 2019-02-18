<template>
  <scroller :top="44">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item class="banner" v-for="item in bannerList" :key="item.id">
        <img :src="item.img" @click="btnAction(item.id)">
      </van-swipe-item>
    </van-swipe>
    <div class="list">
      <li v-for="list in picList" :key="list.id">
        <div class="img">
          <img v-lazy="list.img" alt>
          <span class="price">￥{{list.price}}</span>
        </div>
        <p>
          <span>{{list.name}}</span>
          <span>{{list.topName}}</span>
        </p>
        <i>{{list.title}}</i>
        <span class="yule">
          <em>#{{list.bieshu}}</em>
          <em>#{{list.chihe}}</em>
          <em>#{{list.meijin}}</em>
        </span>
      </li>
    </div>
  </scroller>
</template>

<script>
import { getCarefullyFocusList } from "@/services/carefullyService";
import Vue from "vue";
import { Swipe, SwipeItem, Lazyload } from "vant";
Vue.use(Swipe)
  .use(SwipeItem)
  .use(Lazyload);
export default {
  data() {
    return {
      bannerList: [],
      picList: [],
    };
  },
  created() {
    getCarefullyFocusList().then(data => {
      this.bannerList = data.bannerList;
      this.picList = data.newItemList;
    });
  },
  methods: {
    btnAction(id) {
      this.$emit('add',id);
    }
  }
};
</script>

<style lang="scss" scoped>
.banner {
  img {
    width: 100%;
  }
}
.list {
  margin-top: 10px;
  .img {
    position: relative;
    img {
      width: 100%;
      padding: 10px 0;
    }
    .price {
      position: absolute;
      left: 0;
      bottom: 20px;
      display: block;
      width: 62px;
      height: 36px;
      background: #000;
      opacity: 0.6;
      font-size: 18px;
      color: #fff;
      line-height: 36px;
      text-align: center;
    }
  }
  p {
    padding: 0 10px;
    box-sizing: border-box;
    height: 30px;
    font-size: 12px;
    color: #fff;
    width: 100%;
    display: flex;
    align-items: center;
    span:nth-of-type(1) {
      display: block;
      width: 64px;
      height: 20px;
      line-height: 20px;
      background: #85b9a0;
      text-align: center;
      border-radius: 3px;
      margin-right: 20px;
    }
    span:nth-of-type(2) {
      display: block;
      width: 64px;
      height: 20px;
      line-height: 20px;
      background: #c7ab7b;
      text-align: center;
      border-radius: 3px;
    }
  }
  .yule {
    display: block;
    padding: 0 10px;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 20px;
    color: #999;
    em {
      padding-right: 10px;
    }
  }
  i {
    padding: 0 10px;
    box-sizing: border-box;
    font-size: 16px;
    color: #333;
    line-height: 30px;
  }
}
</style>

