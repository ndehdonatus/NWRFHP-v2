import React from 'react'
import Info from "../../components/info/Info"
import styles from "./infos.module.css"

const InfosPage = () => {
    return (
        <div>
            <div className={styles.info}>
                <div
                    className="container-fluid container mx-auto pt-16 "
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <div className=" container mx-auto p-4" >


                        <Info />

                    </div>
                </div>

            </div>

        </div>
    )
}

export default InfosPage