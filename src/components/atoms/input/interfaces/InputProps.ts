import { IconId } from "@/common/IconsDefinitions/IconId";
import { Ref } from "vue";

export interface InputProps {
  modelValue: Ref<string>;
  iconId?: IconId;
}
