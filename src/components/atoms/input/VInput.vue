<template>
  <div class="wrapper">
    <input class="input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <icon class="search-icon" v-if="hasIcon()" :icon-id="iconId" />
  </div>
</template>

<script lang="ts">

import { PropType } from "vue";
import { IconId } from "@/common/IconsDefinitions/IconId";
import Icon from "@/components/atoms/icon/Icon.vue";
import { InputProps } from "@/components/atoms/input/interfaces/InputProps";
import { UTILS } from "@/common/Utils/UTILS";

export default {
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
  setup(props: InputProps) {
    const hasIcon = () => UTILS.isDefined(props.iconId);
    return { hasIcon };
  }
};
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
