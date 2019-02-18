<template>
  <div class="page" id="carefully">
    <div class="cli" v-if="this.id==''">
      <header class="header border-bottom">
        <p class="sao">
          <van-icon name="scan" class="icon-sao"/>
          <span>扫一扫</span>
        </p>
        <p class="sou">
          <van-icon name="search" class="icon-sou"/>搜索目的地或酒店
        </p>
      </header>
      <carefully-content @add="handele"/>
    </div>
    <div class="listItem" v-else>
      <header class="listItem-header">
        <van-icon name="arrow-left" class="icon" @click="backAction"/>
        <span>{{this.title}}</span>
      </header>
      <carefullyItemList :id="this.id"/>
    </div>
  </div>
</template>

<script>
import carefullyContent from "@/components/carefullyCom/catefullyContent";
import carefullyItemList from "@/components/carefullyCom/catefullyItemList";
export default {
  data() {
    return {
      id: "",
      title: ""
    };
  },
  components: {
    carefullyContent,
    carefullyItemList
  },
  methods: {
    handele(id) {
      this.id = id;
    },
    backAction(){
      this.$router.push('/carefully');
    }
  },
  watch: {
    id: function() {
      if (this.id ===4123498) {
        this.title = "团建";
      }
      if (this.id ===4123499) {
        this.title = "亲子主题房";
      }
      if (this.id ===4123500) {
        this.title = "发现好去处";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 44px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  .sao {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 20px;
    span {
      font-size: 12px;
      color: #999999;
    }
    .icon-sao {
      font-size: 20px;
      color: #999999;
    }
  }
  .sou {
    flex: 1;
    background: #f2f3f7;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    color: #999999;
    font-weight: bold;
    border-radius: 4px;
    .icon-sou {
      font-size: 21px;
      padding: 0 10px;
      transform: translateY(6px);
    }
  }
}
.listItem-header {
  height: 44px;
  width: 100%;
  line-height: 44px;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  .icon{
    font-size: 20px;
    color:#4A4A4A ;
    transform: translateY(10px);
  }
  span{
    font-size: 18px;
    color:#333;
    flex: 1;
    text-align: center;
  }
}
</style>

