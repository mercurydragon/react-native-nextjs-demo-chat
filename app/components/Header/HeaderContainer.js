import {connect} from 'react-redux'
import Header from './Header'

const mapStateToProps = state => ({
  name: state.chat.me ? state.chat.me.name : ''
})

export default connect(mapStateToProps)(Header)
