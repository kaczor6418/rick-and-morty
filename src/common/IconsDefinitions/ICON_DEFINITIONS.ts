import { IconId } from "@/common/IconsDefinitions/IconId";
import { UTILS } from "@/common/Utils/UTILS";
import { HTMLStringConverter } from "@/converters/HTMLStringConverter";
import { IconNotFoundError } from "@/errors/IconNotFoundError";

import female from "../../assets/icons/female.svg";
import male from "../../assets/icons/male.svg";
import search from "../../assets/icons/search.svg";
import genderless from "../../assets/icons/genderless.svg";
import star from "../../assets/icons/star.svg";
import unknownIcon from "../../assets/icons/unknown.svg";

export namespace ICONS_DEFINITIONS {
  const iconIds: Map<IconId, string> = new Map<IconId, string>();
  iconIds.set(IconId.FEMALE, female);
  iconIds.set(IconId.MALE, male);
  iconIds.set(IconId.GENDERLESS, genderless);
  iconIds.set(IconId.STAR, star);
  iconIds.set(IconId.UNKNOWN, unknownIcon);
  iconIds.set(IconId.SEARCH, search);

  export function getIcon(iconId: IconId): SVGElement {
    const icon: string | undefined = iconIds.get(iconId);
    if (UTILS.isDefined(icon)) {
      return HTMLStringConverter.toElement(icon);
    }
    throw new IconNotFoundError(
      `Icon: ${iconId} doesn't exist in icon definitions`
    );
  }
}
