<template>
  <div class="topmg">
    <BoardVisual/>

    <h2>상품 소개</h2>

    <div>
      <b-card-group deck class="deck">
        <b-link href="#ko01">
          <b-card bg-variant="primary" text-variant="white" :img-src="require('../static/119.png')" img-alt="Card image" img-bottom class="text-center disb">
            <b-card-text>피쉬 젤라틴 소프트젤 360정</b-card-text>
          </b-card>
        </b-link>

        <b-link href="#foo">
          <b-card bg-variant="primary" text-variant="white" :img-src="require('../static/vita3.png')" img-alt="Card image" img-bottom class="text-center disb">
            <b-card-text>투 퍼 데이 종합비타민</b-card-text>
          </b-card>
        </b-link>

        <b-link href="#foo">
          <b-card bg-variant="primary" text-variant="white" :img-src="require('../static/mag.png')" img-alt="Card image" img-bottom class="text-center disb">
            <b-card-text>21st Century,칼슘 마그네슘</b-card-text>
          </b-card>
        </b-link>

        <b-link href="#foo">
          <b-card bg-variant="primary" text-variant="white" :img-src="require('../static/vita02.png')" img-alt="Card image" img-bottom class="text-center disb">
            <b-card-text>B-복합체 플러스 비타민C</b-card-text>
          </b-card>
        </b-link>
      </b-card-group>
    </div>
  
  </div>
  
</template>

<script>
import BoardVisual from "@/components/BoardVisual";
export default {
  name: ".topmg",
  components: {
    BoardVisual
  }
};
</script>

<style scoped>
h2{margin: 80px 0 50px;}
.deck{display: flex; justify-content: center;}
.disb{float: left;}
</style>

