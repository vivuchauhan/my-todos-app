import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import background from '../images/backround.png'

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Please enter email id"),
  password: Yup.string().transform(value => value.replace(/\s+/g, '')).required("Please enter password"),
});

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = ({ email, password }) => {
    login(email, password);
  };

  return (
   <div className="container-fluid">
    <div className="row">
      <div className="col-6">
        <img src={background} alt="" className="" />
      </div>
      <div className="col-6 mt-5 pt-5">
      <div className="container mt-5 py-2 rounded bg-success-subtle ps-5 pt-4">
        <p className="bg-light w-50 rounded ps-3 py-2">
        <span className="fw-bold">ID</span> - vivekchauhan@gmail.com <br/>
        <span className="fw-bold">Password</span> - Vivek@123
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="container d-flex flex-column justify-content-center gap-3 mt-1 border p-5 rounded bg-success-subtle ">
        <div className="col-6 d-flex flex-column">
          <label className="fw-bold">Email</label>
          <input className="form-control" type="email" {...register("email")} />
          {errors.email && <small className="text-danger fw-bold">{errors.email.message}</small>}
        </div>
        <div className="col-6 d-flex flex-column">
          <label className="fw-bold">Password</label>
          <input className="form-control" type="password" {...register("password")} />
          {errors.password && <small className="text-danger fw-bold">{errors.password.message}</small>}
        </div>
        <div className="col-6 mt-4">
          <button className="btn bg-primary text-white px-5" type="submit">Login</button>
        </div>
      </form>
      
      </div>
   </div>
   </div>
  );
};

export default LoginForm;
