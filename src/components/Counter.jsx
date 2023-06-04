import React, { useState, useMemo, memo, useRef } from 'react'

const Counter = memo(()=>{
  
    const [number, setNumber] = useState(0);
    let num = useRef(0);

    // console.log("Counter");

    function clickHandler() {
        // setNumber(number=>number+1);
        // setNumber(number=>number+1);
        // setNumber(number=>number+1); VS

        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
        num.current++

        console.log(number);
        console.log(num.current);
    }
  return (
    <div>
        <h2>New Topic</h2>
        <button className='btn margin' onClick={clickHandler} >Click me</button>
        <button className='margin'><span>{number}</span></button>
        <button className='margin'><span>{num.current} 'times clicked'</span></button>
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


// Note: 3 
// The useRef hook is a React hook that allows you to create a mutable ref object. A ref object is a special object that has a current property that can be used to access the current value of the ref. The value of the ref can be changed at any time, and this will not cause the component to re-render. The useRef hook is often used to store state that does not need to be re-rendered when it changes. For example, you could use useRef to store a reference to a DOM element, or to store a counter that is incremented each time a button is clicked. The useRef hook takes one argument, which is the initial value of the ref object. The initial value can be any value, including a number, a string, an object, or a function.

// Here is an example of how to use the useRef hook:

// const [ref, setRef] = useState(null);

// useEffect(() => {
//   // This function will be called every time the component renders
//   // We can use the ref object to access the DOM element
//   const element = ref.current;
//   element.addEventListener('click', () => {
//     // We can change the value of the ref object
//     setRef(element.textContent);
//   });
// }, [ref]);
// Use code with caution. Learn more
// In this example, we are using useRef to store a reference to a DOM element. We are then using useEffect to listen for clicks on the element. When the element is clicked, we use the ref object to get the current value of the element's text content. We then use setRef to set the value of the ref object to the new text content.

// The useRef hook is a powerful tool that can be used to store state that does not need to be re-rendered when it changes. It is a great way to improve the performance of your React components.

// Here are some additional things to keep in mind when using the useRef hook:

// The value of the ref object is persisted between renders. This means that if you change the value of the ref object, the new value will be available in the next render.
// Updating the value of the ref object is a side effect. This means that it should not be done directly in the render function. Instead, it should be done in a useEffect or useLayoutEffect hook.
// The useRef hook can be used to access DOM elements directly. This can be useful for things like listening for events or measuring the size of an element.

// Here are some additional things to keep in mind when displaying the value of a useRef hook on the screen:

// The ref.current property is only available in the render function. This means that we cannot use it to access the value of the ref object outside of the render function.
// The ref.current property is not reactive. This means that it will not automatically update when the value of the ref object changes. If we want the output to reflect changes to the value of the ref object, we need to use useEffect or useLayoutEffect to update the output.
