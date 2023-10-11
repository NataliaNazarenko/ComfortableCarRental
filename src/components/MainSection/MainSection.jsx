import PropTypes from 'prop-types';
import { SectionWrapper, TitleName } from './MainSection.styled';

export function Section({ title, children }) {
  return (
    <SectionWrapper>
      {title && <TitleName>{title}</TitleName>}
      {children}
    </SectionWrapper>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
