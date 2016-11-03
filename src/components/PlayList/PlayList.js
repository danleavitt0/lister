/**
 * Imports
 */

import handleActions from '@f/handle-actions'
import createAction from '@f/create-action'
import {Button} from 'vdux-containers'
import {Block, Base} from 'vdux-ui'
import element from 'vdux/element'
import fire from 'vdux-fire'

/**
 * <PlayList/>
 */

function initialState () {
  return { cur: 0 }
}

function render ({props, state, local}) {
  const {list} = props
  const {loading, value} = list

  if (loading) return <span/>
  const listLength = list.value.length

  return (
    <Block>
      <Block bg='#333' color='white' p align='start center'
      fixed={{top: 0, left: 0}} wide boxSizing='border-box' h={50} z={5}>
        <Block flex align='start center'>
          <Block mr>Lister</Block>
          <Button px h={30} onClick={() => local(back)()}>Back</Button>
          <Button mx px h={30} onClick={() => local(next)(listLength)}>Next</Button>
        </Block>
        <Block align='start center'>
          <Block maxWidth={300} ellipsis>{value[state.cur]}</Block>
        </Block>
        <Block flex/>
      </Block>
      <Base tag='iframe' src={'http://www.' + value[state.cur]} fixed={{top: 50, left: 0}} h='calc(100% - 50px)' width='100%' borderWidth='0' />
    </Block>
  )
}

/**
 * Actions
 */

const next = createAction('<PlayList/>: next')
const back = createAction('<PlayList/>: back')


/**
 * Reducer
 */

const reducer = handleActions({
  [next]: (state, len) => ({
    ...state,
    cur: Math.min(state.cur + 1, len - 1)
  }),
  [back]: (state) => ({
    ...state,
    cur: Math.max(state.cur - 1, 0)
  })
})

/**
 * Exports
 */

export default fire(({id}) => ({
  list: 'lists/' + id
}))({
  initialState,
  render,
  reducer
})
