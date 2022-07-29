import styled from "@emotion/styled";

export const ScrollableWrapper = styled.div`
  position: relative;
  &:hover .hoverOver {
    opacity: 1;
  }
`;

export const LeftArrow = styled.div`
  position: absolute;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  opacity: 0;
  top: 40%;
  left: 10px;
  z-index: 99;
  display: flex;
  justifycontent: center;
  align-items: center;
  transition: 0.2s ease-in-out;
  border-radius: 20px;

  &:hover .hoveredIcon {
    font-size: 26px !important;
    transition: 0.2s ease-in-out;
  }
`;
export const RightArrow = styled.div`
  position: absolute;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  opacity: 0;
  top: 40%;
  right: 10px;
  z-index: 99;
  display: flex;
  justifycontent: center;
  align-items: center;
  transition: 0.2s ease-in-out;
  border-radius: 20px;

  &:hover .hoveredIcon {
    font-size: 26px !important;
    transition: 0.2s ease-in-out;
  }
`;
