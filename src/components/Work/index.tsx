import { Title } from "./Title";
import { Tabs } from "./Tabs";
import { styled } from "@mui/material";

const GlobalContainer = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "1440px",
  marginLeft: "auto",
  marginRight: "auto",
}));

export function Work() {
  return (
    <section data-section="Work">
      <div className="bg-gradient-work">
        <GlobalContainer>
          <div className="flex flex-col w-full pt-10 pb-24 px-5 sm:pl-10 sm:pr-10 sm:pb-24 sm:pt-12 md:pt-24 md:pb-32 lg:pl-24 lg:pr-24 lg:pl-24">
              <div className="pb-5 md:pb-8">
                <Title />
              </div>
              <Tabs />
          </div>
        </GlobalContainer>
      </div>
    </section>
  );
}
