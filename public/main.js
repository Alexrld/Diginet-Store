const pc_components = async () => {
   const result = await fetch('http://localhost:3000/api/pc_components')
   const data = await result.json();
   console.log(data);
}

pc_components();