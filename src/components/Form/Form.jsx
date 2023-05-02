import './Form.css';
import {useForm} from "react-hook-form";

const Form = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className="form-wrapper">
      <h2 className="form-header"><img alt="Logotype Museum" src="https://mist-next.vercel.app/_next/static/media/museum.25fa7a9e.svg" ></img></h2>
      <form className="main-form" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true })}
                placeholder="ПІБ"
        />
        {errors.name && <span className="form-error">This field is required</span>}
        <input {...register("email", { required: true })}
               placeholder="Електронна пошта"
        />
        {errors.email && <span className="form-error">This field is required</span>}
        <input {...register("phone", { required: true })}
               placeholder="Телефон"
        />
        {errors.phone && <span className="form-error">This field is required</span>}
        <textarea {...register("details", { required: true })}
               placeholder="Ваші побажання"
                  rows="3"
        />
        {errors.phone && <span className="form-error">This field is required</span>}
        <input type="submit" />

      </form>
    </div>
  );
};

export default Form;