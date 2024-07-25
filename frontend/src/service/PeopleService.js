import axios from "axios";

const BASE_URL = "http://localhost:8080/pessoas";
class PeopleService{

    //**Method to get all employee from our api or database */
    getAllPeople(){
        return axios.get(BASE_URL);
    }
    /**Method to save employee */
    savePeople(employeeData){
        return axios.post(BASE_URL, employeeData);
    }
    updatePeople(id, employeeData){
        return axios.put(`${BASE_URL}/${id}`, employeeData)
    }
    getPeopleById(id){
        return axios.get(`${BASE_URL}/${id}`);
    }
    deletePeople(id){
        return axios.delete(BASE_URL +"/" +id);
    }

}
export default new PeopleService();