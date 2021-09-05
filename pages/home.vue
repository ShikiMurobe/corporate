<template>
  <section id="top" class="bg-scroll">
    <div class="title md:ml-12 text-center md:text-left">
      <h1>Shikibu's Corporate Site</h1>
      <span>Vishnya Zimy</span>
    </div>
  </section>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
#top{
  margin-bottom: inherit;
  min-height: 100vh;
  background: url("~assets/images/mainvisual.png") no-repeat;
  background-size: contain;
  background-position:left bottom;
  .title{
    font-family: "Kaushan Script";
    text-shadow: 1px 1px 2px #ffffff;
    position: absolute;
    left: 0;
    bottom: 20%;
    h1{
      font-size: 4rem;
      font-weight: 600;
    }
    span{
      font-size: 3rem;
    }
  }
}
@media screen and (max-width: 768px){
  #top{
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    .title{
      position: static;
    }    
  }
}
</style>