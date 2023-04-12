import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
  const navigate = useNavigate();

  return (
    <div className={'flex justify-center align-center'}>
      <div className={'p-6'}>
        <h1 className={'text-center font-bold text-3xl'}>Order CONFIRMED</h1>
        <button className={'bg-pink-500 text-white rounded-[4px] p-2 w-[250px]'} onClick={() => navigate(-1)}>Go home</button>
      </div>
    </div>
  )
}

export default OrderSummary;