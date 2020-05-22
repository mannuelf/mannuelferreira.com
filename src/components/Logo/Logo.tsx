import React from "react";
import styled from "styled-components";

const StyledLogo = styled.a`
  font-weight: 800;
  background-color: transparent;
  color: #8fffff;
  font-size: 2.9rem;
  line-height: 48px;
`;

const Logo = () => {
  return <StyledLogo>MF</StyledLogo>;
};

export default Logo;
