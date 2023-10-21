import { ChangeEvent, useState } from 'react'
import { Item, Actions } from './atoms'
import styles from './styles.module.css'

const data = [1, 2, 3, 4, 5]

type Props = {}
function diff(a: number[], b: number[]) {
  return a.filter(item => {
    const has = b.find(initItem => initItem === item)
    return item !== has
  })
}
function removeItems(a: number[], b: number[]) {
  return a.filter(item => {
    let it = b.find(toRemove => toRemove === item)
    return item !== it
  })
}
export default function TaskPutItems({}: Props) {
  const [letfItems, setLeftItems] = useState<number[]>(data)
  const [rightItems, setRightItems] = useState<number[]>([])
  const [leftcheckedItem, setLeftCheckedItem] = useState<number[]>([])
  const [rightcheckedItem, setRightCheckedItem] = useState<number[]>([])

  const handlePutLeft = () => {
    setRightItems(diff(rightItems, rightcheckedItem))

    setLeftItems(p => [...p, ...rightcheckedItem])
    setRightCheckedItem(p => removeItems(p, rightcheckedItem))
  }
  const handlePutRight = () => {
    setLeftItems(diff(letfItems, leftcheckedItem))

    setRightItems(p => [...p, ...leftcheckedItem])
    setLeftCheckedItem(p => removeItems(p, leftcheckedItem))
  }
  const handleLeftChange = (e: ChangeEvent<HTMLInputElement>, val: number) => {
    if (e.target.checked) {
      setLeftCheckedItem(p => [...p, val])
    }
    const hasItem = leftcheckedItem.find(item => item === val)
    if (!e.currentTarget.checked && hasItem) {
      setLeftCheckedItem(p => p.filter(item => item !== hasItem))
    }
  }
  const handleRightChange = (e: ChangeEvent<HTMLInputElement>, val: number) => {
    if (e.target.checked) {
      setRightCheckedItem(p => [...p, val])
    }
    const hasItem = rightcheckedItem.find(item => item === val)
    if (!e.currentTarget.checked && hasItem) {
      setRightCheckedItem(p => p.filter(item => item !== hasItem))
    }
  }

  return (
    <div className={styles.task_container}>
      <div className={styles.box}>
        {letfItems.map(item => (
          <Item key={item} label={String(item)} onChange={e => handleLeftChange(e, item)} />
        ))}
      </div>
      <Actions putLeftHandler={handlePutLeft} putRightHandler={handlePutRight} />
      <div className={styles.box}>
        {rightItems.map(item => (
          <Item key={item} onChange={e => handleRightChange(e, item)} label={String(item)} />
        ))}
      </div>
    </div>
  )
}
