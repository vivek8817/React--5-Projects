import React from "react";
import { useState } from "react";

import Formfield from "../components/Formfield";
import SubmitBtn from "../components/SubmitBtn";
import ErrorMessage from "../components/ErrorMessage";

const RegisterForm = () => {
  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, seterror] = useState({});
  const [isSubmitting, setisSubmitting] = useState(false);
  const [sucess, setsucess] = useState(false);

  function fakingRegisterAPI() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("User registered successfully");
      }, 2000);
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    const updatedForm = { 
      ...form,
      [name]: value 
    };
    setform(updatedForm);

    const validationErrors = validateForm(updatedForm);
    seterror(validationErrors);
  }

  function validateForm(data) {
    const newErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!data.email.includes("@")) {
      newErrors.email = "Invalid email address";
    }

    if (data.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    if (data.confirmPassword !== data.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validateForm(form);

    seterror(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setisSubmitting(true);

    await fakingRegisterAPI();

    setisSubmitting(false);
    setsucess(true);

    setform({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    seterror({});
  }

  const isFormValid = 
  Object.keys(error).length === 0 && 
  form.name && 
  form.email && 
  form.password && 
  form.confirmPassword;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Registration</h2>

      {sucess && (
        <p className="text-green-500 mb-4">Registration successful!</p>
      )}

      <form onSubmit={handleSubmit}>
        <Formfield
          label="Username"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <ErrorMessage message={error.name} />
        <Formfield
          label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <ErrorMessage message={error.email} />
        <Formfield
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <ErrorMessage message={error.password} />
        <Formfield
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        <ErrorMessage message={error.confirmPassword} />

        <SubmitBtn isSubmitting={isSubmitting} disabled={!isFormValid} />
      </form>
    </div>
  );
};

export default RegisterForm;
