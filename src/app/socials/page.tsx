"use client"

import React from 'react'
import Social from "../../components/social/Social"
import styles from "./socials.module.css"


const SocialsPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.slider}>
                <div
                    className="container-fluid container mx-auto pt-16 "
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <div className=" container mx-auto p-4" >

                        <Social />



                    </div>
                </div>
            </div>

        </div>
    )
}

export default SocialsPage