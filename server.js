const express = require('express');

//express-graphqll is a sort of a compatibility layer that helps connecting between graphql and express.
const expressGraphQL = require('express-graphql');

const schema = require('./schema/schema');

const app = express();

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('Server Listening on port 4000');
});