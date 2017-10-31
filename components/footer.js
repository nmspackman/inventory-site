import React from 'react'
class Footer extends React.Component {
  render() {
     return (
       <footer>
        <div class="container">
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="https://goo.gl/forms/kqbyvwZTprysQ9483" target="_blank">Take our survey!</a>
            </li>
            {/* <li class="footer-menu-divider list-inline-item">&sdot;</li> */}
          </ul>
          {/* <p class="copyright text-muted small">Copyright &copy; Your Company 2017. All Rights Reserved</p> */}
        </div>
      </footer>
     );
  }
}
export default Footer;