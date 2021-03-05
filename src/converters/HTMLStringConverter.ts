import { ParserError } from "@/errors/ParserError";
import { UTILS } from "@/common/Utils/UTILS";

export class HTMLStringConverter {
  public static toElement<T extends Element>(htmlString: string): T {
    const wrapper: HTMLDivElement = document.createElement("div");
    wrapper.innerHTML = htmlString;
    const parsedElement: T | null = wrapper.firstElementChild as T;
    if (UTILS.isNullOrUndefined(parsedElement)) {
      throw new ParserError(
        `This xml string ${htmlString} is not parsable to Element`
      );
    }
    return parsedElement;
  }
}
