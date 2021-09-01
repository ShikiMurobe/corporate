<template>
  <section id="about" v-if="!loading">
    <h1 class="section-h1">Service</h1>
    <div class="container mt-4 md:mt-20 mx-auto flex flex-wrap items-between gap-8">
      <div class="card flex-1 mx-4 md:mx-auto border shadow-lg px-6 md:px-12 py-4 md:py-8 flex flex-col gap-2 justify-start"
        v-for="service in services" :key="service.title"
      >
        <i :class="service.icon" class="text-center text-gray-600"></i>
        <h3 class="text-center text-1x1 md:text-2xl">{{service.title}}</h3>
        <p class="text-center price">{{service.price}}</p>
        <p class="caption">{{service.caption}}</p>
        <div class="flex flex-col mt-2"
          v-for="section in service.section" :key="section.title"
        >
          <p class="section-title">{{section.title}}</p>
          <p class="section-content">{{section.content}}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import WPModule from "../modules/wp"
export default {
  data(){
    return{
      loading: false,
      services: {
      },
    }
  },
  async mounted(){
    this.loading = true
    //WPから取得
    const data = await WPModule.getServices()
    this.$store.dispatch("setServicesAction", data)
    this.setData(this.$store.state.services)
    this.loading = false
  },
  computed: {
  },
  methods: {
    setData(data){
      this.services = data
    }
  },
}
</script>
<style lang="scss" scoped>
h2{
  font-size: 2rem;
  font-weight: 500;
}
.card{
  font-size: 1rem;
  white-space:pre-wrap;
  word-wrap:break-word;
}
i{
  font-size: 7rem;
}

.price{
  font-size: 1.1rem;
}
.caption{
  font-size: 0.9rem;
}
.section-title{
  font-weight: 500;
}
.section-content{
  font-size: 0.9rem;
}
@media screen and (max-width: 768px){
  h3{
    font-weight: 600;
  }
  .price{
    font-size: 0.9rem;
    font-weight: 600;
  }
}
</style>