<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="3000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="345"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide

        :img-src="require('../static/sl01.png')"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide :img-src="require('../static/sl02.png')">
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide :img-src="require('../static/sl03.png')"></b-carousel-slide>
    </b-carousel>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>