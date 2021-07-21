import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import Social from './Social';
import './Footer.css';
import logo from '../Image/fbaae94605124c37a844022e469ca0e1.png';

const FooterPagePro = () => {
  return (
    <footer style={{ height: '100px' }}>
      <MDBFooter
        color="mdb-color"
        className="font-small pt-4 mt-4 footer-wrap "
        style={{ background: '#333' }}
      >
        <MDBContainer className="text-center text-md-left ">
          <MDBRow className="text-center text-md-left mt-3 pb-3">
            <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3 ">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                The Standard Bank
              </h6>
              <img src={logo} alt="SBI" />
            </MDBCol>
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3 footer-links ">
              <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
              <ul className="footer-links">
                <li>
                  <a href="#!">ABOUT US</a>
                </li>
                <li>
                  <a href="#!">BANK WITH US</a>
                </li>
                <li>
                  <a href="#!">ATMS AND BRANCHES</a>
                </li>
                <li>
                  <a href="#!">GET HELP</a>
                </li>
                <li>
                  <a href="#!">PRIVACY POLICY</a>
                </li>
              </ul>
            </MDBCol>
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol
              md="3"
              lg="2"
              xl="2"
              className="mx-auto mt-3 footer-category"
            >
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Useful links
              </h6>
              <ul className="footer-category">
                <li>
                  <a href="#!">LATEST MARKET INSIGHTS</a>
                </li>
                <li>
                  <a href="#!">INVESTOR RELATIONS</a>
                </li>
                <li>
                  <a href="#!">GLOBAL RESEARCH</a>
                </li>
                <li>
                  <a href="#!">CAREERS</a>
                </li>
              </ul>
            </MDBCol>
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <i className="fa fa-home mr-3" /> INDIA, IND 10012, RS
              </p>
              <p>
                <i className="fa fa-envelope mr-3" /> tsf@gmail.com
              </p>
              <p>
                <i className="fa fa-phone mr-3" /> + 01 234 567 88
              </p>
              <p>
                <i className="fa fa-print mr-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow className="d-flex align-items-center">
            <MDBCol md="5" lg="6">
              <p className="text-center text-md-left grey-text">
                &copy; {new Date().getFullYear()} Copyright:{' '}
                <a href="https://www.TheStandardBank.com">
                  {' '}
                  TheStandardBank.com{' '}
                </a>
              </p>
            </MDBCol>
            <MDBCol md="4" lg="4" className="ml-lg-0">
              <Social />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    </footer>
  );
};

export default FooterPagePro;
