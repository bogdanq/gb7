import { useState } from "react";
import { Input, Button } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firibase";

const create = (form) => {
  createUserWithEmailAndPassword(auth, form.email, form.password);
};

// @TODO  вынести форму в отдельный компонент
export function SignUpPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChangeForm = (event) => {
    const field = event.target.getAttribute("data-name");

    setForm({
      ...form,
      [field]: event.target.value,
    });
  };

  return (
    <div>
      <h1>SignUpPage</h1>

      <Input
        placeholder="email"
        fullWidth
        inputProps={{
          "data-name": "email",
        }}
        onChange={handleChangeForm}
        value={form.email}
      />
      <Input
        placeholder="password"
        fullWidth
        inputProps={{
          "data-name": "password",
        }}
        onChange={handleChangeForm}
        value={form.password}
      />
      <Button
        onClick={() => {
          create(form);
        }}
      >
        sign up
      </Button>
    </div>
  );
}
