import { useFormContext } from "react-hook-form";

const Radio = ({ id, name, label, onChange, value }) => {
  const { register, formState: { errors } } = useFormContext();

  function handleChange(event) {
    onChange(event.target.value)
  }

  return (
    <div className="flex gap-4 relative">
        {errors[id] && console.log(errors[id])}
        <input 
        {...register(name)}
        className="accent-cBrown absolute top-1/2 -translate-y-1/2 left-[1.2em]" 
        id={id} 
        name={name} 
        type={"radio"}
        value={id}
        checked={value === id}
        onChange={handleChange}
        />
        <label className="text-xs font-bold border border-[#CFCFCF] focus-within:border-cBrown py-4 pl-[4em] pr-5 rounded-lg w-full" htmlFor={id}>{label}</label>
    </div>
  )
}

export default Radio