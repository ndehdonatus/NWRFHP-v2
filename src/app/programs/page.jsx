import ProgramSection from '../../components/ProgramSection'

const page = () => {
    return (
        <div
            className="container-fluid container mx-auto pt-16 programs-wrapper"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className=" container mx-auto  programs-section p-4" id="programs">
                <ProgramSection />
            </div>
        </div>
    )
}

export default page