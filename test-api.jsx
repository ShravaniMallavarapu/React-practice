import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class RaceGuide extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    // Remove the 'www.' to cause a CORS error (and see the error state)
    axios.get(`https://s3-ap-southeast-2.amazonaws.com/next-to-jump`)
      .then(response => {
        console.log(response);
        // Transform the raw data by extracting the nested posts
        //const posts = res.data.result.map(obj => obj.EventTypeDesc);
        console.log(response.data.result);
        // Update state to trigger a re-render.
        // Clear any errors, and turn off the loading indiciator.
        this.setState({
          raceResult: response.data.result,
          loading: false,
          error: null
        });
      })
      .catch(err => {
        // Something went wrong. Save the error in state and re-render.
        this.setState({
          loading: false,
          error: err
        });
      });
  }

  renderLoading() {
    return <div>Loading...</div>;
  }

  renderError() {
    return (
      <div>
        {this.state.error.message}
      </div>
    );
  }

  renderPosts() {
    if(this.state.error) {
      return this.renderError();
    }

    return (
      <ul>
        {this.state.raceResult.map(race =>
          <li key={race.EventID}>
              <p>{race.EventTypeDesc}</p>
              <p><strong>Event name: </strong>{race.EventName}</p>
              <p><strong>Venue: </strong>{race.Venue.Venue}</p>
              <p><strong>Event start time: </strong>{race.AdvertisedStartTime}</p>
            </li>
        )}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h1>Test react states and API</h1>
        {this.state.loading ?
          this.renderLoading()
          : this.renderPosts()}
      </div>
    );
  }
}



export default RaceGuide;