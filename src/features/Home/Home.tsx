import React from "react";
import { DKCard, DKCardBody } from "../../core/components/card";

interface Props {
  history?: any;
}
export const Home = ({ history }: Props) => {
  return (
    <DKCard gutter={true} stretch={true}>
      <DKCardBody>test</DKCardBody>
    </DKCard>
  );
};
