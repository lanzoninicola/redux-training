import React from 'react';
import ColorGrid from './components/ColorGrid/ColorGrid'
import './App.css';
import ColorMixer from './components/ColorMixer/ColorMixer';
import ColorName from './components/ColorName/ColorName';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      colorChoosed: null
    }
  }

  handleButtonClick = (e) => {
    console.log(e.target.name)

    switch (e.target.name) {
      case 'red':
        this.setState({ colorChoosed: '#ff0000' })
        break;
      case 'yellow':
        this.setState({ colorChoosed: '#ffff00' })
        break;
      case 'green':
        this.setState({ colorChoosed: '#00ff00' })
        break;

      default:
        break;
    }
  }

  render() {
    return (
      <div className="container">
        <div>
          <ColorMixer onClickHandler={this.handleButtonClick} />
        </div>
        <div className="container-2">
          <div className="item">
            <ColorName colorChoosed={this.state.colorChoosed} />
          </div>
          <div className="item">
            <ColorGrid colorChoosed={this.state.colorChoosed} />
          </div>
        </div>


      </div >
    );
  }

}

export default App;
