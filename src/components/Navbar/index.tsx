import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Link from 'next/link';
import { throttle } from "@/utils"
import { styled } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { Logo } from './Logo';

const theme = createTheme();

const StyledContainer = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'scrollDirection'
 })<{scrollDirection: string}>
 (({ scrollDirection, theme }) => ({
  position: 'fixed',
  top: 0,
  padding: '0px 25px',
  backgroundColor: 'transparent',
  transition: "all 0.3s ease-in-out",
  zIndex: 11,
  filter: 'none !important',
  width: '100%',
  height: scrollDirection == 'none' ? "70px" : "5px",
  transform: `translateY(${scrollDirection === 'down' ? `-70px` : '0px'})`,
}));

const StyledNav = styled(Toolbar)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  color: "#070707",
  textDecoration: 'none',
  fontWeight: 400,
  zIndex: 12,
  display: "flex",
  justifyContent: "space-between",
  alignSelf: "stretch"
}));

const StyledResumeButton = styled("a")(({ theme }) => ({

}));

const StyledLogo = styled(Box)(({ theme }) => ({
  '& a': {
    display: 'block',
    color: "#070707",
    width: theme.spacing(5),
    height: theme.spacing(5),
    opacity: 1,
    '&:hover, &:focus': {
      opacity: 0.5,
    },
    '& svg': {
      fill: 'none',
      transition: theme.transitions.create('fill', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.short,
      }),
      userSelect: 'none',
    },
  },
}));

const NavBar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('none');
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsMounted(true);
      window.addEventListener('scroll', throttle(handleScroll));
    }, 100);
  
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', throttle(handleScroll));
    };
  }, []);

  const DELTA = 5;
  const navHeight = 100;
  const timeout = 2000;
  const fadeClass = 'fade';
  const fadeDownClass = 'fadedown';
  const navLinks = [
    // {
    //     name: 'About',
    //     url: '/#about',
    // },
    // {
    //     name: 'Projects',
    //     url: '/#projects',
    // },
    // {
    //     name: 'Experience',
    //     url: '/#jobs',
    // },
    // {
    //     name: 'Blog',
    //     url: '/#blog',
    // },
    // {
    //     name: 'Contact',
    //     url: 'https://jonascsantos.com',
    // },

  ];

  const handleScroll = () => {
    const fromTop = window.scrollY;

    if (!isMounted || Math.abs(lastScrollTop - fromTop) <= DELTA) {
      return;
    }
    if (fromTop < DELTA) {
      setScrollDirection('none');
    } else if (fromTop > lastScrollTop && fromTop > navHeight) {
      if (scrollDirection !== 'down') {
        setScrollDirection('down');
      }
    } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
      if (scrollDirection !== 'up') {
        setScrollDirection('up');
      }
    }
    setLastScrollTop(fromTop);
  };

  return (
    <ThemeProvider theme={theme}>
        <StyledContainer scrollDirection={scrollDirection}>
        <StyledNav>
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={fadeClass} timeout={timeout}>
                <StyledLogo >
                  <Link href="/" aria-label="home">
                    <Logo />
                  </Link>
                </StyledLogo>
              </CSSTransition>
            )}
          </TransitionGroup>
            <div>
                  <TransitionGroup component={null}>
                    {isMounted && (
                        <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                          <div style={{ transitionDelay: `100ms` }}>
                              <StyledResumeButton
                                  href="/resume.pdf"
                                  target="_blank"
                                  rel="nofollow noopener noreferrer"
                                  >
                                  Resume
                              </StyledResumeButton>
                          </div>
                        </CSSTransition>
                    )}
                </TransitionGroup> 
            </div>

          {/* <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={fadeClass} timeout={timeout}>
                TEST
              </CSSTransition>
            )}
          </TransitionGroup> */}

          {/* Other components */}
        </StyledNav>
      </StyledContainer>
    </ThemeProvider>
  );
};

export default NavBar;
