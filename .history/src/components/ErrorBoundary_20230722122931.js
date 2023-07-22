import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
  }
  componentDidCatch(error) {}

  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
