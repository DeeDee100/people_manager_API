import React, { useState, useEffect } from 'react'
import PeopleService from '../service/PeopleService';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AddPeople = () => {
    /** Variables and method to collect and store inputes */
    const [name, setName] = useState('');
    const [cpf, setCPF] = useState('');
    const [email, setEmail] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const peopleData = { name, cpf, email }; //bundle the inpute from user

    /**send data to api and navigate when succesful */
    function savePeople(e) {
        e.preventDefault();

        if (peopleData.name !== "" && peopleData.cpf !== "" && peopleData.email != "") {
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
                    setName(res.data.name);
                    setCPF(res.data.cpf);
                    setEmail(res.data.email);
                    setDataNascimento(res.data.dataNascimento);
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
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        type="text" placeholder='Enter Name' />
                                </div>
                                <div className='form-group mb-2'>
                                    <input className='form-control'
                                        value={cpf}
                                        onChange={(e) => setCPF(e.target.value)}
                                        type="text" placeholder='Enter CPF' />
                                </div>
                                <div className='form-group mb-2'>
                                    <input className='form-control'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email" placeholder='Enter Email' />
                                </div>
                                <div className='form-group mb-2'>
                                    <input className='form-control'
                                        value={dataNascimento}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email" placeholder='Enter Data de Aniversário' />
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