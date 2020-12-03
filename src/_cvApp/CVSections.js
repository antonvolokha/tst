import React from 'react';
import { Section, DownloadButton } from './Components';

export const CVSections = ({id, data}) => {

  const renderBio = () => {
    return (
      <Section id="bio">
        <DownloadButton className="btn-blue resume_btn"/>
        <div className="left">
          <div id="picture"></div>
        </div>
        <div className="right">
          <article>
            <center>
              <h1 id="name">Anton Volokha</h1>
              <h3>Full stack developer</h3>
              <p>I like my profession and I am going to do my best to be a good specialist</p>
            </center>
            <p></p>
          </article>
          <div id="contact-info">
            {data.social.map(social => <a key={social.type} href={social.href} className={social.class} aria-hidden="true"></a>)}
          </div>
        </div>
      </Section>
    );
  }

  const renderEducation = () => {
    return (
      <Section id="education">
        <h2 className="title education underline">{data.title}</h2>
        <div className="history">
          {data.places.map(place => (
              <div key={place.place} className="entry">
                <h3>
                  <span className="place">{place.place}</span>
                  <span className="time">{place.time}</span>
                </h3>
                <p>{place.specialty}</p>
              </div>
          ))}
        </div>
      </Section>
    );
  }

  const renderExperience = () => {
    return (
      <Section className="experience" id="experience">
        <h2 className="title experience underline">{data.title}</h2>
        <div className="history">
          {data.places.map(place => (
              <div key={place.place}  className="entry">
                <h3>
                  <span className="place">{place.place}</span>
                  <span className="time">{place.time}</span>
                </h3>
                {place.data.map(p => (
                  <p key={p} dangerouslySetInnerHTML={{__html: p}}></p>
                ))}
              </div>
          ))}
        </div>
      </Section>
    );
  }

  const renderSkills = () => {
    return (
      <Section id="skills">
        <h2 className="title skills underline">{data.title}</h2>
        {data.categories.map(cat => (
          <div key={cat.name} className="category">
            <h3>{cat.name}:</h3>
            <ul>
              {cat.skills.map(skill => (
                <li key={skill.name} className="skill" data-level={skill.level}>
                  <h4>{skill.name}</h4>
                  <div className="bar"></div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Section>
    );
  }

  const renderProjects = () => {
    return (
      <Section id="projects">
        <h2 className="title projects underline">{data.title}</h2>
        <ul>
          {data.projects.map(project => (
            <li key={project.name} className="project">
              <a href={project.link}><div className="img"><img src={project.img}/></div></a>
              <h4 className="title"><a href={project.link}>{project.name}</a></h4>
            </li>
          ))}
        </ul>
      </Section>
    );
  }

  const render404 = () => {
    return (
      <div></div>
    );
  }


  if (id === 'bio')
    return renderBio();
  else if (id === 'education')
    return renderEducation();
  else if (id === 'experience')
    return renderExperience();
  else if (id === 'skills')
    return renderSkills();
  else if (id === 'projects')
    return renderProjects();
  else
    return render404();

}

CVSections.defaultProps = {
  id: '',
  class: 'section',
  data: {},
};

export default CVSections;