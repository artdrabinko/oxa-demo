import { keycodes } from "../platform/web";

function setLayerHandler(obj: any, path: any[], value: any) {
  const key = path.pop();
  const pointer = path.reduce(
    (accumulator: { [x: string]: any }, currentValue: string | number) => {
      if (accumulator[currentValue] === undefined)
        accumulator[currentValue] = {};
      return accumulator[currentValue];
    },
    obj
  );
  // @ts-ignore
  pointer[key] = value;
  return obj;
}

const PAGE_LAYER = "page";
const MODAL_LAYER = "modal";

export class KeyboardService {
  private handlers: any = {};

  private globalHandlers: any = {};

  private layer: string = PAGE_LAYER;

  constructor() {
    this.handlers = {};

    window.addEventListener("keydown", (event) => {
      this.globalKeyDownListener(event);
      this.layerKeyDownHandler(event);
    });
  }

  private globalKeyDownListener(event: KeyboardEvent) {
    const length = this.globalHandlers[event.keyCode]?.length;

    if (length) {
      this.globalHandlers[event.keyCode][length - 1]();
    }
  }

  private layerKeyDownHandler(event: KeyboardEvent) {
    const handler = this.handlers[this.layer]?.[event.keyCode] || null;

    if (handler) {
      handler();
    }
  }

  public setLayer(layer: string) {
    this.layer = layer;
  }

  public setPageLayer() {
    this.layer = PAGE_LAYER;
  }

  public setModalLayer() {
    this.layer = MODAL_LAYER;
  }

  addGlobalHandler(keyName: string, handler: Function) {
    if (!this.globalHandlers[keycodes[keyName]]) {
      this.globalHandlers[keycodes[keyName]] = [];
    }

    this.globalHandlers[keycodes[keyName]].push(handler);
  }

  removeGlobalHandler(keyName: string) {
    if (this.globalHandlers[keycodes[keyName]]) {
      this.globalHandlers[keycodes[keyName]].pop();
    }
  }

  public addHandler(keyName: string, handler: any, layer: string = PAGE_LAYER) {
    setLayerHandler(this.handlers, [layer, keycodes[keyName]], handler);
  }

  public removeHandler(keyName: string, layer: string = PAGE_LAYER) {
    if (this.handlers[layer]?.[keycodes[keyName]]) {
      delete this.handlers[layer][keycodes[keyName]];
    }
  }
}

export const keyboardService = new KeyboardService();
