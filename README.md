The useCallback hook when used in combination with React.memo optimizes performance. A component memoized by React.memo would not re-render unless a prop passed to it changes. When a function is passed to a child component as a prop from a parent component, everytime the parent re-renders, a new memory address is allocated to all its constituent functions. Thus, the function which was being passed to the child, would also get a new memory location, and the reference to this new memmory location is considered as the value of the prop. This means, to the memoized child component, a dependent prop has changed, and it would get re-rendered. To solve this problem, useCallback hook is used.

In this application, useCallback is utilized to wrap the incrementCount1() function. incrementCount1 function is passed as a prop to memoized child component MemoisedShowMultipliedCount. 

DESCRIPTION

- In App.js, three states are maintained : count1, count2 and count3. 
- There are three buttons to increment their counts.
- count2 and count3 are passed directly as props to a child component : ShowMultipliedCount. 
- The reference to the incrementCount1 function, which is used to increment the count of count1 is passed as the third prop to ShowMultipliedCount.
- ShowMultipliedCount has two functions within it. 
- These two functions take input as count1 and count2 respectively.
 
PROBLEM
- If the button to increment count1 is clicked, the ShowMultipliedCount component is not expected to render as it does not take count1 as prop, rather it takes reference of the function increment1 as prop.
- Even thought the definition of the function increment1 has not changed, the component ShowMultipliedCount still re-renders on change of value of a different prop, say count2.
- This is because the refernce to the memory address of the increment1 function has changed.

SOLUTION

- To prevent this unnecessary re-rendering, which happens as the change is memory reference of the function being interpreted as a change in value of the prop by the memoized child function, we use useCallback() hook.
- useCallback wraps the increment1 funtion.
- It takes count1 as a dependent prop in the dependency array.
- If the value of count1 has not changed since the last execution, the useCallback would return the same value of the memory reference for the enclosed increment1 function.
- Thus when this is passed as prop to the memoized child function ShowMultipliedCount, there is no change detected and the component does not re-render.

