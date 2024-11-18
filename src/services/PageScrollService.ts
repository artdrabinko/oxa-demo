import { FocusableElement } from "../core/focus";
import { translate } from "../core/utils";

export class PageScrollService {
  private scrollElement: HTMLElement | null;

  constructor(containerId: string) {
    this.scrollElement = document.getElementById(containerId);

    this.scrollTop = this.scrollTop.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
  }

  setScrollElement(containerId: string = "scroll") {
    this.scrollElement = document.getElementById(containerId);
  }

  onFocusHandler({ y }: FocusableElement) {
    if (!this.scrollElement) return;

    if (y < 180) {
      this.scrollElement.style.transform = translate(0, "Y");
      return;
    }

    const offset = y - 230; // -180px margin value for header menu
    this.scrollElement.style.transform = translate(-offset, "Y");
  }

  scrollTo(offset: number) {
    if (!this.scrollElement) return;

    this.scrollElement.style.transform = translate(-offset, "Y");
  }

  scrollTop() {
    if (!this.scrollElement) return;

    this.scrollElement.style.transform = translate(0, "Y");
  }
}

export const pageScrollService = new PageScrollService("scroll");
