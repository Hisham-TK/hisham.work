import React from 'react';

export default class Work extends React.Component {
  render() {
    if (this.props.data) {
      var work = this.props.data.map(function (work, index) {
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
    }

    return (
      <section id="work">
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>
      </section>
    );
  }
}
