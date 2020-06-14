
import axios from "axios"


import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' //这个样式必须引入



export const request = (name,k,v)=>{
    switch (name){

    case 'tpwd' :
        //传入领劵url
        let res= axios({
            url: `/tpwd`,
            method:"post",
            data:{
            url: `${url}`
                   }
        }).then(function (res) {
            if (res.status == 200) {
               
               return res
    
            } else {
                alert("获取失败！");
            }})
               return res

    case 'search' :
        // 传入搜索页码 关键字
        NProgress.start()
        let res1=axios({url:`/search`,params:{page:k,keyword:v}}).then(function (res) {
            if (res.status == 200) {
                NProgress.done()
               
               return res

            } else {
                alert("获取失败！");
            }})
            console.log(res1);
            
               return res1

    case 'goods' :
        // 传入商品id
        let res2= axios({
        url: `/goods/relative`,
        method:"post",
        params:{
        goodsId: k
               }
    }).then(function (res) {
        if (res.status == 200) {
           
           return res

        } else {
            alert("获取失败！");
        }})
           return res2

    case 'lists' :

        //  传入发现id 页码
        NProgress.start()
        let res3= axios({
            url: `/discovery/`+k+`/`+v,
         }).then(function (res) {
            if (res.status == 200) {
                NProgress.done()
               return res
    
            } else {
                alert("获取失败！");
            }})
               return res3

     case 'discovery'  : 
     let res4= axios({
                url: '/discovery/categories',
                
            }).then(function (res) {
                if (res.status == 200) {
                   
                   return res
        
                } else {
                    alert("获取失败！");
                }})
                   return res4

     case 'onsell' :
        //  传入特惠页码
        let res5=  axios({
            url: `/onSell/`+k
           
        }).then(function (res) {
            if (res.status == 200) {
               
               return res
    
            } else {
                alert("获取失败！");
            }})
               return res5 

     case 'recom' :
        let res6= axios({
            url: `/recommend/categories`
           
        }).then(function (res) {
            if (res.status == 200) {
               
               return res
    
            } else {
                alert("获取失败！");
            }})
               return res6 

     case 'recomc' :
        //  传入卷场分类id
        let res7= axios({
            url: `/recommend/`+k
          
        }).then(function (res) {
            if (res.status == 200) {
               
               return res
    
            } else {
                alert("获取失败！");
            }})
               return res7

    
}}




export default {
  
    request
}