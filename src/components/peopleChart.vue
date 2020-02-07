<template>
  <div>
    <div class="ppl-container">
      <div>
        <div v-for="(item, index) in data" :key="item.id">
          <svg
            v-for="n in item"
            :key="n"
            width="27"
            class="svgColor"
            height="58"
            viewBox="0 0 27 58"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="head"
              d="M13.3043 12.7159C16.8342 12.7159 19.6957 9.86934 19.6957 6.35794C19.6957 2.84655 16.8342 0 13.3043 0C9.77452 0 6.91304 2.84655 6.91304 6.35794C6.91304 9.86934 9.77452 12.7159 13.3043 12.7159Z"
              :style="{ fill: registeredColors[index] }"
            />

            <path
              class="body"
              d="M0 16.2192C0 15.5026 0.583979 14.9217 1.30435 14.9217H3.78261C10.2597 14.9217 16.7438 14.9217 23.2174 14.9217H25.6957C26.416 14.9217 27 15.5026 27 16.2192V36.2013C27 36.9179 26.416 37.4989 25.6957 37.4989H23.2174C22.497 37.4989 21.913 36.9179 21.913 36.2013V22.3177H19.6957V56.7025C19.6957 57.4191 19.1117 58 18.3913 58H15.913C15.1927 58 14.6087 57.4191 14.6087 56.7025V36.9799H12.3913V56.7025C12.3913 57.4191 11.8073 58 11.087 58H8.6087C7.88833 58 7.30435 57.4191 7.30435 56.7025V22.3177H5.08696V36.2013C5.08696 36.9179 4.50298 37.4989 3.78261 37.4989H1.30435C0.583979 37.4989 0 36.9179 0 36.2013V16.2192Z"
              :style="{ fill: registeredColors[index] }"
            />
          </svg>
        </div>
      </div>
      <div class="values">
        <span :style="{ color: registeredColors[index] }" v-for="(name, index) in data" :key="index"
          ><b>{{ index }} {{ name }}</b></span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: null,
  },
  data() {
    return {
      colors: ['#636363', '#c4c4c4', '#9c27b0', '#673ab7', '#3f51b5'],
      registeredColors: {},
    }
  },
  mounted() {
    let names = []
    let buffer = {}
    let i = 0
    for (const name in this.data) {
      buffer[name] = this.colors[i]
      this.registeredColors = i++
    }
    this.registeredColors = buffer
  },
}
</script>
<style lang="stylus" >
div.ppl-container {
  div {
    display: inline-block;
  }

  div.values {
    display: block;

    span {
      display: inline-block;
      margin: 1em 0.2em 0;
      // background-color: black;
      // padding: 0.3em;
      // color: white;
    }
  }

  svg {
    path {
    }

    margin: 0 0.2em;
  }
}
</style>