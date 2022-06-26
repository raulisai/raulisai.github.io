import "./topbar.scss";
import { Person, MailOutline } from "@material-ui/icons";

//Data
import data from '../../dataPersonale.json' 

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar "+ ( menuOpen && "active")} >
      <div className="wrapper">
        <div className="left">
          <a href="#Intro" className="logo">
            DJOKER.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span> {data.number}</span>
          </div>
          <div className="itemContainer">
            <MailOutline className="icon" />
            <span>{data.email}</span>
          </div>
        </div>
        <div className="right">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="linea1"></span>
        <span className="linea2"></span>
        <span className="linea3"></span>
        </div>
        </div>
      </div>
    </div>
  );
}
