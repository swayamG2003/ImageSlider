import React, { Component } from 'react';
import img from './star_lord_minimal_artwork-1366x768.jpg';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [{
        id: 0,
        background: "https://images.unsplash.com/photo-1688781298681-ae1f2d470b31?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWElMjBnYXRlJTIwZGVsaGl8ZW58MHx8MHx8fDA%3D",
        text: "India Gate",
        
      },
      {
        id: 1,
        background: "https://images.unsplash.com/photo-1564507592333-c60657eea523?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRhaiUyMG1haGFsfGVufDB8fDB8fHww",
        text: "Taj Mahal",
        
      },
      {
        id: 2,
        background: "https://upload.wikimedia.org/wikipedia/commons/4/47/Konarka_Temple.jpg",
        text: "Konark Temple",
        
      },
      {
        id: 3,
        background: "https://careerguidancer.allegiance-educare.in/storage/uploads/colleges/1662553710campus%20front.jpg",
        text: "VESIT",
        
      },
      {
        id: 4,
        background: '',
        text: "Made by Swayam & Sharan",
        link: ''
      }
      
      ],
      newImages: [{
        id: '',
        background: '',
        text: '',
        link: ''
      }],
      activeIndex: 0,
    }

  }
  componentDidMount() {
    const newImage = Object.assign([], this.state.images);
    newImage.id = 0;
    newImage.background = this.state.images[0].background;
    newImage.text = this.state.images[0].text;
    newImage.link = this.state.images[0].link;
    this.setState({ newImages: newImage });
  }

  next = (e) => {
    e.preventDefault();
    let slide = this.state.activeIndex + 1 < this.state.images.length ? this.state.activeIndex + 1 : 0;
    this.setState({ activeIndex: slide })
    console.log(slide);
    const newImages = this.state.images[slide];
    this.setState({ newImages });
  }
  previous = (e) => {
    e.preventDefault();
    let slide = this.state.activeIndex - 1 < 0 ? this.state.images.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: slide })
    console.log(slide);
    const newImages = this.state.images[slide]
    this.setState({ newImages })
  }
  render() {
    return (
      <div className="App">
        <div className="image-slider">
          <div className="button-container">
            <button onClick={this.previous} className="left"><i className="fa fa-caret-left"></i></button>
            <button onClick={this.next} className="right"><i className="fa fa-caret-right"></i></button>
          </div>
          <img src={this.state.newImages.background} alt="" key={this.state.newImages.id} />
          <div className="image-description">
            <h3>{this.state.newImages.text}</h3>
            <p>{this.state.newImages.link}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
