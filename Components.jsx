import React from "react";

var Team = ({ name, onClick }) => <div onClick={onClick}>{name}</div>;

var TeamStandings = React.createClass({
  getInitialState: function() {
    return {
      teams: [
        "Finland",
        "Sweden",
        "USA",
        "Canada",
        "Czech Republic",
        "Slovakia",
        "Germany",
        "Italy",
        "Norway"
      ],
      selectedTeam: null,
      selectionHistory: null
    };
  },

  setSelectedTeam: function(selectedTeam) {
    this.setState(state => ({
      selectedTeam: selectedTeam,
      selectionHistory: Object.assign(
        {},
        state.selectionHistory,
        selectedTeam.id
      )
    }));
  },

  renderTeams: function() {
    var teams = this.state.teams.map(team => (
      <Team
        value={team}
        onClick={function(e) {
          this.setSelectedTeam(e.target.value);
        }.bind(this)}
      />
    ));

    return teams;
  },

  renderBestTeamMessage: function() {
    var message = "No teams :(";
    if (this.state.teams.length) {
      var bestTeam = "Finland";
      message = "The best team is " + bestTeam;
    }
    return message;
  },

  render: function() {
    return (
      <div>
        {this.renderTeams()}
        {this.renderBestTeamMessage()}
      </div>
    );
  }
});

export default TeamStandings;
