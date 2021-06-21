function solve(obj, criteria) {
    function print(object, ind) {
        console.log(`${ind}. ${object["first_name"]} ${object["last_name"]} - ${object.email}`);
    }

    let parsed = JSON.parse(obj);
    let ind = 0;
  //  let res = "";
    for (const current of parsed) {
        if (criteria == "all") {
         print(current, ind++);
        } else {
            let [crit, type] = criteria.split("-");
            if (current[crit] === type) {
              print(current, ind++);
            }
        }
    }
   // return res;
}

console.log(solve(
    `[{
        "id": "1",
        "first_name": "Kaylee",
        "last_name": "Johnson",
        "email": "k0@cnn.com",
        "gender": "Female"
      }, {
        "id": "2",
        "first_name": "Kizzee",
        "last_name": "Johnson",
        "email": "kjost1@forbes.com",
        "gender": "Female"
      }, {
        "id": "3",
        "first_name": "Evanne",
        "last_name": "Maldin",
        "email": "emaldin2@hostgator.com",
        "gender": "Male"
      }, {
        "id": "4",
        "first_name": "Evanne",
        "last_name": "Johnson",
        "email": "ev2@hostgator.com",
        "gender": "Male"
      }]`,
    'last_name-Johnson'


))

