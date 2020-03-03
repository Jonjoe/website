import * as React from 'react';
import * as Styled from './WorkHistory.styles';

import {Struct, Text, TechCard, List} from 'components';

import workExperience from 'data/work.data';

const WorkHistory: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Tabs>
        {workExperience.map((work: any, index: number) => (
          <Styled.Tab key={index}>
            <Text.Body>{work.company}</Text.Body>
          </Styled.Tab>
        ))}
      </Styled.Tabs>

      <Styled.View>
        {workExperience.map((work: any, index: number) => (
          <Styled.Experience key={index}>
            <Struct column>
              <Text.Body>{work.company}</Text.Body>
            </Struct>
            <List data={work.points} />
            <Struct vPadded />
            <Struct>
              {work.tech.map((tech: any, techIndex: number) => (
                <TechCard key={techIndex} label={tech.name} icon={tech.icon} />
              ))}
            </Struct>
          </Styled.Experience>
        ))}
      </Styled.View>
    </Styled.Container>
  );
};

export default WorkHistory;
