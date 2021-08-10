"use strict";
var tlou = {
    title: "The Last of Us",
    description: "The best game in the world",
    genre: "Action",
    platform: ["PS3", "PS4"],
    getSimilars: function (title) {
        console.log("Similar games to " + title + ": Uncharted, A Plague Tale, Metro");
    }
};
console.log(tlou.genre);
if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}
var leftbehind = {
    title: "The Last of US = Left Behind",
    description: "You play as Ellie before the original game",
    genre: "Action",
    platform: ["PS4"],
    originalGame: tlou,
    newContent: ["3 hours story", "new characters"]
};
var CreateGame = /** @class */ (function () {
    function CreateGame(title, description, genre) {
        this.title = title;
        this.description = description;
        this.genre = genre;
    }
    return CreateGame;
}());
