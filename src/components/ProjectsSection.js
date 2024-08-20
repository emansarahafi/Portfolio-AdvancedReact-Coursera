import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Development of a Smart Crop Monitoring System",
    description:
      "This capstone project is about developing a smart crop monitoring system that records information about the farm and crops, such as the soil's temperature, salinity & pH levels, etc. And the collected data can be viewed on an HTML website & an iOS application named MoniCrop. The following tools were used: Raspberry Pi 4B, pressure sensors, HTML, PHP, Python, SwiftUI & XCode.",
    getImageSrc: () => require("../images/MoniCrop.jpg"),
    url: "https://aubh.figshare.com/articles/thesis/Development_of_a_Smart_Crop_Monitoring_System/24314056/2",
  },
  {
    title: "EcoEats",
    description:
      "EcoEats is a MERN stack web application that is developed for the Web Software Development course (CS324) and it is a food waste management system where restaurants can sell their leftover food items for a much cheaper price.",
    getImageSrc: () => require("../images/EcoEats.jpg"),
    url: "https://github.com/emansarahafi/EcoEats",
  },
  {
    title: "Machine Learning Algorithms for Predicting Breast Cancer",
    description:
      "The project, from the Introduction to Machine Learning & Data Analytics (CMPE 390) course, was regarding using MATLAB to apply different machine learning techniques to a provided dataset to compare their coefficients and performance measures predicting whether the cancer is benign or malignant according to a provided Wisconsin dataset involving breast cancer diagnosis.",
    getImageSrc: () => require("../images/MLBC.jpg"),
    url: "https://github.com/emansarahafi/MLBreastCancerPrediction",
  },
  {
    title: "AUBH Lost & Found System",
    description:
      "For the Windows Programming (CMPE 361) course's final project, a lost and found items application for our university, the American University of Bahrain (AUBH), has been developed. The following tools were used for the implementation: JavaFX, CSS, FXML, Eclipse & SceneBuilder.",
    getImageSrc: () => require("../images/LFS.jpg"),
    url: "https://github.com/emansarahafi/LostAndFoundSystem",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
