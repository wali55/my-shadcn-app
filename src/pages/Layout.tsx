import Component4 from "./Component4"

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <Component4 />
        {children}
    </div>
  )
}

export default Layout