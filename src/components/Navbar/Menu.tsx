import React, { MouseEventHandler } from "react";
import Link from "next/link";
import { styled } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const StyledContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "menuOpen",
})<{ menuOpen: boolean }>(({ menuOpen, theme }) => ({
  position: "fixed",
  top: 0,
  bottom: 0,
  right: 0,
  width: "100%",
  height: "100vh",
  zIndex: 10,
  outline: 0,
  transform: `translateX(${menuOpen ? "0vw" : "100vw"})`,
  visibility: `${menuOpen ? "visible" : "hidden"}`,
  display: "flex",
  transition: "0.3s all ease-in-out",
}));

const Sidebar = styled("aside")(({ theme }) => ({
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  flexDirection: "column",
  backgroundColor: "#0BA1B6",
  padding: 30,
  width: "50vw",
  height: "100%",
  position: "relative",
  right: 0,
  marginLeft: "auto",
  fontFamily:
    '`ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`',
  boxShadow: "-10px 0px 30px -15px #3F3F3F",
}));

const NavLinks = styled("nav")(({ theme }) => ({
  display: "flex",
  alignContent: "center",
  justifyContent: "space-between",
  width: "100%",
  flexDirection: "column",
  textAlign: "center",
  color: "#FFFFFF",
  fontWeight: "500"
}));

const NavList = styled("ol")(({ theme }) => ({
  padding: 0,
  margin: 0,
  listStyle: "none",
  width: "100%",
}));

const NavListItem = styled("li")(({ theme }) => ({
  margin: "0 auto 10px",
  position: "relative",
  fontSize: 16,
}));

const NavButton = styled("div")(({ theme }) => ({
  padding: "20px 20px",
  width: "100%",
  cursor: "pointer",
  userSelect: "none"
}));

const ResumeLink = styled(Link)(({ theme }) => ({
  padding: "20px 20px",
}));

const navLinks = [
  {
    name: "About",
    url: "/#Hero",
  },
  {
    name: "Experience",
    url: "/#Work",
  },
  {
    name: "Projects",
    url: "/#Projects",
  },
  {
    name: "Contact",
    url: "/#Contact",
  },
];

interface MenuProps {
  menuOpen: boolean;
  toggleMenu: Function;
}

export const Menu = ({
    menuOpen = false, 
    toggleMenu, 
    ...rest
  }: MenuProps) => {
  const handleMenuClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const isLink = target.hasAttribute("href");

    if (isLink) {
      toggleMenu();
    }
  };
  const handleLinkClick = (url: string) => {
    let newUrl = url.slice(2);

    const targetElement = document.getElementById(newUrl);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
      <StyledContainer
        menuOpen={menuOpen}
        onClick={handleMenuClick}
        aria-hidden={!menuOpen}
        tabIndex={menuOpen ? 1 : -1}
      >
        <Sidebar className="bg-gradient-work">
          <NavLinks>
            <NavList>
              {navLinks &&
                navLinks.map(({ url, name }, i) =>
                  /^https?:\/\//.test(url) ? (
                    <a href={url} key={i}>
                      {name}
                    </a>
                  ) : (
                    <NavListItem key={i}>
                      <NavButton onClick={() => handleLinkClick(url)}>{name}</NavButton>
                    </NavListItem>
                  )
                )}
            </NavList>
            <ResumeLink
              href="/resume.pdf"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Resume
            </ResumeLink>
          </NavLinks>
        </Sidebar>
      </StyledContainer>
  );
};

export default Menu;
