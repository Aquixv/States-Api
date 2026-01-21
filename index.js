const express = require('express');
const app = express();
const port = 1099;
const states = [
[
  {
    "name": "Abia",
    "capital": "Umuahia",
    "population": "approx. 4,143,115",
    "governor": "Alex Otti",
    "motto": "God's Own State"
  },
  {
    "name": "Adamawa",
    "capital": "Yola",
    "population": "approx. 4,248,436",
    "governor": "Ahmadu Umaru Fintiri",
    "motto": "Land of Beauty"
  },
  {
    "name": "Akwa Ibom",
    "capital": "Uyo",
    "population": "approx. 5,482,177",
    "governor": "Umo Eno",
    "motto": "Land of Promise"
  },
  {
    "name": "Anambra",
    "capital": "Awka",
    "population": "approx. 5,527,809",
    "governor": "Chukwuma Soludo",
    "motto": "Light of the Nation"
  },
  {
    "name": "Bauchi",
    "capital": "Bauchi",
    "population": "approx. 6,537,314",
    "governor": "Bala Mohammed",
    "motto": "Pearl of Tourism"
  },
  {
    "name": "Bayelsa",
    "capital": "Yenagoa",
    "population": "approx. 2,277,961",
    "governor": "Douye Diri",
    "motto": "Glory of all Lands"
  },
  {
    "name": "Benue",
    "capital": "Makurdi",
    "population": "approx. 5,741,815",
    "governor": "Hyacinth Alia",
    "motto": "Food Basket of the Nation"
  },
  {
    "name": "Borno",
    "capital": "Maiduguri",
    "population": "approx. 5,860,183",
    "governor": "Babagana Zulum",
    "motto": "Home of Peace"
  },
  {
    "name": "Cross River",
    "capital": "Calabar",
    "population": "approx. 3,866,269",
    "governor": "Bassey Otu",
    "motto": "The People's Paradise"
  },
  {
    "name": "Delta",
    "capital": "Asaba",
    "population": "approx. 5,663,400",
    "governor": "Sheriff Oborevwori",
    "motto": "The Finger of God"
  },
  {
    "name": "Edo",
    "capital": "Benin City",
    "population": "approx. 4,235,595",
    "governor": "Monday Okpebholo",
    "motto": "The Heartbeat of the Nation"
  },
  {
    "name": "Enugu",
    "capital": "Enugu",
    "population": "approx. 4,411,119",
    "governor": "Peter Mbah",
    "motto": "Coal City State"
  },
  {
    "name": "Gombe",
    "capital": "Gombe",
    "population": "approx. 3,256,962",
    "governor": "Muhammad Inuwa Yahaya",
    "motto": "Jewel in the Savannah"
  },
  {
    "name": "Imo",
    "capital": "Owerri",
    "population": "approx. 5,408,756",
    "governor": "Hope Uzodinma",
    "motto": "Eastern Palm State"
  },
  {
    "name": "Kaduna",
    "capital": "Kaduna",
    "population": "approx. 8,252,366",
    "governor": "Uba Sani",
    "motto": "Centre of Learning"
  },
  {
    "name": "Kano",
    "capital": "Kano",
    "population": "approx. 15,076,892",
    "governor": "Abba Kabir Yusuf",
    "motto": "Centre of Commerce"
  },
  {
    "name": "Lagos",
    "capital": "Ikeja",
    "population": "approx. 14,862,111",
    "governor": "Babajide Sanwo-Olu",
    "motto": "Centre of Excellence"
  },
  {
    "name": "Ogun",
    "capital": "Abeokuta",
    "population": "approx. 5,217,716",
    "governor": "Dapo Abiodun",
    "motto": "Gateway State"
  },
  {
    "name": "Oyo",
    "capital": "Ibadan",
    "population": "approx. 7,840,864",
    "governor": "Seyi Makinde",
    "motto": "Pacesetter State"
  },
  {
    "name": "Rivers",
    "capital": "Port Harcourt",
    "population": "approx. 7,303,663",
    "governor": "Siminalayi Fubara",
    "motto": "Treasure Base of the Nation"
  }
]
]

app.get('/', (req, res) => {
    res.send(states);
});

// app.get('/', (req, res) => {
//     res.send("Welcome to my State api");
// });

app.listen(port, () => {
    console.log(`server running on port ${port}`);
}
)