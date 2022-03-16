import "./commonCSS/style.css";
import "./OverViewSection.css";
import OverViewCard from "./OverViewCard";
const overviewData = [
  {
    statType: "Page Views",
    iconUrl: "images/icon-facebook.svg",
    stat: "87",
    voteIcon: "up",
    percentage: "3",
  },
  {
    statType: "Likes",
    iconUrl: "images/icon-facebook.svg",
    stat: "52",
    voteIcon: "down",
    percentage: "2",
  },
  {
    statType: "Likes",
    iconUrl: "images/icon-instagram.svg",
    stat: "5462",
    voteIcon: "up",
    percentage: "2257",
  },
  {
    statType: "Profile Views",
    iconUrl: "images/icon-instagram.svg",
    stat: "52k",
    voteIcon: "up",
    percentage: "1375",
  },
  {
    statType: "Retweets",
    iconUrl: "images/icon-twitter.svg",
    stat: "117",
    voteIcon: "up",
    percentage: "303",
  },
  {
    statType: "Likes",
    iconUrl: "images/icon-twitter.svg",
    stat: "507",
    voteIcon: "up",
    percentage: "553",
  },
  {
    statType: "Likes",
    iconUrl: "images/icon-youtube.svg",
    stat: "107",
    voteIcon: "down",
    percentage: "19",
  },
  {
    statType: "Total Views",
    iconUrl: "images/icon-youtube.svg",
    stat: "1407",
    voteIcon: "down",
    percentage: "12",
  },
];

function OverViewSection() {
  return (
    <div className="lower-cards container">
      {overviewData.map((elem) => {
        return (
          <OverViewCard
            statType={elem.statType}
            stat={elem.stat}
            iconUrl={elem.iconUrl}
            voteIcon={elem.voteIcon}
            percentage={elem.percentage}
          ></OverViewCard>
        );
      })}
    </div>
  );
}
export default OverViewSection;
