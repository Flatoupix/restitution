<template>
  <div v-if="completed">
    <h3>{{ question.question }}</h3>
    <!-- <pie-chart :data="data"></pie-chart> -->
    <!-- <bar-chart :data="data"></bar-chart> -->
    <!-- <line-chart :data="data"></line-chart> -->
    <!-- <area-chart :data="data"></area-chart> -->
    <people-chart v-if="data" :data="data"></people-chart>
  </div>
</template>

<script>
import peopleChart from './peopleChart'
export default {
  components: {
    peopleChart,
  },
  props: {
    question: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      completed: false,
      data: null,
    }
  },
  mounted() {
    let buffer = {}
    if (this.question.responseChoices) {
      this.question.responseChoices.forEach(response => {
        buffer[response.value] = 0
      })
    }

    this.question.restitution.forEach(rest => {
      if (this.question.responseChoices) {
        this.question.responseChoices.forEach(response => {
          if (rest.value == response.id) {
            buffer[response.value] += 1
          }
        })
      } else {
        if (buffer[rest.value]) {
          buffer[rest.value]++
        } else {
          buffer[rest.value] = 1
        }

        // buffer[response.value] += 1;
      }
    })

    // console.log(buffer)
    this.data = buffer
    this.completed = true
  },
}
</script>
<style lang="stylus">
h3 {
  color: #bb1515;
}
</style>