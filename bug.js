```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: This will trigger an infinite loop
    setCount(count + 1);
  }, [count]); // The dependency array includes 'count', causing infinite updates

  return <div>Count: {count}</div>;
}
```