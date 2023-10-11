import React from 'react';
import { FiPhoneCall, FiSend, FiMap } from 'react-icons/fi';

import {
  Section,
  Container,
  Navigation,
  Wrapper,
  Contact,
  Email,
  Address
} from './FooterBar.styled';

export const FooterBar = () => {
  return (
    <Section>
      <Container>
      <Navigation>
          Contact :
          <Wrapper>
            <FiPhoneCall size={16} />
            <Contact href="tel:+380938888888">
              +380 93 888 88 88
            </Contact>
          </Wrapper>
          <Wrapper>
            <FiSend size={16} />
            <Email href="mailto:info@comfortablecarrental.com">
              info@comfortablecarrental.com
            </Email>
          </Wrapper>
          <Wrapper>
            <FiMap size={16} />
            <Address>7 Shevchenko Street, Kiev, Ukraine</Address>
          </Wrapper>
        </Navigation>
      </Container>
    </Section>
  );
};


