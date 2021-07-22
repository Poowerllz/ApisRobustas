module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'admin',
  database: 'tasklist',
  define: {
    timestamps: true.valueOf,
    underscored: true,
    underscoredAll: true,
  }
}
