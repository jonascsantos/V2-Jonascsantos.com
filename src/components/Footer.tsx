import Wave from 'react-wavify';
import { styled } from "@mui/material";
import { StyledLogo } from './Navbar';
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

  return (
    <section data-section="Footer" className='relative'>
      <div className="absolute left-0 right-0 top-32">
        <div className="flex gap-4 mx-5">
          <StyledLogo>
            <Link href="/" aria-label="home">
              <Logo color="#DFF4F6" />
            </Link>
          </StyledLogo>
          <div className="text-center flex flex-col	">
            <span className="flex font-bold text-secondary">Jonas Dos Santos</span>
            <span className="flex text-secondary">Frontend Development</span>
          </div>
        </div>
      </div>
      <WaveContainer>
       <Wave
          fill="#00b6ad"
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
          fill="#00959e"
          opacity="0.80"
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
          fill="#01838a"
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
