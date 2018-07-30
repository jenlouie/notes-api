class Note {
    constructor(id, title, body) {
        this.id = id;
        this.title = title;
        this.body = body;
    }
}

const notes = [
    new Note(1, "Grocery list", "Milk, cereal, berries"),
    new Note(2, "Todo", "Pick up library book"),
    new Note(3, "Birthday ideas", "balloons, cupcakes")
];

module.exports = {
    Note,
    notes
};