import baseStyled, { DefaultTheme, css, ThemedStyledInterface } from "styled-components";
// eslint-disable-next-line @typescript-eslint/no-unused-vars,import/named
import { Colors, Device, FontSize, Media } from "./styled";

type BackQuoteArgs = string[];

export const device: Device = {
  mobile: 450, // iPhone XR(414), iPhone XS Max(428) ~
  tablet: 768, // iPad mini 4(768) (태블릿 PC 최소 사이즈)
  pc: 1024,
};

const media: Media = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  mobile: (...args: BackQuoteArgs) => undefined,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  tablet: (...args: BackQuoteArgs) => undefined,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  pc: (...args: BackQuoteArgs) => undefined,
};

Object.keys(device).reduce((acc: Media, label: string) => {
  switch (label) {
    case "mobile":
      acc.mobile = (...args: BackQuoteArgs) =>
        css`
          @media only screen and (max-width: ${device.mobile}px) {
            ${args}
          }
        `;
      break;
    case "tablet":
      acc.tablet = (...args: BackQuoteArgs) => {
        return css`
          @media only screen and (max-width: ${device.tablet}px) {
            ${args}
          }
        `;
      };
      break;
    case "pc":
      acc.pc = (...args: BackQuoteArgs) =>
        css`
          @media only screen and (max-width: ${device.pc}px) {
            ${args}
          }
        `;
      break;
    default:
      break;
  }
  return acc;
}, media);

const colors: Colors = {
  mainOrange: "#ff5c00",
  plusRed: "#ff0f00",
  minusBlue: "#0075ff",
  inactiveGray: "#b8bbbe",
  activeBlack: "#000",
  inputGray: "#f6f7f8",
};

const fontSize: FontSize = {
  input: {
    small: "1.6rem",
    medium: "2rem",
    large: "3.2rem",
  },
};

const globalTheme: DefaultTheme = {
  device,
  media,
  colors,
  fontSize,
};

export const styled = baseStyled as ThemedStyledInterface<DefaultTheme>;

export default globalTheme;
