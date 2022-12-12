import { Nav } from '../css'
import { NavLink, matchRoutes, useLocation } from 'react-router-dom'
import { routes as allRoutes } from '../../router'

export default () => {
  const routes = matchRoutes(allRoutes, useLocation())
  const firstRoutes = routes![0].route.children?.filter(r => r.handle)

  const navLinks = firstRoutes?.map(r => {
    console.log(r);
    
    return (
      <li key={r.path}>
        <NavLink to={ r.path } >{ r.handle.title }</NavLink>
      </li>
    )
  })

  return (
    <Nav>
      <ul>
        { navLinks }
      </ul>
    </Nav>
  )
}
