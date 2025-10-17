import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMethod, postMethod } from "./StudentReducers";
import { increment } from "./reducers";

const StudentDetailsCollected = () => {
  const dispatch = useDispatch();

  const [refresh, setRefresh] = useState(true);
  const GetState = useSelector((state) => {
    return state.studentDetails.Details;
  });
  const GetCount = useSelector((state) => {
    return state.counter.count;
  });
  const [Data, setData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    console.log(GetState);
  }, [refresh]);
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!Data.name || !Data.email) {
      alert("please set You'r feild ");
    } else {
      dispatch(postMethod({ ...Data, id: Date.now() }));

      // {name: Data.name, email: Data.email, id: Date.now()}

      setData({ Data, name: "", email: "" });
      setRefresh(!refresh);
    }
  };

  return (
    <>
      <center>
        <h1>StudentDetailsCollected</h1>
      </center>
      <br />
      <br />
      <h1>{GetCount}</h1>

      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>

      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          placeholder="enter you'r Name "
          value={Data.name}
          onChange={(e) => {
            setData({ ...Data, name: e.target.value });
          }}
        />
        <br />
        <br />

        <input
          type="text"
          placeholder="enter you'r Email "
          value={Data.email}
          onChange={(e) => {
            setData({ ...Data, email: e.target.value });
          }}
        />
        <br />
        <br />

        <button>submit</button>
      </form>

      <br />
      <br />
      <br />

      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {GetState &&
            GetState?.map((item, index) => {
              let { name, email, id } = item;
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>
                    <button>edit</button>{" "}
                    <button
                      onClick={() => {
                        dispatch(deleteMethod({ id }));
                      }}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <h1>hello welcome</h1>
       <h2>how are you</h2>   
          <h3>a = 56</h3>
    </>
  );
};

export default StudentDetailsCollected;
