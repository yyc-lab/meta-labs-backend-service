module.exports = function(knex){

  //==============================================
  //       GET USER - By Id, username, email
  //==============================================
  const getResults = (options) => {
    let query = knex('table');
    if (options.where) {
        query = query.where('franchisee_name', 'like', '%jackmarker%');
    }

    if (options.other) {
        query = query.where('company', 'like', '%marker%');
    }

    return query.select();
  }

  function getAll(table) {
      let query = knex(table)
      return query.select().then(result => result.rows)
  }

  function getByID(table, id){
    let query = knex(table)
    query = query.where('id', id)
    return query.select().then(result => result.rows[0])
  }

  function getWhere(table, prop, value){
    let query = knex(table)
    query = query.where(prop, value)
    return query.select().then(result => result.rows);
  }
  
  function getWhereLike(table, prop, value){
    let query = knex(table)
    query = query.where(prop, 'like', `%${value}%`)
    return query.select().then(result => result.rows);
  }

  function create(table, object) {
    return knex(table)
      .insert(object)
      .returning('*')
      .then(result => result.rows[0])
  }

  return { 
    getProjects,
    addProject
  }
  
}