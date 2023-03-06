import React from 'react';
import { useState } from 'react';
import '../static/css/about.css';

export default function About() {

  const [toggleTab, setToggleTab] = useState(1);
  return (
    <>
      <section className='about'>
        <div className="row">

          <div className="column">
            <div className="about-img"></div>
          </div>

          <div className="column">
            <div className="tabs">

              <div
                className={`single-tab ${toggleTab === 1 ? 'active-tab' : ''}`}
                onClick={() => setToggleTab(1)}
              >
                <h2>About</h2>
              </div>

              <div
                className={`single-tab ${toggleTab === 2 ? 'active-tab' : ''}`}
                onClick={() => setToggleTab(2)}
              >
                <h2>Skills</h2>
              </div>

              <div
                className={`single-tab ${toggleTab === 3 ? 'active-tab' : ''}`}
                onClick={() => setToggleTab(3)}>
                <h2>Experience</h2>
              </div>

            </div>
            <div className="tab-content">

              <div className={`content ${toggleTab === 1 ? 'active-content' : ''}`}>
                <h2>My Story</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati officiis consequatur eum, reiciendis quod exercitationem veniam at sed inventore dolorum natus doloremque. Similique dolorum delectus ducimus vero hic placeat incidunt.</p>
                <h3>I am a Web Designer and Developer with 10 years of Experience</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo labore nostrum sit error architecto debitis voluptatibus blanditiis, voluptatem est deleniti.</p>
              </div>

              <div className={`content ${toggleTab === 2 ? 'active-content' : ''}`}>
                <h2>Skills</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati officiis consequatur eum, reiciendis quod exercitationem veniam at sed inventore dolorum natus doloremque. Similique dolorum delectus ducimus vero hic placeat incidunt.</p>
                <div className="skills-row">

                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>Developer</h3>
                      <div className="progress-custom">
                        <div className="progress-bar-custom">
                          <span>80%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>Designer</h3>
                      <div className="progress-custom">
                        <div className="progress-bar-custom designer">
                          <span>90%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>Javascript</h3>
                      <div className="progress-custom">
                        <div className="progress-bar-custom javascript">
                          <span>85%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>Photoshop</h3>
                      <div className="progress-custom">
                        <div className="progress-bar-custom photoshop">
                          <span>88%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className={`content ${toggleTab === 3 ? 'active-content' : ''}`}>

                <div className="exp-column">
                  <h3>Web Developer</h3>
                  <span>2014-2022</span>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci beatae incidunt blanditiis, cum aut assumenda voluptatibus ab distinctio veniam ducimus?</p>
                </div>

                <div className="exp-column">
                  <h3>Graphic Designer</h3>
                  <span>2015-2022</span>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci beatae incidunt blanditiis, cum aut assumenda voluptatibus ab distinctio veniam ducimus?</p>
                </div>

                <div className="exp-column">
                  <h3>Photoshop</h3>
                  <span>2017-2022</span>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci beatae incidunt blanditiis, cum aut assumenda voluptatibus ab distinctio veniam ducimus?</p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
