<template>
  <button 
    @click="onClick()" 
    v-bind:style="{background: color}" 
    class="btn">{{text}}
  </button>
</template>

<script>
  export default {
    name: "Button",
    props: {
      text: String,
      color: String,
    },
    methods: {
      onClick() {
        this.$emit('btn-click'); // goes to Header and emitting that goes to the App.vue method
      }
    }
  }
</script>