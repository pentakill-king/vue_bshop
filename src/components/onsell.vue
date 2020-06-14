<template>
<div class="top10">
   
    <div
      v-if="$store.state.onsell"
      class="mg10"
     >
     

      <div class="center-part">
        <div
          v-for="(item,index) in $store.state.onsell"
          :key="index"
        >

          <div class="  bd mg10">
            <img
              class="bd vh"
              :src="item.pict_url+`_240x240xzq90.jpg_.webp`"
              alt=""
            >
            <div class="col rtt">
              <div>
                <p class="vh2">{{item.title}}</p>
              </div>
              <div>
                <label class="del">原价{{item.zk_final_price}}</label>
                -优惠{{item.coupon_amount}}</div>

              <div>{{item.volume}}.人购买</div>
              
            </div>

          </div>

        </div>

      </div>

    </div>

     <div v-else>
        loading....
    </div>

   



    
</div>
</template>

<script>

export default 

{
    async created(){
let res = await this.request("onsell",1)
this.$store.commit("addonsell",res.data.data.tbk_dg_optimus_material_response.result_list.map_data)
        

    },
    methods: {
    
      
  },
  data() {
    return {
   
    };
  }
 }
</script>

 <style lang="less" scoped>

 .vh {

  max-width: 240px;
  min-width:120px;
  align-self: center;
  margin: 1vw;
}
 .mg10 {
  margin: 1vw;
}

.center-part {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.top10 {
  margin-top: 10vh;
}
.vh2 {
  max-height: 48px;
  overflow: hidden;
  flex-wrap: wrap;
  max-width: 240px;
  color: #ff3300;
}

 </style>