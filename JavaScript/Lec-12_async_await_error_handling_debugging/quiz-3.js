async function fetchData() {
    console.log('x');
  
    const response1 = fetch('https://jsonplaceholder.typicode.com/todos/1');
    const response2 = fetch('https://jsonplaceholder.typicode.com/todos/2');
  
    // Use Promise.all to wait for both promises to resolve
    const [data1, data2] = await Promise.all([response1, response2].map(async (response) => {
      const res = await response;
      const data = await res.json();
      return data;
    }));
  
    console.log('y');
    console.log('Data1:', data1);
    console.log('Data2:', data2);
}

fetchData();
