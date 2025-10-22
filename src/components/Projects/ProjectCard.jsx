import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  // Destructure safely with default values
  const {
    title,
    imageSrc = [],
    description,
    skills = [],
    demo,
    source,
  } = project;

  return (
    <div className={styles.container}>
      {/* Image Slider */}
      <Swiper
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className={styles.imageSlider}
      >
        {imageSrc.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Image of ${title} ${index + 1}`}
              className={styles.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Project Details */}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>

      {source && (
        <div className={styles.links}>
          {/* <a href={demo} className={styles.link}>
          See More
        </a> */}
          <a href={source} className={styles.link}>
            View Project
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
