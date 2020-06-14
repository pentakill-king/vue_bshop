<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">


#nprogress .bar {
				background: red !important
			  }

        html body{
          background:rgb(41, 41, 41) ;
          color:whitesmoke ;
        }
        a{
          text-decoration: none;
        }

        .top10 {
  margin-top: 10vh;
}



.del {
  text-decoration: line-through;
}
.bd {
  border: 1px solid rgb(0, 174, 255);
  box-shadow: 1px 1px 3px rgb(1, 89, 129) ;
  border-radius: 2px;
}

.btn {
  background: red;
  border-radius: 2px;
  box-shadow: 1px 1px 2px white;
  color: white;
}



.start {
  align-self: flex-start;
}

.end {
  align-self: flex-end;
}
.col {
  display: flex;
  flex-direction: column;
}
.row {
  display: flex;
}
.bt {
  justify-content: space-between;
}

.ct {
  justify-content: center;
}
</style>