import element from 'vdux/element'
import Router from './components/Router'

function render ({props}) {
  return (
    <Router {...props} url={window.location.pathname}/>
  )
}

export default render