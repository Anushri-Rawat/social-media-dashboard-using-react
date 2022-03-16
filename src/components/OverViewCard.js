import "./commonCSS/style.css";
import "./OverViewCard.css";
function OverViewCard(props) {
  return (
    <div class="card">
      <div class="row">
        <p class="medium-text">{props.statType}</p>
        <img src={props.iconUrl} alt="" />
      </div>
      <div class="row-two">
        <p class="overview-large-text">{props.stat}</p>
        <div class={`current-state small-text icon-${props.voteIcon}`}>
          <img src={`images/icon-${props.voteIcon}.svg`} alt="" />
          <p class="percent">{props.percentage}</p>
        </div>
      </div>
    </div>
  );
}
export default OverViewCard;
