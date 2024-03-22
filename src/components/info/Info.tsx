'use client'

import React from 'react'
import { Carousel } from 'flowbite-react'
import Image from 'next/image'
import styles from "./infos.module.css"


export default function DefaultInfo() {
    return (
        <div className={styles.infos}>

            <div className={styles.social}>
                <h1>Daily Events<br /> That Make News<br />In The Fund</h1>
            </div>



            <div className={styles.info}>
                <Carousel className="w-full h-80 object-cover  ">
                    <div className={styles.slider}>
                        <div className={styles.img}>

                            <Image src="/images/coach.jpg" alt="slider image" className="h-full" width={1200} height={1200} />

                        </div>

                        <div className={styles.text}>
                            <h1>LUKONG JULIUS</h1>
                            {/* <p>Coaching on the use of Patograph at Mbingo Baptist.</p> */}

                        </div>
                    </div>

                    <div className={styles.slider}>
                        <div className={styles.img}>

                            <Image src="/images/puncture.jpg" alt="slider image" className="h-full" width={1200} height={1200} />

                        </div>

                        <div className={styles.text}>
                            <h1>KUH JOSEPH</h1>
                            {/* <p>A supply van to Fundong had a tyre puncture .</p> */}

                        </div>
                    </div>

                    <div className={styles.slider}>
                        <div className={styles.img}>

                            <Image src="/images/offload.jpg" alt="slider image" className="h-full" width={1200} height={1200} />

                        </div>

                        <div className={styles.text}>
                            <h1>KUH JOSEPH</h1>
                            {/* <p>Offloading of medicines donated by International Medical core at Fundong Health District.</p> */}

                        </div>
                    </div>


                </Carousel>

            </div>
        </div>
    )
}




