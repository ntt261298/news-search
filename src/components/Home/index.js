import React from 'react';
import '../../style/home.css';

export const HomePage = () => (
  <div>
      <div className="back"/>
      <div className="banner">
            <div className="content">
                <div className="search">
                    <input type="text" placeholder="Find news..." alt=""/>
                    <img src={require("../../assets/baseline-search-24px.svg")} alt=""/>
                </div>
            </div>
        </div>
      <div className="section">
          <div className="container">
              <div className="row">
                  <div className="col-md-8">
                      <div className="row">
                          <div className="col-md-12">
                              <div className="section-title">
                                  <h2>Most Read</h2>
                              </div>
                          </div>
                          <div className="col-md-12">
                              <div className="post post-row">
                                  <a className="post-img" href="/"><img src={require("../../assets/post-4.jpg")} alt=""/></a>
                                  <div className="post-body">
                                      <div className="post-meta">
                                          <a className="post-category cat-2" href="">JavaScript</a>
                                          <span className="post-date">March 27, 2018</span>
                                      </div>
                                      <h3 className="post-title"><a href="/">Chrome Extension Protects
                                          Against JavaScript-Based CPU Side-Channel Attacks</a></h3>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                          veniam...</p>
                                  </div>
                              </div>
                          </div>

                          <div className="col-md-12">
                              <div className="post post-row">
                                  <a className="post-img" href=""><img src={require("../../assets/post-6.jpg")} alt="" /></a>
                                  <div className="post-body">
                                      <div className="post-meta">
                                          <a className="post-category cat-2" href="">JavaScript</a>
                                          <span className="post-date">March 27, 2018</span>
                                      </div>
                                      <h3 className="post-title"><a href="">Why Node.js Is The Coolest
                                          Kid On The Backend Development Block!</a></h3>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                          veniam...</p>
                                  </div>
                              </div>
                          </div>

                          <div className="col-md-12">
                              <div className="post post-row">
                                  <a className="post-img" href=""><img src={require("../../assets/post-3.jpg")} alt="" /></a>
                                  <div className="post-body">
                                      <div className="post-meta">
                                          <a className="post-category cat-4" href="">Css</a>
                                          <span className="post-date">March 27, 2018</span>
                                      </div>
                                      <h3 className="post-title"><a href="">CSS Float: A Tutorial</a>
                                      </h3>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                          veniam...</p>
                                  </div>
                              </div>
                          </div>

                          <div className="col-md-12">
                              <div className="post post-row">
                                  <a className="post-img" href=""><img src={require("../../assets/post-2.jpg")} alt="" /></a>
                                  <div className="post-body">
                                      <div className="post-meta">
                                          <a className="post-category cat-3" href="">Jquery</a>
                                          <span className="post-date">March 27, 2018</span>
                                      </div>
                                      <h3 className="post-title"><a href="">Ask HN: Does Anybody Still
                                          Use JQuery?</a></h3>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                          veniam...</p>
                                  </div>
                              </div>
                          </div>

                          <div className="col-md-12">
                              <div className="section-row">
                                  <button className="primary-button center-block">Load More</button>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="col-md-4">
                      <div className="aside-widget text-center">
                          <a href="#" style={{display: 'inline-block', margin: 'auto'}}>
                              <img className="img-responsive" src={require("../../assets/ad-1.jpg")} alt="" />
                          </a>
                      </div>

                      <div className="aside-widget">
                          <div className="section-title">
                              <h2>Catagories</h2>
                          </div>
                          <div className="category-widget">
                              <ul>
                                  <li><a href="#" className="cat-1">Web Design<span>340</span></a></li>
                                  <li><a href="#" className="cat-2">JavaScript<span>74</span></a></li>
                                  <li><a href="#" className="cat-4">JQuery<span>41</span></a></li>
                                  <li><a href="#" className="cat-3">CSS<span>35</span></a></li>
                              </ul>
                          </div>
                      </div>

                      <div className="aside-widget">
                          <div className="tags-widget">
                              <ul>
                                  <li><a href="#">Chrome</a></li>
                                  <li><a href="#">CSS</a></li>
                                  <li><a href="#">Tutorial</a></li>
                                  <li><a href="#">Backend</a></li>
                                  <li><a href="#">JQuery</a></li>
                                  <li><a href="#">Design</a></li>
                                  <li><a href="#">Development</a></li>
                                  <li><a href="#">JavaScript</a></li>
                                  <li><a href="#">Website</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
);

export default HomePage;