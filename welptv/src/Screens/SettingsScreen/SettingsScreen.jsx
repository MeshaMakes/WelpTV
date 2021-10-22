import React from "react";
import "./SettingsScreen.css"
import InfoCard from "../../Components/InfoCard/InfoCard";
import Navbar from "../../Components/NavBar/NavBar";
import ScrapeContext from "../../Services/ScrapeContext";

const SettingsScreen = () => {
  return (
    <ScrapeContext.Consumer>
      {(state) => {
        return (
          <div className="settings">
            <div className="settingsNavContainer">
              <Navbar />
            </div>

            <div className="settingsMain">
              <InfoCard
                title="About"
                desc="This is WelpTV!"
                btnText=""
                margin="0rem 0rem 2rem 0rem"
                onClick={() => {}}
              />

              <InfoCard
                title="History"
                desc={"This option will remove your most recently watched anime series. This is permanent by the way.\n\nThis option was highly requested.. for some reason.."}
                btnText="Clear History"
                margin="0rem 0rem 1rem 0rem"
                onClick={() => {}}
              />
            </div>
          </div>
        );
      }}
    </ScrapeContext.Consumer>
  );
};

export default SettingsScreen;
