<template>
  <div class="homeSection">
    <div class="textBox">
      <div class="inner">
        <h1>Branding design strategy</h1>
        <p>Let's go to hero</p>
      </div>
    </div>
    <div class="infoBox">
      <div class="inner">
        <p class="title">九號夜市</p>
        <p class="des">拉啦啦啦拉啦啦啦拉啦啦啦拉啦啦啦拉啦啦啦拉啦啦啦拉啦啦啦拉啦啦啦拉啦啦啦拉啦啦啦拉啦啦啦拉啦啦啦拉啦啦啦拉啦啦啦拉啦啦啦拉啦啦啦</p>
      </div>
    </div>
    <div class="bannerArea">
      <div class="imgBox">
        <img src="../assets/market_banner.png" alt="banner">
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.homeSection {
  margin: 0 auto;
  max-width: 1350px;
  position: relative;
  // background-color: #f7f7f7;
}

.bannerArea {
  margin: 50px 0;
  width: 100%;

  .imgBox {
    display: flex;
    justify-content: center;
    width: 92%;
    height: 650px;
    margin-left: auto;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.textBox {
  width: 100%;
  text-align: left;
  font-size: 40px;
  font-weight: 800;
  line-height: 1.15;
  position: absolute;
  top: 5%;
  left: 0;

  .inner {
    color: #42b983;
    width: 490px;
  }
}

.infoBox {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 36px 0 10px 36px;
  background-color: #fff;
  width: 480px;
  text-align: left;

  p {
    color: #1e7972;
    line-height: 1.5;
  }
}

.socialMediaBox {
  a {
    margin-right: 8px;
    img {
      width: 30px;
      filter: invert(0%);
    }

    &:hover {
      img {
        filter: invert(52%) sepia(84%) saturate(277%) hue-rotate(101deg) brightness(100%) contrast(98%);
        transition: filter 0.3s;
      }
    }
  }
}

@media (max-width:1180px) {
  
}
</style>

<!-- <script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script> -->
