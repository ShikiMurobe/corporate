<template>
  <section id="about" v-if="!loading">
    <h1 class="section-h1">Works</h1>
    <div class="container mt-4 md:mt-20 mx-auto flex flex-wrap items-between gap-8">
      <div class="card flex-1 mx-4 md:mx-auto border shadow-lg px-6 md:px-12 py-4 md:py-8 flex flex-col gap-2 justify-start"
        v-for="work in works" :key="work.title"
      >
        <i :class="work.icon" class="text-center text-gray-600"></i>
        <h3 class="text-center text-1x1 md:text-2xl">{{work.title}}</h3>
        <p class="text-center price">コンテンツタイプ：{{work.type}}</p>
        <p class="caption">制作期間：{{work.period}}</p>
        <div class="flex flex-col mt-2">
          {{work.content}}
        </div>
        <a :href="work.url" target="_blank">view</a>
      </div>
    </div>
  </section>
</template>
<script>
import WPModule from "../modules/wp"
export default {
  data(){
    return{
      pageTitle: "Work",
      loading: false,
      works: {
      },
    }
  },
  head() {
    return {
      title: this.pageTitle,
      meta: [
        { hid: 'og:title', property: 'og:title', content: this.pageTitle },
      ],
    }
  },
  async mounted(){
    this.loading = true
    //WPから取得
    const data = await WPModule.getWorks()
    this.$store.dispatch("setWorksAction", data)
    this.setData(this.$store.state.works)
    this.loading = false
  },
  computed: {
  },
  methods: {
    setData(data){
      this.works = data
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