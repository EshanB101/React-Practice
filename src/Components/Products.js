import {Link, Outlet} from 'react-router-dom'
import '../App.css'

const Products = () => {
  return (
  <div className={'p-12'}>
    <div><input className={'input-styles'} type={'search'} placeholder={'Search..'} /></div>
    <nav className={'p-4 font-bold'}>
      <Link to={'featured'} class={'mr-4 underline'}>Featured</Link>
      <Link to={'new'}  class={'mr-4 underline'}>New</Link>
    </nav>
    <Outlet/>
  </div>)
}

export default Products