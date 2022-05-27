<template>
  <div id="app">
    <Header2/>
    <navi/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import navi from "@/components/navi";
import Header2 from "@/components/Header2";
import BoardVisual from "@/components/BoardVisual";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header2,
    navi,
    BoardVisual,
    Footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
