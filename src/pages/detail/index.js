import React, { Component } from 'react';
import { DetailWrapper, Header, Content } from './style';

class Detail extends Component {
  render() {
    console.log(this.props.match.params)
    return (
      <DetailWrapper>
				<Header>sdkjfksjdfhksdjf</Header>
				<Content
				/>
			</DetailWrapper>
    )
  }
}

export default Detail;
