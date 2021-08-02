<template>
  <header>
    <h1>{{title}}</h1>
    <Button v-show="homePage"
      @btn-click="$emit('toggle-add-task')" 
      :text="showAddTask ? 'Close' : 'Add Task'" 
      :color="showAddTask ? 'red' : 'green'"
    />
  </header>
</template>

<script>
import Button from "./Button"

  export default {
    name: "Header",
    // defines props with: an array, an object with defining the type, an object like before just an added default part.
    props: {
      title: String,
      showAddTask: Boolean,
    }, 
    components: {
      Button,
    },
    // 
    computed: {
      homePage() {
        if (this.$route.path === '/') {
          return true
        } else {
          return false
        }
      }
    }
  }
</script>

<style scoped> 
/* scoped indicates this will only style this component in this scope */
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
</style>
