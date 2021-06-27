
import logo_jpg from './../../static/images/BGVA_logo.jpg'

import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import '../../styles/css/NavTopBar.component.style.css';

function NavTopBar() {

    return (
        <div className="container-fluid">

            <header id="masthead" className="" role="banner">
                <section className="page-wrap text-white tm-font-big">
                    <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
                        <div>
                            <a className="navbar-brand" href="#">
                                <img src={logo_jpg} alt="logo" title="logo_title" />
                            </a>
                        </div>
                        <div className="collapse navbar-collapse"></div>

                        <div className="navbar-toggler paddingadjust">
                            <div className="d-flex justify-content-start small"><p className="setcolorblue">Kostenlose Beratung</p> </div>
                            <div className="d-flex justify-content-center align-text-top">
                                <a className="text-success" href="tel:07216601850">0721 660-1850</a>
                            </div>
                        </div>

                        <div>
                            <div className="collapse navbar-collapse">
                                <IconButton>
                                    <CallOutlinedIcon color="primary" />
                                </IconButton>
                                <a className="text-success align-text-bottom pright" href="tel:07216601850">0721 660-1850</a>
                                <button className="btn btn-success my-2 my-sm-0" >Meinen Preis Berechnen</button>
                            </div>
                        </div>
                    </nav>
                </section>
            </header>
        </div>
    );

}
export default NavTopBar;