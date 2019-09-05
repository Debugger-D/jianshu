import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom';

class List extends PureComponent {
  render(){
    const { list, getArticleList, page } = this.props;
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <ListItem key={index}>
                <Link to={`/detail/${index}`}>
                  <img alt='' className='pic' src={item.get('imgUrl')} />
                  <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                  </ListInfo>
                </Link>
              </ListItem>
            )
          })
        }
        <LoadMore onClick={() => getArticleList(page)}>更多文章</LoadMore>
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    getArticleList: (page) => {
      const action = actionCreators.getMoreList(page);
      dispatch(action)
    }
  }
}

const mapState = (state) => {
  return {
    list: state.get('home').get('articleList'),
    page: state.get('home').get('articlePage')
  }
}

export default connect(mapState, mapDispatch)(List);
