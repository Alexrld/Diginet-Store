const pc_components = async () => {
   const result = await fetch('http://localhost:3000/api/pc_components')
   const data = await result.json();
   return data;
}

const loadPcComponents = async () => {
   const componentsList = document.getElementById('pc-components-list');
   const btn = document.getElementById('btn-enviar');
   const template = await pc_components();
   const list = template.map(item => '<li>' + item.name + '</li>')//.forEach(item => componentsList.innerHTML += item);
   componentsList.innerHTML = list.join('');
   btn.removeAttribute('disabled');
}

window.onload = () => {
   loadPcComponents();
}