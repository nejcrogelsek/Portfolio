import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Link as LinkS } from "react-scroll";
import styled from "styled-components";

const BackToTopBtn = styled(LinkS)`
  position: fixed;
  bottom: 50px;
  right: 50px;
  display: block;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid #111;
  transition: 0.3s;
  color: #fff;
  background: #111;
  opacity: ${({ visibility }) => (visibility ? "1" : "0")};
  &:hover {
    cursor: ${({ visibility }) => (visibility ? "pointer" : "auto")};
    transform: scale(1.1);
    color: #fff;
  }
  > .MuiSvgIcon-root {
    width: 100%;
    height: 100%;
  }
`;

const ScrollToTop = () => {
  const [visibility, setVisibility] = useState(false);
  const displayButton = () => {
    if (window.scrollY >= 100) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", displayButton);
  }, []);
  return (
    <BackToTopBtn
      visibility={visibility}
      to='hero'
      smooth={true}
      duration={500}
      spy={true}
      exact='true'
      offset={0}>
      <KeyboardArrowUpIcon />
    </BackToTopBtn>
  );
};

export default ScrollToTop;
