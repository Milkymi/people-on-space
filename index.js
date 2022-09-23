window.addEventListener('DOMContentLoaded', () => {
  fetch("http://api.open-notify.org/astros.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const count = document.querySelector('#count');
      count.prepend(data.number);
      console.log(data);
      for(let i = 0; i < data.people.length; i++) {
        const dataContainer = document.createElement('tr');
        const dataItemCount = document.createElement('th');
        const dataItemCraft = document.createElement('th');
        const dataItemName = document.createElement('th');
        const table = document.querySelector('table');
        dataItemCount.textContent = i + 1;
        dataItemCraft.textContent = data.people[i].craft;
        dataItemName.textContent = data.people[i].name;
        dataContainer.append(dataItemCount, dataItemCraft, dataItemName);
        table.append(dataContainer);
      }
    })
    .catch((error) => {
      // ОБРАБОТКА ОШИБОК
      const count = document.querySelector('#count');
      const table = document.querySelector('table');
      const divError = document.createElement("div");
      divError.textContent = error;
      divError.className = 'error';
      table.replaceWith(divError);
      const span = document.createElement("span");
      span.textContent = "неизвестно";
      count.replaceWith(span);
    });
});
