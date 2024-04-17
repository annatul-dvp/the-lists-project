<template>
  <span class="color-square" :style="styleSquare"></span>
</template>

<script>
import { defineComponent, reactive, onMounted } from 'vue'
export default defineComponent({
  props: {
    id: { type: String, required: true },
    color: { type: String, required: true }
  },
  setup (props) {
    // console.log('props.color', props.color)
    const styleSquare = reactive({
      backgroundColor: props.color,
      height: '10px',
      width: '10px'
    })

    onMounted(() => {
      const field = document.querySelector('.list-results__squares')
      styleSquare.height = parseInt((Number(field.clientWidth) - 5 * 29) / 30) + 'px'
      styleSquare.width = parseInt((Number(field.clientWidth) - 5 * 29) / 30) + 'px'
    })

    return {
      styleSquare
    }
  }
})
</script>

<style lang="scss">
  .color-square {
    display: inline-block;
    margin-right: 5px;
    width: 8px;
    height: 8px;
  }
</style>
