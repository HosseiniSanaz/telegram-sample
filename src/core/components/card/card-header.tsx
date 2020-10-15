import * as React from "react";

interface DKCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  headerToolbar?: React.ReactNode;
  className?: string;
  hasComplexHeader?: boolean;
  noBorder?: boolean;
  textColor?: string;
}

export function DKCardHeader({
  className = "",
  children,
  headerToolbar,
  hasComplexHeader = false,
  noBorder = false,
  title = "",
  subtitle = "",
  textColor = "",
  ...other
}: DKCardProps): JSX.Element {
  return (
    <div className={"card-header " + (noBorder ? "border-0 " : "") + className}>
      {!hasComplexHeader && (
        <>
          <h3 className={"card-title " + (textColor ? "text-" + textColor : "")}>
            {title}
            <small>{" " + subtitle}</small>
          </h3>
          <div className="card-toolbar"> {headerToolbar}</div>
        </>
      )}
      {hasComplexHeader && <>{children}</>}
    </div>
  );
}
DKCardHeader.defaultProps = {
  type: "DKCardHeader",
};
