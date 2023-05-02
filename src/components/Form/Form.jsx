import './Form.css';
import {useForm} from "react-hook-form";

const Form = (props) => {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = data => alert(JSON.stringify(data));
  return (
    <div className="form-wrapper">
      <h2 className="form-header"><img alt="Logotype Museum"
                                       src="https://mist-next.vercel.app/_next/static/media/museum.25fa7a9e.svg"></img>
      </h2>
      <form className="main-form" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", {required: true})}
               placeholder="ПІБ"
        />
        {errors.name && <span className="form-error">Це поле є обов'язковим для заповнення</span>}
        <input type="email" {...register("email", {
          required: "Це поле є обов'язковим", pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Неправильна адреса електронної пошти"
          }
        })}
               placeholder="Електронна пошта"
        />
        {errors.email && <span className="form-error">{errors.email.message}</span>}
        <input type="tel" {...register("phone", {required: true})}
               placeholder="Телефон"
        />
        {errors.phone && <span className="form-error">Це поле є обов'язковим для заповнення</span>}
        <textarea {...register("details", {required: true})}
                  placeholder="Ваші побажання"
                  rows="3"
        />
        {errors.details && <div className="form-error">Це поле є обов'язковим для заповнення</div>}
        <input type="checkbox" id="agree" {...register("agree", {required: true})} />
        <label htmlFor="agree">Даю згоду на обробку персональних даних</label>
        {errors.agree &&
          <div className="form-error">Надайте згоду на обробку персональних даних, щоб надіслати форму</div>}
        <input type="submit"/>
      </form>
    </div>
  );
};

export default Form;