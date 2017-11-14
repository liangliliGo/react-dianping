import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LocalStore from '../util/localStore'
import { CITYNAME } from '../config/localStoreKey'
import * as userInfoActionsFromOtherFile from '../actions/userinfo'

class App extends React.Component {
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            initDone: false
        }
    }
    render(){
        return (
            <div>
                {
                    this.state.initDone
                    ? this.props.children
                    : <div>正在加载中。。。</div>
                }
            </div>
        )
    }
    componentDidMount() {
        // 获取位置信息
        let cityName = LocalStore.getItem(CITYNAME)
        if(cityName == null) {
            cityName = '北京'
        }

        this.props.userInfoActions.update({
            cityName: cityName
        })

        // 更改状态
        this.setState({
            initDone: true
        })
    }
}

// rudux  react  绑定
function mapStateToProps(state) {
    // 讲需要的state的节点注入到与此视图数据相关的组件上
    return {}
}
function mapDispatchToProps(dispatch) {
    // 将需要绑定的响应事件注入到组件上
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)