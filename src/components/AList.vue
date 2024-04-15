<template>
  <ul class="ul list">
    <div class="list__title">
      <span class="list__button"></span>
      <label class="list__name">
        <input type="checkbox" class="hidden list__checkbox">
        <span class="list__custom-checkbox"></span>
        {{ name }}
      </label>
    </div>
    <AnItem class="list__item"/>
    <AnItem class="list__item"/>
    <AnItem class="list__item"/>
  </ul>
</template>

<script>
import { defineComponent, ref } from 'vue'
import AnItem from '@/components/AnItem.vue'

export default defineComponent({
  components: {
    AnItem
  },
  setup () {
    const name = ref('List')
    return {
      name
    }
  }
})
</script>

<style lang="scss">
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  .list {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    justify-content: left;
    align-items: center;

    &__title {
      @include flex-row(left, center);

      height: 100%;
      width: 100%;
    }

    &__button {
      position: relative;
      display: inline-block;
      width: 18px;
      height: 18px;

      &::before {
        content: '';
        position: absolute;
        top: 3px;
        bottom: 3px;
        left: 3px;
        right: 3px;
        border-right: 1px solid black;
        border-bottom: 1px solid black;
        transform-origin: right bottom;
        transform: translateY(-50%) rotate(-45deg);
      }

      &_opened {
        transform: translateX(-50%) translateY(-25%) rotate(45deg);
      }

    }

    &__name {
      @include flex-row(left, center);
    }

    &__custom-checkbox {
      @include custom-checkbox (18px, 18px);

      &::after {
        content: '';
        position: absolute;
        top: 6px;
        bottom: 6px;
        left: 6px;
        right: 6px;
        background-color: black;
      }
    }

    &__item {
      width: 100%;
    }

  }
</style>
