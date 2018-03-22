import React, {Component, PropTypes} from 'react'

class Footer extends Component {
  constructor(props) { // gives us acces to props, fires long before page load
    super(props) // assigns props to this.props

    this.affiliate = props.affiliate;
    this.twitterUrl = this.affiliate == 'kotv' ? 'https://twitter.com/NewsOn6' : 'https://twitter.com/News9';
    this.facebookUrl = this.affiliate == 'kotv' ? 'https://www.facebook.com/NewsOn6/' : 'https://www.facebook.com/News9';
    this.instagramUrl = this.affiliate == 'kotv' ? 'https://www.instagram.com/newson6kotv/' : 'https://www.instagram.com/news9/';
    this.youtubeUrl = this.affiliate == 'kotv' ? 'https://www.youtube.com/user/TheNewsOn6' : 'https://www.youtube.com/user/NEWS9OklahomaCity';
    this.careersUrl = this.affiliate == 'kotv' ? 'http://www.newson6.com/category/120924/employment-opportunities' : 'http://www.news9.com/category/119561/employment-opportunities';
    this.contactUrl = this.affiliate == "kotv" ? 'http://www.newson6.com/category/156589/about-us' : 'http://www.news9.com/category/156309/about-us';
    this.privacyUrl = this.affiliate ==  'kotv' ? 'http://www.newson6.com/global/story.asp?s=18990' : 'http://www.news9.com/global/story.asp?s=18990';
    this.termsUrl = this.affiliate == 'kotv' ? 'http://www.newson6.com/global/story.asp?s=18991' : 'http://www.news9.com/global/story.asp?s=18991'
    this.legalUrl = this.affiliate == 'kotv' ? 'http://www.newson6.com/category/157850/legal-notices-catch-page' : 'http://www.news9.com/category/157852/legal-notices-catch-page'
    this.publicInspection = this.affiliate == 'kotv' ? 'http://www.newson6.com/story/19178550/public-information-file' : 'http://www.news9.com/story/19178550/public-information-file';
    this.stationProfileUrl = this.affiliate == 'kotv' ? 'https://publicfiles.fcc.gov/tv-profile/kotv-dt' : 'https://publicfiles.fcc.gov/tv-profile/kwtv-dt'
    this.ccUrl = this.affiliate =='kotv' ? 'http://www.newson6.com/story/12162676/closed-captioning-assistance' : 'http://www.news9.com/story/12162643/closed-captioning-assistance'

    if (this.affiliate === 'kwtv') {
      this.state = {
        name: 'News 9',
        address: '7401 N Kelley Ave',
        city: 'Oklahoma City',
        state: 'OK',
        zip: '73111',
        phone: '405-843-6641',
        shortUrl: 'News9.com'
      }
    } else {
      this.state = {
        name: 'News On 6',
        address: '303 N Boston Ave',
        city: 'Tulsa',
        state: 'OK',
        zip: '74103',
        phone: '918-732-6000',
        shortUrl: 'Newson6.com'
      }
    }
  }


  render() { // REQUIRED
    return (
      <div className='gnm-footer'>
        <div className='container'>
          <div className='row'>

            <div className='col-sm-4 col-md-3 major-column'>
              <div className='row social-icon-row'>
                <div className='col-xs-2'  />
                <div className='col-xs-2'>
                  <a href={this.facebookUrl} className='social-icons centered'>
                    <i className='fa fa-facebook'  />
                  </a>
                </div>
                <div className='col-xs-2'>
                  <a href={this.twitterUrl} className='social-icons centered'>
                    <i className='fa fa-twitter'  />
                  </a>
                </div>
                <div className='col-xs-2'>
                  <a href={this.instagramUrl} className='social-icons centered'>
                    <i className='fa fa-instagram'  />

                  </a>
                </div>
                <div className='col-xs-2'>
                  <a href={this.youtubeUrl} className='social-icons centered'>
                    <i className='fa fa-youtube'  />
                  </a>
                </div>
                <div className='col-xs-2' />
              </div>
              <div className='row'>
                <div className='col-xs-12 descriptive-text centered'> 
                  <span className=''>Keep up-to-date with everything that happens in your world.</span>
                </div>
                <div className='col-xs-12'>
                  <div className='input-group'>
                    <input type='text' className='form-control' placeholder='Your Email Address' aria-label='Enter your email here to sign up for notifications' />
                    <span className='input-group-addon sign-up-button'>Sign-Up</span>
                  </div>
                </div>
                <div className='col-xs-12 centered'>
                  <span>
                    <span>We promise to never spam you. You can opt-out at any time. Please refer to our </span>
                    <a href='#privacy'>Privacy Policy</a>
                    <span> for additional information. </span>
                  </span>
                </div>
              </div>
              <div className='row social-icon-row no-gutter'>
                <div className='col-xs-3 col-sm-6'>
                  <a href={this.contactUrl} className='primary-link centered'>Products</a>
                </div>
                <div className='col-xs-3 col-sm-6'>
                  <a href={this.contactUrl} className='primary-link centered '>Feedback</a>
                </div>
                <div className='col-xs-3 col-sm-6'>
                  <a href={this.careersUrl} className='primary-link centered'>Careers</a>
                </div>
                <div className='col-xs-3 col-sm-6'>
                  <a href={this.contactUrl} className='primary-link centered'>News Tips</a>
                </div>
              </div>
            </div>
            <div className='col-xs-6 col-sm-4 col-md-3 major-column '>
              <div className='map'>
                { this.affiliate == 'kotv'
                ? <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.256642674199!2d-95.99453195285862!3d36.16030894197156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b6eb7fa4d01791%3A0xd95893ab6017140b!2sNews+On+6+KOTV!5e0!3m2!1sen!2sus!4v1469629675590' width='100%' height='200' frameBorder='0' title='Map to KOTV' allowFullScreen />
              : <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17363.373236496882!2d-97.50650997038893!3d35.549956597460486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b219a7b25d6b21%3A0x3e511f5d60c457ea!2sGRIFFIN+Communications+Llc!5e0!3m2!1sen!2sus!4v1518193599087" width="100%" height="200" frameBorder="0" style={{border: 'none'}} allowFullScreen></iframe>

              }
              </div>
            </div>
            <div className='col-xs-6 col-sm-4 col-md-3 major-column '>
              <div className='row text-center'>
                <div className='col-xs-12 col-sm-12  '>
                  <a href={this.contactUrl} className='primary-link '>{this.state.name}</a>
                  <div className='emphasis-text'>{this.state.address}</div>
                  <div className='emphasis-text'>{this.state.city}, {this.state.state} {this.state.zip}</div>
                  <div className='emphasis-text'>{this.state.phone}</div>
                  <br />
                </div>
                <div className='col-xs-12 col-sm-12'>
                  <div >Our Lobby Hours</div>
                  <div className='row small-emphasis-text '>
                    <div className='col-xs-6 hidden-xs'>Monday-Friday</div>
                    <div className='col-xs-6 visible-xs-block'>Mon-Fri</div>
                    <div className='col-xs-6'>8:30-5:30</div>
                  </div>
                  <div className='row small-emphasis-text '>
                    <div className='col-xs-6 hidden-xs'>Saturday-Sunday</div>
                    <div className='col-xs-6 visible-xs-block'>Sat-Sun</div>
                    <div className='col-xs-6 '>CLOSED</div>
                  </div>
                  <div className='row small-emphasis-text '>
                    <div className='col-xs-6'>Holidays</div>
                    <div className='col-xs-6'>Call First
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xs-12 col-sm-12  col-md-3 major-column griffin-details '>
              <i className='fa fa-copyright' aria-hidden='true' />{(new Date()).getFullYear()}&nbsp;
              <a href='http://griffincommunications.net/'>Griffin Communications.</a>
              <span>{this.state.shortUrl} is proud to provide Oklahomans with timely and relevant news and information, sharing the stories, pictures and loves of Oklahomans across our great state. </span>
                <a href={this.privacyUrl}>Privacy Policy</a>,&nbsp;
                <a href={this.termsUrl}>Terms of Service</a>,&nbsp;
                <a href={this.legalUrl}>Legal Notices</a>,&nbsp;
                <a href='http://optout.aboutads.info/#!/' target="_blank">Ad Choices</a>,&nbsp;
                <a href={this.publicInspection}>Public Inspection Files</a>,&nbsp;
                <a href={this.stationProfileUrl}>Station Profile</a>,&nbsp;
                <a href={this.ccUrl}>Closed Captioning Assistance</a>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
