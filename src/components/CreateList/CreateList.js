/**
 * Imports
 */

import {Button, Input} from 'vdux-containers'
import handleActions from '@f/handle-actions'
import createAction from '@f/create-action'
import DisplayList from './DisplayList'
import {firebaseSet} from 'vdux-fire'
import element from 'vdux/element'
import {Block} from 'vdux-ui'

/**
 * <CreateList/>
 */

function * onCreate ({props, local}) {
  const id = yield firebaseSet({ref: 'lists/', value: [''], method: 'push'})
  yield local(listId)(id)
}

function render ({props, state, local}) {
  if(!state.id) return <span/>

  return (
    <Block>
      <Block bg='#333' h={50} color='white' p boxShadow='card' align='start center' boxSizing='border-box' fixed={{top: 0, left: 0}} wide>
        <Block flex>LISTER</Block>
        <Block flex align='end center'>
          <Block mr>Share Link: </Block>
          <Input w={250} color='text' mb={0} readonly value={location.origin + '/' + state.id} inputProps={{px: 's', py: 4, onFocus: e => e.target.select(), textAlign: 'center'}} />
        </Block>
      </Block>
      <Block textAlign='center' my='l' pt={50}>
        Create a list Playlist by providing a series of links.
        <Block my='l' w='col_s' mx='auto'>
          <DisplayList id={state.id} my />
          <Block align='start stretch' my>
            <Input placeholder='http://...' inputProps={{p: 'm'}} flex onKeyup={e => local(setUrl)(e.target.value)}/>
            <Button ml h={47} px fs='xs' onClick={() => updateList(state.id, state.url)}>
              Add Link
            </Button>
          </Block>
        </Block>
      </Block>
    </Block>

  )
}

function * updateList(id, val) {
  yield firebaseSet({
    ref: 'lists/' + id,
    method: 'transaction',
    value: ((cur) => cur.filter(Boolean).concat(val))
  })
}

/**
 * Actions
 */

const listId = createAction('<CreateList/>: create list')
const setUrl = createAction('<CreateList/>: setUrl')


/**
 * Reducer
 */

const reducer = handleActions({
  [listId]: (state, id) => ({
    ...state,
    id
  }),
  [setUrl]: (state, url) => ({
    ...state,
    url
  })
})



/**
 * Exports
 */

export default {
  onCreate,
  render,
  reducer
}
