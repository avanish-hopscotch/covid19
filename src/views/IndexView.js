/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5e7b277866961175c2624628").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView

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
    const proxies = Controller !== IndexView ? transformProxies(this.props.children) : {

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
                      <nav role="navigation" className="af-class-nav-menu w-nav-menu"><a href="index.html" aria-current="page" className="af-class-nav-link w-nav-link w--current">Home</a><a href="videochallenges.html" className="af-class-nav-link w-nav-link">video challengeS</a><a href="videolibrary.html" className="af-class-nav-link w-nav-link">video library</a><a href="videolibrary.html" className="af-class-nav-link w-nav-link">SUBScRIBE FOR UPDATES</a></nav>
                      <div className="af-class-nav-menu">
                        <div className="af-class-menu-button w-nav-button">
                          <div className="af-class-icon-2 w-icon-nav-menu" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="Hero-Section" className="af-class-hero-section">
                <div className="af-class-container w-container">
                  <div className="af-class-left-block af-class-hero">
                    <div className="af-class-hero-div af-class-small">
                      <div style={{WebkitTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} className="af-class-top-text af-class-hero"><strong>Untitled psa app</strong></div>
                      <h1 style={{opacity: 0, WebkitTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-page-title af-class-big"><strong>Speak in one voice to tackle Covid-19. </strong></h1>
                      <p style={{opacity: 0, WebkitTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-paragraph af-class-main"><strong className="af-class-bold-text-4">About two lines of content here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </strong></p>
                      <div style={{opacity: 0, WebkitTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-top-padding"><a href="videochallenges.html" className="af-class-button af-class-dark w-button"><strong>TAKE A VIDEO CHALLENGE</strong></a></div>
                    </div>
                    <div className="af-class-hero-image-div">
                      <div className="af-class-hero-image" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="af-class-section af-class-collections">
                <div className="af-class-container w-container">
                  <div className="af-class-section-content-tittle">
                    <div className="af-class-text-block-14">ABOUT </div>
                  </div>
                  <div className="af-class-category-list-wrapper w-dyn-list">
                    <div className="w-dyn-items w-row">
                      <div className="w-dyn-item w-col w-col-4"><a href="#" className="af-class-links-category w-inline-block"><img src="images/01.svg" alt /></a></div>
                    </div>
                    <div className="w-dyn-empty">
                      <div>No items found.</div>
                    </div>
                  </div>
                  <div className="af-class-div-info-wrapper">
                    <div className="w-row">
                      <div className="w-clearfix w-col w-col-6">
                        <div className="af-class-div-column-left" />
                      </div>
                      <div className="w-clearfix w-col w-col-6">
                        <div className="af-class-div-column-right" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-row">
                  <div className="w-col w-col-4">
                    <h3 className="af-class-heading-5">Watch public service announcements </h3>
                    <p className="af-class-paragraph-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
                  </div>
                  <div className="w-col w-col-4">
                    <h3 className="af-class-heading-4">Upload videos of your own</h3>
                    <p className="af-class-paragraph-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
                  </div>
                  <div className="w-col w-col-4">
                    <h3 className="af-class-heading-3">Stay in the loop </h3>
                    <p className="af-class-paragraph-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="af-class-heading-16">FEATURED VIDEO </h2>
                <div className="w-dyn-list">
                  <div className="w-dyn-items">
                    <div className="w-dyn-item">
                      <div className="w-row">
                        <div className="w-col w-col-6">
                          <div style={{paddingTop: '56.17021276595745%'}} className="w-video w-embed"><iframe className="af-class-embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F74mxXHcQTjA%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D74mxXHcQTjA&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F74mxXHcQTjA%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube" scrolling="no" title="YouTube embed" frameBorder={0} allow="autoplay; fullscreen" allowFullScreen="true" /></div>
                        </div>
                        <div className="w-col w-col-6">
                          <h2 className="af-class-heading-17">Stars of 'Contagion' movie reunite to film PSAs on COVID-19</h2>
                          <p className="af-class-paragraph-7">The stars of the film "Contagion", a fictional film about a deadly virus that leads to a pandemic across the world, &nbsp;filmed public service announcements about COVID-19. Kate Winslet, Matt Damon, Laurence Fishburne and Jennifer Ehle, each recorded messages urging people to listen to experts, wash their hands with soap and practice social distancing.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-dyn-empty">
                    <div>No items found.</div>
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

export default IndexView

/* eslint-enable */