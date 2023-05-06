import './Form.css';
import { useForm } from "react-hook-form";
import {useState} from "react";

const Form = (props) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [message,setMessage] = useState("");
  const submitHandler = (data) => {
    const formData = new FormData();
    formData.append("Name", data.Name);
    formData.append("Email", data.Email);
    formData.append("Phone", data.Phone);
    formData.append("Description", data.Description);

    fetch("https://script.google.com/macros/s/AKfycbwXmPyuGYZl1xJJRVKiGuB9gLgRWMtISlWrZzYXaZllY-vgfQWyMWUGpct_y6FW1YDvcw/exec", {
      method: "POST",
      body: formData
    })
      .then(res => res.text())
      .then(responseData => {
        setMessage(responseData)
        reset()
      });
  };
  return (
    <div className="form-wrapper">
      <h2 className="form-header"><img alt="Logotype Museum" src="https://mist-next.vercel.app/_next/static/media/museum.25fa7a9e.svg"></img></h2>
      {message && <p className="success">{message}</p>}
      <form className="main-form" onSubmit={handleSubmit(submitHandler)}>
        <input type="text" {...register("Name", { required: true })}
          placeholder="ПІБ"
        />
        {errors.Name && <span className="form-error">Це поле є обов'язковим для заповнення</span>}
        <input type="email" {...register("Email", {
          required: "Це поле є обов'язковим для заповнення", pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Неправильна адреса електронної пошти"
          }
        })}
          placeholder="Електронна пошта"
        />
        {errors.Email && <span className="form-error">{errors.Email.message}</span>}
        <input type="tel" {...register("Phone", {
          required: "Це поле є обов'язковим для заповнення", pattern: {
            value: /^([0-9]{12})$/,
            message: "Номер телефону має містити 12 цифр"
          }
        })}
          placeholder="Телефон"
        />
        {errors.Phone && <span className="form-error">{errors.Phone.message}</span>}
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