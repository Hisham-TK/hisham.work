import React, { Component } from 'react';

export default class Quotes extends Component {
  render() {
    if (this.props.data) {
      var quotes = this.props.data.map(function (quote) {
        return (
          <li key={quote.user}>
            <blockquote>
              <p>{quote.text}</p>
              <cite>{quote.user}</cite>
            </blockquote>
          </li>
        );
      });
    }

    return (
      <section id="quotes">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>Client Quotes</span>
              </h1>
            </div>

            <div className="ten columns flex-container">
              <ul className="slides">{quotes}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
