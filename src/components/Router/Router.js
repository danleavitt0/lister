/**
 * Imports
 */

import CreateList from '../CreateList'
import PlayList from '../PlayList'
import element from 'vdux/element'
import enroute from 'enroute'

const router = enroute({
  '/': ((params, props) => <CreateList {...params} {...props} />),
  '/:id': ((params, props) => <PlayList {...params} {...props} />)
})


/**
 * <Router/>
 */

function render ({props}) {
  // if (! props.url || !props.ready) return <div>Loading...</div>
  return router(props.url, {...props})
}

/**
 * Exports
 */

export default {
  render
}
