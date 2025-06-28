import { NavigationLink } from "@/components/ui/NavigationLink"

const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <NavigationLink title="register" to="/register">Зарегестрироваться</NavigationLink>
    </>
  )
}

export { Login }