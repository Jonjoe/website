export interface Project {
  name: string;
  description: string;
  tags: string[];
  image: string;
}

const projects: Project[] = [
  {
    name: "Contract Builder",
    description:
      "With an intuitive design and mathematically verifiable audit trails, this contract builder was some of the best work I have ever done. The contrast between the insanely complex mechanisms and the beautifully simple user experience was immense fun.",
    tags: ["Javascript", "NodeJS", "React", "AWS"],
    image: "contracts.png"
  },
  {
    name: "Authentication App",
    description:
      "The Factory App had a simple objective. Pair two sets of barcodes together and register them against a database. This objective sounds very simple... it wasnt! Some of the challenges included: exotic input devices, rapid interaction loops, and unstable internet connections.",

    tags: ["React Native", "NodeJS", "Typescript"],
    image: "ralph-lauren.png"
  }
];

export default projects;
