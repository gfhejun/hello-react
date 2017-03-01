import React, {
  Component
} from 'react'
import {
  Tabs,
  Icon
} from 'antd'
import logo from './logo.svg'
import './App.css'

const TabPane = Tabs.TabPane;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs defaultActiveKey="1">
          <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Hello, iOS!</h2>
            </div>
          </TabPane>
          <TabPane tab={<span><Icon type="android" />Tab 2</span>} key="2">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Hello, Android!</h2>
            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default App;