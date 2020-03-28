/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5e7b277866961175c2624628").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class VideochallengesView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/VideochallengesController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = VideochallengesView

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
    const proxies = Controller !== VideochallengesView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/covid-19-psa.webflow.css);
        ` }} />
        <span className="af-view">
          <div>
            <div className="af-class-wrapper-pages">
              <div data-collapse="medium" data-animation="default" data-duration={400} className="af-class-sticky-navbar w-nav">
                <div className="af-class-container-3 w-container">
                  <div className="af-class-nav-flex">
                    <div><img src="images/New-Hopscotch-Logo_Black.png" width={66} srcSet="images/New-Hopscotch-Logo_Black-p-500.png 500w, images/New-Hopscotch-Logo_Black-p-800.png 800w, images/New-Hopscotch-Logo_Black-p-1080.png 1080w, images/New-Hopscotch-Logo_Black-p-1600.png 1600w, images/New-Hopscotch-Logo_Black-p-2000.png 2000w, images/New-Hopscotch-Logo_Black-p-2600.png 2600w, images/New-Hopscotch-Logo_Black.png 2925w" sizes="66px" alt /></div>
                    <div className="af-class-link-block-flex">
                      <nav role="navigation" className="af-class-nav-menu w-nav-menu"><a href="index.html" className="af-class-nav-link w-nav-link">Home</a><a href="videochallenges.html" aria-current="page" className="af-class-nav-link w-nav-link w--current">video challengeS</a><a href="videolibrary.html" className="af-class-nav-link w-nav-link">video library</a><a href="videolibrary.html" className="af-class-nav-link w-nav-link">SUBScRIBE FOR UPDATES</a></nav>
                      <div className="af-class-nav-menu">
                        <div className="af-class-menu-button w-nav-button">
                          <div className="af-class-icon-2 w-icon-nav-menu" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="af-class-section">
                <div className="af-class-container w-container">
                  <div className="af-class-section-content-tittle">
                    <p className="af-class-top-text">VIDEO CHAllenges</p>
                    <div className="af-class-text-block-13">VIDEO CHALLENGES</div>
                    <div data-duration-in={300} data-duration-out={100} className="w-tabs">
                      <div className="w-tab-content">
                        <div data-w-tab="Tab 2" className="w-tab-pane" />
                      </div>
                    </div>
                    <div className="w-dyn-list">
                      <div className="w-dyn-items">
                        <div className="w-dyn-item">
                          <div className="w-row">
                            <div className="w-col w-col-6"><img src="images/03.svg" alt /></div>
                            <div className="af-class-column-5 w-col w-col-6"><a href="#" className="af-class-link-3"><strong className="af-class-bold-text-7">Record yourself washing your hands with proper technique</strong></a>
                              <div className="af-class-text-block-7"> 246 recorders already</div><a href="#" className="af-class-button-9 w-button"><span>Record now</span></a></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-dyn-empty">
                        <div>No items found.</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-dyn-list">
                    <div className="w-dyn-items">
                      <div className="w-dyn-item">
                        <div className="w-row">
                          <div className="w-col w-col-6"><img src="images/01.svg" alt />
                            <div>This is some text inside of a div block.</div>
                          </div>
                          <div className="af-class-column-6 w-col w-col-6"><a href="#" className="af-class-link-5"><strong className="af-class-bold-text-8">Post a selfie with a mask </strong></a>
                            <div className="af-class-text-block-8">125 recorders already </div><a href="#" className="af-class-button-8 w-button">Record now</a></div>
                        </div>
                      </div>
                    </div>
                    <div className="w-dyn-empty">
                      <div>No items found.</div>
                    </div>
                  </div>
                </div>
                <div data-duration-in={300} data-duration-out={100} className="w-tabs">
                  <div className="w-tab-content">
                    <div data-w-tab="Tab 2" className="w-tab-pane" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-dyn-list">
              <div className="w-dyn-items">
                <div className="w-dyn-item">
                  <div className="af-class-columns-5 w-row">
                    <div className="af-class-column-7 w-col w-col-6"><img src="images/02.svg" alt className="af-class-image-5" /></div>
                    <div className="w-col w-col-6"><a href="#" className="af-class-link-6"><strong className="af-class-bold-text-9">Record this 5-point PSA for your friends and family</strong></a>
                      <div className="af-class-text-block-9">178 recorders have already shared this </div><a href="#" className="af-class-button-10 w-button">Record now</a></div>
                  </div>
                </div>
              </div>
              <div className="w-dyn-empty">
                <div>No items found.</div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default VideochallengesView

/* eslint-enable */