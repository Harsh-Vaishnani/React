import React, { useState, useEffect } from 'react'
import axios from 'axios';

const CrudApp1 = () => {

    const [user, setuser] = useState();
    const [pass, setpass] = useState();
    const [api, setapi] = useState([]);
    const [id, setid] = useState();
    const [flag, setflag] = useState(true);
    const [isAdded, setisAdded] = useState(false);


    const get = async () => {
        await axios.get(`https://63660e09f711cb49d107c6fa.mockapi.io/api`).then((r) => setapi(r.data))
    };


    const dele = async (id) => {
        await axios.delete(`https://63660e09f711cb49d107c6fa.mockapi.io/api/${id}`)
        setflag(!flag);
    };


    const insert = async () => {
        await axios.post(`https://63660e09f711cb49d107c6fa.mockapi.io/api`, { user: user, pass: pass })

        setuser("")
        setpass("")
        setflag(!flag);


    }


    const update = async () => {
        await axios.put(`https://63660e09f711cb49d107c6fa.mockapi.io/api/${id}`, { user: user, pass: pass })

        setuser("")
        setpass("")
        setflag(!flag);
        setisAdded(false)
    }


    const Edit = (h) => {
       
        setid(h.id)
        setuser(h.user)
        setpass(h.pass)
        setisAdded(true)

    }



    useEffect(() => {

        get();
    }, [flag]);
    return (
        <>
            <div className='container mt-3' style={{ width: "500px", border: "2px solid black" }} >
                <div className="mb-3 mt-2">
                    <label htmlFor="exampleInputText1" className="form-label">Username</label>
                    <input onChange={(e)=>setuser(e.target.value)} value={user} type="text" className="form-control" id="exampleInputText1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onChange={(e)=>setpass(e.target.value)} value={pass} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button className="btn btn-success mb-2" onClick={isAdded ? update : insert}>{isAdded ? "Update" : "Submit"}</button>
            </div>



            <div className="container mt-5">
                <table className="table" border={1} width={300}>
                    <thead className='bg-warning'>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Username</th>
                            <th scope="col">Password</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {api.map((val) => {
                        return (
                            <>
                                <tbody>
                                    <tr>
                                        <td>{val.id}</td>
                                        <td>{val.user}</td>
                                        <td>{val.pass}</td>
                                        <td>
                                            <button className='btn btn-success' onClick={() => Edit(val)}>Edit</button>
                                            &nbsp;&nbsp;
                                            <button className='btn btn-danger' onClick={() => dele(val.id)}>Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </>
                        )
                    })}
                </table>
            </div>
        </>
    );
};

export default CrudApp1
