```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    if (!didMount) {
      setDidMount(true);
      return; // No need to increment count on initial mount
    }
    // Correct logic: Increment count only after initial mount
    setCount(prevCount => prevCount + 1);
  }, [didMount]);

  return <div>Count: {count}</div>;
}
```