import React, { Component } from 'react';
import ReactGA from 'react-ga';
// import $ from "jquery";
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import Work from './Components/Work';
import Skill from './Components/Skill';
import Education from './Components/Education';
import Quotes from './Components/Quotes';
import Footer from './Components/Footer';

// import Resume from './Components/Resume';
// import Portfolio from "./Components/Portfolio";
import data from './resumeData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: data,
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
  }

  //   getResumeData() {
  //     $.ajax({
  //       url: "/resumeData.js",
  //       dataType: "js",
  //       cache: false,
  //       success: function (data) {
  //         this.setState({ resumeData: data });
  //       }.bind(this),
  //       error: function (xhr, status, err) {
  //         console.log(err);
  //         alert(err);
  //       },
  //     });
  //   }

  //   componentDidMount() {
  //     this.getResumeData();
  //   }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Work data={this.state.resumeData.work} />
        <Skill data={this.state.resumeData.skills} />
        <Education data={this.state.resumeData.education} />
        {/* <Resume data={this.state.resumeData.resume} /> */}
        {/* <Portfolio data={this.state.resumeData.portfolio} > */}
        <Quotes data={this.state.resumeData.quotes} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
