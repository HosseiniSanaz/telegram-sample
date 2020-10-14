import * as React from "react";
import { useEffect, useState } from "react";
import CardChildren from "./card-children";
import "./card.css";

interface DKCardProps extends React.HTMLAttributes<HTMLDivElement> {
  noBorder?: boolean;
  fitBody?: boolean;
  gutter?: boolean;
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  direction?: string;
  stretch?: boolean;
  backgroundImage?: string;
}

export function DKCard({
  children = [],
  className,
  gutter = false,
  noBorder = false,
  fitBody = false,
  direction,
  stretch = false,
  backgroundImage = "",
  ...other
}: DKCardProps): JSX.Element {
  const initialChild: CardChildren = {
    header: { status: false, index: -1 },
    content: { status: false, index: -1 },
    footer: { status: false, index: -1 },
  };

  const [childrenType, setChildrenType] = useState<CardChildren>(initialChild);

  const createContent = (): void => {
    const childrenTypes: CardChildren = { ...initialChild };
    if (Array.isArray(children)) {
      const childrenArray: React.ReactNode[] = children;
      childrenArray.forEach(async (child: any, i: number) => {
        if (typeof child === "object") {
          if (child?.props.type === "DKCardHeader") {
            childrenTypes.header.status = true;
            childrenTypes.header.index = i;
          }
          if (child?.props.type === "DKCardBody") {
            childrenTypes.content.status = true;
            childrenTypes.content.index = i;
          }
          if (child?.props.type === "DKCardFooter") {
            childrenTypes.footer.status = true;
            childrenTypes.footer.index = i;
          }
        }
      });
      setChildrenType(childrenTypes);
    }
  };

  useEffect(() => {
    createContent();
  }, []);

  const cardStyle = {
    backgroundImage: backgroundImage ? "url('" + backgroundImage + "')" : "",
  };

  return (
    <div
      className={
        "card card-custom " +
        (gutter ? "gutter-b " : "") +
        (stretch ? "card-stretch " : "") +
        (noBorder ? "border-0 " : "") +
        (className || "")
      }
      style={cardStyle}
      {...other}
    >
      {!Array.isArray(children) && <div className={"card-body " + (fitBody ? "p-0" : "")}>{children}</div>}
      {Array.isArray(children) && (
        <>
          {childrenType.header.status && <>{children[childrenType.header.index]}</>}
          {childrenType.content.status && (
            <div className={"card-body " + (fitBody ? "p-0 " : "")}>{children[childrenType.content.index]}</div>
          )}
          {childrenType.footer.status && (
            <div className={"card-footer " + (fitBody ? "p-0 " : "") + (direction === "en" ? "ltr" : "rtl")}>
              {children[childrenType.footer.index]}
            </div>
          )}
        </>
      )}
    </div>
  );
}
