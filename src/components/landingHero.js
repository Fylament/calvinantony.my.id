import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"



class landingHero extends React.Component{
    render(){
        return(
            <div className="w-full h-96">
                <div className="font-oswald text-xxl text-white">
                    Hello!
                </div>
            </div>
        );
    }
}

export default landingHero