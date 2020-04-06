import { constants } from "config";

import { IconName } from "components/atoms/Icon/Icon.component";

export interface JobTag {
  id: string;
  label: string;
  icon: IconName;
}

export interface Job {
  name: string;
  description: string;
  duration: string;
  logo: string;
  role: string;
  tags: JobTag[];
}

const workHistory: Job[] = [
  {
    name: "Contract - Faxi",
    role: "Solution Architect / Mentor",
    duration: "Current Role",
    description:
      "Working with the Web team to migrate their web platform to React and Node. Architecture and education is the aim of the game here. Helping their talented engineers adopt a new technology stack. ",
    logo: "faxi.png",
    tags: [
      {
        id: constants.techLabels.JAVASCRIPT,
        label: "Javascript",
        icon: "javascript"
      },
      {
        id: constants.techLabels.REACT,
        label: "React",
        icon: "react"
      },
      {
        id: constants.techLabels.TYPESCRIPT,
        label: "Typescript",
        icon: "typescript"
      }
    ]
  },
  {
    name: "Contract - The Guardian",
    role: "Snr Mobile Engineer",
    description:
      "Currently working with the hugly talented editions team to integrate apple sign in into their React Native apps.",
    duration: "Current Role",
    logo: "the-guardian.png",
    tags: [
      {
        id: constants.techLabels.JAVASCRIPT,
        label: "Javascript",
        icon: "javascript"
      },
      {
        id: constants.techLabels.REACT_NATIVE,
        label: "React Native",
        icon: "react-native"
      },
      {
        id: constants.techLabels.TYPESCRIPT,
        label: "Typescript",
        icon: "typescript"
      }
    ]
  },
  {
    name: "Contract - Edge Esports",
    role: "Lead Engineer",
    description:
      "Small start up, big ideas. My role was to build a technical team and build the first iterations of the initial product offerings. I built some of the most beautiful and well crafted solutions of my career during this role and faced some of the biggest technical challenges of my career as well.",
    duration: "6 Months",
    logo: "backstabbing-ceo.png",
    tags: [
      {
        id: constants.techLabels.JAVASCRIPT,
        label: "Javascript",
        icon: "javascript"
      },
      { id: constants.techLabels.NODEJS, label: "NodeJS", icon: "nodejs" },
      {
        id: constants.techLabels.REACT,
        label: "React Native",
        icon: "react-native"
      },
      {
        id: constants.techLabels.TYPESCRIPT,
        label: "Typescript",
        icon: "typescript"
      },
      { id: constants.techLabels.AWS, label: "AWS", icon: "aws" }
    ]
  },
  {
    name: "Contract - Ralph Lauren",
    role: "Lead Engineer",
    description:
      "I single-handedly and with many hurdles, built a complex React Native application end to end in 3 months. As part of this role, I Traveled to Vietnam to liaise with the Vietnamese teams to ensure a smooth and successful roll-out.",
    duration: "7 Months",
    logo: "evrythng.jpg",
    tags: [
      {
        id: constants.techLabels.JAVASCRIPT,
        label: "Javascript",
        icon: "javascript"
      },
      {
        id: constants.techLabels.REACT_NATIVE,
        label: "React Native",
        icon: "react-native"
      },
      {
        id: constants.techLabels.TYPESCRIPT,
        label: "Typescript",
        icon: "typescript"
      }
    ]
  },
  {
    name: "Contract - British Gas",
    role: "Lead Engineer",
    description:
      "For this contract, I was tasked with building the next generation mobile app for British Gas. I was part of one of the three teams responsible for making this happen. During this contract, I won multiple internal awards, lead engineering standards and thought led on techniques and models. Initially, a 6-month contract I was offered a 6 Month extension and day rate increase at the end of the contract which I took.",
    duration: "1 Year",
    logo: "sapient.jpg",
    tags: [
      {
        id: constants.techLabels.JAVASCRIPT,
        label: "Javascript",
        icon: "javascript"
      },
      {
        id: constants.techLabels.REACT_NATIVE,
        label: "React Native",
        icon: "react-native"
      },
      {
        id: constants.techLabels.TYPESCRIPT,
        label: "Typescript",
        icon: "typescript"
      }
    ]
  }
];

export default workHistory;
