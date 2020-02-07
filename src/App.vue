<template>
  <div id="app" v-if="incDTO">
    <h1>{{ incDTO.title }}</h1>
    <h2>{{ incDTO.subTitle }}</h2>
    <div v-for="(page, index) in incDTO.pages" :key="index">
      <chart-obj-builder
        class="chart"
        :question="question"
        :options="options"
        v-for="(question, index) in page.questions"
        :key="index"
      ></chart-obj-builder>
    </div>
  </div>
</template>

<script>
import chartObjBuilder from './components/chartObjBuilder'
// import chartPie from "./components/chartPie";

export default {
  name: 'app',
  components: {
    chartObjBuilder,
    // chartPie
  },
  data() {
    {
      return {
        incDTO: null,
        loaded: false,
        options: {
          responsive: true,
          maintainAspectRatio: true,
        },
      }
    }
  },

  mounted() {
    //Récupération du DTO principal
    this.$http
      .get(
        'http://pnowa-pc.levallois.eudoweb.com//Specif/EUDO_EXTDEV_ENQUETE/root/SectionORM/modules/enquete/services/consult?Recup=Xela17fFtowAJF376cg%2f3xPF5XpEPzFgv2%2faWXuFirQ%3d'
      )
      .then(response => (this.incDTO = response.data))
  },
  methods: {
    filterQuestion(question) {
      let chartdata = {
        labels: [],
        datasets: [
          {
            label: '',
            backgroundColor: [
              '#f44336',
              '#e91e63',
              '#9c27b0',
              '#673ab7',
              '#3f51b5',
              '#2196f3',
              '#03a9f4',
              '#00bcd4',
              '#009688',
              '#4caf50',
              '#8bc34a',
              '#cddc39',
              '#ffeb3b',
              '#ffc107',
              '#ff9800',
              '#ff5722',
              '#795548',
              '#9e9e9e',
              '#607d8b',
              '#ffffff',
              '#000000',
            ],
            data: [],
          },
        ],
      }

      if (question.type == 'LISTE') {
        let buffer = {}
        question.responseChoices.forEach(response => {
          chartdata.labels.push(response.value)
          buffer[response.value] = 0
          question.restitution.forEach(rest => {
            if (rest.value === response.id) {
              buffer[response.value] += 1
            }
          })
          chartdata.datasets[0].data.push(buffer[response.value])
        })
        this.completed = true
        // console.log(chartdata);
        return chartdata
      }
    },
  },
}
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
