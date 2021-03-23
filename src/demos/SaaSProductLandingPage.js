import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import GetStarted from "components/cta/GetStarted";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher";
import Footer from "components/footers/SimpleFiveColumn.js";
import Features from "components/features/DashedBorderSixFeatures";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={false} />

      <Features />
      <Pricing />
      <GetStarted />
      <Footer />
    </AnimationRevealPage>
  );
}
