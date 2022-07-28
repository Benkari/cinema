import styled from "@emotion/styled";

export const ScrollableWrapper = styled.div`
  position: relative;
  &:hover .hoverOver {
    opacity: 1;
  }
`;

export const LeftArrow = styled.div`
  position: absolute;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  opacity: 0;
  top: 0;
  left: 0;
  z-index: 99999;
  display: flex;
  justifycontent: center;
  align-items: center;
  transition: 0.2s ease-in-out;

  &:hover .hoveredIcon {
    font-size: 26px !important;
    transition: 0.2s ease-in-out;
  }
`;
export const RightArrow = styled.div`
  position: absolute;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  opacity: 0;
  top: 0;
  right: 0;
  z-index: 99999;
  display: flex;
  justifycontent: center;
  align-items: center;
  transition: 0.2s ease-in-out;

  &:hover .hoveredIcon {
    font-size: 26px !important;
    transition: 0.2s ease-in-out;
  }
`;
