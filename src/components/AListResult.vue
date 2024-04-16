<template>
  <div class="list-results">
    <h4 class="list-results__name">{{ listName }}</h4>
    <button>{{ btn.name }}</button>
    <div class="list-results__squares">
      <ColorSquare v-for="item in items" :key="item.id"
      v-model:color="item.color" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import ColorSquare from './ColorSquare.vue'

export default defineComponent({
  props: {
    name: { type: String, required: true }
  },
  components: {
    ColorSquare
  },
  setup (props) {
    const listName = ref(props.name)

    const $store = useStore()
    const items = computed(() => $store.getters.getItems.filter(item => item.listName === listName.value))
    // const itemsSquares = computed(() => {
    //   const squares = []
    //   items.value.forEach((i) => {
    //     squares.push
    //   })
    //   return squares
    // })
    const btn = ref({
      id: 1,
      name: 'Перемешать'
    })

    const color = ref('#532973')

    onMounted(() => {
      // // const field = document.querySelector('.list-results__squares')
      // // squareSize.value =

      // console.log(squareSize.value)
    })
    return {
      listName,
      items,
      btn,
      color
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

    &__name {
      font-size: 1rem;
      text-align: left;
    }

    &__squares {
      display: grid;
      row-gap: 5px;
      column-gap: 5px;
      grid-template-areas:
                          "a a a"
                          "b b b"
                          "b c c";
      width: 100%;
      min-height: 20px;
    }
  }
</style>
