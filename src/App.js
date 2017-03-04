import React, { Component } from 'react';
import { css } from 'glamor';
import { range } from 'lodash';
import moment from 'moment';

const containerStyle = css({ lineHeight: 0 });
const boxstyle = css({
  width: 10,
  height: 10,
  marginRight: 5,
  marginBottom: 5,
  display: "inline-block",
  background: "#F5F5F5",
})
const Box = (props) => (
  <div className={boxstyle} {...props}/>
);

class App extends Component {
  render() {
    const BIRTH = moment("19871204", 'YYYYMMDD')
    const DEATH = moment(BIRTH).add(90, 'years')

    const life = DEATH.diff(BIRTH, "weeks");
    const alive = moment().diff(BIRTH, "weeks");

    const lifeR = range(life);
    const aliveR = range(alive);

    return (
      <div>
        <ul>
          <li>Born {BIRTH.fromNow()} {BIRTH.format('Do MMM YYYY')}</li>
          <li>Alive for {alive} weeks</li>
          <li>Lifespan {life} weeks</li>
          <li>Die in {DEATH.fromNow()} {DEATH.format('Do MMM YYYY')}</li>
        </ul>
        <div {...containerStyle}>
          {lifeR.map(i =>
            <Box key={i} style={{
              background: aliveR[i] !== undefined && "lime"
            }}/>
          )}
        </div>
      </div>
    );
  }
}

export default App;
