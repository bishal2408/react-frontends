import MemberCardSection from "./MemberCardSection"

const MemberSection = () => {
    return (
        <div className="md:w-[90%] md:m-auto">
            <div className="text-center">
                <span className="text-red-600 text-base font-semibold tracking-widest">Our Team</span>
                <h2 className="text-black font-semibold text-3xl tracking-wide mt-3">Meet Our Team</h2>
            </div>

            <MemberCardSection />
        </div>

    )
}

export default MemberSection