import React from "react";
import Card from "./Card";
import "./DashBoardSection.css";
import "./commonCSS/style.css";
const data = [
  {
    iconUrl: "images/icon-facebook.svg",
    userName: "@nathanf",
    stat: "1987",
    statType: "FOLLOWERS",
    voteIcon: "up",
    votesCount: 12,
    icon: "facebook",
  },
  {
    iconUrl: "images/icon-twitter.svg",
    userName: "@nathanf",
    stat: "1044",
    statType: "FOLLOWERS",
    voteIcon: "up",
    votesCount: 99,
    icon: "twitter",
  },
  {
    iconUrl: "images/icon-instagram.svg",
    userName: "@realnathanf",
    stat: "11k",
    statType: "FOLLOWERS",
    voteIcon: "up",
    votesCount: 1099,
    icon: "instagram",
  },
  {
    iconUrl: "images/icon-youtube.svg",
    userName: "Nathan F.",
    stat: "8239",
    statType: "SUBSCRIBERS",
    voteIcon: "down",
    votesCount: 144,
    icon: "youtube",
  },
];

function DashBoardSection() {
  return (
    <div className="container upper-cards">
      {data.map((elem) => {
        return (
          <Card
            iconUrl={elem.iconUrl}
            userName={elem.userName}
            stat={elem.stat}
            statType={elem.statType}
            voteIcon={elem.voteIcon}
            votesCount={elem.votesCount}
            iconName={elem.icon}
          ></Card>
        );
      })}
    </div>
  );
}
export default DashBoardSection;
