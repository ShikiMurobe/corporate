<template>
  <footer>
    <nav class="md:mb-3 px-2 md:px-8 grid grid-cols-5 md:gap-x-8 items-center text-center">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="about">About</nuxt-link>
      <nuxt-link to="skill">Skill</nuxt-link>
      <nuxt-link to="service">Service</nuxt-link>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScbYwcfOIyQCtPKrOXlF3toF7jZ6qSNpf_gmmgUqRKENYuvlw/viewform" target="_blank">Contact</a>
    </nav>
  </footer>
</template>
<style lang="scss" scoped>
footer{
  nav{
    position: fixed;
    right: 0;
    bottom: 0;
    height: 4rem;
    font-size: 1.6rem;
    font-weight: 500;
    background: #000000;
    color: #ffffff;
  }
  nav a{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

}
@media screen and (max-width: 768px){
footer{
  nav{
    width: 100%;
    font-size: 0.8rem;
    font-weight: 400;
  }
}
}
</style>