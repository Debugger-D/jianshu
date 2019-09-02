import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';

import { createType } from './store'
import {
	HomeWrapper,
	HomeLeft,
	HomeRight
} from './style';
import Topic from './components/Topic'
import List from './components/List'

class Home extends Component {
  componentDidMount() {
    const { setHomeJson } = this.props;
    axios.get('/api/home.json').then(res => {
      console.log(res.data.data);
      let action = createType.change_home_data()
      action.payload = res.data.data
      setHomeJson(action)
    })
  }

  render() {
    return (
      <HomeWrapper>
				<HomeLeft>
					<img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic></Topic>
          <List></List>
				</HomeLeft>
				<HomeRight>
				</HomeRight>
			</HomeWrapper>
    )
  }
}

const mapDispatch = (dispatch) => {
  return {
    setHomeJson(action) {
      dispatch(action)
    }
  }
}
export default connect(null, mapDispatch)(Home);
