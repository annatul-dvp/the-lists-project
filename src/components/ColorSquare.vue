<template>
  <div class="color-square"></div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  props: {
    color: { type: String, required: true }
  },
  setup (props) {
    const theColor = ref(props.color)
    onMounted(() => {
      const field = document.querySelector('.list-results__squares')
      const size = parseInt((Number(field.clientWidth) - 5 * 29) / 30) + 'px'
      document.querySelector('.color-square').style.backgroundColor = props.color
      document.querySelector('.color-square').style.width = size
      document.querySelector('.color-square').style.height = size
      console.log(props.color)
    })

    return {
      theColor
    }
  }
})
</script>

<style lang="scss">
  .color-square {
    width: 8px;
    height: 8px;
  }
</style>
