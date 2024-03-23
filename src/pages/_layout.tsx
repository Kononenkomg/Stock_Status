import { ReactNode } from "react";
import styled from "styled-components";

const Layout = ({ children }: { children: ReactNode }) => {
  // we can add header footer here
  return (
    <div className="app-container">
      <div className="app-main">
        <LayoutWrapper>{children}</LayoutWrapper>
      </div>
    </div>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
