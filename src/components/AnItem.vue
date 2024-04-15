<template>
  <li class="item">
    <label class="item__name">
      <input type="checkbox" class="hidden item__checkbox" :checked="state.checked">
      <span class="item__custom-checkbox"></span>
      {{ state.text }}
    </label>
    <input type="text" class="item__amount" :value="state.amount">
    <input type="color" class="item__color" :value="state.color">
  </li>
</template>

<script>
import { reactive, defineComponent } from 'vue'
export default defineComponent({
  setup () {
    const state = reactive({
      checked: true,
      text: 'Something',
      amount: 10,
      color: '#45D819'
    })

    return {
      state
    }
  }
})

</script>

<style lang="scss">
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  .item {
    @include flex-row(left, center);

    justify-content: space-between;
    padding-left: calc($box-size * 2 + $column-gap-size * 2);
    width: calc(100% - $box-size * 2 - $column-gap-size * 2);

    &__name {
      @include flex-row(left, center);
      width: 80%
    }

    &__custom-checkbox {
      @include custom-checkbox (14px, 14px);

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        height: 70%;
        width: 40%;
        border-right: 1px solid black;
        border-bottom: 1px solid black;
        transform-origin: right bottom;
        transform: translateX(-130%) translateY(-25%) rotate(45deg);
      }
    }

    &__amount {
      width: 10%;
      text-align: end;
    }

    &__color {
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      background: none;
      cursor: pointer;
      border: none;
      height: 27px;
      width: 27px;
      background: transparent;
    }
  }
</style>
