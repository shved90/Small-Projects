
<script>
// massive WIP
import axios from "axios";

export default {
  name: "hackerData",
  props: {
    items: {
      type: Number,
      required: true
    },
    storyType: {
      type: String,
      required: true
    },
    stories: {
      type: Array,
      required: true
    }
  },
  created() {
    this.pullData();
  },
  methods: {
    async pullData() {
      await axios
        .get("https://hacker-news.firebaseio.com/v0/" + this.storyType + ".json")
        .then(result => {
          this.results = result.data.slice(0, this.items);
          this.results.forEach(id => {
            axios
              .get("https://hacker-news.firebaseio.com/v0/item/" + id + ".json")
              .then(result => {
                this.stories.push(result.data);
              });
          });
        })
        .catch(err => {
          this.err = "didnt load";
          this.updateLoader();
        })
        .finally(this.updateLoader());
    }
  }
};
</script>
