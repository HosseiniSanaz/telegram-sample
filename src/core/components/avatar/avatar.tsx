import * as React from "react";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import BlankAvatar from "assets/img/icons/user-icon.png";
interface Props {
  imageUrl?: string;
  type?: "circle" | "square";
  size: number;
  userName?: string;
  outline?: boolean;
  className?: string;
  isSymbol?: boolean;
  children?: React.ReactNode | React.ReactNode[];
  hasLink?: boolean;
}
const DKAvatar = ({
  imageUrl,
  type = "square",
  size,
  userName = "",
  outline = false,
  className,
  isSymbol = true,
  children,
  hasLink = true,
}: Props): ReactElement => {
  return (
    <div
      className={
        (isSymbol ? "symbol symbol-" + size : "image-input ") +
        (type === "circle" ? " symbol-circle" : "") +
        (outline ? " image-input-outline" : "") +
        (className ? ` ${className}` : "")
      }
      style={{ minHeight: size + "px" }}
    >
      <Link
        to={hasLink ? `/profile${userName ? "/" + userName : ""}` : ""}
        className={className}
        style={{ cursor: hasLink ? "pointer" : "auto" }}
      >
        <div
          className={isSymbol ? " symbol-label " : " image-input-wrapper h-" + size + "px w-" + size + "px"}
          style={{
            backgroundImage: `url(${Boolean(imageUrl) ? imageUrl : BlankAvatar})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        ></div>
        {children}
      </Link>
    </div>
  );
};
export default DKAvatar;
