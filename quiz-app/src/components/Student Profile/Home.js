import React, { useEffect, useState } from "react";
import axios from "axios";
function Home() {
  const [arr, setArr] = useState({});
  const [modalData, setModalData] = useState({});
  useEffect(() => {
    axios
      .post("http://localhost:5000/quiz/student", {
        token: localStorage.getItem("token"),
      })
      .then((res) => {
        if (res.data.length === 0) {
          setArr({ ...arr, count: 0 });
        } else {
          setArr({ ...arr, count: res.data.length, data: res.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="row justify-content-center align-items-center mt-4">
      {Object.keys(arr).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <React.Fragment>
          <div className="col-12">
            <div className="h3 text-center">Quiz Summary</div>
            {arr.count === 0 ? (
              <div className="col-12">You have not attempted any quiz </div>
            ) : (
              <div className="col-12">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Index</th>
                      <th scope="col">Quiz Id</th>
                      <th scope="col">Quiz Title</th>
                      <th scope="col">View Response</th>
                    </tr>
                  </thead>
                  <tbody>
                    {arr.data.map((element, index) => (
                      <tr>
                        <th scope="row" key={index}>
                          {index + 1}
                        </th>
                        <td>{element.quiz_id}</td>
                        <td>{element.quiz_name}</td>
                        <td>
                          <button
                            className="btn btn-warning"
                            type="button"
                            value={index}
                            data-bs-toggle="modal"
                            data-bs-target="#responsemodal"
                            onClick={(e) => {
                              setModalData(arr.data[Number(e.target.value)]);
                              console.log(modalData);
                            }}
                          >
                            View Response
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div
                  class="modal fade"
                  id="responsemodal"
                  tabindex="-1"
                  aria-labelledby="responsemodalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          {
                            Object.keys(modalData).length===0 ? <>Quiz Summary</> : <>{modalData.quiz_name}</>
                          }
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        {
                            Object.keys(modalData).length===0 ? <>Getting your responses</> : <table class="table">
                            <thead>
                              <tr>
                                <th scope="col">Index</th>
                                <th scope="col">Question</th>
                                <th scope="col">Your response</th>
                              </tr>
                            </thead>
                            <tbody>
                              {modalData.responses.map((element, index) => (
                                <tr>
                                  <th scope="row" key={index}>
                                    {index + 1}
                                  </th>
                                  <td>{element.question}</td>
                                  <td>{element.answer}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        }
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default Home;
