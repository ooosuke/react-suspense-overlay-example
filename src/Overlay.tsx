import styled from "@emotion/styled";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const LoadingOverlay: React.FC = () => {
  return <Overlay>loading...</Overlay>;
};
