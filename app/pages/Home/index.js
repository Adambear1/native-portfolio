import React from "react";
import HomeImageBackground from "../../components/HomeImageBackground";
import HomeContainer from "../../components/HomeContainer";
import HomeButtonLayout from "../../components/HomeButtonLayout";

export default function Home() {
  return (
    <HomeImageBackground>
      <HomeContainer>
        <HomeButtonLayout />
      </HomeContainer>
    </HomeImageBackground>
  );
}
