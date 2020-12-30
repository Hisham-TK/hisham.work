import React, { Component } from 'react';

export default class Education extends Component {
  render() {
    if (this.props.data) {
      var education = this.props.data.map(function (education, index) {
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
    }

    return (
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
    );
  }
}
