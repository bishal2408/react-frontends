

const MemberCard = ({image, name, designation}) => {
  return (
    <div className="w-full my-10 px-3">
      <img src={image} alt="member image" className="w-full object-cover" loading="lazy" />
      <div className="px-2 py-4">
        <h4 className="text-xl font-semibold">{name}</h4>
        <span className="text-sm text-gray-400">{designation}</span>
      </div>
    </div>
  )
}

export default MemberCard