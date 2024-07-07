import MemberCard from "./MemberCard"

const sqads = [
    { name: 'John Smith', designation: 'Fashion Design', image: 'https://preview.colorlib.com/theme/malefashion/img/about/team-1.jpg' },
    { name: 'Christine Wise', designation: 'C.E.O', image: 'https://preview.colorlib.com/theme/malefashion/img/about/team-2.jpg' },
    { name: 'Sean Robbins', designation: 'Manager', image: 'https://preview.colorlib.com/theme/malefashion/img/about/team-3.jpg' },
    { name: 'Lucy Myers', designation: 'Delivery', image: 'https://preview.colorlib.com/theme/malefashion/img/about/team-4.jpg' },
]

const MemberCardSection = () => {
    return (
        <div className="md:flex">
            {sqads.map((sqad, i) => (
                <MemberCard key={i} name={sqad.name} image={sqad.image} designation={sqad.designation}/>
            ))}
        </div>
    )
}

export default MemberCardSection