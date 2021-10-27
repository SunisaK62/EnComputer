module.exports = (sequelize, DataTypes) => {
    const Program = sequelize.define('Program', {
        name: DataTypes.STRING,
        lastname: DataTypes.STRING,
        tel: DataTypes.STRING,
        date: DataTypes.STRING,
        quantity: DataTypes.STRING,
    })
    return Program
}