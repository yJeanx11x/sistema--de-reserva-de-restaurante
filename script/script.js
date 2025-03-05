// Número de pessoas
const numberPerson = document.querySelector("#numberPerson");
numberPerson.addEventListener("click", () => {
  switch (numberPerson.value) {
    case "1 Pessoa":
      console.log("1 Pessoa");
      break;
    case "2 Pessoas":
      console.log("2 Pessoas");
      break;
    case "3 Pessoas":
      console.log("3 Pessoas");
      break;
    case "4 Pessoas":
      console.log("4 Pessoas");
      break;
    case "5 Pessoas":
      console.log("5 Pessoas");
      break;
    default:
      console.log(Error);
      break;
  }
});
// Dia da demana do Agendamento
const DayOfTheWeek = document.querySelector("#DayOfTheWeek");
DayOfTheWeek.addEventListener("click", () => {
  switch (DayOfTheWeek.value) {
    case "Segunda-Feira":
      console.log("Segunda-Feira");
      break;

    case "Terça-Feira":
      console.log("Terça-Feira");
      break;

    case "Quarta-Feira":
      console.log("Quarta-Feira");
      break;

    case "Quinta-Feira":
      console.log("Quinta-Feira");
      break;

    case "Sexta-Feira":
      console.log("Sexta-Feira");
      break;

    case "Sabado":
      console.log("Sabado");
      break;

    default:
      break;
  }
});
// horario da reserva
const Time = document.querySelector("#Time");
Time.addEventListener("click", () => {
  switch (Time.value) {
    case "12:30":
      console.log("12:30");
      break;

    case "15:00":
      console.log("15:00");
      break;

    case "18:00":
      console.log("18:00");
      break;

    case "20:00":
      console.log("20:00");
      break;

    case "22:00":
      console.log("22:00");
      break;

    default:
      break;
  }
});

// reservar
const btn=document.querySelector('.btn')
btn.addEventListener('click',()=>{
        class Person{
                constructor(qtdP,dia,horario){
                        this.Pessoas=qtdP=`${numberPerson.value}`,
                        this.dia=dia=`${DayOfTheWeek.value}`,
                        this.horario=horario=`${Time.value}`

                }
        }
        const criarP=new Person(`${numberPerson.value} ${DayOfTheWeek.value} ${Time.value}`)
        console.log(criarP)
})