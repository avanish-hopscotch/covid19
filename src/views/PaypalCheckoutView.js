/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5e7b277866961175c2624628").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class PaypalCheckoutView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PaypalCheckoutController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PaypalCheckoutView

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
    const proxies = Controller !== PaypalCheckoutView ? transformProxies(this.props.children) : {

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
                <div className="af-class-about-hero-block-2">
                  <h1 className="af-class-page-title">Checkout PayPal</h1>
                  <p className="af-class-detail-paragraph af-class-subpage">Complete your order</p>
                </div>
              </div>
            </div>
            <div className="af-class-section af-class-checkout">
              <div data-node-type="commerce-paypal-checkout-form-container" data-wf-checkout-query data-wf-page-link-href-prefix className="w-commerce-commercepaypalcheckoutformcontainer af-class-checkout af-class-checkout-form-container">
                <div className="w-commerce-commercelayoutcontainer af-class-container-checkout w-container">
                  <div className="w-commerce-commercelayoutmain af-class-left-div-wrapper">
                    <form data-node-type="commerce-checkout-shipping-methods-wrapper" className="w-commerce-commercecheckoutshippingmethodswrapper">
                      <div className="w-commerce-commercecheckoutblockheader af-class-block-header">
                        <h4>Shipping Method</h4>
                      </div>
                      <fieldset>
                        <div data-node-type="commerce-checkout-shipping-methods-list" className="w-commerce-commercecheckoutshippingmethodslist" data-wf-collection="database.commerceOrder.availableShippingMethods" data-wf-template-id="wf-template-5df7caa68ae2ed53a8f30073000000000012"><label className="w-commerce-commercecheckoutshippingmethoditem"><input type="radio" required name="shipping-method-choice" /><div className="w-commerce-commercecheckoutshippingmethoddescriptionblock"><div className="w-commerce-commerceboldtextblock af-class-shipping-tittle" /><div className="af-class-quantity" /></div><div /></label></div>
                        <div data-node-type="commerce-checkout-shipping-methods-empty-state" style={{display: 'none'}} className="w-commerce-commercecheckoutshippingmethodsemptystate">
                          <div>No shipping methods are available for the address given.</div>
                        </div>
                      </fieldset>
                    </form>
                    <div className="w-commerce-commercecheckoutcustomerinfosummarywrapper">
                      <div className="w-commerce-commercecheckoutsummaryblockheader af-class-block-header">
                        <h4>Customer Information</h4>
                      </div>
                      <fieldset className="w-commerce-commercecheckoutblockcontent">
                        <div className="w-commerce-commercecheckoutrow">
                          <div className="w-commerce-commercecheckoutcolumn">
                            <div className="w-commerce-commercecheckoutsummaryitem"><label className="w-commerce-commercecheckoutsummarylabel af-class-field-label">Email</label>
                              <div className="af-class-text-block" />
                            </div>
                          </div>
                          <div className="w-commerce-commercecheckoutcolumn">
                            <div className="w-commerce-commercecheckoutsummaryitem"><label className="w-commerce-commercecheckoutsummarylabel af-class-field-label">Shipping Address</label>
                              <div className="af-class-text-block" />
                              <div className="af-class-text-block" />
                              <div className="af-class-text-block" />
                              <div className="w-commerce-commercecheckoutsummaryflexboxdiv af-class-text-block">
                                <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                                <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                                <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                              </div>
                              <div className="af-class-text-block" />
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                    <div className="w-commerce-commercecheckoutpaymentsummarywrapper">
                      <div className="w-commerce-commercecheckoutsummaryblockheader af-class-block-header">
                        <h4>Payment Info</h4>
                      </div>
                      <fieldset className="w-commerce-commercecheckoutblockcontent">
                        <div className="w-commerce-commercecheckoutrow">
                          <div className="w-commerce-commercecheckoutcolumn">
                            <div className="w-commerce-commercecheckoutsummaryitem"><label className="w-commerce-commercecheckoutsummarylabel af-class-field-label">Payment Info</label>
                              <div className="w-commerce-commercecheckoutsummaryflexboxdiv af-class-text-block">
                                <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                              </div>
                            </div>
                          </div>
                          <div className="w-commerce-commercecheckoutcolumn">
                            <div className="w-commerce-commercecheckoutsummaryitem"><label className="w-commerce-commercecheckoutsummarylabel af-class-field-label">Billing Address</label>
                              <div className="af-class-text-block" />
                              <div className="af-class-text-block" />
                              <div className="af-class-text-block" />
                              <div className="w-commerce-commercecheckoutsummaryflexboxdiv af-class-text-block">
                                <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                                <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                                <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                              </div>
                              <div className="af-class-text-block" />
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                  <div className="w-commerce-commercelayoutsidebar af-class-div-block af-class-right">
                    <div className="w-commerce-commercecheckoutorderitemswrapper">
                      <div className="w-commerce-commercecheckoutsummaryblockheader af-class-block-header">
                        <h4>Items in Order</h4>
                      </div>
                      <fieldset className="w-commerce-commercecheckoutblockcontent">
                        <div className="w-commerce-commercecheckoutorderitemslist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-2a93bd26-02f0-9e7b-dad4-178d1245e46d" />
                      </fieldset>
                    </div>
                    <div className="w-commerce-commercecheckoutordersummarywrapper">
                      <div className="w-commerce-commercecheckoutsummaryblockheader af-class-block-header">
                        <h4>Order Summary</h4>
                      </div>
                      <fieldset className="w-commerce-commercecheckoutblockcontent">
                        <div className="w-commerce-commercecheckoutsummarylineitem af-class-line-item">
                          <div>Subtotal</div>
                          <div />
                        </div>
                        <div className="w-commerce-commercecheckoutordersummaryextraitemslist" data-wf-collection="database.commerceOrder.extraItems" data-wf-template-id="wf-template-5df7caa68ae2ed53a8f3007300000000006a">
                          <div className="w-commerce-commercecheckoutordersummaryextraitemslistitem af-class-line-item">
                            <div />
                            <div />
                          </div>
                        </div>
                        <div className="w-commerce-commercecheckoutsummarylineitem af-class-total">
                          <div>Total</div>
                          <div className="w-commerce-commercecheckoutsummarytotal" />
                        </div>
                      </fieldset>
                    </div><a href="#" value="Place Order" data-node-type="commerce-checkout-place-order-button" className="w-commerce-commercecheckoutplaceorderbutton af-class-button af-class-dark" data-loading-text="Placing Order...">Place Order</a>
                    <div data-node-type="commerce-checkout-error-state" style={{display: 'none'}} className="w-commerce-commercepaypalcheckouterrorstate">
                      <div className="w-checkout-error-msg" data-w-info-error="There was an error processing your customer info.  Please try again, or contact us if you continue to have problems." data-w-shipping-error="Sorry. We can’t ship your order to the address provided." data-w-billing-error="Your payment could not be completed with the payment information provided.  Please make sure that your card and billing address information is correct, or try a different payment card, to complete this order.  Contact us if you continue to have problems." data-w-payment-error="There was an error processing your payment.  Please try again, or contact us if you continue to have problems." data-w-pricing-error="The prices of one or more items in your cart have changed. Please refresh this page and try again." data-w-extras-error="Taxes or shipping methods have changed. Please refresh this page and try again." data-w-product-error="One or more of the products in your cart have been removed. Please refresh the page and try again." data-w-invalid-discount-error="This discount is invalid.">There was an error processing your customer info. Please try again, or contact us if you continue to have problems.</div>
                    </div>
                  </div>
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
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default PaypalCheckoutView

/* eslint-enable */