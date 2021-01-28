import React from 'react';

class ToolCard extends React.Component {
  render() {
    const { tool } = this.props;
    const { title, link, description, tags } = tool;
    return (
      <section className="tool-card">
        <div>
          <h2>
            <a href={link}>{title}</a>
          </h2>
          <button><span>X</span> remove</button>
        </div>
        <h3>{description}</h3>
        <h4>
          {tags.map(tag => <span key={tag}>#{tag} </span>)}
        </h4>
      </section>
    );
  }
}

export default ToolCard;
