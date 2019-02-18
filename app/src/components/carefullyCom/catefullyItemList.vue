<template>
  <scroller class="app" :top="44">
    <div class="pic">
      <img :src="itemList.PicUrl" alt>
    </div>
    <ul class="list">
      <li class="list-item" v-for="item in itemList.list" :key="item.id">
        <div class="img">
          <img :src="item.img" alt>
          <p v-if="item.people">{{item.people}}</p>
        </div>
        <span class="yule">
          <em>{{item.chihe}}</em>
        </span>
        <div class="foot">Go</div>
      </li>
    </ul>
  </scroller>
</template>
<script>
import {
  getCarefullyTuanJian,
  getCarefullyQingZi,
  getCarefullyFaXian
} from "@/services/carefullyService";
export default {
  props: ["id"],
  data() {
    return {
      selectId: "",
      itemList: []
    };
  },
  mounted() {
    this.selectId = this.id;
  },
  watch: {
    selectId: function() {
      if (this.id === 4123498) {
        getCarefullyTuanJian().then(data => {
          this.itemList = data;
          console.log(this.itemList);
        });
      }
      if (this.id === 4123499) {
        getCarefullyQingZi().then(data => {
          this.itemList = data;
        });
      }
      if (this.id === 4123500) {
        getCarefullyFaXian().then(data => {
          this.itemList = data;
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.pic {
  width: 100%;
  img {
    width: 100%;
  }
}
.list {
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  box-sizing: border-box;
  justify-content: space-between;
  .list-item {
    width: 48%;
    margin: 10px 0;
    .img {
      position: relative;
      img {
        width: 144px;
        height: 118px;
      }
      p{
        position: absolute;
        left: 0;
        top: 0;
        width:79px;
        height: 26px;
        background: #F9D080;
        line-height: 26px;
        text-align: center;
        font-size: 14px;
        color: #B67E39;
      }
    }
    .yule {
      display: block;
      padding: 0 10px;
      box-sizing: border-box;
      font-size: 12px;
      line-height: 20px;
      color: #999;
      em {
        padding-right: 10px;
      }
    }
    .foot {
      width: 100%;
      height: 27px;
      background: #7989e8;
      font-size: 17px;
      color: #fff;
      text-align: center;
      line-height: 27px;
    }
  }
}
</style>
