<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-for="story in stories" :key="story.id">
      <h2>{{ story.data.title }}</h2>
      <p>Type: {{ story.data.type }}</p>
      <p>Link: {{ story.data.url }}</p>
      <p>Score: {{ story.data.score }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Homepage",
  props: {
    msg: String
  },
  data: function() {
    return {
      err: "",
      stories: []
    };
  },
  created: function() {
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(result => {
        this.results = result.data.slice(0, 10);
        this.results.forEach(element => {
          axios
            .get(
              "https://hacker-news.firebaseio.com/v0/item/" + element + ".json"
            )
            .then(result => {
              this.stories.push(result);
            })
            .catch(err => {
              console.log(err);
            });
        });
      })
      .catch(err => {
        this.err = err;
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
