<template>
  <div class="list-results">
    <h4 class="list-results__name">{{ name }}</h4>
    <button @click="changeSorting"> {{ btn.name }}</button>
    <div class="list-results__squares" :style="squaresFieldStyles">
      <ColorSquare v-for="square in squares" :key="square.id" v-model:size="squareSize"
      v-model:id="square.id" v-model:color="square.color" v-model:itemId="square.itemId"/>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, computed, watch } from 'vue'
import { useStore } from 'vuex'
// import ColorSquare from './ColorSquare.vue'
import ColorSquare from '@/components/ColorSquare.vue'
import { standartGridTemplateAreas, randomGridTemplateAreas } from '@/hooks/useSquaresSorting'

export default defineComponent({
  props: {
    id: { type: Number, required: true },
    name: { type: String, required: true }
  },
  components: {
    ColorSquare
  },
  setup (props) {
    const $store = useStore()
    const items = computed(() => $store.getters.getItems.filter(item => item.listId === props.id))
    const squares = computed(() => $store.getters.getItems.filter(item => item.listId === props.id)
      .reduce((acc, currentItem) => acc.concat(currentItem.squares), []))

    const isSorted = ref(true)
    // const gridTemplateAreas = computed(() => standartGridTemplateAreas(items.value))

    const squareSize = ref('10px') // высота и ширина ячейки

    const squaresFieldStyles = reactive({
      display: 'grid',
      rowGap: '4px',
      columnGap: '4px',
      gridTemplateColumns: `repeat(30, ${squareSize.value})`,
      gridTemplateRows: `repeat(${items.value.length}, ${squareSize.value})`,
      gridTemplateAreas: ''
    })

    const btn = ref({
      id: 1,
      name: 'Перемешать'
    })

    function changeSorting () {
      isSorted.value = !isSorted.value
      console.log('clicked', isSorted.value)
    }

    watch(() => isSorted.value, (s) => {
      console.log('watch started', s)
      if (s) {
        squaresFieldStyles.gridTemplateAreas = standartGridTemplateAreas(items.value)
      } else {
        squaresFieldStyles.gridTemplateAreas = randomGridTemplateAreas(items.value)
      }

      console.log(squaresFieldStyles.gridTemplateAreas)
    }, { immediate: true })

    return {
      squares,
      squareSize,
      squaresFieldStyles,
      btn,

      changeSorting
    }
  }
})
</script>

<style lang="scss">
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  .list-results {
    @include flex-row(space-between, flex-start, wrap);

    padding: 10px;
    border: 1px solid black;
    min-height: 100px;
    width: 100%;

    &__name {
      font-size: 1rem;
      text-align: left;
    }

    &__squares {
      width: 100%;
      grid-auto-flow: dense;
      // display: grid;
      // row-gap: 5px;
      // column-gap: 5px;
      // grid-template-areas:
      //                     "a a a"
      //                     "b b b"
      //                     "b c c";
      // width: 100%;
      // min-height: 20px;
    }
  }
</style>
