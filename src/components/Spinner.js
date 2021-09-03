import React, { Component } from 'react'
import loader from './ajax-loader.gif'
export default class Spinner extends Component {
    render() {
        const myStyle = {
            position:'relative',
            top:'45%',
            
        }
        return (
            <div className="text-center">

                <img style={{myStyle}} src={loader} alt="" />
            </div>
        )
    }
}

