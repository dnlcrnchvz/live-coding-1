// Escribe tu código aquí.
/* `bigWords('bocina', myArray);` */
const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio', 'zapato', 'celular', 'libreta', 'lapiz'];

function imprimirArray(){
    const changeElement = (array) =>{
        const listItem = document.querySelectorAll(".item");
        for(let i=0; i<myArray.length; i++){
                listItem[i].textContent = array[i];
        }
    };
    changeElement(myArray); 
}
imprimirArray();