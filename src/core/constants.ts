



export enum Keycodes {
  KEY_ENTER = "KEY_ENTER",
  KEY_BACK = "KEY_BACK",
  KEY_DEBUG = "KEY_DEBUG",
  KEY_LEFT = "KEY_LEFT",
  KEY_RIGHT = "KEY_RIGHT",
  KEY_UP = "KEY_UP",
  KEY_DOWN = "KEY_DOWN",
  KEY_OK = "KEY_OK",
  KEY_0 = "KEY_0",
  KEY_1 = "KEY_1",
  KEY_2 = "KEY_2",
  KEY_3 = "KEY_3",
  KEY_4 = "KEY_4",
  KEY_5 = "KEY_5",
  KEY_6 = "KEY_6",
  KEY_7 = "KEY_7",
  KEY_8 = "KEY_8",
  KEY_9 = "KEY_9",
  KEY_PLAY = "KEY_PLAY",
  KEY_PLAY_PAUSE = "KEY_PLAY_PAUSE",
  KEY_STOP = "KEY_STOP",
  KEY_PAUSE = "KEY_PAUSE",
  KEY_INFO = "KEY_INFO",
  KEY_CHANNEL_UP = "KEY_CHANNEL_UP",
  KEY_CHANNEL_DOWN = "KEY_CHANNEL_DOWN",
  KEY_EPG = "KEY_EPG",
  KEY_RECORD = "KEY_RECORD",
  KEY_REW = "KEY_REW",
  KEY_FF = "KEY_FF",
}

export const FocusKeys = {
  Menu: "FocusKey:Menu",
  Tabs: "FocusKey:Tabs",
  Tab: "FocusKey:Tab",
  Row: "FocusKey:Row",
  Grid: "FocusKey:Grid",
  Keyboard: "FocusKey:Keyboard",
  MenuItem: (id: string | number) => `FocusKey:MenuItem:${id}`,
  ListItem: (id: string | number) => `FocusKey:ListItem:${id}`,
};
