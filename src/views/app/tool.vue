<template>
  <div class="tool" :class="{isFav: tool.fav}">
    <h3>{{tool.title}}</h3>
    <p>{{tool.desc}}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  props: {
    tool: {
      required: true,
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.tool {
  position: relative;
  display: inline-block;
  width: 100%;
  padding: 15px;
 
  background-color: white;
  border: 1px solid #cccccc;
  border-radius: 5px;
  box-sizing: border-box;

  transition: 150ms background-color ease;
  cursor: pointer;

  &:hover {
    background-color: #E4F1C3;
  }

  &.isFav {
    background-color: #BAD696;
  }
}
</style>
