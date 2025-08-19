import styles from './ProjectsStyles.module.css';
import traffic from '../../assets/traffic.png';
import skill from '../../assets/skill.avif';
import ru from '../../assets/ru.jpg';
import wms from '../../assets/wms.webp';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={traffic}
          link="https://github.com/DhananjayaBandara/Motor-Traffic-Panelty-Calculator"
          h3="Digitalize Traffic Law"
          p="NLP Chatbot for Sri Lankan Traffic law"
        />
        <ProjectCard
          src={wms}
          link="_blank"
          h3="Workshop Management System"
          p="ICTA - Capacity Building"
        />
        <ProjectCard
          src={skill}
          link="https://github.com/DhananjayaBandara/Students_Skills_and_Performance_Management_System"
          h3="Skill and Performance Management"
          p="University Students"
        />
        <ProjectCard
          src={ru}
          link="https://github.com/DhananjayaBandara/RU-Arts"
          h3="RU Arts"
          p="Business Website"
        />
      </div>
    </section>
  );
}

export default Projects;
