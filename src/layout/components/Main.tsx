import { Main } from '../css'
import { Outlet } from 'react-router-dom'

export default () => {
  return (
    <Main>
      <Outlet />
    </Main>
  )
}
