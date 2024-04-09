// Funciones flecha

/*function saludar() {
    return "Hola";
  }*/

  const saludar = saludo => "hola";
  console.log(saludar());

/*function division(a,b) {
    return a/b;
  }*/

  const division = (a,b) => a/b;
  console.log(division(6,3));

/*function miNombre(nombre) {
    return `Mi nombre es ${nombre}`;
  }*/

  const miNombre = nombre => `Mi nombre es ${nombre}`;
  console.log(miNombre("Juanjo"));

/*function test2() {
    console.log("Función test 2 ejecutada.");
  }
  function test1(callback) {
    callback();
  }*/
  
  const test2 = test2 => console.log("Función test 2 ejecutada");
  console.log(test2());
  const test1 = callback => callback;
  console.log(test1());

  // Foreach

  let gente = [
    {
      nombre: "Jamiro",
      edad: 45,
    },
    {
      nombre: "Juan",
      edad: 35,
    },
    {
      nombre: "Paco",
      edad: 34,
    },
    {
      nombre: "Pepe",
      edad: 14,
    },
    {
      nombre: "Pilar",
      edad: 24,
    },
    {
      nombre: "Laura",
      edad: 24,
    },
    {
      nombre: "Jenny",
      edad: 10,
    },
  ];


let genteMayor25 = [];
gente.forEach(genteMayor => {
    if (genteMayor.edad > 25) {
        genteMayor25.push(genteMayor)
    }
});
console.log(genteMayor25);

let genteEmpiezaJ = [];
gente.forEach(genteJ => {
    if (genteJ.nombre.charAt(0) === "J")
    genteEmpiezaJ.push(genteJ)
});
console.log(genteEmpiezaJ);

// Map
const genteMas25 = gente.map((age)=> {
    if (age.edad > 25)
    return age
});
console.log(genteMas25);

const genteComienzaJ = gente.map((name)=> {
    if (name.nombre.charAt(0) === "J")
    return name
});
console.log(genteComienzaJ);

const numbers = [ 4, 5, 6, 7, 8, 9, 10];
// Resultado esperado
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]

const elevar = numbers.map((number) => {
    return Math.pow(number, number)
});
console.log(elevar);

// Filter

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosImpares = numbers2.filter(numero => numero % 2 !== 0)
console.log(numerosImpares);

const foodList = [
    { name: 'Tempeh', isVeggie: true },
    { name: 'Cheesbacon burguer', isVeggie: false },
    { name: 'Tofu burguer', isVeggie: true },
    { name: 'Entrecot', isVeggie: false }
  ];

let foodVeggie = foodList.filter(plato => plato.isVeggie === true)
const food = foodVeggie.map(plato => `Que rico ${plato.name} me voy a comer!`)
console.log(food);

// Reduce

const numeros = [39, 2, 4, 25, 62];
// Salida--> 483600

const multiplicate = numeros.reduce((a,b) => a*b)
console.log(multiplicate);

// Extras

const staff = [
    {
      name: "Pepe",
      role: "The Boss",
      hobbies: ["leer", "ver pelis"],
    },
    {
        name: "Ana",
        role: "becaria",
        hobbies: ["nadar", "bailar"],
      },
      {
        name: "Luis",
        role: "programador",
        hobbies: ["dormir", "comprar"],
      },
      {
        name: "Carlos",
        role: "secretario",
        hobbies: ["futbol", "queso"],
      },
    ];
    
    
    // Resultado esperado
    /*
        [
          'Pepe es TheBoss y le gusta leer y ver pelis',
          'Ana es becaria y le gusta nadar y bailar',
          'Luis es programador y le gusta dormir y comprar',
          'Ana es becaria y le gusta nadar y bailar',
          'Carlos es secretario y le gusta fútbol y queso'
        ]
    */

    const presentacion = staff.map(frase => `${frase.name} es ${frase.role} y le gusta ${frase.hobbies[0]} y ${frase.hobbies[1]}`)
    console.log(presentacion);

const foodLista = ["Pizza", "Ramen", "Paella", "Entrecot"];
//Resultado esperado
/* [
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
    ]
*/


const foodCountry = foodLista.map(frase => {
return country = [
`Como soy de Italia, amo comer ${frase}`,
`Como soy de Japón, amo comer ${frase}`,
`Como soy de Valencia, amo comer${frase}`,
`Aunque no como carne, el ${frase} es sabroso`]
});
console.log(foodCountry);

// Filter

const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Viaje a cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];
/*
  [
    'TV Samsung,',
    'Viaje a Cancún'
  ]
*/

let products = inventory.filter(producto => producto.price > 300)
console.log(products);
