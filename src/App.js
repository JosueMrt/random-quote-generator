import React from 'react';
import './App.css';
import Quotes from './Quotes.js'
import colors from './colors'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteNum: 0,
      fade: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState ({          
      quoteNum: Math.floor(Math.random() * Quotes.length),
      fade: true
    })
    document.documentElement.style.setProperty('--main-color', colors[this.state.quoteNum]);
  }
  render() { 
    return (
      <div className="App">
      <div id="quote-box" className="quote-box"> 
        <div className={this.state.fade ? 'fade' : ''} onAnimationEnd={() => this.setState({fade: false})}>
          <p id="text"> <i className="fa fa-quote-left"></i> {Quotes[this.state.quoteNum].quote} </p> 
          <p id="author"> {Quotes[this.state.quoteNum].author} </p>
        </div>
        <a href="twitter.com/intent/tweet" id="tweet-quote">
            <button className="btn btn-primary"><i class="fab fa-twitter"></i></button>
          </a>
          <a href="telegram.com" id="telegram-quote">
            <button className="btn btn-primary"><i class="fab fa-telegram-plane"></i></button>
          </a>
          <button className="btn btn-primary" id="new-quote" onClick={this.handleClick}>New quote</button>
      </div>
    </div>
    );
  }
}
 
export default App;
