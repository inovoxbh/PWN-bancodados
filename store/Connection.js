const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://inovoxbh:616968@cluster0-pkwhl.mongodb.net/test?retryWrites=true&w=majority'

const openConnection = () => mongoose.connect(connectionString, { useNewUrlParser: true })

module.exports = {
    openConnection,
}