import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from './../actions';

class Headlines extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  render() {
    const { isLoading, headlines, error } = this.props;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>Headlines</h1>
          <ul>
            {headlines.map((headline, index) =>
            <li key={index}>
              <h3>{headline.title}</h3>
              <p>{headline.abstract}</p>
            </li>
            )}
          </ul>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    headlines: state.headlines,
    error: state.error
  }
}

export default connect(mapStateToProps)(Headlines)