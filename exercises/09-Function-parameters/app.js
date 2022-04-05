// Your code goes here:
let nombre=""
let fecha=""
let color=""
let edad=""
let sexo=""


function renderPerson ( nombre , fecha ,color ,edad ,sexo){
  return nombre + " is a "+ edad + " years old " + sexo +" born in " + fecha + " with " + color +" eyes ";

};

 

  ///*** Do not edit below this line ****/
  console.log(renderPerson('Bob', '05/22/1983', 'green', 23, 'male'));