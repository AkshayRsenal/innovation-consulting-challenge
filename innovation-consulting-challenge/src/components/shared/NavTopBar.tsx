
import IconButton from '@material-ui/core/IconButton';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import '../../styles/css/NavTopBar.component.style.css';



function NavTopBar() {

    return (
        <div className="container-fluid">
            <header id="masthead" className="" role="banner">
                <section className="page-wrap text-white tm-font-big">
                    <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
                        <div>
                            <a className="navbar-brand" href="#">
                                <img src="https://via.placeholder.com/121x55" alt="sports_logo" title="sports_logo_title"></img>
                            </a>
                        </div>
                        <div className="collapse navbar-collapse"></div>

                        <div className="navbar-toggler paddingadjust">
                            <div className="d-flex justify-content-start small"><p className="setcolorblue">Kostenlose Beratung</p> </div>
                            <div className="d-flex justify-content-center align-text-top">
                                <a className="text-success" href="tel:017635663304">0176 3566 3304</a>
                            </div>
                        </div>

                        <div>
                            <div className="collapse navbar-collapse">
                                <IconButton>
                                    <CallOutlinedIcon color="primary" />
                                </IconButton>
                                <a className="text-success align-text-bottom pright" href="tel:017635663304">0176 3566-3304</a>
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