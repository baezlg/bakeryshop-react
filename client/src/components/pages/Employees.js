import React, {useContext, useState} from 'react';
import { EmployeeContext } from "./../../context/employee/employeeContext";

const Employees = () => {

    const employeeContext = useContext(EmployeeContext);
    const [emplo, setEmplo] = useState({
        id: "",
        name: "",
        email: "",
        avatar: ""
    });

    const onChange = e => setEmplo({ ...emplo, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();
        employeeContext.addEmployee(emplo);
        setEmplo({
            id: "",
            name: "",
            email: "",
            avatar: ""
        })
    }
    const onDelete = e => {
        const id = e.target.id;
        deleteEmployee(id);
    }

    const { employees, deleteEmployee } = employeeContext;  

    return (
        <div>
            <h2>Employees</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Avatar</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{ item.email}</td>
                            <td><img src={`img/${item.avatar}`} alt="avatar"/></td>
                            <td><button type="button" onClick={onDelete} id={item.id}>Delete</button></td>
                        </tr>  
                    ))}                  
                    <tr>
                        <td><input
                            type="text"
                            placeholder="ID"
                            name="id"
                            value={emplo.id}
                            onChange={onChange}
                        /></td>
                        <td>
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={emplo.name}
                                onChange={onChange}
                        /></td>
                        <td><input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={emplo.email}
                            onChange={onChange}
                        /></td>
                        <td><input
                            type="file"
                            placeholder="Avatar"
                            name="avatar"
                            value={emplo.avatar}
                            onChange={onChange}
                        /></td>
                        <td><button type="submit" onClick={onSubmit}>Add</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Employees;
