import React, {Component, PropTypes} from 'react';
import ZipController from './ZipController';


class ZipInput extends Component {
  constructor(props) { //gives us acces to props, fires long before page load
    super(props) //assigns props to this.props
    this.state = {
      show: false,
      validationClass: '',
      validZip: ''
    }
  }


  toggle = (e) =>{
    this.setState({show: !this.state.show})
    e.stopPropagation();
    return true
  }

  validate = (e)=>{
    let valid = /^[0-9]{5}(?:-[0-9]{4})?$/.exec(e.target.value)
    if(valid){
       this.setState({validationClass:'has-success',
                      validZip: valid[0]})
    }
    else
      this.setState({validationClass:'has-error',validZip:''})
  }

  submit = (e)=>{
    if(e)
      e.stopPropagation()

    if(this.state.validZip){
      ZipController.set(this.state.validZip)
      this.setState({show:false})
      ZipController.refresh()
    }
  }

  handleKeyPress = (e) =>{
    if(e.charCode === 13 && this.state.validZip)
      this.submit()
  }

  render() {
    return (
      <span onClick={this.toggle}>
        {this.props.children}
        {this.state.show ? (
          <div className='gnm-zip-input'  >
            <div>
              <h4>Your Zip Code</h4>
              <div className={"input-group " + this.state.validationClass}>

               <input type="text" className="form-control"
                  defaultValue={ZipController.get()} autoFocus
                  onClick={(e)=>{e.stopPropagation()}}
                  onChange={this.validate}
                  onKeyPress={this.handleKeyPress} />
               <span className="input-group-btn">
                 <button className="btn btn-default" type="button" onClick={this.submit}>Update</button>
               </span>
             </div>
            </div>

          </div>
        ): null}

      </span>

    )
  }
}

export default ZipInput;
