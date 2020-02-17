import * as React from 'react';
import * as Styled from './WorkHistory.styles';

import {Struct, Text, Icon, TechCard, List} from '../';

import workExperience from '../../data/work-data';

const WorkHistory: React.FC = () => {
  const companies = workExperience.map((experience: any) => experience.company);

  return (
    <Styled.Container>
      <Styled.Tabs>
        <List data={companies} />
      </Styled.Tabs>

      <Styled.View>
        {workExperience.map((work: any) => (
          <Styled.Experience>
            <Struct column>
              <Text.HeroBody>{work.company}</Text.HeroBody>
            </Struct>
            <List data={work.points} />
            <Struct vPadded />
            <Struct>
              {work.tech.map((tech: any) => (
                <TechCard label={tech.name} icon={tech.icon} />
              ))}
            </Struct>
          </Styled.Experience>
        ))}
      </Styled.View>
    </Styled.Container>
  );
};

export default WorkHistory;
