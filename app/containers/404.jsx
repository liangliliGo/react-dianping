import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class NotFound extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <p>404 NotFound</p>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// module.export = NotFound
export default NotFound