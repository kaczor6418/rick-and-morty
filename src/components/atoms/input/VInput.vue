<template>
  <div class="wrapper">
    <input
      class="input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <icon
      class="search-icon"
      v-if="hasIcon()"
      :icon-id="iconId"
      v-bind="$attrs"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IconId } from "@/common/IconsDefinitions/IconId";
import Icon from "@/components/atoms/icon/Icon.vue";
import { UTILS } from "@/common/Utils/UTILS";

export default defineComponent({
  name: "VInput",
  components: { Icon },
  props: {
    modelValue: {
      type: String
    },
    iconId: {
      type: String as PropType<IconId>
    }
  },
  inheritAttrs: false,
  setup(props) {
    const hasIcon = () => UTILS.isDefined(props.iconId);
    return { hasIcon };
  }
});
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  border: none;
  background-color: transparent;
}

.wrapper {
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: flex-start;

  .input {
    color: #a9b1bd;
    padding: 16px;
    font-size: 16px;
    font-family: "Poppins", sans-serif;
  }

  .search-icon {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
