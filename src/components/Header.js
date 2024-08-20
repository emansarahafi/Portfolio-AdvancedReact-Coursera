import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:emansarahafi@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/emansarahafi/",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/emansarahafi/",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/23097342/eman-sarah-afi",
  },
];

const Header = () => {
  const headerRef = useRef();
  const prevScrollPos = useRef(window.scrollY);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const header = headerRef.current;
    
    if (prevScrollPos.current > currentScrollPos) {
      // Scrolling up
      header.style.transform = "translateY(0)";
    } else {
      // Scrolling down
      header.style.transform = "translateY(-200px)";
    }

    prevScrollPos.current = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {socials.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={social.icon} size="lg" style={{ marginRight: '8px' }} />
              </a>
            ))}
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#projects-section" onClick={handleClick('projects')}>Projects</a>
              <a href="#contactme-section" onClick={handleClick('contactme')}>Contact</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
