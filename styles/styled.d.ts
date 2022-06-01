import "styled-components";
import { IScoreColorset } from "components/common/score";
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
  mainOrange: string;
  plusRed: string;
  minusBlue: string;
}

// and extend theme!
declare module "styled-components" {
  // 디폴트 테마를 지정할 수 있음
  export interface DefaultTheme {
    device: Device;
    media: Media;
    colors: Colors;
  }
}
