import React from 'react'
import Header from '../components/Header'
import placeholderOne from '../assets/Image_Placeholder.png'
import graphicElementsOne from '../assets/Graphic_Elements_1_.png'
import graphicElementsTwo from '../assets/Graphic_Elements_2_.png'
import graphicElementsThree from '../assets/Graphic_Elements_3_.png'
import graphicElementsFour from '../assets/Graphic_Elements_4_.png'
import placeholderTwo from '../assets/Image_Placeholder2.png'
import placeholderThree from '../assets/Image_Placeholder3.png'
import placeholderFour from '../assets/Image_Placeholder4.png'

const HomePage = () => {
  return (
    <>
      <Header />
      <section className="main-home">
        <ul>
          <section className="image-box">
            <section className="image-row-one">
              <li>
                <section className="image-one">
                  <img
                    className="feature-one-overlay"
                    src={graphicElementsOne}
                  />
                  <img className="feature-one" src={placeholderOne} />
                </section>
              </li>
              <li>
                <img className="feature-one-overlay" src={graphicElementsTwo} />
                <img src={placeholderTwo} />
              </li>
            </section>
          </section>
          <section className="image-box-2">
            <section className="image-row-two">
              <li>
                <img
                  className="feature-one-overlay"
                  src={graphicElementsThree}
                />
                <img src={placeholderThree} />
              </li>
              <li>
                <img
                  className="feature-one-overlay"
                  src={graphicElementsFour}
                />
                <img src={placeholderFour} />
              </li>
            </section>
          </section>
        </ul>
      </section>
    </>
  )
}

export default HomePage
