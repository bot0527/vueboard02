<template>
  <div>
    <b-card title="랭킹" body-class="text-center" header-tag="nav">
      <template #header>
        <b-nav card-header tabs>
          <b-nav-item active>이번주순위</b-nav-item>
          <b-nav-item to="/listm">월간순위</b-nav-item>
          <b-nav-item to="/listh">최근핫순위</b-nav-item>
        </b-nav>
      </template>

      <b-card-text align="left">
        <img src='../static/pic1.jpg' alt='pic1'/>{{ text }} 
      <!-- <b-img :src="require('../static/pic1.jpg')" alt='pic1'></b-img> -->
      </b-card-text>
      <b-card-text align="left">
        <img src='../static/pic1.jpg' alt='pic1'/>{{ text }} 
      <!-- <b-img :src="require('../static/pic1.jpg')" alt='pic1'></b-img> -->
      </b-card-text>
      <b-card-text align="left">
        <img src='../static/pic1.jpg' alt='pic1'/>{{ text }} 
      <!-- <b-img :src="require('../static/pic1.jpg')" alt='pic1'></b-img> -->
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: `
          공지사항입니다. 새로운 소식은 공지사항을 참조하세요.
        `,
        text2: `
          VUE관련 소스자료실입니다. 자세한내용은 게시판을 참조하세요. 
        `,
        text3: `
         VUE 부트스트랩의 갤러리기능입니다.
        `
      }
    }
  }
</script>
<style scoped>
.tablelank{text-align: l;}
.mb-1{float: left;}
</style>