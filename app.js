let minors = 0;
let adults = 0;
let seniors = 0;
let totalAges = 0;

function calculateAges() {
    let person = prompt("Coloque el nombre de la persona o presione Enter para terminar");

    while (person !="") {
        let ages = Number(prompt("coloque la edad de la persona"));
        if (ages < 18) {
            minors+=1;
            console.log(`${person} tiene una edad de ${ages}, es menor de edad`);
        } else if(ages >= 18  && ages <= 59) {
            adults+=1;
            console.log(`${person} tiene una edad de ${ages}, es un adulto`);
        } else if(ages >=60) {
            seniors+=1;
            console.log(`${person} tiene una edad de ${ages}, es una persona de tercera edad`);
        } else {
            alert("por favor coloque la edad en numeros");
            continue;
        }

        totalAges+=ages;
        person = prompt("Coloque el nombre de la persona o presione Enter para terminar");

    };

    let totalPerson = minors + adults + seniors;
    let average = totalAges/totalPerson;

    console.log(`Resultados:
    -Personas Totales: ${totalPerson}

    -Menores de edad: ${minors}
    -Mayores de 18: ${adults}
    -Mayores de 60: ${seniors}
    `);

    console.log(`El promedio de edades es de: ${average.toFixed(0)}`);

}

calculateAges()