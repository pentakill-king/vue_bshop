<template>
  <div class="top10">
    <div class="col">
      <div class="row">

        <div
          v-if="$store.state.discovery"
         
         >
          <div class="col lt bd ">
            <div
              v-for="(item,index) in $store.state.discovery"
              :key="index"
            >
            <p @click="requestlist(item.id)" >{{item.title}}</p>
             
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>

              <div
                v-if="$store.state.lists"
                class="col"
              >
                <div
                  v-for="(item,index) in $store.state.lists"
                  :key="index"
                >

                  <div class="row center-part bd">
                    <img
                      class="bd vh"
                      :src="item.pict_url+`_180x180xzq90.jpg_.webp`"
                      alt=""
                    >
                    <div class="col rtt">
                      <div>
                        <h2 class="vh2">{{item.title}}</h2>
                      </div>
                      <div>
                        <label class="del">原价{{item.zk_final_price}}</label>
                        -优惠{{item.coupon_amount}}</div>

                      <div>{{item.volume}}.人购买</div>
                      <div class="end">
                        <a
                          class="btn"
                          :href="item.coupon_click_url"
                        > 领卷购买</a>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
        <div class="col">

          <div v-show="$store.state.lists">
            <div
              v-for="(item,index) in $store.state.lists.slice(0,5)"
              
              :key="index"
            >

              <div> <img
                  :src="item.pict_url+`_240x240xzq90.jpg_.webp`"
                  alt=""
                > </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  </div>

</template>

<script>

export default {
  data() {
    return {
     
    };
  },
async  created() {
let that=this
    if (this.$store.state.discovery == null) {
      
      let res = this.request("discovery").then((res)=>{
        that.$store.commit("adddiscovery", res.data.data);
      })

       if (that.$store.state.lists == null) {

      let res1= await that.request("lists",9660,1)
      that.$store.commit("addlists",res1.data.data)
     
      
    } else {
      return;
    }
      
    } else {
      return;
    }

  },
  methods: {
   async requestlist(k){
     
      let res1= await this.request("lists",k,1)
      this.$store.commit("addlists",res1.data.data)

    },
    
    
    async goods(k) {
      let goods = await api.goods(k);
      console.log(goods.data.data.tbk_item_recommend_get_response.results);
    },
   
  }
};
</script>

 <style lang="less" scoped>

.vh2 {
  max-height: 20vh;
  overflow: hidden;
  color: #ff4800;
}

.vh {
  min-width: 180px;
  align-self: center;
  margin: 1vw;
}
.rtt {
  div {
    margin: 10px;
  }
}



.center-part {
  //  min-width: 170vw;
  min-width: 690px;
  max-width: 710px;
  margin: 0px 30px 20px 30px;
}



.lt {
  width: 100px;
  align-items: center;
  

  div {
    margin: 10px;
    color:red
  }
  div:hover {
    background: #000;
    width: 100%;
  }
}

.fx {
  position: fixed;
  left: 0px;
}
</style>