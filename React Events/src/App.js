function App() {
  
  const shoot = () => {
    alert("Great Shoot");
  };

  return (
    <div>
      <p>Click on button to show the alert</p>
      <button onClick={shoot}>click</button>
    </div>
  );
}
export default App;
