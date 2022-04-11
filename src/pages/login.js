import { useState } from "react";
import { Input, Button } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firibase";

const sign = (form) => {
  signInWithEmailAndPassword(auth, form.email, form.password);
};

// @TODO  вынести форму в отдельный компонент
export function LoginPage() {
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
      <h1>Login</h1>

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
          sign(form);
        }}
      >
        send
      </Button>
    </div>
  );
}
