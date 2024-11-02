import styles from './Projects.module.css'
// import viberr from './../assets/viberr.png';
// import freshBurger from './../assets/fresh-burger.png';
import p1 from './../assets/carParking.jpg';
import fitLift from './../assets/todo.jpg';
import ProjectCard from './../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {/* <ProjectCard
          src={viberr}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Viberr"
          p="Streaming App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Fresh Burger"
          p="Hamburger Restaurant"
        /> */}
        <ProjectCard
          src={p1}
          link="------Link-----------"
          h3="Car Praking"
          p="free Slot Detection"
        />
        <ProjectCard
          src={fitLift}
          link="----link-------------"
          h3="ToDo"
          p="Modern ToDo App"
        />
      </div>
    </section>
  );
}

export default Projects;
