<template>
  <div v-if="total">
    <div class="content">
       <ul>
         <li v-for="(value,name) in pageContent">
           {{name}}---{{value}}
         </li>
       </ul>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="hander"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Pagination } from 'element-ui';
  import {mapState} from 'vuex'
  Vue.component(Pagination.name, Pagination);
  export default {

    data() {
      return {
         pageContent:null,
         total:10
      }
    },
    computed:{
      ...mapState(['shiwu'])
    }
    ,
    methods:{
      hander(page){
        const pageContent=this.shiwu[page-1]
        this.pageContent=pageContent
      }
    },
    created(){
      this.$store.dispatch('getshiwu')
    },
    watch:{
      shiwu(){
        const pageContent=this.shiwu[0]
        this.pageContent=pageContent
        this.total=this.shiwu.length*10
      }
    },
    components: {

    }

  }
</script>

<style scoped>
  .content{
    width:700px;
    height:400px;
    background: #ff0;
  }
</style>
