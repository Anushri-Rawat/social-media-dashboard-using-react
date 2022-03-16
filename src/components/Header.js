import "./Header.css";
import "./commonCSS/style.css";
function Header(props) {
  return (
    <div className="header">
      <div className="container d-flex header-row">
        <div className="left-heading">
          <h3>Social Media Dashboard</h3>
          <p className="medium-text">Total followers:23,004</p>
        </div>
        <div className="right-heading d-flex">
          <div className="mode">{props.mode}</div>
          <div className="toggle">
            <input
              type="checkbox"
              className="checkbox"
              id="chk"
              onClick={props.switchTheme}
            />
            <label className="label" for="chk">
              <div className="ball"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
