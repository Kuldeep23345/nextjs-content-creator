interface AuthLayoutProps {
  children?: React.ReactNode;
}


const AuthLayout = ({children}:AuthLayoutProps) => {
  return (
    <div className="flex justify-center p-46">{children}</div>
  )
}

export default AuthLayout