<template>
  <div class="prod-tools">
    <h2>Productivity tools</h2> 
    <div class="tools">
      <div class="tools__elem" v-for="tool in tools" @click="selectAsFav(tool)">
        <tool :tool="tool" />
      </div>
    </div>      
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Tool from 'views/app/tool'

export default {
  name: 'prod-tools',
  components: {
    Tool
  },
  computed: {
    ...mapState({
      tools: state => state.tools.tools,
      favTool: state => state.tools.favourite
    })
  },
  methods: {
    selectAsFav(fav) {
      this.setToolsAction({ allTools: this.tools, fav })  
    },
    ...mapActions('tools', [
      'setToolsAction'
    ]),
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
    width: calc(50% - 20px);
    display: inline-block;
    margin: 10px;

    box-sizing: border-box;
  }
}
</style>
