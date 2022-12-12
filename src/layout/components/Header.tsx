import { Header } from '../css'
import { matchRoutes, NavLink, useLocation, generatePath } from 'react-router-dom'
import { routes as allRoutes } from '../../router'

export default (props: any) => {
  const location = useLocation()
  const routes = matchRoutes(allRoutes, location)
  // console.log(routes);
  const parentPath = routes?.[1].pathname
  const subRoutes = routes?.[1].route.children ?? []
  const renderSubRoutes = subRoutes.map(r => {
    return <NavLink key={r.path} to={ `${parentPath}/${r.path}`}>{ r.handle?.title }</NavLink>
  })
  return (
    <Header>
      <ul>
        { renderSubRoutes }
      </ul>
    </Header>
  )
}
