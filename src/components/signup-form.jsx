import { cn } from "@/lib/utils.jsx";
import { Button } from "@/components/ui/button";
import { useSignupMutation } from "@/redux/api/authApi.jsx";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function SignupForm({ className, ...props }) {
  const navigate = useNavigate();
  const [signup, { isLoading, isError, error }] = useSignupMutation();

  const [username, setUsername] = useState("");
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signup({ username, email, password }).unwrap();
      console.log("Signup successful:", response);

      // OPTIONAL: save token if your backend returns one
      if (response?.token) localStorage.setItem("token", response.token);

      // Go to dashboard (or navigate("/login") if you prefer)
      navigate("/dashboard");
    } catch (err) {
      console.error("Signup failed:", err);
    }
  };

  const serverMsg =
    (error && "data" in error && error.data?.message) ||
    (error && "error" in error && error.error) ||
    null;

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center space-y-2">
          <CardTitle>Create your account</CardTitle>
          <CardDescription>Enter your details to sign up</CardDescription>
        </CardHeader>

        <CardContent>
          {/* attach onSubmit here */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="username">Username</FieldLabel>
                <Input
                  id="username"
                  type="text"
                  placeholder="your username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Field>

              {isError && (
                <p className="text-sm text-red-600">
                  {serverMsg || "Signup failed. Please try again."}
                </p>
              )}

              <Field>
                <div className="grid gap-2">
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Signing up..." : "Sign up"}
                  </Button>
                  <Button variant="outline" type="button" className="w-full">
                    Sign up with Google
                  </Button>
                </div>

                <FieldDescription className="text-center">
                  Already have an account? <Link to="/">Log in</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default SignupForm;
