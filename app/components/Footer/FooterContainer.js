import {connect} from 'react-redux'
// import connection from '../connection'
import Footer from './Footer'

// const mapStateToProps = state => ({
//   ...state.chat
// })

const mapStateToProps = state => ({
  me: state.chat.me,
  name: state.chat.me && state.chat.me.name,
  msgText: state.chat.msgText,
  nameTmp: state.chat.nameTmp
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
