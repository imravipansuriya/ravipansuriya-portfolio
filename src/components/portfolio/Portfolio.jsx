import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/foryou.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio4.jpg'
import IMG6 from '../../assets/portfolio6.jpg'
import Slider from "react-slick";

const Portfolio = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id='portfolio'>
      <h5>My Resent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        <Slider {...settings} className="slider-wrp">
          <div className='slider-item-box'>
            <article className='portfolio_item'>
              <div className='portfolio_item_image'>
                <img src={IMG1} alt="" />
              </div>
              <h3>UI/UX Design</h3>
              <div className='portfolio_item_cta'>
                {/* <a href="#" className='btn'>Github</a> */}
                <a href="https://www.figma.com/design/hzF416dhHnCRyFSCgAi2Fk/UI%2FUX?node-id=0-1&t=LDMOjaJOhjs0YpnV-1" className='btn btn-primary' target='_blank'>View</a>
              </div>
            </article>
          </div>
          <div className='slider-item-box'>
            <article className='portfolio_item'>
              <div className='portfolio_item_image'>
                <img src={IMG2} alt="" />
              </div>
              <h3>Logo Design</h3>
              <div className='portfolio_item_cta'>
                <a href="https://www.figma.com/design/3mVR8hGIJmN3fhNiP5kByH/Logo?node-id=0-1&t=mfAdsD8I6cQFDRSH-1" className='btn btn-primary' target='_blank'>View</a>
              </div>
            </article>
          </div>
          <div className='slider-item-box'>
            <article className='portfolio_item'>
              <div className='portfolio_item_image'>
                <img src={IMG3} alt="" />
              </div>
              <h3>Website</h3>
              <div className='portfolio_item_cta'>
                <a href="https://docs.google.com/spreadsheets/d/1fhvN0GocmNxldeGmbvkjn3NKHXYPGu3FIZ75phaw4LU/edit?usp=sharing" className='btn'>View</a>
              </div>
            </article>
          </div>
          <div className='slider-item-box'>
            <article className='portfolio_item'>
              <div className='portfolio_item_image'>
                <img src={IMG4} alt="" />
              </div>
              <h3>Wordpress Design</h3>
              <div className='portfolio_item_cta'>
                <a href="https://docs.google.com/spreadsheets/d/1fhvN0GocmNxldeGmbvkjn3NKHXYPGu3FIZ75phaw4LU/edit?usp=sharing" className='btn btn-primary' target='_blank'>View</a>
              </div>
            </article>
          </div>
          {/* <div className='slider-item-box'>
            <article className='portfolio_item'>
              <div className='portfolio_item_image'>
                <img src={IMG5} alt="" />
              </div>
              <h3>This is a portfolio title</h3>
              <div className='portfolio_item_cta'>
                <a href="#" className='btn'>Github</a>
                <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
          </div>
          <div className='slider-item-box'>
            <article className='portfolio_item'>
              <div className='portfolio_item_image'>
                <img src={IMG6} alt="" />
              </div>
              <h3>This is a portfolio title</h3>
              <div className='portfolio_item_cta'>
                <a href="#" className='btn'>Github</a>
                <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
          </div> */}
        </Slider>
      </div>

    </section>
  )
}

export default Portfolio