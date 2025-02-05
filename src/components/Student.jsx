import {Component} from 'react';

class Student extends Component 
{
    btnStyle = {marginLeft:'5px', width:'100px'};
    gradeStyle={paddingLeft:'10px', marginLeft:'5px'}
    removeSpan = {color:'red', fontWeight:'bold', paddingLeft:'5px', marginLeft:'10px',textDecoration:'underline'}
    

    render(){
        return(
            <div>
              <span>{this.props.id}</span>
              <button style={this.btnStyle}>{this.props.name}</button>
              <span style={this.gradeStyle}>Grade : <span>{this.props.grade}</span></span>                                   
              <span style={this.removeSpan} onClick={()=>{this.props.handleRemoveBtn()}}>X</span>
            </div>
        )
    }
}

export default Student;