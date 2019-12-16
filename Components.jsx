import React from "react";

class Team extends Component {
  render() {
    return <div onClick={onClick}>{name}</div>;
  }
}

class TeamStandings extends React.Component {
  state = {
    teams: [
      "Finland",
      "Sweden",
      "USA",
      "Canada",
      "Czech Republic",
      "Slovakia",
      "Germany",
      "Italy",
      "Norway",
    ],
    selectedTeam: null,
    selectionHistory: null
  };

  setSelectedTeam = (selectedTeam) => {
    this.setState(state => ({
      selectedTeam,
      selectionHistory: {
        ...state.selectionHistory,
        ...selectedTeam.id
      }
    }));
  };

  renderTeams = () => {
    const teams = this.state.teams.map(team => (
      <Team
        value={team}
        onClick={e => {
          this.setSelectedTeam(e.target.value);
        }}
      />
    ));

    return teams;
  };

  renderBestTeamMessage = () => {
    let message = "No teams :(";
    if (this.state.teams.length) {
      const bestTeam = "Finland";
      message = `The best team is ${bestTeam}`;
    }
    return message;
  };

  render() {
    return (
      <div>
        {this.renderTeams()}
        {this.renderBestTeamMessage()}
      </div>
    );
  }
}

export default TeamStandings;
