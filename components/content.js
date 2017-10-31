import React from 'react'
class Content extends React.Component {
  render() {
     return (
       <div className="content">
        <section className="content-section-a">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 pull-left">
                <hr className="section-heading-spacer"/>
                <div className="clearfix"></div>
                <h2 className="section-heading">Ease of Use</h2>
                <p className="lead">Sign up, add a property, add a room, take a picture. Bought new stuff? Take a another picture! Your inventory can be managed from all your devices. It's the easiest form of personal security.</p>
              </div>
              <div className="col-lg-5 pull-right">
                <img className="img-fluid" src="assets/devices.jpeg" alt=""/>
              </div>
            </div>
          </div>
        </section>
        <section class="content-section-b">
          <div class="container">
            <div class="row">
              <div class="col-lg-5 pull-right order-lg-2">
                <hr class="section-heading-spacer"/>
                <div class="clearfix"></div>
                <h2 class="section-heading">Secure Data</h2>
                <p className="lead">With Ark, you never need to wonder "What if?" We do the research to ensure the correct insurance information is stored and backed-up in our secure servers.</p>
                <p className="lead">No more keeping receipts and worrying about having to recover them in emergencies.</p>
              </div>
              <div class="col-lg-5 pull-left order-lg-1">
                <img class="img-fluid" src="assets/lock.jpeg" alt=""/>
              </div>
            </div>
          </div>
        </section>
          <section className="content-section-a">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 pull-left">
                <hr className="section-heading-spacer"/>
                <div className="clearfix"></div>
                <h2 className="section-heading">Peace of Mind</h2>
                <p className="lead">Our process for setting up a claim is effortless and instantaneous. We will send the proper information to the right people electronically. So, when disasters occur, you are only a few clicks away from restoring your property.</p>
              </div>
              <div className="col-lg-5 pull-right">
                <img className="img-fluid" src="assets/relax.jpeg" alt=""/>
              </div>
            </div>
          </div>
        </section>
        </div>
     );
  }
}
export default Content;