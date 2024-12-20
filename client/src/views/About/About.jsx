import img from "/img/earth.gif";
import logo from "/img/world-trip-transparent.png";

import style from "./About.module.scss";
import {
  HTML,
  SCSS,
  CSS,
  REACT,
  NODEJS,
  REDUX,
  EXPRESS,
  SEQUELIZE,
  POSTGRESQL,
} from "../../assets/CountryIcons";
// CSS,REACT,NODEJS,REDUX, EXPRESS,SEQUELIZE, POSTGRESQL
const About = () => {
  return (
    <div className="container">
      <div className="infoContainer">
        <div className="titleContainer">
          <h3 className="title">&gt;_ About this project</h3>
        </div>
        {/* <div className={style.logoImage}>
          <img
            className={`${style.img} ${style.floatLeft}`}
            src={logo}
            alt=""
          />
        </div> */}
        <div className={style.content}>
          <div className={style.containerImg}>
            <img
              className={`${style.img} ${style.floatRight}`}
              src={logo}
              alt="Earth img"
            />
          </div>
          <p>This page is an Individual Project for Soy Henry's bootcamp.</p>
          <p>
            Here you can find some information about all the countries in the
            world, such as its population and some touristic activities you can
            do there.
          </p>
          <p>To create this page, I had to follow a readme with these rules:</p>
          <ul>
            <li className={style.list}>
              <p>Use the API given by Henry in a json file</p>
            </li>
            <li className={style.list}>
              <p>Save the information in a database.</p>
            </li>
            <li className={style.list}>
              <p>Display some information about countries in the home page.</p>
            </li>
            <li className={style.list}>
              <p>
                Add filters such as search by name, order alphabetically, and
                others.
              </p>
            </li>
            <li className={style.list}>
              <p>
                Create touristic activities you can do in one or more countries
                through a form and store the information in a database
              </p>
            </li>
            <li className={style.list}>
              <p>Show details about each country.</p>
            </li>
                </ul>
          <div className={style.containerTechs}>
            <h4 className={style.title}>&gt;_ Technologies</h4>
            <div className={style.containerAllIcons}>
              <div className={style.iconContainer}>
                <HTML />
                <p>HTML5</p>
              </div>
              <div className={style.iconContainer}>
                <SCSS />
                <p>Module SCSS</p>
              </div>
              <div className={style.iconContainer}>
                <REACT />
                <p>React</p>
              </div>
              <div className={style.iconContainer}>
                <REDUX />
                <p>Redux</p>
              </div>
              <div className={style.iconContainer}>
                <NODEJS />
                <p>NodeJS</p>
              </div>
              <div className={style.iconContainer}>
                <EXPRESS />
                <p>ExpressJS</p>
              </div>
              <div className={style.iconContainer}>
                <SEQUELIZE />
                <p>Sequelize</p>
              </div>
              <div className={style.iconContainer}>
                <POSTGRESQL />
                <p>PostgreSQL</p>
              </div>
            </div>
          </div>
          <div className={style.aboutMeContainer}>
            <h4 className={style.title}>&gt;_ About me</h4>

            <p>Hello!</p>
            <p> I am a passionate frontend developer
            </p>
           
            <p>
              <a
                className={style.link}
                href="https://www.linkedin.com/in/florenciavysin/"
                target="_blank"
                rel="noreferrer"
              >
                My Linkedin
              </a>
            </p>
            <p>
              <a
                className={style.link}
                href="https://github.com/florenciavysin/Countries-App/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repository
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
