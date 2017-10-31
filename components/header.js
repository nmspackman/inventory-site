import React from 'react'
class Header extends React.Component {
  render() {
     return (
       <header className="intro-header">
        <div className="container">
          <div className="intro-message">
            <div className="logo-container">
              <img src="assets/bird.png"></img>
              <h1>Ark</h1>
            </div>
            <h3>Home Inventory Solutions</h3>
          </div>
        </div>
      </header>
     );
  }
}
export default Header;