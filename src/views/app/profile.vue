<template>
  <div class="container">
    <div class="profile">
      <h2>Profile</h2> 
      <div class="profile__tool" v-if="fav">
        <tool :tool="fav">
          <div slot="comment" class="profile__tool__comment">
            {{fav.title}} is my long time favourite Productivity tool. It's simply amazing!!!
          </div>
        </tool>
      </div>
      <div v-else class="warning">
        <h3>No favourite tool was selected! Check the tools <router-link to="/">here</router-link></h3>
      </div>    
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Tool from 'views/app/tool'

export default {
  computed: {
    ...mapState({
      fav: state => state.tools.favourite
    })
  },
  name: 'profile',
  components: {
    Tool
  }
}
</script>

<style lang="scss" scoped>
.profile {
  position: relative;
  display: block;

  margin-top: 40px;
  text-align: left;
  padding: 0 15px;

  &__tool {
    position: relative;
    left: 50%;
    max-width: 500px;
    transform: translateX(-50%);

    &__comment {
      position: relative;
      margin: 30px auto 15px;
      padding: 15px;
      max-width: 360px;

      background: white;
      border-radius: 5px;
      border: 1px solid #cccccc;
    }
  }

  a {
    text-decoration: none;
    color: #BAD696;

    &:hover {
      text-decoration: underline;
    }
  }
}

.container {
  position: relative;
  margin: 0 auto;
  max-width: 1200px;
}

</style>
