import React from 'react'
import styles from './Luxury.module.css'
import rollsroyce from '../../images/rolls royce.webp'
import maserati from '../../images/Maserati.jpeg'
import rangerover from '../../images/Range rover.avif'
import porshe from '../../images/porshe2.avif'


const Luxury = () => {
    const luxuries = [
        {
            id: 1,
            src: rollsroyce,
            name: 'Roll Royce'
        },
        {
            id: 2,
            src: maserati,
            name: 'maserati'
        },
        {
            id: 3,
            src: rangerover,
            name: 'Range Rover'
        },
        {
            id: 4,
            src: porshe,
            name: 'Porshe'
        },
    ]
  return (
    <div className={styles.luxury}>
        <div className={styles.heading}>
            <h2>Luxury Selections</h2>
            <div className={styles.text_bg}>
                <p>
                    <span>Select from the top luxury vehicles to roll in style.</span>
                </p>
            </div>
        </div>
        <div className={styles.container}>
            {
                luxuries.map(({id, src, name})=> (
            <div key={id} className={styles.card}>
                <img src={src} alt='' />
                <div className={styles.content}>
                    <h3>{name}</h3>
                </div>
            </div>

                ))
            }

        </div>
    </div>
  )
}

export default Luxury