<template>
  <div id="app">
    <router-view/>
     <nav class="nav border-top">
         <router-link to="/catefully" class="item"><van-icon name="notes-o" class="icon"/>精选</router-link>
         <router-link to="/mine" class="item"><van-icon name="user-circle-o" class="icon"/>我的</router-link>
     </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.nav{
  width: 100%;
  height: 49px;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  .item{
   flex: 1;
   text-align: center;
   font-size: 12px;
   color: #9F9F9F ;
   padding: 5px 0;
   box-sizing: border-box;
   .icon{
     display: block;
     font-size: 28px;
   }
  }
  a.router-link-active{
    color: #E95957;
   }
}
.page{
     width: 100%;
     position: absolute;
     left: 0;
     top: 0;
     bottom: 49px;
   }
</style>

