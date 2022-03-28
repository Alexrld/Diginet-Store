const pc_components = async () => {
   const result = await fetch('http://localhost:3000/api/pc_components')
   const data = await result.json();
   return data;
}

const renderItems = (item) => {
   const elementHtml = stringtoHTML(`<li data-id="${item._id}">${item.name}</li>`);
   elementHtml.addEventListener('click', () => {
      const element = document.getElementById('pc-components-list');
      Array.from(element.children).forEach(item => item.removeAttribute('class'));
      elementHtml.classList.add('selected');
      const pcComponentSelected = document.getElementById('pc-componet-selected');
      pcComponentSelected.value = item._id;
   })
   return elementHtml;
}

const loadPcComponents = async () => {
   const componentsList = document.getElementById('pc-components-list');
   const btn = document.getElementById('btn-enviar');
   const template = await pc_components();
   template.map(renderItems).forEach(item => componentsList.appendChild(item));
   componentsList.removeChild(componentsList.firstElementChild);
   btn.removeAttribute('disabled');
}

const stringtoHTML = (str) => {
   const parser = new DOMParser();
   const docHtml = parser.parseFromString(str, 'text/html');
   return docHtml.body.firstChild;
}

const orderPost = async (order) => {
   const resp = await fetch('http://localhost:3000/api/pc_orders', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
   })
   console.log(resp);
}

window.onload = () => {
   loadPcComponents();
   const pcCmpOrder = document.getElementById('pcComponentForm');
   pcCmpOrder.onsubmit = (e) => {
      e.preventDefault();
      const pcCmpId = document.getElementById('pc-componet-selected').value;
      if(!pcCmpId){
         alert('Selecione un componente');
         return;
      }
      const order = {
         pcComponent_id: pcCmpId,
         user_id: 'Noel'
      }
      orderPost(order);
   }
}