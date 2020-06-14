<template>
<div>
     <div class="row bar">
         <div>logo</div>
         <div><router-link to="/Topbar/Find">发现</router-link></div>
         <div><router-link to="/Topbar/Tpwd">  卷场</router-link></div>
         <div><router-link to="/Topbar/Onsell">特惠</router-link></div>
         <div><input v-model="keyword" @keyup.enter="submit" type="text"></div>
         <div><router-link  @click="submit" to="/Topbar/Search">搜索</router-link></div>
            
           
       </div>

   
      <router-view/>
</div>
</template>

<script>
export default 
{
    data() {
    return {
     keyword:''
    }},
    
    methods: {
    submit(){
        console.log(this.$store.state.keyword);
        
        this.$store.commit("addkeyword", this.keyword)
        const that=this
     let res=  this.request("search",1,that.$store.state.keyword).then(function(res) {
           
               that.$store.commit("addsearch",res.data.data.tbk_dg_material_optional_response.result_list.map_data)

        })
    }
      
  },
 
 }
</script>

 <style lang="less" scoped>
 .bar{
     align-items: center;
     height: 40px;
     color: white;
     div{margin-right: 10px;
     a{color: white;
     text-decoration: none;}
     };
     .router-link-active {
    text-decoration: none;
    color: red;
}
 }
  .row{display: flex;
  }

  .fx{
  position: fixed;
  top:0px;
  max-height: 10vh;
}
 </style>