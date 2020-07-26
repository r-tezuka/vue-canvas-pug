<template lang="pug">
div
  router-link(tag="li", to="/" exact)
    a Single bezier 
  router-link(tag="li", to="/connectingConstraint")
    a Connecting constraint
  router-view
</template>

<style scoped>
li {
  display: inline-block;
  width: 200px;
  height: 35px;
  line-height: 35px;
  text-align: center;
}
li > a {
  display: block;
  text-decoration: none;
  color: #0275ff;
  transition: all 0.3s ease-in-out;
}
.router-link-active > a,
li > a:hover {
  background-color: #0275ff;
  color: #fff;
}
</style>
