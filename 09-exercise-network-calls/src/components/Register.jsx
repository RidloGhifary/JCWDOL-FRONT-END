import { Form, Button, Container } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addUserData } from "../features/users/usersSlice";

const Register = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(6, "is Must be 6 characters or more")
        .required("is Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("is Required"),
      password: Yup.string()
        .min(6, "Must be 6 characters or more")
        .matches(/[A-Z]/, "At least contain one uppercase letter")
        .matches(/[a-z]/, "At least contain one lowercase letter")
        .matches(/[0-9]/, "At least contain one number")
        .matches(/[^a-zA-Z0-9]/, "At least contain one special character")
        .required("is Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(addUserData(values));
      resetForm();
      alert("Successfully added user");
    },
  });

  return (
    <Container>
      <h1>Register</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>
            Name{" "}
            {formik.touched.name && formik.errors.name ? (
              <span className="text-red-500">{formik.errors.name}</span>
            ) : null}
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            Email address{" "}
            {formik.touched.email && formik.errors.email ? (
              <span className="text-rose-500">{formik.errors.email}</span>
            ) : null}
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>
            Password{" "}
            {formik.touched.password && formik.errors.password ? (
              <span className="text-rose-500">{formik.errors.password}</span>
            ) : null}
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </Form.Group>

        <Button variant="primary" className="mt-2" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
