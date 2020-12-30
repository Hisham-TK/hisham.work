import React, { Component } from 'react';

const exractNum = (obj) => +/^\d+/.exec(obj.level)[0];

export default class Resume extends Component {
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
                width: '47%',
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
        <section id="education">
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
        </section>

        <section id="skills">
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="eleven columns main-col">
              {/* <h5 style={{ textAlign: "center" }}>{skillmessage}</h5> */}
              <div className="bars container">
                <ul className="skills row">{skills}</ul>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}
