import React from 'react'
import styles from './Driver.module.css'
import Drive from '../../images/drive.png'

const Driver = () => {
  return (
    <div className={styles.drive}>
      <div className={styles.left}>
        <img src={Drive} alt='' />
      </div>
    </div>
  )
}

export default Driver