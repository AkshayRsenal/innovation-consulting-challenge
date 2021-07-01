import '../styles/css/LandingPage.component.style.css';
import s2_laptop_kaputt from './../static/images/s2_laptop_kaputt.jpg'
import s3_clock from './../static/images/s3_clock.jpg'
import s3_termin_dokument from './../static/images/s3_termin_dokument.jpg'
import rabbat_tag from './../static/images/rabbat_tag.jpg'
import image_handy_kaputt_minus_1000 from './../static/images/image_handy_kaputt_minus_1000.jpg'
import image_versicherung_wheelchair_10million from './../static/images/image_versicherung_wheelchair_10million.jpg'
// import {createScrollStopListener} from "./../static/js/hooks/scrollStopListener.hooks";
import React, { UIEventHandler, useLayoutEffect, useRef, useState } from "react";


function LandingPage() {
    /* const [addHiddenClassName, setAddHiddenClassName] = React.useState(false);
    let userHasScrolled;
 */
    /*  const setUserHasNotScrolled = () => {
         setAddHiddenClassName(true);
     }
   */

    const handleScroll = () => {
        const scrollDetectDiv = document.getElementById("sec-2");
        const elementScrollPosition = scrollDetectDiv?.getBoundingClientRect().top;

        const lastDiv = document.getElementById("last-div");
        const lastDivScrollPosition = lastDiv?.getBoundingClientRect().top;

        const heroImage = document.getElementById("hero-image");
        const heroImageScrollPosition = heroImage?.getBoundingClientRect().top;

        if (elementScrollPosition && elementScrollPosition < 0) {
            document.getElementById("section-middle")!.className = "section-middle calcButtonShow";
        }
        else {
            document.getElementById("section-middle")!.className = "calcButtonHidden";
        }
        if (lastDivScrollPosition && lastDivScrollPosition < -70) {
            document.getElementById("section-middle")!.className = "calcButtonHidden";
        } else {
            document.getElementById("section-middle")!.className = "section-middle calcButtonShow";
        }


        if (heroImageScrollPosition && heroImageScrollPosition > 0) {
            document.getElementById("section-middle")!.className = "calcButtonHidden";
        } 

        console.log(heroImageScrollPosition + "firstDiv:" + elementScrollPosition)
    }

    window.onscroll = function (e) {
        handleScroll();
    }

    /* window.onscroll = function (e) {
        userHasScrolled = true
        const scrollPos = window.scrollY + window.innerHeight;
        if (scrollPos > 1500) {
            setTimeout(setUserHasNotScrolled, 500);
            if (userHasScrolled) {
                setAddHiddenClassName(
                    false
                );
            } else {
                setAddHiddenClassName(
                    true
                );
            }
        } else {
            setAddHiddenClassName(
                false
            );
        }
    } */
    return (
        <div className="container-fluid" >
            <div className="img-class">
                <div className="container-fluid setWidth" >
                </div>
                <div className="overlay-text" >
                    <div className="col-md-12 col-xs-12 col-lg-12 ">
                        <span className="large-text">Die Haftplichtversicherung für Berufseinsteiger</span>
                    </div>
                    <div className="vertical-adjust">
                        <span className="medium-text">Unbeschwert das Leben genießen</span>
                    </div>
                    <div className="col-md-12 col-xs-12 col-lg-12  button-margin button-font-small" id="hero-image">
                        <button className="btn btn-success button-element" >Meinen Preis Berechnen</button>
                    </div>
                </div>
            </div>
            <div className="section-two container-fluid" >
                <div className="container-fluid row padding-adjust">
                    <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12 section-two-margin padding-adjust" >
                        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 padding-adjust">
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 padding-adjust">
                            <div>
                                <span className="text-xl text-navy">Du haftest? Wir zahlen.</span>
                            </div>
                            <div className="text-end">
                                <span className="text-xs text-navy">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-md-6 col-xs-12 section-two-margin">
                        <img src={s2_laptop_kaputt} alt="logo" title="logo_title" />
                    </div>
                </div>
            </div>
            <div className="container-fluid col-xs-12 col-sm-12 section-three section-three-margin" id="sec-2">
                <div className="text-center col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                    <span className="text-xl text-navy">Schnell. Flexibel. Sicher</span>
                </div>
                <div className="d-flex justify-content-center row">

                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 section2-col">
                        <div className="s2-col-img">
                            <img src={s3_clock} alt="uhr" title="uhr" />
                        </div>
                        <div className="s2-col-title">
                            <span>3 Min.</span>
                        </div>
                        <div className="s2-col-content">
                            <span>Schneller als eine Fünf-Minuten-Termine:</span>
                        </div>
                        <div className="s2-col-content">
                            <span>Hier schleißt Du Dinen Vertrag in nur</span>
                        </div>
                        <div className="s2-col-content">
                            <span>3 Minuten online ab.</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 section2-col" >

                        <div className="s2-col-img">
                            <img src={s3_termin_dokument} alt="termin" title="termin" />
                        </div>
                        <div className="s2-col-title">
                            <span>Jährlich kündbar</span>
                        </div>
                        <div className="s2-col-content">
                            <span>Schneller als eine Fünf-Minuten-Termine:</span>
                        </div>
                        <div className="s2-col-content">
                            <span>Hier schleißt Du Dinen Vertrag in nur</span>
                        </div>
                        <div className="s2-col-content">
                            <span>3 Minuten online ab.</span>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 section2-col">
                        <div className="s2-col-img">
                            <img src={rabbat_tag} alt="kostenlos" title="rabbat" />
                        </div>
                        <div className="s2-col-title">
                            <span>0% Selbstbeteiligung</span>
                        </div>
                        <div className="s2-col-content">
                            <span>Schneller als eine Fünf-Minuten-Termine:</span>
                        </div>
                        <div className="s2-col-content">
                            <span>Hier schleißt Du Dinen Vertrag in nur</span>
                        </div>
                        <div className="s2-col-content" id="last-div">
                            <span>3 Minuten online ab.</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container-fluid col-xs-12 col-sm-12 section-four">
                <div className="text-center col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                    <span className="text-xl text-navy">Kostet nicht die Welt. Aber schützt Deine</span>
                </div>
                <div className="d-flex justify-content-center row">
                    <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 section3-col">
                        <div className="s3-col-title">
                            <span>Woran Du vielleicht denkst</span>
                        </div>
                        <div className="s3-col-content">
                            <span>Schneller als eine Fünf-Minuten-Termine:</span>
                        </div>
                        <div className="s3-col-img">
                            <img src={image_handy_kaputt_minus_1000} alt="kleine Schäden " title="rabbat" />
                        </div>
                        <div className="s3-col-content">
                            <span>Hier schleißt Du Dinen Vertrag in nur</span>
                        </div>
                        <div className="s3-col-content">
                            <span>3 Minuten online ab.</span>
                        </div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1  section3-col"></div>
                    <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 section3-col">
                        <div className="s3-col-title">
                            <span>Woran Du vielleicht nicht denkst</span>
                        </div>
                        <div className="s3-col-content">
                            <span>Schneller als eine Fünf-Minuten-Termine:</span>
                        </div>
                        <div className="s3-col-img">
                            <img src={image_versicherung_wheelchair_10million} alt="große Schäden" title="rabbat" />
                        </div>
                        <div className="s3-col-content">
                            <span>Hier schleißt Du Dinen Vertrag in nur</span>
                        </div>
                        <div className="s3-col-content">
                            <span>3 Minuten online ab.</span>
                        </div>
                    </div>
                </div>
                <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12 section4-end container-fluid d-flex justify-content-center" >
                    <div>
                        <span className="text-xl text-navy">Unsere Kunden zahlen im Schnitt: </span>
                    </div>
                    <div>
                        <span className="text-xl text-navy">4,14 € </span>
                        <span className="text-xl text-navy">pro Monat</span>
                    </div>
                </div>
            </div>


            <div id="section-middle">
                <button className="btn btn-success my-2 my-sm-0 button-float" >Meinen Preis Berechnen</button>
            </div>

            {/* {<div className="section-middle" id="section-middle">
                {(addHiddenClassName ? (
                    <button className="btn btn-success my-2 my-sm-0 button-float" >Meinen Preis Berechnen</button>
                ) : (<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 button-margin text-center">
                </div>))}
            </div>} */}
        </div>
    )
}

export default LandingPage

