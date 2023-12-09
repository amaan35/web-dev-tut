import React from 'react'

const Hello = (props)=>{
    //using JSX to create component
    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.heroName}</h1>
            {props.children}
        </div>
    )

    //Without using JSX
    // return React.createElement('div', {id: 'hello', className: 'dummyClass'}, React.createElement('h1', null, 'Hello Amaan'))
}

export default Hello
