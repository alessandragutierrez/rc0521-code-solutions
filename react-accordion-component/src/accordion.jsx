import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topicOpen: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.target.textContent === this.state.topicOpen
      ? this.setState({ topicOpen: null })
      : this.setState({ topicOpen: event.target.textContent });
  }

  renderTopics() {
    const topics = this.props.topics;
    return (
      topics.map(topic =>
        <div key={topic.id}>
          <div onClick={this.handleClick} className="topic-name">{topic.name}</div>
          <div className={
            this.state.topicOpen === topic.name
              ? 'topic-desc topic-desc-open'
              : 'topic-desc topic-desc-closed'
              }>{topic.desc}</div>
        </div>
      )
    );
  }

  render() {
    const topicElements = this.renderTopics();
    return (
      <div className="accordion-container">{topicElements}</div>
    );
  }
}

export default Accordion;
