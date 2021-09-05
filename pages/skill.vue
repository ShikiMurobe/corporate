<template>
  <section id="about" v-if="!loading">
    <h1 class="section-h1">Skill</h1>
    <div class="container md:mt-12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
      <div class="w-full md:shadow-lg px-12 py-8"
        v-for="skill in skills" :key="skill.name"
      >
        <h3>{{skill.name}}</h3>
        <Chart :items="skill.items" />
      </div>
      <div class="w-full md:shadow-lg px-12 md:py-8">
        その他
        <div class="flex flex-wrap gap-8 mt-4">
          <span>{{otherSkills}}</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import WPModule from "../modules/wp"
import Chart from "../components/chart.vue"
export default {
  components:{
    Chart,
  },
  data(){
    return{
      pageTitle: "Skill",
      loading: false,
      skills: [],
      otherSkills: [],
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
    const data = await WPModule.getSkills()
    this.$store.dispatch("setSkillsAction", data)
    this.setData(this.$store.state.skills)
    this.loading = false
  },
  computed: {
  },
  methods: {
    setData(data){
      this.skills.push({name: "フロントエンド", items: data.frontends})
      this.skills.push({name: "サーバサイド", items: data.serversides})
      this.skills.push({name: "データベース", items: data.databases})
      this.skills.push({name: "フレームワーク", items: data.frameworks})
      this.otherSkills = data.other
    }
  },
}
</script>
<style lang="scss" scoped>
h2{
  font-size: 2rem;
  font-weight: 500;
}
.content{
  font-size: 1rem;
  white-space:pre-wrap;
  word-wrap:break-word;
}
@media screen and (max-width: 768px){
 h2{
  font-size: 1.4rem;
  font-weight: 500;
  }
  .content{
    font-size: 0.9rem;
  }
}
</style>