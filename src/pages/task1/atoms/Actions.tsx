import styles from './styles.module.css'

type Props = { putRightHandler: () => void; putLeftHandler: () => void }
export default function Actions({ putLeftHandler, putRightHandler }: Props) {
  return (
    <div className={styles.actions_container}>
      <button onClick={putRightHandler}>&gt;</button>
      <button onClick={putLeftHandler}>&lt;</button>
    </div>
  )
}

export { Actions }
