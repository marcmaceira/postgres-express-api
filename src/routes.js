module.exports = function (app, db) {
    app.get("/", (request, response) => {
        response.json({
            info: "This is a basic Node.js, Express, and Postreg API 🙂",
        });
    });

    // API Endpoints
    app.get("/v1/users", db.getUsers);
    app.get("/v1/users/:id", db.getUserByID);
    app.post("/v1/users", db.createUser);
    app.put("/v1/users/:id", db.updateUser);
    app.delete("/v1/users/:id", db.deleteUser);
};
