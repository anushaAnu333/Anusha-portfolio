import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/expedia.png";
import Ecommerce from "../../img/homedepot.png";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
     

      {/* slider */}
      <Swiper
        
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
          <div class="flip-card">
											
                      <div className="flip-card-front">
                       
                        <div>
                          <div align="center">
                          <h3 className="h3">EXPEDIA</h3>
                          </div>
                          <div>
                            <p align="center">
                            A website used to book airlines tickets, hotel reservations, car rental, cruise ships and vacation packages.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <br></br>
									<div>
										<a
											href="https://project-expedia-masai.vercel.app/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<button
											
												className="sbtn"
											>
												View Project
											</button>
										</a>
										<a
											href="https://github.com/anushaAnu333/EXPEDIA-CLONE"
											target="_blank"
											rel="noreferrer noopener"
										>
											<button
											
												className="sbtn"
											>
												View Github Repo
											</button>
										</a>
									</div>
                  </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
          <div class="flip-card">
											
                      <div className="flip-card-front">
                       
                        <div>
                          <div align="center">
                          <h3 className="h3">HOME DEPOT</h3>
                          </div>
                          <div>
                            <p align="center">
                            A website used to book airlines tickets, hotel reservations, car rental, cruise ships and vacation packages.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <br></br>
									<div>
										<a
											href="https://frabjous-empanada-4054d6.netlify.app/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<button
											
												className="sbtn"
											>
												View Project
											</button>
										</a>
										<a
											href="https://github.com/anushaAnu333/Home-Depot-clone"
											target="_blank"
											rel="noreferrer noopener"
										>
											<button
											
												className="sbtn"
											>
												View Github Repo
											</button>
										</a>
									</div>
                  </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Portfolio;
