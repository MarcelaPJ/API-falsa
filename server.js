const express = require('express');
const app = express();
const port = 8080;
const { faker } = require ('@faker-js/faker');

const Usuario = () => {
    return {
        id: faker.datatype.number(100),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phone: faker.phone.number('+56 9 #### ####'),
        email: faker.internet.email(),
        password: faker.internet.password(),
    }
}

const Empresa = () => {
    return {
        id: faker.datatype.uuid(),
        name: faker.company.name(),
        adress: 
        {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            postalCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    }
}

app.listen(port, () => console.log(`Server running on port ${port}`));

app.get('/api/users/new', (req, res) => {
    const users = Usuario();
    res.json({Usuario: users})
})
    
app.get('/api/companies/new', (req, res) => {
    const company = Empresa();
    res.json({Empresa: company})
})

app.get('/api/user/company/new', (req, res) => {
    const user = Usuario();
    const company = Empresa();
    res.json({Usuario: user, Empresa: company})
})

