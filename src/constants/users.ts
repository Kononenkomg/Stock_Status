export const USERS = [
    {
        id: 1,
        name: 'John',
        email: 'jhon@painters.com',
        password: '123456',
        role: 'painter',
        permissions: ['painter:read'],
        disabled: false
    },
    {
        id: 2,
        name: 'Jane',
        email: 'jane@painters.com',
        password: '123456',
        role: 'manager',
        permissions: ['painter:read', 'painter:write'],
        disabled: false
    },
    {
        id: 3,
        name: 'Adam',
        email: 'adam@painters.com',
        password: '123456',
        role: 'admin',
        permissions: ['admin:read', 'admin:write'],
        disabled: false
    }
]   