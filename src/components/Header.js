import React from 'react';

class Header extends React.Component {
    render() {
      return (
        <div class="header">
        <div class="container"> 
              <div class="header__logo">
              <img width="38" src="./img/Group.svg" alt="logo" />
              </div>
                  
                
              <div class="header__cart">
              <img width="38" src="./img/Group2.svg" alt="vector" />
              </div>
        </div>
      </div>
      );
    }
}

export default Header;