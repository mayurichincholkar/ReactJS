import React, { Component } from 'react'
 
class StudentList extends Component{
  render(){
    const {name, classNo, roll, addr} = this.props
    const ulStyle = {border: '10px solid purple', width:'auto', listStyleType:'none',padding:'10px'}
    const liStyle = {color : 'blue', fontSize:'20px'}
    return(
      <ul style={ulStyle}>
        <li style={liStyle}>Name : {name}</li>
        <li style={liStyle}>Class: {classNo}</li>
        <li style={liStyle}>Roll: {roll}</li>
        <li style={liStyle}>Address : {addr}</li>
      </ul>
    )
  }
}
 
export default StudentList