import bcrypt from 'bcryptjs'

const users = [
    {
        name: ' Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('12345' ,10),
        isAdmin : true
    },
    {
        name: ' John Doe',
        email: 'johndoe@example.com',
        password: bcrypt.hashSync('12345' ,10),
        isAdmin : false
    },
    {
        name: ' Jane Garry',
        email: 'jane@example.com',
        password: bcrypt.hashSync('12345' ,10),
        isAdmin : true
    },
]

export default users