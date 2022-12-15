import { useEffect, useState } from "react";
import "./form.css";
import Regpic from "../../imgs/Regpic.jpg";
import axios from "axios";

function Form() {
  const [formValues, setFormValues] = useState({
    userid: "",
    title: "",
    body: "",
  });
  const [users, setUsers] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    axios.post("https://jsonplaceholder.typicode.com/posts", {
      userId: formValues.userid,
      title: formValues.title,
      body: formValues.body,
    });
    alert("Successfully Posted!");
  };

  const validate = (values) => {
    const errors = {};
    if (!values.userid) {
      errors.userid = "Please select user";
    }
    if (!values.title) {
      errors.title = "This field is required!";
    }
    if (!values.body) {
      errors.body = "This field is required!";
    }
    return errors;
  };

  return (
    <div>
      <div className="content">
        <div className="image">
          <img className="img" src={Regpic} alt="img" />
        </div>
        <center>
          <div className="form">
            <center>
              <form className="registrationForm" onSubmit={handleSubmit}>
                <label className="label">
                  USER :&nbsp;
                  <select
                    name="userid"
                    val={formValues.userid}
                    onChange={handleChange}
                  >
                    <option val="">Select user</option>
                    {users.map((user) => (
                      <option key={user.id} value={user.id}>
                        {user.name}
                      </option>
                    ))}
                  </select>
                </label>

                <p className="error">{formErrors.userid}</p>
                <label className="label">
                  TITLE :&nbsp;
                  <input
                    className="input"
                    type="text"
                    placeholder="Title here..."
                    name="title"
                    val={formValues.title}
                    onChange={handleChange}
                  />
                </label>
                <p className="error">{formErrors.title}</p>
                <label className="label">
                  BODY :&nbsp;
                  <textarea
                    className="input"
                    type="text"
                    placeholder="Body here..."
                    name="body"
                    val={formValues.body}
                    onChange={handleChange}
                  />
                </label>
                <p className="error">{formErrors.body}</p>
                <button className="Post">POST</button>
              </form>
            </center>
          </div>
        </center>
      </div>
    </div>
  );
}
export default Form;
