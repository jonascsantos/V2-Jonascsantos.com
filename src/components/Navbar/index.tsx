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
import Menu from './Menu';

const theme = createTheme();

const StyledContainer = styled(AppBar)<{scrollDirection: string, bgColor: string}>
 (({ scrollDirection, bgColor, theme }) => ({
  position: 'fixed',
  top: 0,
  zIndex: 10,
  padding: '8px 25px', 
  transition: "all 0.3s ease-in-out",
  filter: 'none !important',
  width: '100%',
  backgroundColor: "transparent",
  borderRadius: "0 0 0 16",                             
  boxShadow: scrollDirection === 'down' ? `0 4px 30px rgba(0, 0, 0, 0.1)` : `none`,
  backdropFilter: 'blur(7px)',
  WebkitBackdropFilter: 'blur(7px)',
}));

const StyledNav = styled(Toolbar)(({ theme }) => ({
  position: 'relative',
  width: '100%',   
  zIndex: 11,
  color: "#070707",
  textDecoration: 'none',
  fontWeight: 400,
  display: "flex",
  justifyContent: "space-between",
  alignSelf: "stretch",
  padding: 0
}));

const StyledHamburger = styled("a")(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'visible',
  margin: '0 -12px 0 0',
  padding: 15,
  zIndex: 12,
  cursor: 'pointer',
  transitionTimingFunction: 'linear',
  transitionDuration: '0.15s',
  transitionProperty: 'opacity, filter',
  textTransform: 'none',
  color: 'inherit',
  border: 0,
  backgroundColor: 'transparent',
  display: 'none',

  "@media (max-width: 768px)": {
    display: "flex",
  },
}));

const StyledHamburgerBox = styled("div")(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  width: 30,
  height: 24,
}));

const StyledHamburgerInner = styled("div", {
  shouldForwardProp: (prop) => prop !== 'menuOpen'
 })<{menuOpen: boolean, bgColor: string}>
 (({ menuOpen, bgColor, theme }) => ({
  backgroundColor: `${menuOpen ? "#ffffff" : bgColor}`,
  position: 'absolute',
  width: 30,
  height: 2,
  borderRadius: 3,
  top: '50%',
  left: 0,
  right: 0,
  transitionDuration: '0.22s',
  transitionProperty: 'transform',
  transitionDelay: `${menuOpen ? '0.12s' : '0s'}`,
  transform: `rotate(${menuOpen ? `225deg` : `0deg`})`,
  transitionTimingFunction: `cubic-bezier(,${menuOpen ? '0.215, 0.61, 0.355, 1' : '0.55, 0.055, 0.675, 0.19'})`,
  "&:before, &:after" : {
    content: "''",
    display: 'block',
    backgroundColor: `${menuOpen ? "#ffffff" : bgColor}`,
    position: 'absolute',
    left: 'auto',
    right: 0,
    width: 30,
    height: 2,
    transitionTimingFunction: 'ease',
    transitionDuration: '0.15s',
    transitionProperty: 'transform',
    borderRadius: 4,
  },
  "&:before": {
    width: menuOpen ? `100%` : `120%`,
    top: menuOpen ? `0` : `-10px`,
    opacity: menuOpen ? 0 : 1,
    transition: menuOpen ? `top 0.1s ease-out, opacity 0.1s ease-out 0.12s` : `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  },
  "&:after": {
    width: menuOpen ? `100%` : `80%`,
    bottom: menuOpen ? `0` : `-10px`,
    transform: `rotate(${menuOpen ? '-90deg' : '0'})`,
    transition: menuOpen ? `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s` : `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  }
}));



const HamburgerContainer = styled("div")(({ theme }) => ({
  zIndex: 12
}));


const StyledResumeButton = styled("a")(({ theme }) => ({

}));

export const StyledLogo = styled(Box)(({ theme }) => ({
  zIndex: 7,
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsMounted(true);
      window.addEventListener('scroll', throttle(handleScroll));
    }, 200);
  
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', throttle(handleScroll));
    };
  }, []);

  const DELTA = 10;
  const navHeight = 100;
  const timeout = 2000;
  const fadeClass = 'fade';
  const fadeDownClass = 'fadedown';
  const navLinks = [
    {
        name: 'About',
        url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
        name: 'Projects',
        url: '/#projects',
    },
    {
        name: 'Contact',
        url: 'mailto:contact@jonascsantos.com',
    },
  ];

  const handleScroll = () => {
    const fromTop = window.scrollY;

    if (fromTop < DELTA) {
      setScrollDirection('none');
    } else if (fromTop >= lastScrollTop && fromTop > navHeight) {
      if (scrollDirection !== 'down') {
        setScrollDirection('down');
      }
    } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
      if (scrollDirection !== 'up') {
        console.log("up set")
        setScrollDirection('up');
      }
    } 
    setLastScrollTop(fromTop);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const mainColor = scrollDirection === 'down' ? "#0EC9E3": "transparent"; 
  return (
    <ThemeProvider theme={theme}>
        <StyledContainer className={scrollDirection === 'down' ? "bg-[#f8f9ffdd]" : ""} scrollDirection={scrollDirection} bgColor={mainColor}>
        <StyledNav>
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={fadeClass} timeout={timeout}>
                <StyledLogo >
                  <Link href="/" aria-label="home">
                    <Logo color={scrollDirection === 'down' ? "#0EC9E3" : "#0EC9E3" } />
                  </Link>
                </StyledLogo>
              </CSSTransition>
            )}
          </TransitionGroup>
           
            <HamburgerContainer>
              <StyledHamburger onClick={toggleMenu}>
                  <StyledHamburgerBox>
                      <StyledHamburgerInner menuOpen={menuOpen} bgColor={scrollDirection === 'down' ? "#0EC9E3" : "#0EC9E3"}/>
                  </StyledHamburgerBox>
              </StyledHamburger>
            </HamburgerContainer>

          {/* <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={fadeClass} timeout={timeout}>
                TEST
              </CSSTransition>
            )}
          </TransitionGroup> */}

          {/* Other components */}
        </StyledNav>
        <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </StyledContainer>

    </ThemeProvider>
  );
};

export default NavBar;
