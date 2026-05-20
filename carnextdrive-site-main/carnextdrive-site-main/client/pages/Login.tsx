import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Login() {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn === "true") {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = () => {
    if (mode === "login") {
      if (email === "admin@email.com" && password === "1234") {
        localStorage.setItem("loggedIn", "true");
        navigate("/dashboard");
      } else {
        alert("Wrong email or password");
      }
    } else {
      alert("Account created. Now login.");
      setMode("login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-8 border border-border rounded-lg shadow-sm bg-white">
        <div className="flex mb-6">
          <button
            className={`flex-1 py-2 ${
              mode === "login"
                ? "border-b-2 border-accent font-semibold"
                : "text-foreground/60"
            }`}
            onClick={() => setMode("login")}
          >
            Login
          </button>

          <button
            className={`flex-1 py-2 ${
              mode === "signup"
                ? "border-b-2 border-accent font-semibold"
                : "text-foreground/60"
            }`}
            onClick={() => setMode("signup")}
          >
            Sign Up
          </button>
        </div>

        <div className="space-y-4">
          {mode === "signup" && (
            <input
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-border rounded-md px-4 py-2"
            />
          )}

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-border rounded-md px-4 py-2"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-border rounded-md px-4 py-2"
          />

          <Button
            onClick={handleSubmit}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            {mode === "login" ? "Login" : "Create Account"}
          </Button>
        </div>
      </div>
    </div>
  );
}