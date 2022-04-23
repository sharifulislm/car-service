import React from 'react';
import { useForm } from "react-hook-form";

const Addservice = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
   console.log(data)
   const url = `http://localhost:5000/service`;
   fetch(url, {
     method: 'POST',
     headers: {
       'content-type': 'application/json'
     },
     body:JSON.stringify(data)

   })
  
  
  };
    return (
        <div className='w-50 mx-auto'>
            <h1>please add servise</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
      <textarea className='mb-2' placeholder='Description' {...register("description")} />
      <input className='mb-2' placeholder='Price' type="number" {...register("price")}/>
      <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")}/>
      <input type="submit" value="Add service"/>
    </form>

        </div>
    );
};

export default Addservice;