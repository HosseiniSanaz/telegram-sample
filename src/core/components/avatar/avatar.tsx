import * as React from "react";
import { ReactElement } from "react";
import "./avatar.scss";
interface Props {
  imageUrl?: string;
  type?: "circle" | "square";
  size: number;
  outline?: boolean;
  className?: string;
  isSymbol?: boolean;
  children?: React.ReactNode | React.ReactNode[];
  hasLink?: boolean;
  pictureTextPlaceholder?: string;
  color?: string;
  onShowProfile?: () => void;
}
const DKAvatar = ({
  imageUrl,
  type = "square",
  size,
  outline = false,
  className,
  isSymbol = true,
  children,
  hasLink = true,
  pictureTextPlaceholder = "",
  color = "symbol-light-info",
  onShowProfile,
}: Props): ReactElement => {
  return (
    <div
      className={
        (isSymbol ? "symbol symbol-" + size : "image-input ") +
        (type === "circle" ? " symbol-circle" : "") +
        (outline ? " image-input-outline" : "") +
        (className ? ` ${className}` : "") +
        (hasLink ? " cursor-pointer" : "") +
        ` ${color}`
      }
      style={{ minHeight: size + "px" }}
      onClick={() => {
        if (hasLink && onShowProfile) onShowProfile();
      }}
    >
      {Boolean(imageUrl) && (
        <div
          className={isSymbol ? " symbol-label " : " image-input-wrapper h-" + size + "px w-" + size + "px"}
          style={{
            backgroundImage: `url(${Boolean(imageUrl) ? imageUrl : ""})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        ></div>
      )}
      {!Boolean(imageUrl) && (
        <div className="font-size-h6 symbol-label font-weight-bolder">{pictureTextPlaceholder}</div>
      )}
      {children}
    </div>
  );
};
export default DKAvatar;
