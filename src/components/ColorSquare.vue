<template>
  <span class="color-square" :style="styleSquare"></span>
</template>

<script>
import { defineComponent, reactive, onMounted } from 'vue'
export default defineComponent({
  props: {
    id: { type: String, required: true },
    itemId: { type: Number, required: true },
    color: { type: String, required: true },
    size: { type: String, required: true }
  },
  emits: ['update:size'],
  setup (props, { emit: $emit }) {
    // console.log('props.color', props.color)
    const styleSquare = reactive({
      backgroundColor: props.color,
      gridArea: `square-${props.id}`
      // height: props.size,
      // width: props.size
    })

    // const classSquare = ref(`square-${props.itemId}`)

    onMounted(() => {
      const field = document.querySelector('.list-results__squares')
      $emit('update:size', (Number(field.clientWidth) / 100 * 2.5) + '%')
      // props.size = (Number(field.clientWidth) / 100 * 2.5) + '%'
      // styleSquare.height = parseInt((Number(field.clientWidth) - Number(field.style.paddingTop) - Number(field.style.paddingBottom) - 4 * 29) / 30) + 'px'
      // styleSquare.width = parseInt((Number(field.clientWidth) - Number(field.style.paddingLeft) - Number(field.style.paddingRight) - 4 * 29) / 30) + 'px'
      // styleSquare.height = parseInt((Number(field.clientWidth) - Number(field.style.paddingTop) - Number(field.style.paddingBottom) - 4 * 29) / 30) + 'px'
      // styleSquare.width = ((Number(field.clientWidth) - Number(field.style.paddingLeft) - Number(field.style.paddingRight))) / 30 + '%'
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
    width: 100%;
    height: 100%;
    // width: 8px;
    // height: 8px;
  }
</style>
