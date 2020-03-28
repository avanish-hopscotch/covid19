/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5e7b277866961175c2624628").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class VideolibraryView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/VideolibraryController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = VideolibraryView

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
    const proxies = Controller !== VideolibraryView ? transformProxies(this.props.children) : {

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
                      <nav role="navigation" className="af-class-nav-menu w-nav-menu"><a href="index.html" className="af-class-nav-link w-nav-link">Home</a><a href="videochallenges.html" className="af-class-nav-link w-nav-link">video challengeS</a><a href="videolibrary.html" aria-current="page" className="af-class-nav-link w-nav-link w--current">video library</a><a href="videolibrary.html" aria-current="page" className="af-class-nav-link w-nav-link w--current">SUBScRIBE FOR UPDATES</a></nav>
                      <div className="af-class-nav-menu">
                        <div className="af-class-menu-button w-nav-button">
                          <div className="af-class-icon-2 w-icon-nav-menu" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h1>Heading</h1>
            </div>
            <div>This is some text inside of a div block.</div>
            <div className="af-class-text-block-10">VIDEO LIBRARY </div>
            <div className="w-dyn-list">
              <div className="w-dyn-items w-row">
                <div className="af-class-collection-item-2 w-dyn-item w-col w-col-4">
                  <div className="w-container">
                    <div style={{paddingTop: '56.17021276595745%'}} className="w-video w-embed"><iframe className="af-class-embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fv-852f1PXBo%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dv-852f1PXBo&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fv-852f1PXBo%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube" scrolling="no" title="YouTube embed" frameBorder={0} allow="autoplay; fullscreen" allowFullScreen="true" /></div>
                    <div className="af-class-text-block-11"> 3,457 shares already</div>
                    <h3 className="af-class-heading-15">Amitabh Bachchan's message on COVID-19</h3><a href="#" className="af-class-button-11 w-button">Share</a></div>
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

export default VideolibraryView

/* eslint-enable */