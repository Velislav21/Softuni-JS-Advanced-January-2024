function solve() {

   const tableInfo = document.querySelectorAll('tbody tr');
   const searchInputField = document.getElementById('searchField');

   const searchButton = document.getElementById('searchBtn');
   searchButton.addEventListener('click', onClick)

   function onClick() {

      tableInfo.forEach((row) => {
         row.classList.remove('select');

         if (row.textContent.includes(searchInputField.value) && searchInputField.value !== '') {
            row.className = 'select';
         };
      });
      searchInputField.value = '';
   }
}