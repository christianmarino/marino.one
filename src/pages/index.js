import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            Committed to serving your company with excellence and to solve problems with accuracy and professionalism. Willing to learn new skills and to improve current skills necessary to benefit your company.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Work Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Computer & Cell Phone Repair</h3>
              <div className="subheading mb-3"></div>
              <p>
                Work from home repairing computers & cell phones of various neighbors and friends.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2018 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Violin Instructor</h3>
              <div className="subheading mb-3"></div>
              <p>
                Private In Home Instructor   Costa Mesa, California
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2016 – 2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Sales Associate</h3>
              <div className="subheading mb-3"></div>
              <p>
                Cutco Knives  Irvine Ave, Newport Beach, California
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 2016 – March 2016</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Solo Violinist</h3>
              <div className="subheading mb-3">Vintage Newport Retirement Home  393 Hospital Road, Newport Beach, CA</div>
              <p>
                Performed solo violin for retirement home residents during their candlelight dinners and special occasions.  Interacted with residents and played familiar pieces and requests on a regular basis for 2 different retirement homes.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2014 - 2015</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Orange Coast College</h3>
              <div className="subheading mb-3">Associate of Music</div>
              <p>GPA: 3.45</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Calvary Chapel Independent Study Program</h3>
              <div className="subheading mb-3">High School Diploma</div>

            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2015</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">STOA Speech and Debate League</h3>
              <div className="subheading mb-3">Orange County</div>

            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">4 Years</span>
            </div>
          </div>
        </div>

      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">40 WPM Typing Speed</div>
          <div className="subheading mb-3">Graphic Design & Photo editing</div>
          <div className="subheading mb-3">Violin and Viola performance level  (also proficient on piano)</div>
          <div className="subheading mb-3">Musical composition & Performance</div>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>


        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="volunteer"
      >
        <div className="w-100">
          <h2 className="mb-5">Volunteer Experience</h2>
          <p>
          Member of Praise Symphony Orchestra, Orange County, for over 9 years.   2011 - present
Attended weekly rehearsals and performed once or twice monthly in various churches and other                 venues. Played in violin or viola orchestra section.

Assisted with worship on violin at Calvary Chapel Refuge, Huntington Beach, in various worship services for 2 years.  2019 – present.
          </p>
          <p className="mb-0">
          Provided musical entertainment for residents at Newport Beach Plaza Retirement Home.
One to two hours, one time a month for 5 years. 2012 - 2017
Played violin, viola, or mandolin as part of a family band to entertain and minister to residents.
Visited and conversed with residents after each program.
          </p>
        </div>
      </section>

      <hr className="m-0" />


    </div>
  </Layout>
);

export default IndexPage;
