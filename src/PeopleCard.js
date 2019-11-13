import React from 'react';
import photo from './photo.jpg'

let users = {
    "userId": 1,
    "login": "log",
    "password": "qwerty",
    "lastName": "Иванов",
    "firstName": "Дмитрий",
    "middleName": "Сергеевич",
    "picture": photo,
    "isAdmin": true,
    "email": "dima@mail.ru"
};
export default 
function PeopleCard() {
    return (
        <div className="card" >
            <ul>
                <li><img src={users.picture} alt='Фото сотрудника' height={100}/></li>
                <li>{users.lastName} {users.firstName} {users.middleName}</li>
                <li>Email - {users.email}</li>
            </ul>
        </div>
    )
}