
exports.up = function (knex, Promise) {
      return knex.schema.createTable("projects", function (table) {
        table.increments('id')
        table.string('name')
        table.string('description')
      }).then(function () {
              return knex("projects").insert([
                  {name: "metalabs", description: "Project to store them All"},
                  {name: "Health companion", description: "We collect, advise, store and analyze, leave the sweating to the gym"},
                  {name: "Ultron testing", description: "The tool that knows what you are up to"},
                  {name: "Dream game", description: "strategy MMOG whith open API, to test your AI skills"}
              ]);
          }
      );
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("projects")
};
