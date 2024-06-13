//react hook form
import React from "react";
import {useForm} from 'react-hook-form'

export default function ReactHookForm(){
    const {register, handleSubmit} = useForm();
    return(
        <div>
            <form action="" onSubmit={handleSubmit()}>
                <input {...register('name')} type="text" placeholder="name"/>
                <input {...register('email')}  type="text" placeholder="email"/>
                <input type="submit" />
            </form>
        </div>
    );
}