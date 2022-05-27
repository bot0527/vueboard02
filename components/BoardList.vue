<template>
  <div role="tablist" class="tablelank">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info">구입날자</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
  <div>
    <b-calendar
      :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
      locale="kr"
    ></b-calendar>
  </div>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="info">타이머</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
      <b-time v-model="value" show-seconds locale="kr">
        <div class="d-flex" dir="ltr">
          <b-button
            size="sm"
            variant="outline-danger"
            v-if="value"
            @click="clearTime"
          >
            Clear time
          </b-button>
          <b-button
            size="sm"
            variant="outline-primary"
            class="ml-auto"
            @click="setNow"
          >
            Set Now
          </b-button>
        </div>
      </b-time>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="info">먹은날 체크</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
          <div>
    <label for="example-datepicker">Choose a date</label>
    <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
    <p>Value: '{{ value }}'</p>
  </div>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: null
      }
    },
    methods: {
      setNow() {
        const now = new Date()
        // Grab the HH:mm:ss part of the time string
        this.value = now.toTimeString().slice(0, 8)
      },
      clearTime() {
        this.value = ''
      }
    }
  }
</script>
<style scoped>
.tablelank{text-align: l;}
.mb-1{float: left;}
</style>