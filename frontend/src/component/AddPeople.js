import React, { useState, useEffect } from 'react'
import PeopleService from '../service/PeopleService';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AddPeople = () => {
    /** Variables and method to collect and store inputes */
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const peopleData = { firstName, lastName, email }; //bundle the inpute from user

    /**send data to api and navigate when succesful */
    function savePeople(e) {
        e.preventDefault();

        if (peopleData.firstName !== "" && peopleData.lastName !== "" && peopleData.email != "") {
            /**If id is present in the parameter, it should update else it should save */
            if (id) {
                PeopleService.updatePeople(id, peopleData)
                    .then(navigate("/pessoas"))
                    .catch(e => console.log(e));
            } else {
                PeopleService.savePeople(peopleData)
                    .then(navigate("/pessoas"))
                    .catch(e => console.log(e));
            }

        } else {
            alert("Please, fill in all inputes");
        }
    }

    function tile() {
        if (id) {
            return "Update People";
        } else {
            return "Add People";
        }
    }
    useEffect(() => {
        if (id) {
            PeopleService.getPeopleById(id)
                .then(res => {
                    setFirstName(res.data.firstName);
                    setLastName(res.data.lastName);
                    setEmail(res.data.email);
                })
                .catch(e => console.log(e));
        }
    }, []);

    return (
        <div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3'>
                        <h2 className='text-center'>{tile()}</h2>
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <input className='form-control'
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        type="text" placeholder='Enter First Name' />
                                </div>
                                <div className='form-group mb-2'>
                                    <input className='form-control'
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        type="text" placeholder='Enter Last Name' />
                                </div>
                                <div className='form-group mb-2'>
                                    <input className='form-control'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email" placeholder='Enter Email' />
                                </div>
                                <button onClick={(e) => savePeople(e)} className='btn btn-success'>Save</button> {" "}
                                <Link to={"/pessoas"} className='btn btn-danger' href="">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPeople