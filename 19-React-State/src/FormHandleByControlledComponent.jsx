import React, {useState} from 'react'

export default function FormHandleByControlledComponent(){
    const [val, setVal] = useState({name: "", email:""});

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(val);
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input onChange={(event)=>setVal({...val, name: event.target.value})} type="text" placeholder='Name'/>
                <input onChange={(event)=>setVal({...val, email: event.target.value})} type="email" placeholder='email'/>
                <input type="submit" />
            </form>
        </div>
    );
}

