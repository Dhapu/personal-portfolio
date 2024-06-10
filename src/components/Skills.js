import Carousel from 'react-multi-carousel';
import react from "../assets/skills/react.svg";
import html from "../assets/skills/html.svg";
import css from "../assets/skills/css.svg";
import javascript from "../assets/skills/javascript.svg";
import java from "../assets/skills/java.svg";
import python from "../assets/skills/python.svg";
import django from "../assets/skills/django.svg";
import mysql from "../assets/skills/mysql.svg";
import postgresql from "../assets/skills/postgresql.svg";
import tailwind from "../assets/skills/tailwind.svg";
import bootstrap from "../assets/skills/bootstrap.svg";
import git from "../assets/skills/git.svg";
import materialui from "../assets/skills/materialui.svg";
import nextJS from "../assets/skills/nextJS.svg";
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={react} alt="React Js" className="skill-image"/>
                                <h5>React Js</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="JavaScript" className="skill-image"/>
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="Python" className="skill-image"/>
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="HTML" className="skill-image"/>
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="CSS" className="skill-image"/>
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Java" className="skill-image"/>
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={nextJS} alt="Next JS" className="skill-image"/>
                                <h5>Next JS</h5>
                            </div>
                            <div className="item">
                                <img src={django} alt="Django" className="skill-image"/>
                                <h5>Django</h5>
                            </div>
                            <div className="item">
                                <img src={postgresql} alt="PostgreSql" className="skill-image"/>
                                <h5>PostgreSql</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="Bootstrap" className="skill-image"/>
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={tailwind} alt="Tailwind" className="skill-image"/>
                                <h5>Tailwind</h5>
                            </div>
                            <div className="item">
                                <img src={mysql} alt="MySql" className="skill-image"/>
                                <h5>MySql</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="Git" className="skill-image"/>
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={materialui} alt="Material UI" className="skill-image"/>
                                <h5>Material UI</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

// Add the following CSS to ensure the images are appropriately sized

