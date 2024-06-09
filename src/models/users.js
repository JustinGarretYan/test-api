const dbPool = require('../config/database');

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users';
    

      return dbPool.execute(SQLQuery);
}

const createNewUSer = (body) => {
    const SQLQuery = `INSERT INTO users (name, email, address, DateOfBirth, MobileNumber)
                      VALUES ('${body.name}', '${body.email}','${body.address}'
                      ,'${body.DateOfBirth}','${body.MobileNumber}')`;

    return dbPool.execute(SQLQuery);                
}

const updateUser = (body, idUser) => {
    const SQLQuery = `UPDATE users SET name='${body.name}', email='${body.email}',
                        address='${body.address}', DateOfBirth='${body.DateOfBirth}',
                        MobileNumber='${body.MobileNumber}' WHERE id=${idUser}`;                   
    returndbPool.execute(SQLQuery)
}

const deleteUser = (idUser) => {
    const SQLQuery = `DELETE FROM users WHERE id= ${idUser}`;

    return dbPool.execute(SQLQuery);
}

module.exports={
    getAllUsers,
    createNewUSer,
    updateUser,
    deleteUser,
}