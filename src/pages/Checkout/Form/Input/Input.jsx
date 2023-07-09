import { useFormContext } from "react-hook-form";

const Input = ({ id, label, type, placeholder, className="" }) => {
  const { register, formState: { errors } } = useFormContext();

  const emailValidation = {
    required: `${label} is required`,
    pattern: {
      value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      message: 'Wrong format'
    }
  };

  const phoneValidation = {
    required: `${label} is required`,
    pattern: {
      value: /^\+?[1-9][0-9]{7,14}$/,
      message: 'Wrong format'
    }
  };

  return (
    <div className={`flex flex-col gap-2 relative ${className}`}>
      {errors[id] && (<p className="text-[13px] text-red-500 font-bold absolute top-0 right-0">{errors[id].message}</p>) }
      <label className="text-xs font-bold" htmlFor={id}>{label}</label>
      <input
        {...register(id, {
          ...(id === 'email' ? emailValidation : id === 'phone' ? phoneValidation : { required: `${label} is required` }),
        })}
        className={`p-4 placeholder:text-sm placeholder:text-cDarkGray placeholder:font-bold border border-[#CFCFCF] rounded-lg ${errors[id] ?'border-red-500 focus:outline-none' : 'focus:border-cBrown focus:outline-none'}`}
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
