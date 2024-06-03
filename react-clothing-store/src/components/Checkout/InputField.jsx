
const InputField = ({name, type, isRequired=false}) => {
  return (
    <div className="mb-5">
        <label htmlFor={name} className="text-sm font-medium tracking-wider block mb-3">
            {name.toUpperCase()} {isRequired ? <span className="text-red-500">{"*"}</span> : ""}
        </label>

        <input 
            type={type}
            placeholder={`Enter ${name}`}
            name={name}
            id={name}
            className="px-1 py-2 text-base w-full border-2 outline-none focus:border-black"
            required={isRequired ? true : false}
        />
    </div>
  )
}

export default InputField