<template>
  <div>
    <b-navbar toggleable="lg">

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item class="iem" to="/">매인페이지</b-nav-item>
          <b-nav-item class="iem" to="/gallery">갤러리</b-nav-item>
          <b-nav-item class="iem" to="/listw">랭킹</b-nav-item>
          <b-nav-item class="iem" to="/Board">게시판</b-nav-item>
          <b-nav-item class="iem" to="/BoardList">체크메모</b-nav-item>
        </b-navbar-nav>
        
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  nama: "navi",
  data() {
    return {

    }
  }
};
</script>

<style scoped>
.iem{margin: 10px 40px;}
</style>