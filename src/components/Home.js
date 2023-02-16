import React from 'react'
import Employee from  './Employee'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaPen,FaRegTrashAlt,FaUserPlus} from "react-icons/fa";
import { Link,useNavigate } from 'react-router-dom';
function Home() {
  const history=useNavigate()
  const handleDelete=(id) =>{
    var index=Employee.map(item=>item.id).indexOf(id);//index
    Employee.splice(index,1)//item remove
    console.log(Employee);//array position with remaining item
    history('/')//refresh
  } 
  const handleEdit=(id,empname,age,designantion,salary)=>{
       localStorage.setItem("ID",id);
       localStorage.setItem("NAME",empname);
       localStorage.setItem("AGE",age);
       localStorage.setItem("DESIGNATION",designantion);
       localStorage.setItem("SALARY",salary);
  }
   return (
    <>

    <h1 className='text-primary text-center m-4'>Employee Management System</h1>
    <p className='p-3'>An employee management system is a core part of HR. This article will go over the best tools to manage employee records, work history, and other important employee data.

If youare researching HR technology, youare probably doing so for one of two reasons. 1 You need an improvement to the system you currently use and are looking for an employee management app that has more (or better) features than what you are used to. 2 You are a growing business looking to implement employee management software for the first time. Either way, we can help.</p>

   
    <Link to={'/add'}>
    <Button variant='success'>Add<FaUserPlus/></Button>
    </Link>


    <h3 className='my-5'>List of Employees</h3> 
        <Table striped bordered hover>
    <thead>
      <tr>
        <th>ID</th>
        <th>Employee Name</th>
        <th>Age</th>
        <th>Designantion</th>
        <th>Salary</th>
        <th>Action</th>

      </tr>
    </thead>
    <tbody>
      {
        Employee  && Employee.length>0?
        Employee.map((item)=>(
            <tr>
                <td>{item.id}</td>
                <td>{item.empname}</td>
                <td>{item.age}</td>
                <td>{item.designantion}</td>
                <td>{item.salary}</td>
                <td>  
                  <Link to={'/edit'}>
                  <Button onClick={()=>handleEdit(item.id,item.empname,item.age,item.designantion,item.salary)}variant="primary"> <FaPen/></Button> 
                  </Link>
                  <Button onClick={()=>handleDelete(item.id)} variant="danger"> <FaRegTrashAlt/></Button> 
                  </td>

            </tr>
        )):'No data available'
    }
    </tbody>
  </Table></>
  )
}

export default Home