import React , { useEffect , useState} from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Contact = () => {

  const Navigate = useNavigate();
  const [user, setUserData] = useState([]);

  let Id = 1 ;
  const ContactPage = async () => {
    try{
      const res = await fetch("/contacts", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        creditentials: "include",
      });


      const data = await res.json();
      setUserData(data.contacts);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      Navigate("/login");
    }
  }

  useEffect(() => {
    ContactPage();
  },[])

  const deleteContact = async (id) => {
    try{
      const res = await fetch(`/deletecontact/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      await res.json();
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
      else{
        toast.success("Contact Deleted Successfully !!",{theme: "dark",});
        ContactPage();
        Navigate("/contacts")
      }
    } catch (error) {
      console.log(error);
    }
  }
  

  return (
    <>
        <NavLink className="nav-link button" to="/addcontacts"><button className='btn button btn-primary'> Add Contacts </button></NavLink>
        <div className="c-container mt-5">
        <div className="contact-box">
          <div className="c-h">
            <h1> Contacts </h1>
          </div>
          <div className="table-responsive">
          <table className="table table-hover table-dark">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Number</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th> 
              </tr>
            </thead>
            <tbody>
              {
                user.map( (ele) => {
                  return (
              <tr>
                  <th scope="row">{Id++}</th>
                  <td>{ele.name}</td>
                  <td>{ele.number}</td>
                  <td>{ele.email}</td>
                  <td>
                    <div className="action">
                    <NavLink className="nav-link edit" to={`/editcontact/${ele._id}`}><i className="fa-solid fa-pen-to-square"></i></NavLink>
                    <button className="delete" onClick={() => deleteContact(ele._id)}><i className=  "fa-solid fa-trash"></i></button>
                    </div>
                 </td>
              </tr>
                  )
                })
              }
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
