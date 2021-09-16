import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NavButton from './NavButton';
import MobileNavWrapper from './MobileNavWrapper'
import { mediaQueries } from '../../shared/config';

/* This should always be on top (z-index) */
const NavbarContainer = styled.div`
  z-index: 2000;
  position: sticky;

  ${mediaQueries.notTablet} {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    margin-left: 50px;
    top: 78px;
    left: 50px;
  }
  ${mediaQueries.tablet} {
    margin-top: 20px;
    margin-left: 10px;
    max-width: 100%;
    top: 38px;
    left: 50px;
  }
`;

const sections = [
  'INTERACTIVE',
  'NEWS',
  'SPORTS',
  'ARTS',
  'OPINION',
  'THE QUAD',
  'MULTIMEDIA',
  'ABOUT'
];

const Navbar = (props) => {
  const [visibleSection, setVisibleSection] = useState('');
  const media = window.matchMedia('(max-width: 900px)')
  const [isMobile, setIsMobile] = useState(media.matches)

  media.addEventListener("change", () => {
    if (media.matches !== isMobile) {
      setIsMobile(media.matches)
    }
  })

  const getLastVisibleSection = (entries) => {
    let lastVisibleSection;
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        lastVisibleSection = entry.target.id;
      }
    });
    setVisibleSection(lastVisibleSection);
  };
  const observer = new IntersectionObserver(getLastVisibleSection, {
    threshold: 0.1,
    rootMargin: '50px',
  });

  useEffect(() => {
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });
  });

  const navButtons =
    sections.map((section, idx) => (
      <NavButton
        first={idx === 0}
        section={section}
        key={section}
        highlight={section === visibleSection}
      />
    ))

  return (
    <NavbarContainer>
      {isMobile ? 
        <MobileNavWrapper>
          {navButtons}
        </MobileNavWrapper>
      :
        navButtons 
      }
    </NavbarContainer>
  );
};

Navbar.propTypes = {
  mobile: PropTypes.bool,
};

export default Navbar;
