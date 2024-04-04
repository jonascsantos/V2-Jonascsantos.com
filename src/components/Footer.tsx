import Wave from 'react-wavify';
import { Box, styled } from "@mui/material";
import Link from 'next/link';
import { Logo } from './Navbar/Logo';

export function Footer() {

  const WaveContainer = styled("div")(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 230,
    display: 'flex',
    zIndex: '-1',
  }));

  const StyledLogo = styled(Box)(({ theme }) => ({
    zIndex: 7,
    '&': {
      display: 'block',
      color: "#070707",
      width: "3rem",
      height: "3rem",
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
  
  return (
    <section data-section="Footer" className='relative'>
      <div className="absolute left-0 right-0 top-32">
        <div className="flex gap-4 mx-5">
          <StyledLogo>
            <Logo color="#DFF4F6" key="logo-02"/>
          </StyledLogo>
          <div className="text-center flex flex-col	">
            <span className="flex font-bold text-secondary">Jonas Dos Santos</span>
            <span className="flex text-secondary">Frontend Development</span>
          </div>
        </div>
      </div>
      <WaveContainer>
       <Wave
          fill="#049CB1"
          paused={false}
          opacity="0.30"
          options={{
            height: 20,
            amplitude: 10,
            speed: 0.2,
            points: 3,
          }}
        />
      </WaveContainer>
      <WaveContainer>
        <Wave
          fill="#049CB1"
          opacity="1"
          paused={false}
          options={{
            height: 75,
            amplitude: 20,
            speed: 0.3,
            points: 2,
          }}
        />
      </WaveContainer>
      <WaveContainer>
        <Wave
          fill="#049CB1"
          paused={false}
          opacity="0.5"
          options={{
            height: 45,
            amplitude: 30,
            speed: 0.1,
            points: 4,
          }}
        />
      </WaveContainer>
      
    </section>
  );
}
