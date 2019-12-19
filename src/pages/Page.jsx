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
const Page = () => {
  return (
    <>
      <Header />
      <section className="secondary-page">
        <ul>
          <section className="image-box-page2">
            <section className="image-row-one-page2">
              <li>
                <section className="image-one-page">
                  <img
                    className="feature-one-overlay-page2"
                    src={graphicElementsOne} />
                  <img className="feature-one-page2" src={placeholderOne} />
                  <div className="image-one-words-page2">
                    {/* <span>SOUP</span> */}
                  </div>
                </section>
              </li>

              <li>
                <img
                  className="feature-one-overlay-2"
                  src={graphicElementsTwo}
                />
                <div className="image-one-words-2">
                  {/* <span>SOUP</span> */}
                </div>
                <img className="feature-one-2" src={placeholderTwo} />
              </li>
            </section>
          </section>
          <section className="image-box-2">
            <section className="image-row-two-2">
              <li>
                <img
                  className="feature-one-overlay-2"
                  src={graphicElementsThree}
                />{' '}
                <div className="image-one-words-2">
                  {/* <span>SOUP</span> */}
                </div>
                <img className="feature-one-2" src={placeholderThree} />
              </li>
              <li>
                <img
                  className="feature-one-overlay-2"
                  src={graphicElementsFour}
                />{' '}
                <div className="image-one-words-2">
                  {/* <span>SOUP</span> */}
                </div>
                <img className="feature-one-2" src={placeholderFour} />
              </li>
            </section>
          </section>
        </ul>
      </section>
    </>
  )
}

export default Page
