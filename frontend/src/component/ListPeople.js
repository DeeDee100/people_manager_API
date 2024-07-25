import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PeopleService from '../service/PeopleService';

const ListPeopleComponent = () => {
    const [peopleArray, setpeopleArray] = useState([]);

    useEffect(() => {
        getAllPeople();
    }, []);

    function getAllPeople() {
        PeopleService.getAllPeople()
            .then(res => { setpeopleArray(res.data); console.log(res) })
            .catch(e => console.log(e));
    }
    function deletePeople(e, id) {
        e.preventDefault()
        PeopleService.deletePeople(id).then(getAllPeople()).catch(e => console.log(e));
    }


    return (
        <div className='container'>
            <Link to={"/add-people"} className='btn btn-primary mb-2 mt-3' href="">Add Pessoas</Link>
            <h2 className='text-center mb-4'>Lista Pessoas</h2>
            <table className='table table-bordered table striped'>
                <thead>
                    <th>Pessoa ID</th>
                    <th>Pessoa Nome</th>
                    <th>Pessoa CPF</th>
                    <th>Pessoa Email</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {peopleArray.map(people =>
                        <tr id={people.id}>
                            <td>{people.id}</td>
                            <td>{people.firstName}</td>
                            <td>{people.cpf}</td>
                            <td>{people.email}</td>
                            <td>
                                <Link to={`/add-people/${people.id}`} className='btn btn-info' href="">Update</Link> {" "}
                                <a onClick={(e) => deletePeople(e, people.id)} className='btn btn-danger'>Delete</a>
                            </td>
                        </tr>)}

                </tbody>
            </table>
        </div>
    )
}

export default ListPeopleComponent