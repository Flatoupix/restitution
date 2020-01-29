<template> </template>

<script>
export default {
  props: {
    question: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      chartdata: {
        labels: [],
        datasets: [
          {
            label: "",
            backgroundColor: "#ffffff",
            data: []
          }
        ]
      }
    };
  },
  mounted() {
    console.log(this.question);
  }
};
</script>