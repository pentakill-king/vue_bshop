<template>
  <div class="top10">
    <div>
      <div >
        <div class="row  bd ">
          <div
            v-for="(item,index) in $store.state.recom"
            :key="index"
          >


          <p class="mg10" @click="requestrecomc(item.favorites_id)" >{{item.favorites_title}}</p>
           
          </div>
        </div>
      </div>
    </div>
    <div>

      <div class="mg10">

        <div
          v-if="$store.state.recomc"
          class="center-part"
        >
          <div
            v-for="(item,index) in $store.state.recomc"
            :key="index"
          >

            <div class=" bd mg10">
              <img
                class="bd vh"
                :src="item.pict_url+`_240x240xzq90.jpg_.webp`"
                alt=""
              >
              <div class="col rtt">
                <div>
                  <p class="vh2">{{item.title}}</p>
                </div>
                <div class="row">
                  <div >
                    <a
                      class="btn"
                      :href="item.coupon_click_url"
                    > 领卷购买</a>
                  </div>
                  <label >原价{{item.zk_final_price}}

                  </label>
                  <!-- -优惠{{item.coupon_amount}} -->
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  async created() {
    let res = await this.request("recom");
    this.$store.commit("addrecom", res.data.data);
    console.log(this.$store.state.recom);

    let res1 = await this.request("recomc", 2011849239);
    this.$store.commit(
      "addrecomc",
      res1.data.data.tbk_uatm_favorites_item_get_response.results.uatm_tbk_item
    );
  },

  methods: {
      async requestrecomc(k){
     
      let res1= await this.request("recomc", k);
    this.$store.commit(
      "addrecomc",
      res1.data.data.tbk_uatm_favorites_item_get_response.results.uatm_tbk_item
    );

    },
  },
  data() {
    return {};
  }
};
</script>

 <style lang="less" scoped>
.mg10 {
  margin: 1vw;
}
.row {
  display: flex;
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
  max-height: 46px;
  overflow: hidden;
  flex-wrap: wrap;
  max-width: 243px;
  color: #ff3300;
}
.btn {
  background: red;
  border-radius: 2px;
  box-shadow: 1px 1px 2px white;
  color: white;
}


</style>