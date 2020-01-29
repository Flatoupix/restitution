<template>
  <div id="app" v-if="incDTO">
    <h1>{{ incDTO.title }}</h1>
    <h2>{{ incDTO.subTitle }}</h2>
    <div v-for="(page, index) in incDTO.pages" :key="index">
      <div v-for="(question, index) in page.questions" :key="index">
        <b>
              <chart-bars :chartdata="dataTest"></chart-bars>

          {{question.type}}
        </b>
        <div>{{ question.question }}</div>
        <div v-for="title in question.restitution" :key="title.id">
          <div v-if="question.responseChoices">
            <div
              v-for="response in question.responseChoices"
              :key="response.id"
            >
              <div v-if="response.id == title.value">{{ response.value }}</div>
            </div>
          </div>
          <div
            v-else-if="question.type == 'DATE' || question.type == 'BIRTHDAY'"
          >
            {{ $moment(title.value).format("LL") }}
          </div>
          <div
            v-else-if="question.type == 'NUM'"
          >
            <b>

            {{ title.value }}
            </b>
          </div>
    
          <div v-else>
            {{ title.value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chartBars from "./components/chartBars.vue";

export default {
  name: "app",
  components:{
    chartBars
  },
  data() {
    {
      return {
        incDTO: null,
        dataTest: {
          datasets: [{
              data: [10, 20, 30]
          }],

          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: [
              'Red',
              'Yellow',
              'Blue'
          ]
        }
      }
    }
  },

  mounted() {
    //Récupération du DTO principal
    this.$http
      .get(
        "http://nlaba-pc.levallois.eudoweb.com//Specif/EUDO_EXTDEV_ENQUETE/root/SectionORM/modules/enquete/services/consult?Recup=Xela17fFtow%2bs7BChNYN6L1oIlmYS6MsDn7sIa0gZL8%3d"
      )
      .then(response => (this.incDTO = response.data));
  }
};
</script>

<style lang="stylus">
h1 {
  color: #bb1515;
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
