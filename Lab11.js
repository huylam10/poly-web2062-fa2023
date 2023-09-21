const game = {
    team1 : "U23VietNam",
    team2 : "Manchester United",
    players: [
        [
            "Cong Phuong",
            "Cong Vinh",
            "Van Toan",
            "Quang Hai",
            "Tuan Anh",
            "Xuan Truong",
            "Que Ngoc Hai",
            "Nham Manh Dung",
            "Doan Van Hau",
            "Tran Dinh Trong",
            "Bui Tien Dung",
        ],
        [
            "Wayne Rooney",
            "Ronaldo",
            "Nani",
            "Paul scholes",
            "David Beckham",
            "Roy Kean",
            "Vidic",
            "Neville",
            "Shaw",
            "Van der Sar",
            "Ferdinand",
        ],
    ],
    score: "4.0",
    scored: ["Cong Phuong, Cong Phuong, Quang Hai, Cong Vinh"],
    date: "Nov 15th, 2023",
    odds:{
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

1// 
const{players1, players2} = game.players;
console.log(players1, players2);
2//
const[gk, ...filePlayers] = players1;
console.log(gk, filePlayers);
3// 
const allplayers = [...players1, ...players2];
console.log(allplayers);
4//
const players1Final = [...players1, 'Thiago', 'Countinho', 'Perisic']
5//
const {odds: team1, x :draw, team2} = game;
6//
const printGoals =  function(...players){
    console.log(`${players.length} goals`)
} 
printGoals(...game.scored);
7//
team1 < team2 && console.log("team 1 win")
team1 > team2 && console.log("team 2 win")

