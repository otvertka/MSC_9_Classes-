import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  componentDidCatch(error) {
    this.state({ hasError: true });
  }

  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
