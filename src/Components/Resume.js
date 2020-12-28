import React, { Component } from 'react';

const exractNum = (obj) => +/^\d+/.exec(obj.level)[0];

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education, index) {
        return (
          <React.Fragment>
            {index ? <hr /> : false}
            <div key={education.school} className="">
              <h3>{education.school}</h3>
              <p className="info">
                {education.degree} <span>&bull;</span>
                <em className="date">{education.graduated}</em>
              </p>
              <pre>{education.description}</pre>
            </div>
          </React.Fragment>
        );
      });
      var work = this.props.data.work.map(function (work, index) {
        return (
          <React.Fragment>
            {index ? <hr /> : false}
            <div key={work.company}>
              <h3>{work.company}</h3>
              <p className="info">
                {work.title}
                <span>&bull;</span> <em className="date">{work.years}</em>
              </p>
              <p>{work.description}</p>
            </div>
          </React.Fragment>
        );
      });
      var skills = this.props.data.skills
        // .sort((a, b) => exractNum(b) - exractNum(a))
        .map(function (skill) {
          var className = 'bar-expand ' + skill.name.toLowerCase();
          return (
            <li
              key={skill.name}
              //   className="ten"
              style={{
                marginLeft: '3%',
                display: 'inline-block',
                width: '43%',
              }}
              title={skill.desc}
            >
              <span style={{ width: skill.level }} className={className}></span>
              <em>{skill.name}</em>
            </li>
          );
        });
    }

    return (
      <section id="resume">
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="tweleve columns main-col">
            {/* <h5 style={{ textAlign: "center" }}>{skillmessage}</h5> */}
            <div className="bars container">
              <ul className="skills row">{skills}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
