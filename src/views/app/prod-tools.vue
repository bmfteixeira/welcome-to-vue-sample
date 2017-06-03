<template>
  <div class="prod-tools">
    <h2>Productivity tools</h2> 
    <div class="tools">
      <div class="tools__elem" v-for="tool in tools" @click="toogleFav(tool)">
        <tool :tool="tool" />
      </div>
    </div>      
  </div>
</template>

<script>
import Tool from 'views/app/tool'

export default {
  name: 'app',
  components: {
    Tool
  },
  data() {
    return {
      tools: [{
        title: 'JIRA',
        desc: 'Project management - using card to manage team tasks',
        fav: false,
      }, {
        title: 'Wunderlist',
        desc: 'Personal todolist - can setup reminders and multiple lists with tasks',
        fav: true,
      }, {
        title: 'Github Projects',
        desc: 'Project management - board inside Github to organize our issues using cards',
        fav: true,
      }, {
        title: 'Basecamp',
        desc: 'Communication - platform to communicate with team and clients',
        fav: false,
      }, {
        title: 'Slack',
        desc: 'Team communcation - communicate with your team using fancy emoji. Not like this one :)',
        fav: false,
      }],
    }
  },
  methods: {
    toogleFav(tool) {
      for(let i = 0; i < this.tools.length; i++) {
        if(this.tools[i].title === tool.title) {
          this.tools[i].fav = !this.tools[i].fav
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.prod-tools {
  position: relative;
  display: block;

  margin-top: 40px;
  text-align: left;
  padding: 0 15px;
}

.tools {
  position: relative;
  display: block;
  margin-top: 20px;
  padding: 20px;

  background-color: #fafafa;
  border: 1px solid #cccccc;
  border-radius: 5px;

  &__elem {
    width: calc(50% - 60px);
    display: inline-block;
    margin: 30px;

    box-sizing: border-box;
  }
}
</style>
