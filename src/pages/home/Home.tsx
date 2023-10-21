import TaskPutItems from '../task1'
import styles from './styles.module.css'
export default function Home() {
  return (
    <div className={styles.home_container}>
      <h1>Hello world! I am using React</h1>
      <TaskPutItems />
    </div>
  )
}
