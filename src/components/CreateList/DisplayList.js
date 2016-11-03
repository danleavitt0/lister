/**
 * Imports
 */

import fire, {firebaseSet} from 'vdux-fire'
import element from 'vdux/element'
import {Block, Card} from 'vdux-ui'

/**
 * <DisplayList/>
 */

function render ({props}) {
  const {list, id} = props
  const {loading, value} = list

  if (loading) return <span/>

  return (
    <Block>
      <Block>
        { list.value.map((val, i) => <Item val={val} idx={i} id={id} />) }
      </Block>
    </Block>
  )
}

function Item({props}) {
  const {val, idx, id} = props
  console.log(id, idx)
  return (
    <Card p align='space-between' hide={!val} textAlign='left'>
      <Block align='start center'>
        <Block circle='25' textAlign='center' lh='28px' color='white' bg='blue' mr fs='xs'>
          {idx + 1}
        </Block>
        <Block ellipsis maxWidth={270}>{val}</Block>
      </Block>
      <Block transform='rotate(45deg)' fs='m' pointer onClick={() => removeItem(id, idx)}>+</Block>
    </Card>
  )
}

function * removeItem(id, idx) {
  yield firebaseSet({
    ref: 'lists/' + id,
    method: 'transaction',
    value: ((cur) => {
      cur.splice(idx, 1)
      return cur
    })
  })
}


/**
 * Exports
 */

export default fire(({id}) => ({
  list: 'lists/' + id
}))({
  render
})
