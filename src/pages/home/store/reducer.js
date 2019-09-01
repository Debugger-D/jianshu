import { fromJS } from 'immutable'
const defaultState = fromJS({
  topicList:[
    {
      id: 1,
      title: '社会热点',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/3627484-1f6d669e8c4fff21.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },
    {
      id: 1,
      title: '社会热点',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/3627484-1f6d669e8c4fff21.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },
  ]
})

const reducer = (state = defaultState, action) => {
  switch(action.type){
    default:
      return state
  }
}

export default reducer