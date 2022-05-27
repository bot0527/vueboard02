<template>
  <div>
    <b-navbar toggleable="lg" >
      <b-navbar-brand to="/">
        <b-img class="logo"  :src="require('../static/logo.png')" alt="알약 로고"></b-img>
      </b-navbar-brand>

      <b-collapse is-nav>
        <b-navbar-nav class="mx-auto">
          <h1>하루 알약</h1>
        </b-navbar-nav>
        <b-navbar-nav class="mr-auto">
          <b-nav-form class="input-group mb-3">
            <b-form-input size="md" class="col col-lg-2 sch" placeholder="Search"></b-form-input>
            <b-button size="md" class="my-2 my-sm-0 sch2" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>

        <b-navbar-nav right>
          <b-nav-item-dropdown text="언어선택" right class="mgr">
            <b-dropdown-item href="#">KR</b-dropdown-item>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">CH</b-dropdown-item>
            <b-dropdown-item href="#">JP</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown  right class="mgr2">
          <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>개인정보</em>
            </template>
            <b-dropdown-item href="#">프로필보기</b-dropdown-item>
            <b-dropdown-item href="#">로그 아웃</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  nama: "Header",
  data() {
    return {

    }
  }
};
</script>
<style scoped>
.logo{margin-left: 120px; width: 200px; height: 90px;}
.input-group{margin-top: 15px;}
.sch{position: relative; right: 200px;}
.sch2{position: absolute; right: 130px; top: 0;}
.mgr{margin-right: 20px;}
.mgr2{margin-right: 50px;}
</style>
