import * as React from "react"
import styled from 'styled-components'
import {navigate} from 'gatsby'
import "./slider.css"

const Styles = styled.div`
    position: fixed;
    top: 35%;
    left: 95%;
    font-family: oswald !important;
    font-size: 80%;
    display: block;
    color: #ffc300;
`;

class Slider extends React.Component{
    state = {
        value:5,
    }

    handleOnChange = (e) => {
        this.setState({value: e.target.value});
        if(e.target.value == 5){
            navigate("/#home");
            
        }
        if(e.target.value == 4){
            navigate("/#blogs");
        }
        if(e.target.value == 3){
            navigate("/#projects");
        }
    } 
        

    render(){
        return(
            <Styles>
                <div style={{textAlign: "right", position: "absolute",right:"5vh", top: "42%", width:"400%"}} className="slider-label">{this.state.value == 5? "Home": this.state.value == 4? "Blog & Posts" : "Projects"}</div>
                <input orient="vertical" type="range" min={1} max={5} value={this.state.value} className="slider" onChange={this.handleOnChange} />
            </Styles>
        )
    }
}

export default Slider