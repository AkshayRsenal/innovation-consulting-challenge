import '../styles/css/LandingPage.component.style.css';
import hero_img from '../static/images/hero_pizza.jpg'
// import React from 'react';
// import Zoom from 'react-reveal/Zoom';
import React, { useLayoutEffect, useRef, useState } from "react";
import { render } from '@testing-library/react';

function LandingPage() {
    const [addHiddenClassName, setAddHiddenClassName] = React.useState(false);

    let hiddenClassName;
    let nextScrollUP = 1400
    let nextScrollDown = 1400;
    let onScroll = () => {
        const scrollPos = window.scrollY + window.innerHeight;
        console.log(scrollPos)
        if (scrollPos > 1500) {
            if (scrollPos != nextScrollDown && scrollPos > 1500) {
                hiddenClassName = "hidden-element";
                console.log('finding')
                setAddHiddenClassName(
                    true
                );
            } else {
                hiddenClassName = "";
                console.log('lesses reaches')
                setAddHiddenClassName(
                    false
                );
            }

            nextScrollUP = window.scrollY + window.innerHeight - 3;
            nextScrollDown = window.scrollY + window.innerHeight + 3;

        } else {
            hiddenClassName = "";
            console.log('notttttt reaches')
            setAddHiddenClassName(
                false
            );
        }

    }

    window.addEventListener("scroll", onScroll);

    return (

        <div className="container-fluid">

            <div className="img-class">
                <div className="container-fluid setWidth" >

                </div>
                <div className="overlay-text" >
                    <div className="col-md-12">
                        <span className="large-text">Die Haftplichtversicherung für Berufseinsteiger</span>
                    </div>
                    <div className="vertical-adjust">
                        <span className="medium-text">Unbeschwert das Leben genießen</span>
                    </div>
                    <div className="col-md-12 button-margin">
                        <button className="btn btn-success my-2 my-sm-0 " >Meinen Preis Berechnen</button>
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>

            <div className="section-two clearfix">
                <div className="container-fluid row">
                    <div className="col-lg-8 col-md-6 col-xs-12 section-two-margin" >
                        <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2">
                        </div>
                        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                            <div>

                                <span className="text-xl text-navy">Du haftest? Wir zahlen.</span>
                            </div>
                            <div className="text-end">
                                <span className="text-xs text-navy">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-6 col-xs-12 d-flex section-two-margin">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
                </div>
            </div>
            <div className="container-fluid section-three section-three-margin">
                <div className="text-center col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                    <span className="text-xl text-navy">Schnell. Flexibel. Sicher</span>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-xs-12">
                        <a className="navbar-brand" href="#">
                            <img src="https://via.placeholder.com/200x200" alt="logo" title="logo_title" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-12">
                        <a className="navbar-brand" href="#">
                            <img src="https://via.placeholder.com/200x200" alt="logo" title="logo_title" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-12">
                        <a className="navbar-brand" href="#">
                            <img src="https://via.placeholder.com/200x200" alt="logo" title="logo_title" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="container-fluid section-four">
                <div className="text-center" >
                    <span className="text-xl text-navy">Kostet nicht die Welt. Aber schützt Deine</span>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <a className="navbar-brand" href="#">
                            <img src="https://via.placeholder.com/200x200" alt="logo" title="logo_title" />
                        </a>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <a className="navbar-brand" href="#">
                            <img src="https://via.placeholder.com/200x200" alt="logo" title="logo_title" />
                        </a>
                    </div>

                </div>

            </div>
            <div>
                {(addHiddenClassName ? (<div className={"col-lg-12 col-md-12 button-margin text-center d-flex justify-content-center" + " " + hiddenClassName + addHiddenClassName}>
                    <button className="btn btn-success my-2 my-sm-0 button-float" >Meinen Preis Berechnen</button>
                </div>) : (<div className={"col-lg-12 col-md-12 button-margin text-center d-flex justify-content-center" + " " + hiddenClassName + addHiddenClassName}>

                </div>))}

            </div>

        </div>
    )
}

export default LandingPage

