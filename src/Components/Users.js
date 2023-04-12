import {Link, useSearchParams} from 'react-router-dom'

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get('filter') === 'active';

  return(
    <>
      {showActiveUsers ? (<p>Showing Active users</p>) : (<p>Showing All users</p>)}
      <div>
        <button onClick={() => setSearchParams({ filter: 'active' })} className={'underline mr-4'}>Active Users</button>
        <button onClick={() => setSearchParams({})} className={'underline mr-4'}>Reset</button>
      </div>

      <div className={'flex flex-col'}>
        <Link className={'text-4xl font-bold mb-4'} to={'1'} >User 1</Link>
        <Link className={'text-4xl font-bold mb-4'} to={'2'} >User 2</Link>
        <Link className={'text-4xl font-bold mb-4'} to={'3'} >User 3</Link>
      </div>
    </>
  )
}

export default Users