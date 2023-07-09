import { useFormContext } from "react-hook-form";
import './Input.css'

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
    <div className={`${errors[id] ? 'sm-Input__grid__error xl-Input__grid__error' : 'sm-Input__grid xl-Input__grid'} ${className} xl:gap-2`}>
      {errors[id] && (<p className="text-[13px] text-red-500 font-bold row-start-3 xl:row-start-1 xl:col-start-2 xl:text-right mt-1 xl:mt-0">{errors[id].message}</p>) }
      <label className={`text-xs font-bold row-start-1 ${errors[id] ? 'mb-[6px]' : 'mb-2'} xl:mb-0`} htmlFor={id}>{label}</label>
      <input
        {...register(id, {
          ...(id === 'email' ? emailValidation : id === 'phone' ? phoneValidation : { required: `${label} is required` }),
        })}
        className={`${errors[id] && 'col-span-full'} p-4 placeholder:text-sm placeholder:text-cDarkGray placeholder:font-bold border border-[#CFCFCF] rounded-lg ${errors[id] ?'border-red-500 focus:outline-none' : 'focus:border-cBrown focus:outline-none'}`}
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
