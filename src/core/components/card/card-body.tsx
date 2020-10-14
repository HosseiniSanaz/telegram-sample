import * as React from "react";
interface DKCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function DKCardBody({ children, className, ...other }: DKCardProps): JSX.Element {
  return <>{children}</>;
}
DKCardBody.defaultProps = {
  type: "DKCardBody",
};
