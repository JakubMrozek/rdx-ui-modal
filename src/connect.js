import {connect} from 'react-redux'
import * as actions from './actions'


const stateToProps = ({modal}) => ({modal})
export default function connectComponent(target) {
  return connect(stateToProps, actions)(target)
}
