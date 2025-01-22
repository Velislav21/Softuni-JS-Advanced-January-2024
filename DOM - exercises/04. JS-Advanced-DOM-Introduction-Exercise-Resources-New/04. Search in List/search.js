function search() {

   const inputField = document.getElementById('searchText').value;
   const towns = Array.from(document.querySelectorAll('#towns li'));
   
   let counter = 0;

   towns.forEach((town) => {
 
      if (town.textContent.includes(inputField)){

         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         counter++
      }else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   })

   document.getElementById('result').textContent = `${counter} matches found`
}
