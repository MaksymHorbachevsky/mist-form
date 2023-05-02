import './Form.css';
import {useForm} from "react-hook-form";

const Form = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className="form-wrapper">
      <h2 className="form-header">MIST</h2>
      <form className="main-form" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("exampleRequired", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />

      </form>
    </div>
  );
};

export default Form;