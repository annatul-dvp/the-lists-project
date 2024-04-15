<template>
  <main class="main">
    <div class="block input-block">
      <AList/>
    </div>
    <div class="block output-block">
      <AListResult/>
    </div>
  </main>
</template>

<script>
import AList from '@/components/AList.vue'
import AListResult from '@/components/AListResult.vue'

export default {
  name: 'App',
  components: {
    AList,
    AListResult
  }
}
</script>

<style lang="scss">
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
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    padding: 20px 100px;
    height: 500px;
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
