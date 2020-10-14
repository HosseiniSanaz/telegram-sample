import * as React from "react";

interface DKCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function DKCardFooter({ children, className, ...other }: DKCardProps): JSX.Element {
  return (
    <div className={className || ""} {...other}>
      {children}
    </div>
  );
}
DKCardFooter.defaultProps = {
  type: "DKCardFooter",
};
