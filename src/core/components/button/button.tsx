import * as React from "react";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  type: "submit" | "cancel" | "delete" | "edit";
  size?: "sm" | "lg" | "tall" | "normal";
  isWide?: boolean;
  disabled?: boolean;
  outline?: "outline" | "label" | "none";
  children?: React.ReactNode;
  loading?: boolean;
}

export function DKButton({
  type,
  outline = "none",
  disabled = false,
  isWide = false,
  size = "normal",
  children,
  loading = false,
  ...other
}: Props): JSX.Element {
  let className = "mx-1 btn";
  let classType = "";
  switch (type) {
    case "submit": {
      classType = "primary";
      break;
    }
    case "delete": {
      classType = "danger";
      break;
    }

    case "cancel": {
      classType = "secondary";
      break;
    }

    case "edit": {
      classType = "info";
      break;
    }

    default: {
      break;
    }
  }

  if (outline === "outline") className += " btn-outline-" + classType;
  else if (outline === "label") className += " btn-light-" + classType;
  else className += " btn-" + classType;

  if (size !== "normal") className += " btn-" + size;
  if (isWide) className += " btn-block";

  if (loading) className += " spinner spinner-white spinner-right";

  return (
    <button disabled={loading || disabled} className={className} {...other}>
      {children}
    </button>
  );
}
