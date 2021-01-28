import React from 'react';
import * as tollsAPI from '../services/toolsAPI';
import ToolCard from './ToolCard';

class TollsList extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      allToolsInfo: [],
    };
    this.requestAPI = this.requestAPI.bind(this);
  }

  requestAPI() {
    this.setState({ isLoading: true }, async () => {
      const allTools = await tollsAPI.allTools();
      this.setState({
        isLoading: false,
        allToolsInfo: allTools,
      });
    });
  }

  componentDidMount() {
    this.requestAPI();
  }

  render() {
    const { isLoading, allToolsInfo } = this.state;
    return (
      <section>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          allToolsInfo.map((toolInfo) => <ToolCard tool={toolInfo} key={toolInfo.id} />))}
      </section>
    );
  }
}

export default TollsList;
