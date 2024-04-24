import { ImageProps } from "next/image";

export interface IImageProps extends ImageProps {
  className?: string;
  css?: React.CSSProperties;
}
