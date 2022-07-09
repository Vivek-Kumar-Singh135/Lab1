//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(name, age, team, trophy) {
    manager = []
    manager.push(name)
    manager.push(age)
    manager.push(team)
    manager.push(trophy)
    return manager
}
// Don't edit the following code
try {
    var manager = createManager(
        managerName,
        managerAge,
        currentTeam,
        trophiesWon
    );
} catch (e) {
    // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(array) {
    if (array.length == 0)
        return null;
    else {
        var formation = {
            defender: 0,
            midfield: 0,
            forward: 0
        }
        for (let index = 0; index < array.length; index++) {
            if (index == 0)
                formation.defender = array[0];
            else if (index == 1)
                formation.midfield = array[1];
            else if (index == 2)
                formation.forward = array[2];
        }

        if (formation.defender == 0)
            formation.defender = undefined;
        else if (formation.midfield == 0)
            formation.midfield = undefined;
        else if (formation.forward == 0)
            formation.forward = undefined;
    }

    return formation;
}

// Dont edit the following code

try {
    var formationObject = createFormation(formation);
} catch (e) {
    //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(yr) {
    var arr = [];
    for (let index = 0; index < players.length; index++) {
        if (players[index].debut == yr)
            arr.push(players[index])
    }

    return arr;
}

//Progression 4 - Filter players that play at the position _______

function filterByPosition(pos) {
    var arr = [];
    for (let index = 0; index < players.length; index++) {
        if (players[index].position == pos)
            arr.push(players[index])
    }
    return arr;
}

//Progression 5 - Filter players that have won ______ award

function filterByAward(award) {
    var arr = [];
    for (let index = 0; index < players.length; index++) {
        for (let idx = 0; idx < players[index].awards.length; idx++) {

            if (players[index].awards[idx].name == award)
                arr.push(players[index])
        }

    }
    return arr;
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(award, freq) {
    var arr = [];
    for (let index = 0; index < players.length; index++) {
        var cnt = 0;
        for (let idx = 0; idx < players[index].awards.length; idx++) {

            if (players[index].awards[idx].name == award)
                cnt++;
        }
        if (cnt == freq)
            arr.push(players[index])

    }
    return arr;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(award, cntry) {
    var arr = [];
    for (let index = 0; index < players.length; index++) {
        for (let idx = 0; idx < players[index].awards.length; idx++) {

            if (players[index].awards[idx].name == award && players[index].country == cntry)
                arr.push(players[index])
        }

    }
    return arr;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(awardfreq, team, age) {
    var arr = [];
    for (let index = 0; index < players.length; index++) {
        if (players[index].awards.length >= awardfreq && players[index].team == team && players[index].age <= age)
            arr.push(players[index])
    }
    return arr;
}

//Progression 9 - Sort players in descending order of their age

function SortByAge() {
    var arr = [...players].sort((p1, p2) => p2.age - p1.age);
    return arr;
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

function FilterByTeamxSortByNoOfAwards(team) {
    var arr = [];
    for (let index = 0; index < players.length; index++) {
        if (players[index].team == team)
            arr.push(players[index])
    }
    arr.sort((p1, p2) => p2.awards.length - p1.awards.length);
    return arr;
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

function SortByNamexAwardxTimes(award, freq, cntry) {
    var arr = [];
    for (let index = 0; index < players.length; index++) {
        var cnt = 0;
        for (let idx = 0; idx < players[index].awards.length; idx++) {

            if (players[index].awards[idx].name == award)
                cnt++;
        }
        if (cnt == freq && players[index].country == cntry)
            arr.push(players[index])
    }

    arr.sort((p1, p2) => {
        var name1 = p1.name.toLowerCase();
        var name2 = p2.name.toLowerCase();

        return name1 < name2;
    })

    return arr;
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order

function SortByNamexOlderThan(age) {
    var arr = [];
    for (let index = 0; index < players.length; index++) {
        if (players[index].age > age)
            arr.push(players[index])
    }

    arr.sort((p1, p2) => {
        var name1 = p1.name.toLowerCase();
        var name2 = p2.name.toLowerCase();

        return name1 < name2;
    })

    for (let index = 0; index < arr.length; index++) {
        arr[index].awards.sort((award1, award2) => award2.year - award1.year);
    }

    return arr;
}