<template>
  <div class="list">
    <div
      v-for="story in stories"
      :key="story.id"
      :style="{ '--index': `${stories.indexOf(story) + 1}` }"
      class="list__item"
      @click="toggleOpen()"
    >
      <h2 class="title">{{ story.title }}</h2>
      <p class="type">Type: {{ story.type }}</p>
      <p class="url">Link: {{ story.url }}</p>
      <p class="score">Score: {{ story.score }}</p>
    </div>
    <!-- <button v-on:click="loadMore()">load more</button> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "listItem",
  data() {
    return {
      items: 15,
      storyType: "beststories",
      stories: [],
    };
  },
  methods: {
    updateLoader() {
      this.$emit("loadingState", false);
    },
    loadMore() {
      console.log(this.items);
      this.items += 5;
      console.log(this.items);
    },
    toggleOpen() {
      event.target.closest(".list__item").classList.toggle("open");
    }
  },
  created() {
    axios
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
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
.list {
  display: grid;
  grid-template-columns: repeat(5, 200px);
  grid-template-rows: repeat(5, 200px);
}
.list__item {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgb(46, 46, 46);
  margin: 10px;
  padding: 10px;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
  transition: all 0.3s ease-in-out;

  .title,
  .type {
    margin: 0 0 10px 0;
  }

  link {
    margin: 0 40px;
  }

  .score {
    margin-top: 30px;
  }

  * {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &.open {
    background: rgba(255, 255, 255, 0.8);
    transition: all 0.3s ease-in-out;
    * {
      overflow: visible;
      white-space: normal;
      text-overflow: unset;
    }
  }

  @for $i from 1 through 50 {
    &:nth-child(#{$i}) {
      &.open {
        grid-column-start: var(--index);
        grid-column-end: calc(var(--index) + 2);
        // dem dirty hacks, has to be a programatic way of doing this
        @if $i < 5 {
          grid-row-start: 1;
          grid-row-end: 3;
        } @else if $i > 5 and $i < 11 {
          grid-column-start: $i - 5;
          grid-column-end: $i - 3;
          grid-row-start: 2;
          grid-row-end: 4;
        } @else if $i > 10 and $i < 16 {
          grid-column-start: $i - 10;
          grid-column-end: $i - 8;
          grid-row-start: 3;
          grid-row-end: 5;
        } @else {
          grid-column-start: $i - 15;
          grid-column-end: $i - 13;
          grid-row-start: 4;
          grid-row-end: 6;
        }
      }
    }
  }

  // @for $i from 1 through 50 {
  //   &:nth-child(#{$i}) {
  //     grid-column-start: #{$i};
  //     grid-column-end: #{$i+1};
  //     $rowNumber: 1;
  //     @if $i % 5 == 0 {
  //       $rowNumber: $rowNumber + $i % 5;
  //       grid-row-start: $rowNumber;
  //       grid-row-end: $rowNumber;
  //     }
  //   }
  // }
}
</style>
