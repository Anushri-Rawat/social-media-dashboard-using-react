import "./commonCSS/style.css";
import "./Card.css";
function Card(props) {
  return (
    <div className={`card ${props.iconName}`}>
      <div className="sns-name medium-text">
        <img src={props.iconUrl} alt="" />
        <p>{props.userName}</p>
      </div>
      <p className="year large-text">{props.stat}</p>
      <p className="medium-text capitalize">{props.statType}</p>
      <div className={`current-state small-text icon-${props.voteIcon}`}>
        <img src={`images/icon-${props.voteIcon}.svg`} alt="" />
        <p>{props.votesCount} Today</p>
      </div>
    </div>
  );
}
export default Card;
