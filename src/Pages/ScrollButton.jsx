// ScrollButton.js
import React from 'react';
class ScrollButton extends React.Component {
  handleClick = () => {
    const targetElement = document.getElementById('targetElementId');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Scroll to Element</button>
        <div id="targetElementId"></div>
      </div>
    );
  }
}

export default ScrollButton;
