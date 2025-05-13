import PropTypes from 'prop-types';
import { Component } from 'react';
import { ErrorMsg } from '../errorMsg/ErrorMsg';

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(err, info) {
    console.log(err, info);

    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <ErrorMsg />;
    }

    return this.props.children;
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.node,
};

export default ErrorBoundary;
