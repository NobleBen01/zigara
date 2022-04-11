import Logo from '../src/images/Logo.svg';
import HeroSectionImage from '../src/images/HeroSectionImage.svg';
import TFrame377 from '../src/images/TFrame377.svg';
import image3 from '../src/images/image3.svg';
import image4 from '../src/images/image4.svg';
import image5 from '../src/images/image5.svg';
import TFrame378 from '../src/images/TFrame378.svg';
import TGroup339 from '../src/images/TGroup339.svg';
import TFrame379 from '../src/images/TFrame379.svg';
import Safe from '../src/images/Safe.svg';
import Fast from '../src/images/Fast.svg';
import Reliable from '../src/images/Reliable.svg';
import CTAimage from '../src/images/CTAimage.svg';
import Group from '../src/images/Group.svg';
import Facebook from '../src/images/Facebook.svg';
import Instagram from '../src/images/Instagram.svg';
import LinkedIn from '../src/images/LinkedIn.svg';
import Twitter from '../src/images/Twitter.svg';
import Rectangle20 from '../src/images/Rectangle20.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="#">
        <img src={ Logo } alt="Avatar" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <a className="nav-link" href="#">
                Our Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Account
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Support
              </a>
            </li>


            <li className="nav-item">
            <button type="button" class="btn btn-danger">Login</button>
            </li>
            <li className="nav-item">
            <button type="button" class="btn btn-light">Sign Up</button>
            </li>
          </ul>
        </div>
      </nav>

      <section id="home" className="home">
        <div className="container">
          <div className="row height">
            <div className="col-12 col-md-6 height d-flex align-items-center text-left">
              <div className="text d-flex align-items-center">
                <div className="home-text text-black height1">
                  <h1 className="main-heading mb-0 fontWeight" >Quick & Reliable</h1>
                  <h1 className="main-heading mb-0 Delivery fontWeight ">Delivery</h1>
                  <h6 className="heading mb-3">
                    Our Job is to get you everything You need in
                  </h6>
                  <h6 className="heading mb-3">
                   the shortest time possible.
                  </h6>

                  <button type="button" class="btn btn-danger">Schedule Delivery</button>
                     
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


<section id="" className="block2">
           <div className="container">
              <div className="row">
                <div className="col-sm-4 col-md-4 col-lg-6 ">
                    <img className='Rectangle20' src={Rectangle20} alt="Avatar" />
                </div>
                <div className="col-sm-4 col-md-4 col-lg-6 ">
                    <img className='text ' src={TFrame377} alt="Avatar" />
                </div>
              </div>
            </div>
</section>

<section className= 'block3'>
   <h1 className='centerText fontWeight'>How We Work</h1>

            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-6 ">
                    <img className='' src={image3} alt="Avatar" />
                </div>
                <div className="col-sm-6 col-md-4 col-lg-6 ">
                    <img className='text' src={TFrame379} alt="Avatar" />
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-6 ">
                    <img className='text' src={TFrame378} alt="Avatar" />
                </div>
                <div className="col-sm-6 col-md-4 col-lg-6 ">
                    <img className='' src={image4} alt="Avatar" />
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-6 ">
                    <img className='' src={image5} alt="Avatar" />
                </div>
                <div className="col-sm-6 col-md-4 col-lg-6 ">
                    <img className='text' src={TGroup339} alt="Avatar" />
                </div>
              </div>
            </div>
</section>

<section className='block4 '>
  <h1  className='centerText fontWeight'>Why choose us</h1>
  <h6 className='centerText'>Our customer's satisfaction is our priority and we strive to give our customers the best services, we are Zigara.</h6>
  {/* <h6  className='centerText'>to give our customers the best services, we are Zigara</h6> */}

  <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-4 ">
                 <div className="thumbnail">
                   <div className="caption">
                    <img  src={Safe} alt="Avatar" />
                   </div>
                 </div>
                </div>


                <div className="col-sm-6 col-md-4 col-lg-4 ">
                  <div className="thumbnail">
                      <div className="caption">
                         <img src={Fast} alt="Avatar" />
                      </div>
                  </div>
                </div>


                <div className="col-sm-6 col-md-4 col-lg-4 ">
                  <div className="thumbnail">
                   <div className="caption">
                      <img  src={Reliable} alt="Avatar" />
                   </div>
                  </div>                  
                </div>

              </div>
            </div>
</section>

<section className='block5'>
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-8 ">
                    <img className='' src={CTAimage} alt="Avatar" />
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4 ">
                <div className="thumbnail">
                   <div className="caption">
                     <h2  className='block5text fontWeight' >we provide the best logistics services for our customers</h2>
                     <button type="button" class="btn btn-danger">Schedule Delivery</button>
                   </div>
                  </div>   
                </div>
              </div>
            </div> 
</section>

<div className="footer">
            <div className="container">
              <div className="row">

                <div className="col-sm-6 col-md-4 col-lg-3 ">
                 <div className="thumbnail">
                   <div className="caption">
                    <img  src={Group} alt="Avatar" />

                    <h1>Socials</h1>

                   <div className="container">
                      <div className="row">
                        <div className="col-sm-3">
                          <a href="">
                            <img src={Facebook} alt="Avatar" />
                          </a>
                        </div>
                        <div className="col-sm-3">
                          <a href="">
                          <img src={Instagram} alt="Avatar" />
                          </a>
                        </div>
                        <div className="col-sm-3">
                          <a href="">
                          <img src={Twitter} alt="Avatar" />
                          </a>
                        </div>
                        <div className="col-sm-3">
                          <a href="">
                          <img src={LinkedIn} alt="Avatar" />
                          </a>
                        </div>
                      </div>
                    </div>
                   </div>
                 </div>
                </div>


                <div className="col-sm-6 col-md-4 col-lg-3 ">
                  <div className="thumbnail">
                      <div className="caption">
                         <h1>Links</h1>
                         <p><a href= ''>Our Services</a></p>
                         <p><a href= ''>About Us</a></p>
                         <p><a href= ''>FAQs</a></p>
                         <p><a href= ''>Terms and Conditions</a></p>
                      </div>
                  </div>
                </div>


                <div className="col-sm-6 col-md-4 col-lg-3 ">
                  <div className="thumbnail">
                   <div className="caption">
                      <h1>Contact</h1>
                      <p>07040003782</p>
                      <p>zigaralogistics@gmail.com</p>
                   </div>
                  </div>                  
                </div>

                <div className="col-sm-6 col-md-4 col-lg-3 ">
                  <div className="thumbnail">
                   <div className="caption">
                      <h2>Business Hours</h2>
                      <p>Monday- Saturday 7am-7pm</p>
                      <p>Sundays 8am-7pm</p>
                   </div>
                  </div>                  
                </div>

              </div>
            </div>

            <h6 className='NavendText'>2022.All Rights Reserved.Zigara Logistics</h6>
        </div>


    


    </div>
  );
}


export default App;
