<template>
  <main class="main">
    <div class="block input-block">
      <AList v-for="list of lists" :key="list.id" v-model:name="list.name"
      v-model:isChecked="list.isChecked" v-model:isOpened="list.isOpened"/>
    </div>
    <div class="block output-block">
      <AListResult v-for="list of lists" :key="list.id" v-model:name="list.name"/>
    </div>
  </main>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import AList from '@/components/AList.vue'
import AListResult from '@/components/AListResult.vue'

export default defineComponent({
  name: 'App',
  components: {
    AList,
    AListResult
  },
  setup () {
    const $store = useStore()
    const lists = computed(() => $store.getters.getLists)

    return {
      lists
    }
  }

})
</script>

<style lang="scss">
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 18px;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    //margin-top: 60px;
  }

  .ul {
    list-style-type: none
  }

  .hidden {
    display: none;
  }

  .flex-row-container {
    display: flex;
    column-gap: 10px;
    justify-content: left;
    align-items: center;
  }

  .main {
    @include flex-row(space-between, normal);
    margin-top: 30px;
    padding: 20px 100px;
    min-height: 100vh;
    width: 100%;
  }

  .block {
    padding: 25px;
    height: 100%;
    width: 45%;
    border: 1px solid black;
  }

  // .input-block {
  //   border-right: 4px solid red;
  // }
</style>
