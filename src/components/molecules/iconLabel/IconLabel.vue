<template>
  <div>
    <icon class="icon" :icon-id="iconProps.iconId" :size="size"></icon>
    <v-label class="label" :value="labelProps.value"></v-label>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import Icon from "@/components/atoms/icon/Icon.vue";
import VLabel from "@/components/atoms/label/VLabel.vue";
import { IconProps } from "@/components/atoms/icon/interfaces/IconProps";
import { LabelProps } from "@/components/atoms/label/interfaces/LabelProps";
import { IconLabelProps } from "@/components/molecules/iconLabel/interfaces/IconLabelProps";
import { IconSize } from "@/components/atoms/icon/interfaces/IconSize";

export default {
  name: "IconLabel",
  components: { VLabel, Icon },
  props: {
    iconProps: {
      type: Object as PropType<IconProps>,
      required: true
    },
    labelProps: {
      type: Object as PropType<LabelProps>,
      required: true
    }
  },
  setup(props: IconLabelProps) {
    const size = props.iconProps.size ?? IconSize.M;
    return {
      size
    };
  }
};
</script>

<style lang="scss" scoped>
div {
  width: 128px;
  display: inline-block;

  .icon {
    padding-right: 8px;
  }
}
</style>
