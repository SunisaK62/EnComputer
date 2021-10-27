module.exports = (sequelize, DataTypes) => {
    const Win = sequelize.define('Win', {
        name: DataTypes.STRING,
        lastname: DataTypes.STRING,
        tel: DataTypes.STRING,
        date: DataTypes.STRING,
        quantity: DataTypes.STRING,
    })
    return Win;
}