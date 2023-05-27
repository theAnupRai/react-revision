import React, { useState, useMemo, memo } from 'react'

const Counter = memo(()=>{
  
    const [number, setNumber] = useState(0);

    console.log("Counter");

    function clickHandler() {
        // setNumber(number=>number+1);
        // setNumber(number=>number+1);
        // setNumber(number=>number+1); VS

        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);

        console.log(number);
    }
  return (
    <div>
        <h2>New Topic</h2>
        <button className='btn margin' onClick={clickHandler} >Click me</button>
        <button className='margin'><span>{number}</span></button>
    </div>
  )
})

export default Counter


// => 1
// {Note 1 : the useState hook itself is not asynchronous. The state updates triggered by setNumber are processed asynchronously by React for performance optimization. When you call setNumber(newValue) in your code, React schedules the state update but doesn't immediately apply it. Instead, it batches multiple state updates together and performs them in a single update. This batching helps minimize unnecessary re-renders and improve the performance of your React application. As a result, the state update is not reflected immediately after calling setNumber. Therefore, if you log the state variable (number) immediately after calling setNumber, you may not see the updated value because the update hasn't been applied yet. The console log will typically show the previous value of the state variable. If you want to perform an action after the state update has been applied, you can utilize the useEffect hook with the state variable as a dependency. This way, the effect will be triggered after the state has been updated. In summary, the useState hook itself is not asynchronous, but the state updates triggered by setNumber are processed asynchronously by React for performance reasons.}

// => 2

// {Note 2 :  The two code snippets are both implementations of a counter component using React and useState hook. The difference lies in how the state updates are handled.

//     In the first snippet:
    
//     function clickHandler() {
//         setNumber(number + 1);
//         setNumber(number + 1);
//         setNumber(number + 1);
//         console.log(number);
//     }
//     The clickHandler function updates the number state by directly using the current value of number. However, since state updates are asynchronous in React, calling setNumber multiple times in succession like this will not result in the expected behavior. The state updates will be batched together and only the last value will be applied. Therefore, even though setNumber(number + 1) is called three times, the value of number logged to the console will still be the initial value of 0.
    
//     In the second snippet:
 
//     function clickHandler() {
//         setNumber(number => number + 1);
//         setNumber(number => number + 1);
//         setNumber(number => number + 1);
//         console.log(number);
//     }
//     The clickHandler function uses the functional form of the setNumber function, where the previous state value is passed as a parameter. By using this form, React ensures that the state updates are applied correctly, even when multiple updates are performed in succession. Each call to setNumber will receive the correct previous state value and update the state accordingly. Therefore, in this case, the value of number logged to the console will be 0 because the state updates have not been applied yet.
    
//     To summarize, the second snippet using the functional form of setNumber is the correct approach for updating the state in a situation like this, where multiple updates need to be performed in succession.}