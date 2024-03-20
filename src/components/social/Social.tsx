import React from 'react'
import { Carousel } from "flowbite-react"
import Image from 'next/image'
import styles from "./social.module.css"



export const metadata = {
    title: " Social Page",
    description: "About Our Social Events",
};





const SocialPage = () => {


    return (

        <div className={styles.container}>

            <div className={styles.social}>
                <h1>Welcome<br /> To Our Social Page</h1>
            </div>



            <div className={styles.content}>
                <div className={styles.textContainer}>

                    <h2 className={styles.subtitle}>About Our Social Activities</h2>

                    <h1 className={styles.title}>We create digital ideas that are bigger,bolder,<br/>braver and better.</h1>

                    <p className={styles.desc}>We work every single day  during our working periods to render you with services that will provide you with the satisfaction you deserve. That is why we carry out social activities as one of our strategies to enable us complete our health package provision.</p>


                </div>
                <div className={styles.imgContainer}>


                    <Image src="/images/magg1.jpg" alt="magg1" className={styles.img} width={500} height={400} />

                    <h2 className={styles.name}>Our Social Mobilizer</h2>


                </div>
            </div>





            <div className={styles.social}>
                <h1>Social<br /> Committee Members<br />Of The Fund</h1>
            </div>


            <div className={styles.head}>
                <Image className={styles.imgHead} src="/images/ndum.JPG" alt="ndum" width={700} height={500} />

                <div className={styles.ndum}>
                    <h1>NDUM SEPHERINE KENG</h1>
                    <p>She is head of the social committee of the North West Regional Fund For health Promotion.  <a href="./team">Read more</a> </p>
                </div>
            </div>


            <div className={styles.members}>
                <div className={styles.member1}>
                    <Image className={styles.imgMember1} src="/images/lukong.JPG" alt="lukong" width={350} height={400} />


                    <div className={styles.textMember}>
                        <h1>LUKONG JULIUS</h1>
                        <p>Works in the Obstetrics Kit Management unit</p>
                    </div>
                </div>

                <div className={styles.member1}>
                    <Image className={styles.imgMember1} src="/images/fon3.jpg" alt="fon3" width={350} height={400} />

                    <div className={styles.textMember}>
                        <h1>FON EVELENE MUNDI</h1>
                        <p>Works in the computerized stock management unit</p>
                    </div>

                </div>

                <div className={styles.member1}>
                    <Image className={styles.imgMember1} src="/images/alida.jpg" alt="alida" width={350} height={400} />

                    <div className={styles.textMember}>
                        <h1>FOPA TEMBONG ALIDA</h1>
                        <p>Works in the Laboratory unit</p>
                    </div>
                </div>

                <div className={styles.member1}>
                    <Image className={styles.imgMember1} src="/images/anembum.JPG" alt="anembum" width={350} height={400} />

                    <div className={styles.textMember}>
                        <h1>ASAFOR ATUNGOMBI ANIMBUM</h1>
                        <p>Works in the Office of the Administrator as Administrative Assistant</p>
                    </div>
                </div>

                <div className={styles.member1}>
                    <Image className={styles.imgMember1} src="/images/ngwana.JPG" alt="fon3" width={350} height={400} />

                    <div className={styles.textMember}>
                        <h1>NGWANA ALPHONSE</h1>
                        <p>Works AS Driver and JANITOR</p>
                    </div>
                </div>

                <div className={styles.member1}>
                    <Image className={styles.imgMember1} src="/images/ambe.JPG" alt="ambe" width={350} height={400} />

                    <div className={styles.textMember}>
                        <h1>TAMAJONG DIVINE AMBE</h1>
                        <p>Works in the Regional Medical Store Unit as a storekeeper</p>
                    </div>
                </div>

                <a className={styles.link} href="/team">Read More</a>
            </div>




            <div className={styles.social}>
                <h1>Ladies<br /> Of The Fund</h1>
            </div>

            <div className={styles.article}>
                <div className={styles.imgContainer}>
                    <Image className={styles.imag} src="/images/njamsi.JPG" alt="njamsi" width={450} height={400} />

                    <div className={styles.njamsi}>
                        <h1>MADAM NJAMSI MILDRED</h1>
                        <p>She is the president for ladies affairs and is technically assisted by our social mobilizer.</p>
                    </div>

                </div>
                <div className={styles.texts}>
                    <h1>Why ladies ?</h1>
                    <p>The North West Regional Fund For Health promotion  has eighteen female staff who are<br /><b> Energetic<br />Intelligent<br />Generous<br />And Charismatic.</b><br />All of these explain why our customer services are unique. <a href="./team">Follow us and discover who our ladies are.</a></p>
                </div>
            </div>


            <div className={styles.main}>
                <div className={styles.card1}>
                    <h1>Female Staff Celebrate The Award Of Medals.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus consectetur blanditiis temporibus accusamus doloremque asperiores, qui eaque fugit atque, possimus adipisci sit magnam accusantium, quas nulla omnis distinctio soluta ea.</p>
                </div>


                <div className={styles.imgContainerOne}>
                    <Image className={styles.imag} src="/images/fonmedal1.jpg" alt="fonmedal1" width={400} height={400} />

                    <div className={styles.medal}>
                        <h1>Lorem ipsum dolor sit amet.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, voluptate?</p>
                    </div>
                </div>

            </div>





            <div className={styles.social}>
                <h1>More<br /> Social Events<br />In Stock</h1>
            </div>



            <div className={styles.sliders}>
                <Carousel className='w-full h-80 object-cover'>


                    <div className={styles.slider}>
                        <div className={styles.img}>

                            <Image src="/images/social1.jpg" alt="slider image" className="h-full object-top" width={1200} height={1200} />

                        </div>

                        <div className={styles.text}>

                            {/* <h1>hello</h1> */}
                            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi tenetur laborum cumque, corporis eaque nesciunt quo rerum dignissimos quisquam repellendus.</p> */}

                        </div>
                    </div>



                    <div className={styles.slider}>
                        <div className={styles.img}>

                            <Image src="/images/social2.jpg" alt="slider image" className="h-full object-top" width={1200} height={1200} />

                        </div>

                        <div className={styles.text}>
                            <h1>hello</h1>
                            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi tenetur laborum cumque, corporis eaque nesciunt quo rerum dignissimos quisquam repellendus.</p> */}

                        </div>
                    </div>

                    <div className={styles.slider}>
                        <div className={styles.img}>

                            <Image src="/images/social3.jpg" alt="slider image" className="h-full object-top" width={1200} height={1200} />

                        </div>

                        <div className={styles.text}>
                            <h1>hello</h1>
                            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi tenetur laborum cumque, corporis eaque nesciunt quo rerum dignissimos quisquam repellendus.</p> */}

                        </div>
                    </div>


                    <div className={styles.slider}>
                        <div className={styles.img}>

                            <Image src="/images/social4.jpg" alt="slider image" className="h-full object-top" width={1200} height={1200} />

                        </div>

                        <div className={styles.text}>
                            <h1>hello</h1>
                            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi tenetur laborum cumque, corporis eaque nesciunt quo rerum dignissimos quisquam repellendus.</p> */}

                        </div>
                    </div>



                    <div className={styles.slider}>
                        <div className={styles.img}>

                            <Image src="/images/social5.jpg" alt="slider image" className="h-full object-top" width={1200} height={1200} />

                        </div>

                        <div className={styles.text}>
                            <h1>hello</h1>
                            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi tenetur laborum cumque, corporis eaque nesciunt quo rerum dignissimos quisquam repellendus.</p> */}

                        </div>
                    </div>



                    <div className={styles.slider}>
                        <div className={styles.img}>

                            <Image src="/images/social6.jpg" alt="slider image" className="h-full object-top" width={1200} height={1200} />

                        </div>

                        <div className={styles.text}>
                            <h1>hello</h1>
                            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi tenetur laborum cumque, corporis eaque nesciunt quo rerum dignissimos quisquam repellendus.</p> */}

                        </div>
                    </div>



                    <div className={styles.slider}>
                        <div className={styles.img}>

                            <Image src="/images/social7.jpg" alt="slider image" className="h-full object-top" width={1200} height={1200} />

                        </div>

                        <div className={styles.text}>
                            <h1>hello</h1>
                            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi tenetur laborum cumque, corporis eaque nesciunt quo rerum dignissimos quisquam repellendus.</p> */}

                        </div>
                    </div>



                    <div className={styles.slider}>
                        <div className={styles.img}>

                            <Image src="/images/social8.jpg" alt="slider image" className="h-full object-top" width={1200} height={1200} />

                        </div>

                        <div className={styles.text}>
                            <h1>hello</h1>
                            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi tenetur laborum cumque, corporis eaque nesciunt quo rerum dignissimos quisquam repellendus.</p> */}

                        </div>
                    </div>



                    <div className={styles.slider}>
                        <div className={styles.img}>

                            <Image src="/images/social10.jpg" alt="slider image" className="h-full object-top" width={1200} height={1200} />

                        </div>

                        <div className={styles.text}>
                            <h1>hello</h1>
                            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi tenetur laborum cumque, corporis eaque nesciunt quo rerum dignissimos quisquam repellendus.</p> */}

                        </div>
                    </div>



                    <div className={styles.slider}>
                        <div className={styles.img}>

                            <Image src="/images/social1.jpg" alt="slider image" className="h-full object-top" width={1200} height={1200} />

                        </div>

                        <div className={styles.text}>
                            <h1>hello</h1>
                            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi tenetur laborum cumque, corporis eaque nesciunt quo rerum dignissimos quisquam repellendus.</p> */}

                        </div>
                    </div>



                    <div className={styles.slider}>
                        <div className={styles.img}>

                            <Image src="/images/social12.jpg" alt="slider image" className="h-full object-top" width={1200} height={1200} />

                        </div>

                        <div className={styles.text}>
                            <h1>hello</h1>
                            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi tenetur laborum cumque, corporis eaque nesciunt quo rerum dignissimos quisquam repellendus.</p> */}

                        </div>
                    </div>



                    <div className={styles.slider}>
                        <div className={styles.img}>

                            <Image src="/images/social2.jpg" alt="slider image" className="h-full object-top" width={1200} height={1200} />

                        </div>

                        <div className={styles.text}>
                            <h1>hello</h1>
                            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi tenetur laborum cumque, corporis eaque nesciunt quo rerum dignissimos quisquam repellendus.</p> */}

                        </div>
                    </div>


                    <div className={styles.slider}>
                        <div className={styles.img}>

                            <Image src="/images/social3.jpg" alt="slider image" className="h-full object-top" width={1200} height={1200} />

                        </div>

                        <div className={styles.text}>
                            <h1>hello</h1>
                            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi tenetur laborum cumque, corporis eaque nesciunt quo rerum dignissimos quisquam repellendus.</p> */}

                        </div>
                    </div>











                </Carousel >

            </div>





        </div >










    )
};

export default SocialPage