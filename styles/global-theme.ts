import baseStyled, { DefaultTheme, css, ThemedStyledInterface } from "styled-components";
import { Device, Media } from "./styled";

type BackQuoteArgs = string[];

export const device: Device = {
  mobile: 450, // iPhone XR(414), iPhone XS Max(428) ~
  tablet: 768, // iPad mini 4(768) (태블릿 PC 최소 사이즈)
  pc: 1024,
};

const media: Media = {
  mobile: (...args: BackQuoteArgs) => undefined,
  tablet: (...args: BackQuoteArgs) => undefined,
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

const globalTheme: DefaultTheme = {
  device,
  media,
};

export const styled = baseStyled as ThemedStyledInterface<DefaultTheme>;

export default globalTheme;
