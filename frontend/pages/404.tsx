import styled from "styled-components";
import FourOFour from "../public/404.gif";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <Wrapper>
      {/* <NotFoundIllustration /> */}
      <Image src={FourOFour} alt="404 Image" width={500} height={500} />
      <Description>Oh, that&apos;s unfortunate! Page not found 😔</Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  justify-content: center;
  padding: 0 30vw 0 30vw;
  background: rgb(var(--background));
  text-align: center;
  color: #ffff;
`;

const Description = styled.div`
  font-size: 2rem;
  opacity: 0.8;
  color: #ffff;
`;
