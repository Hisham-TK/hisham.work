import React, { Component } from 'react';

const exractNum = (obj) => +/^\d+/.exec(obj.level)[0];

export default class Skills extends Component {
  render() {
    if (this.props.data) {
      //   var skillmessage = this.props.data.skillmessage;
      var skills = this.props.data
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
    );
  }
}
