import React, {useRef} from 'react'

export default function UseRefFromHandling(){
    const name = useRef(null);
    const age = useRef(null);
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(name.current.value, age.current.value);
    }
    return(
        <div className="p-4">
            <form action="" onSubmit={handleSubmit}>
                <input ref={name} type="text" placeholder="name"/>
                <input ref={age} type="text" placeholder="age"/>
                <input type="submit" />
            </form>
        </div>
    );
}