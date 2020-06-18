import React, { Component } from 'react'
import Aos from 'aos';
import './index.css';
import HeaderComp from './HeaderComp';
import FooterComp from './FooterComp';
import { Sugar } from 'react-preloaders';

export default class index extends Component {

    componentDidMount() {
        Aos.init({
            once: true,
            easing: 'slide',
        });
    }

    render() {
        return (
            <div>
                <Sugar background="#1e2125" color="#0f4c75" time={1000} />
                <HeaderComp />
                <FooterComp />
            </div>
        )
    }
}
