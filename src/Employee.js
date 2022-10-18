import React, { Component }  from 'react';
import { Table, Button, ButtonToolbar, Image } from 'react-bootstrap';
import { AddEmpModal } from './AddEmpModal';
import { EditEmpModal } from './EditEmpModal';
import './Employee.css';

export class Employee extends Component{

    constructor(props){
        super(props);
        this.state={emps:[], addModalShow: false, editModalShow:false }
    }

    photofilename = "anonymous.png";
    imagesrc = process.env.REACT_APP_PHOTOPATH+this.photofilename;

    refreshList(){
        fetch(process.env.REACT_APP_API+'employee')
        .then(response=>response.json())
        .then(data=>{
            this.setState({emps:data});
        })
    }

    componentDidMount(){
        this.refreshList();
    }
    
    componentDidUpdate(){
        this.refreshList();
    }   

    deleteEmp(empid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'employee/'+empid,{
                method:'DELETE',
                header:{'Accept':'application/json',
                    'Content-Type':'application/json'}
            })
        }
    }

    render() {
        const { emps, empid, empname, depmt, photofilename, doj }=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});

        return(
            <div className='EmployeeContainer p-3 m-5'>
                <Table className='table mt-1' striped bordered hover size='lg'>
                    <thead>
                        <tr>
                            <th>EmployeePhoto</th>
                            <th>EmployeeId</th>
                            <th>EmployeeName</th>
                            <th>Department</th>
                            <th>Date Of Joining</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emps.map(emp=>
                            <tr key={emp.EmployeeId}>
                                <td><Image width="100px" height="100px"
                                    src={process.env.REACT_APP_PHOTOPATH + emp.PhotoFileName}/></td>
                                <td>{emp.EmployeeId}</td>
                                <td>{emp.EmployeeName}</td>
                                <td>{emp.Department}</td>
                                <td>{emp.DateOfJoining}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className='mr-2' variant='info'
                                        onClick={()=>this.setState({editModalShow:true,
                                        empid: emp.EmployeeId, empname: emp.EmployeeName, depmt: emp.Department,
                                        photofilename: emp.PhotoFileName, doj: emp.DateOfJoining})}>
                                            Edit
                                        </Button>
                                        
                                        <Button className='mr-2' variant='danger'
                                        onClick={()=>this.deleteEmp(emp.EmployeeId)}>
                                            Delete
                                        </Button>
                                        
                                        <EditEmpModal show={this.state.editModalShow}
                                                    onHide={editModalClose}
                                                    empid={empid}
                                                    empname={empname}
                                                    depmt={depmt}
                                                    photofilename={photofilename}
                                                    doj={doj}/>
                                    </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>
                
                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow: true})}>
                        Add Employee
                    </Button>
                    <AddEmpModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>


            </div>
        )
    }
}