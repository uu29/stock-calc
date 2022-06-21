import "styled-components";
import { CSSProp } from "styled-components";

interface Device {
  mobile: number;
  tablet: number;
  pc: number;
}

interface Media {
  mobile;
  tablet: (...args: BackQuoteArgs) => CSSProp | undefined;
  pc;
}

export interface Colors {
  main: string;
  plus: string;
  minus: string;
  inactive: string;
  active: string;
  inputGray: string;
}

export interface FontSize {
  input: {
    small: string;
    medium: string;
    large: string;
  };
}

// and extend theme!
declare module "styled-components" {
  // 디폴트 테마를 지정할 수 있음
  export interface DefaultTheme {
    device: Device;
    media: Media;
    colors: Colors;
    fontSize: FontSize;
  }
}
