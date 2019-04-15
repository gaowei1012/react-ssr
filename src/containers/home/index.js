import React from 'react'
import Header from '../../components/Header'
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // 如果有内容 则不会请求数据
    if (!this.props.list.length) {
      this.props.getHomeList()
    }
  }

  click () {
    console.log('this is click')
  }

  getList() {
    const { list } = this.props
    return list.map((item) => <div key={item.id}>{item.title}</div>)
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          {this.getList()}
        </div>
        <button onClick={this.click.bind(this)}>Click</button>
      </div>
    )
  }
}

Home.loadData = (store) => {
  return store.dispatch(getHomeList())
}

const mapStateToProps = state => ({
  name: state.home.name,
  list: state.home.newList
})

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    // console.log('test')
    dispatch(getHomeList())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
