/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5e7b277866961175c2624628").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class ChangelogView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ChangelogController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ChangelogView

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
    const proxies = Controller !== ChangelogView ? transformProxies(this.props.children) : {

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
            <div className="af-class-wrapper-pages">
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
              <div id="Hero-Section" className="af-class-hero-section af-class-about-us">
                <div className="af-class-container af-class-about-section w-container">
                  <div className="af-class-about-hero-block">
                    <h1 className="af-class-page-title">Changelog</h1>
                    <p className="af-class-detail-paragraph af-class-subpage">The attractions of ceramics lie partly in its contradictions. It is both difficult and easy, with an element beyond our control. It is both extremely fragile and durable. Like 'Sumi' ink painting, it does not lend itself to erasures and indecision.</p>
                  </div>
                </div>
              </div>
              <div className="af-class-section af-class-gray af-class-testimonials">
                <div className="af-class-vertical-category">Image Licensing<br /></div>
                <div className="af-class-container w-container">
                  <div className="af-class-licence-items">
                    <div className="af-class-licence-item-first af-class-changelog"><img src="images/Pompeo-256.jpg" width={40} alt className="af-class-logo-icon" /><a href="#" className="af-class-licence-link-2">Pompeo template has been released! 🎉</a></div>
                  </div>
                </div>
              </div>
              <div className="af-class-section af-class-footer-section">
                <div className="af-class-container w-container">
                  <div className="w-row">
                    <div className="w-col w-col-4">
                      <div data-w-id="58ed9903-f141-fbf8-6b89-617cf55bd229" className="af-class-footer-content-block af-class-padding"><img src="images/icons8-secured-letter-80-1_1icons8-secured-letter-80-1.png" width={40} alt />
                        <h4 className="af-class-footer-title">EMAIL</h4>
                        <p className="af-class-about-pompeo-text af-class-center">pompeopotery@gmail.com</p>
                      </div>
                    </div>
                    <div className="w-col w-col-4">
                      <div data-w-id="e803413c-f22c-fccd-d947-37dbc89917ce" className="af-class-footer-content-block af-class-padding"><img src="images/icons8-marker-80-1_1icons8-marker-80-1.png" width={40} alt />
                        <h4 className="af-class-footer-title">FIND<br /></h4>
                        <p className="af-class-about-pompeo-text af-class-center">Central Park, Manhattan<br />New York, 1101</p>
                      </div>
                    </div>
                    <div className="w-col w-col-4" />
                  </div>
                </div>
                <div className="af-class-sub-footer">
                  <div className="af-class-container-2">
                    <div className="af-class-algin-center">
                      <p className="af-class-right-footertext">Template design by&nbsp;<a id="Link" href="https://www.dorianhoxha.com/" className="af-class-link-2">Dorian Hoxha</a> - <a href="image-license-info.html" className="af-class-link-2">Image License Info</a></p>
                      <p className="af-class-right-footertext af-class-center">Powered by <a href="https://webflow.com/" className="af-class-link-2">Webflow</a></p>
                    </div>
                  </div>
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

export default ChangelogView

/* eslint-enable */