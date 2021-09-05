<template>
  <section id="about" v-if="!loading">
    <h1 class="section-h1">About</h1>
    <div class="container md:mt-12 mx-auto">
      <div class="px-8 py-6 md:border md:shadow-lg">
        <h2 class="mb-2">{{profiles.name}}</h2>
        <div class="content">
          <p>{{profiles.works}}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import * as moment from "moment"
import WPModule from "../modules/wp"
export default {  
  data(){
    return{
      pageTitle: "About",
      loading: false,
      profiles: {
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
    const data = await WPModule.getProfile()
    this.$store.dispatch("setProfilesAction", data)
    this.setData(this.$store.state.profiles)
    this.loading = false
  },
  computed: {
    thisYear(){
      return moment().format("YYYY")
    },
  },
  methods: {
    calcAge(birthday){
      return moment().diff(moment(birthday), "years") + " (" + this.birthday +  ")";
    },
    setData(data){
      this.profiles = data
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