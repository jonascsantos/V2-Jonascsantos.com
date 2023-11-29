'use client'

import React, { useState, useEffect } from 'react';
import anime from 'animejs';
import { IconLoader } from "./loader.icon"
import { styled } from '@mui/material';

const StyledContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: '#f6f6f6',
  position: 'fixed',
  transition: "0.4s",
  width: '100%',
  height: '100%',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 99,
}));

const StyledLogo = styled("div")(({ theme }) => ({
  width: 'max-content',
  maxWidth: 100,
  transition: "0.4s",
  "svg": {
    width: '100%',
    height: '100%',
    display: 'block',
    margin: '0 auto',
    fill: 'none',
    userSelect: 'none',
    "#J": {
      opacity: 0,
    }
  }
}));

interface LoaderProps {
  finishLoading: Function
}

const Loader = ({ finishLoading }: LoaderProps) => {
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: '.st0',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'cubicBezier(.5, .05, .1, .3)',
        duration: 1000,
        delay: 200,
      })
      .add({
        targets: '.right',
        translateX: -3500,
        easing: 'easeOutQuad',
      }, 700)
      .add({
        targets: '.left',
        translateX: '3500',
        easing: 'easeOutQuad',
      }, 700)
      .add({
        targets: '#logo #J',
        duration: 1000,
        easing: 'easeInOutQuart',
        opacity: 1,
      }, 700)
      .add({
        targets: '#logo',
        delay: 400,
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 0,
      })
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledContainer className="loader">
      <StyledLogo sx={{opacity: isMounted ? 1 : 0}} >
        <IconLoader />
      </StyledLogo>
    </StyledContainer>
  );
};

export default Loader;
