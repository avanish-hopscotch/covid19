/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5e7b277866961175c2624628").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class ImageLicenseInfoView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ImageLicenseInfoController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ImageLicenseInfoView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    scripts.concat(Promise.resolve()).reduce((loaded, loading) => {
      return loaded.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return loading
      })
    })
  }

  render() {
    const proxies = Controller !== ImageLicenseInfoView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/covid-19-psa.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-body">
            <div className="af-class-wrapper-pages" />
            <div>
              <div>This is some text inside of a div block.</div>
            </div>
            <div>
              <div className="af-class-text-block-12">HANDWASHING PSA</div>
            </div>
            <div data-collapse="medium" data-animation="default" data-duration={400} className="af-class-sticky-navbar w-nav">
              <div className="af-class-container-3 w-container">
                <div className="af-class-nav-flex">
                  <div><img src="images/New-Hopscotch-Logo_Black.png" width={66} srcSet="images/New-Hopscotch-Logo_Black-p-500.png 500w, images/New-Hopscotch-Logo_Black-p-800.png 800w, images/New-Hopscotch-Logo_Black-p-1080.png 1080w, images/New-Hopscotch-Logo_Black-p-1600.png 1600w, images/New-Hopscotch-Logo_Black-p-2000.png 2000w, images/New-Hopscotch-Logo_Black-p-2600.png 2600w, images/New-Hopscotch-Logo_Black.png 2925w" sizes="66px" alt /></div>
                  <div className="af-class-link-block-flex">
                    <nav role="navigation" className="af-class-nav-menu w-nav-menu"><a href="index.html" className="af-class-nav-link w-nav-link">Home</a><a href="videochallenges.html" className="af-class-nav-link w-nav-link">video challengeS</a><a href="videolibrary.html" className="af-class-nav-link w-nav-link">video library</a><a href="videolibrary.html" className="af-class-nav-link w-nav-link">SUBScRIBE FOR UPDATES</a></nav>
                    <div className="af-class-nav-menu">
                      <div className="af-class-menu-button w-nav-button">
                        <div className="af-class-icon-2 w-icon-nav-menu" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-dyn-list">
                <div className="w-dyn-items">
                  <div className="w-dyn-item">
                    <div className="af-class-columns-6 w-row">
                      <div className="af-class-column-8 w-col w-col-6">
                        <h3 className="af-class-heading-18">7 words to briefly describe this video (on the right is the intro to record a video, video)</h3>
                        <div className="af-class-text-block-17">Created by Dr. Debrishi Brahma</div>
                        <div className="af-class-text-block-18">412 users shared this already</div>
                        <div className="af-class-text-block-16">Date released: 28-03-2020</div>
                        <div className="af-class-text-block-19">Length of challenge </div>
                        <p className="af-class-paragraph-8">More detailed drescription. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                      </div>
                      <div className="w-col w-col-6">
                        <div style={{paddingTop: '56.17021276595745%'}} className="w-video w-embed"><iframe className="af-class-embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F--oTQCysVTs%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D--oTQCysVTs&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F--oTQCysVTs%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube" scrolling="no" title="YouTube embed" frameBorder={0} allow="autoplay; fullscreen" allowFullScreen="true" /></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-dyn-empty">
                  <div>No items found.</div>
                </div>
              </div>
            </div>
            <div>
              <div className="af-class-text-block-15">FEATURED VIDEOS </div>
              <div className="w-dyn-list">
                <div className="af-class-collection-list w-dyn-items w-row">
                  <div className="w-dyn-item w-col w-col-4">
                    <div style={{paddingTop: '56.17021276595745%'}} className="w-video w-embed"><iframe className="af-class-embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FsPLgsV_Ms3Q%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DsPLgsV_Ms3Q&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FsPLgsV_Ms3Q%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube" scrolling="no" title="YouTube embed" frameBorder={0} allow="autoplay; fullscreen" allowFullScreen="true" /></div>
                    <h3>Neil Diamond sings “Sweet Caroline” with updated lyric for safety during COVID-19 pandemic</h3>
                  </div>
                </div>
                <div className="w-dyn-empty">
                  <div>No items found.</div>
                </div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default ImageLicenseInfoView

/* eslint-enable */