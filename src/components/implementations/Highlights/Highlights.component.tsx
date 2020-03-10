import * as React from "react";
import * as Styled from "./Highlights.styles";
import parse from "html-react-parser";

import { IconName } from "components/atoms/Icon/Icon.component";
import { Text, Icon, Divider } from "components";

interface JobTag {
  label: string;
  icon: IconName;
}

interface Job {
  name: string;
  description: string;
  duration: string;
  logo: string;
  role: string;
  tags: JobTag[];
}

const data: Job[] = [
  {
    name: "The Guardian",
    role: "Snr Mobile Engineer",
    description:
      "Currently working with the hugly talented editions team to integrate apple sign in into their React Native apps.",
    duration: "Current Role",
    logo: "the-guardian.png",
    tags: [
      { label: "Javascript", icon: "javascript" },
      { label: "NodeJS", icon: "nodejs" },
      { label: "React Native", icon: "react-native" },
      { label: "Typescript", icon: "typescript" }
    ]
  },
  {
    name: "Edge Esports",
    role: "Interrim CTO/ Lead Engineer",
    description:
      "<p>Small start up, big ideas.</p> <p>My role was to build a technical team and build the first iterations of the initial product offerings. I built some of the most beautiful and well crafted solutions of my career during this role and faced some of the biggest technical challenges of my career as well.</p>",
    duration: "6 Months",
    logo: "backstabbing-ceo.png",
    tags: [
      { label: "Javascript", icon: "javascript" },
      { label: "Typescript", icon: "typescript" },
      { label: "React", icon: "react" },
      { label: "NodeJs", icon: "nodejs" },
      { label: "AWS", icon: "aws" }
    ]
  },
  {
    name: "Evrythng - Ralph Lauren",
    role: "Lead Engineer",
    description:
      "I single-handedly and with many hurdles, built a complex React Native application end to end in 3 months. As part of this role, I Traveled to Vietnam to liaise with the Vietnamese teams to ensure a smooth and successful roll-out.",
    duration: "7 Months",
    logo: "evrythng.jpg",
    tags: [
      { label: "Javascript", icon: "javascript" },
      { label: "Typescript", icon: "typescript" },
      { label: "React Native", icon: "react-native" },
      { label: "NodeJS", icon: "nodejs" }
    ]
  },
  {
    name: "Sapient - British Gas",
    role: "Team Lead Engineer",
    description:
      "<p>For this contract, I was tasked with building the next generation mobile app for British Gas. I was part of one of the three teams responsible for making this happen. During this contract, I won multiple internal awards, lead engineering standards and thought led on techniques and models.</p> <p>Initially, a 6-month contract I was offered a 6 Month extension and day rate increase at the end of the contract which I took. I left later on due to the app having been shipped and entering beta and looking for a new challenge.</p>",
    duration: "1 Year",
    logo: "sapient.jpg",
    tags: [
      { label: "Javascript", icon: "javascript" },
      { label: "Typescript", icon: "typescript" },
      { label: "React", icon: "react" },
      { label: "React Native", icon: "react-native" },
      { label: "NodeJS", icon: "nodejs" }
    ]
  }
];

interface HighlightsProps {
  accent: string;
}

const Highlights: React.FC<HighlightsProps> = props => {
  const { accent } = props;

  return (
    <Styled.Container>
      {data.map(highlight => (
        <Styled.Entry>
          <Styled.Icon>
            <Icon name="scroll" color={accent} size="1rem" />
          </Styled.Icon>

          <Styled.InnerContainer logoUrl={highlight.logo}>
            <Styled.Header>
              <Styled.Title>
                <Text.Heading5 inverted>{highlight.name}</Text.Heading5>
                <Text.Body inverted>{highlight.role}</Text.Body>
              </Styled.Title>
              <Text.Body inverted>{highlight.duration}</Text.Body>
            </Styled.Header>

            <Divider left soft />

            <Styled.Content>
              <Text.Body inverted>
                {parse(highlight.description) as any}
              </Text.Body>
            </Styled.Content>

            <Styled.Footer>
              {highlight.tags.map(tag => (
                <Styled.Tag>
                  <Text.Inline>
                    <Icon name={tag.icon} />
                    {tag.label}
                  </Text.Inline>
                </Styled.Tag>
              ))}
            </Styled.Footer>
          </Styled.InnerContainer>
        </Styled.Entry>
      ))}
    </Styled.Container>
  );
};

export default Highlights;
