import './Form.css';
import { useForm } from "react-hook-form";

const Form = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = () => {
    const form = document.querySelector('form');
    fetch("https://script.google.com/macros/s/AKfycbwXmPyuGYZl1xJJRVKiGuB9gLgRWMtISlWrZzYXaZllY-vgfQWyMWUGpct_y6FW1YDvcw/exec", {
      method: "POST",
      body: new FormData(form)
    })
      .then(res => res.text())
      .then(data => {
        document.getElementsByClassName("success")[0].innerHTML = data;
        form.reset();
      });
  };
  return (
    <div className="form-wrapper">
      <h2 className="form-header"><img alt="Logotype Museum" src="https://mist-next.vercel.app/_next/static/media/museum.25fa7a9e.svg"></img></h2>
      <p className="success"></p>
      <form className="main-form" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("Name", { required: true })}
          placeholder="ПІБ"
        />
        {errors.name && <span className="form-error">Це поле є обов'язковим для заповнення</span>}
        <input type="email" {...register("Email", {
          required: "Це поле є обов'язковим", pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Неправильна адреса електронної пошти"
          }
        })}
          placeholder="Електронна пошта"
        />
        {errors.email && <span className="form-error">{errors.email.message}</span>}
        <input type="tel" {...register("Phone", { required: true })}
          placeholder="Телефон"
        />
        {errors.phone && <span className="form-error">Це поле є обов'язковим для заповнення</span>}
        <textarea {...register("Description")}
          placeholder="Ваші побажання"
          rows="3"
        />
        <input type="checkbox" id="agree" required />
        <label htmlFor="agree">Даю згоду на обробку персональних даних</label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;