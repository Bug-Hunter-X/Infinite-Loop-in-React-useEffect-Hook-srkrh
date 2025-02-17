# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook. The bug causes an infinite loop due to improper dependency management within the `useEffect`'s dependency array.

## Bug Description

The `MyComponent` component uses `useState` to manage a count.  The `useEffect` hook attempts to increment the count on every render, creating a cycle where the count continuously updates, leading to an infinite render loop and potential application crashes.

## Solution

The solution involves correctly specifying the dependency array for the `useEffect` hook. Removing the dependency on 'count' avoids the infinite loop, only running the effect after the initial mount. Alternatively, using a flag can improve the logic in case there's other state variables. 
