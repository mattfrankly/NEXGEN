import React, { Component} from 'react';

export default class StyleGuidePage extends Component{
  constructor(props){
    super(props)
    this.affiliate = this.props.affiliate
  }


  render() {
    return (
      <div className='gnm-style-guide-page'>
        <div className="size">
          <span className="visible-xs-block">XS</span>
          <span className="visible-sm-block">SM</span>
          <span className="visible-md-block">MD</span>
          <span className="visible-lg-block">LG</span>
        </div>
    		<div className="row">
    			<div className="col-xs-12">

    				<h1>Wizard World&rsquo;s Comic Con Returns To Tulsa This Year</h1>

    				<p>TULSA, Oklahoma - Tulsa is the center of the universe for thousands of gamers and comic book fans this weekend. They&rsquo;re coming to meet their heroes at Wizard World&rsquo;s Comic Con.</p>

    				<p>&ldquo;I can&rsquo;t disguise it, I can&rsquo;t hide myself, even the way I walk,&rdquo; said Lou Ferrigno. &ldquo;People can see me a mile away and say, &lsquo;That&rsquo;s the incredible hulk.&rsquo;&rdquo;</p>

    				<p>Ferrigno says he&rsquo;s excited to meet Tulsa&rsquo;s Hulk enthusiasts.</p>

    				<p>&ldquo;They support what I do and they want to know about the character, about the makeup, they ask questions,&rdquo; he said.</p>

    				<p>Gamers and superhero fanatics live for this event, in its third year. Victor Dandridge creates comic books and shows them off at the convention.</p>

    				<p>Dandridge said, &ldquo;I could be the guy who produces stuff and sends it through diamond distributors and gets into comic stores all over the place but then, I don&rsquo;t have that interaction. I don&rsquo;t have that feedback with my fan base.&rdquo;</p>

    				<p>Organizers say it&rsquo;s not just about video games and comic books. Comic Con is really a celebration of pop culture.</p>

    				<p>&ldquo;It&rsquo;s an opportunity obviously for fans to meet them but a big thing for these celebrities is that they&rsquo;re getting to meet the fans, they&rsquo;re getting to get feedback from them, &lsquo;oh, I loved you in this role&rsquo;, &lsquo;Oh, I thought this was your best role,&rsquo;&rdquo; Jerry Milani, Wizard World.</p>

    				<p>Ferrigno has been to several conventions and loves how family friendly they are.</p>

    				<p>&ldquo;It&rsquo;s nothing to do with sex, drugs or violence. It&rsquo;s positive. It&rsquo;s great, you have a chance for family to spend time with their kids and just have a good time.&rdquo;</p>

    				<hr />

    				<h1>H1 Wizard World&rsquo;s Comic Con Returns To Tulsa This Year</h1>
    				<h2>H2 Wizard World&rsquo;s Comic Con Returns To Tulsa This Year</h2>
    				<h3>H3 Wizard World&rsquo;s Comic Con Returns To Tulsa This Year</h3>
    				<h4>H4 Wizard World&rsquo;s Comic Con Returns To Tulsa This Year</h4>
    				<h5>H5 Wizard World&rsquo;s Comic Con Returns To Tulsa This Year</h5>
    				<h6>H6 Wizard World&rsquo;s Comic Con Returns To Tulsa This Year</h6>
    			</div>
    		</div>

      </div>
    );
  }

}
