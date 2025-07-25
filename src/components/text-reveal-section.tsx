import React from "react";

import { TextReveal } from "@/components/magicui/text-reveal";

const TextRevealSection = () => {
  return (
    <section className="dark bg-background my-0 ">
      <div className=" flex flex-col items-center justify-center">
        <TextReveal className="font-medium" maxWidth="86rem">
          OpenWork is the open source framework designed to empower developers
          and organizations to build, deploy, and manage advanced AI agents at
          scale. Seamlessly integrate AI capabilities into your applications.
        </TextReveal>
      </div>
    </section>
  );
};

export { TextRevealSection };
