import React from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button } from './style';
import { connect } from 'react-redux';
import { createType } from './store'

const Header = (props) =>  {

  const { focused, handleFocus, handleBlur } = props;
  return (
    <HeaderWrapper>
      <Logo href="./" />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载APP</NavItem>
        <NavItem className="right">登陆</NavItem>
        <NavItem className="right">Aa</NavItem>
        <NavSearch
          className={ focused ? 'focused' : ''}
          onFocus={handleFocus}
          onBlur={handleBlur}
        ></NavSearch>
      </Nav>
      <Addition>
        <Button className="writting">写文章</Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}

const mapStateProps = (state) => {
  return {
    focused: state.get('header').get('focused')
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    handleFocus() {
      dispatch(createType.serch_focus())
    },

    handleBlur() {
      dispatch(createType.serch_blur())
    }
  }
}

export default connect(mapStateProps, mapDispatchProps)(Header)