import React from 'react';
import Circle from './components/Circle';

class Circles extends React.Component {
  constructor() {
    super();
    const radius = 50;
    const style = { background: 'yellow' };
    const positions = Array(...Array(5)).map(
      (_, i) => Object({ x: 50 + i * 120, y: 50 })
    );
    this.state = {
      radius,
      style,
      positions,
    };
  }

  render() {
    const { radius, style, positions } = this.state;
    const baseProps = { radius, style };
    const circles = positions.map(
      (pos, i) => <Circle key={i} {...baseProps} {...pos} />
    );
    return <div>{ circles }</div>;
  }
}

React.render(
  <Circles />,
  document.getElementById('root')
);
