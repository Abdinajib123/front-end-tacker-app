import { LoginForm } from "@/components/login-form"

export  function Loginpage() {
  return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <LoginForm className="w-full max-w-md" />
        </div>
  )
}

export default Loginpage;