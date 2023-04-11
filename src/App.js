import React,{useState,useEffect} from 'react';
import './App.css';

const initialState = {
    username: '',
    password: ''
}

function App() {
    const [inputs, setInputs] = useState(initialState);
    const [storeData, setStoreData] = useState([]);

    const handleChange = (e) => {
        const {name,value} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        });
        // console.log(inputs.username +"-"+ inputs.password)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setStoreData([...storeData, inputs]);
        setInputs(initialState);
    }

    const removeItem = (id) => {
        setStoreData(storeData.filter((item, index) => index !== id));
    }

    const isDisabled = inputs.username === '' || inputs.password === '';

    //TO VIEW BEFOER UPDATE
    useEffect(() => {
        console.log(`From effect: ${inputs.username} & ${inputs.password}`);
    }, [inputs]);
  return (
    <section>
        <div className="App p-4 flex flex-col justify-center items-center">
            <h1 className={'text-center text-3xl mb-6'}>LOGIN</h1>
            <form className={'p-8 shadow-xl'} onSubmit={handleSubmit}>
                <div className={'text-center'}>
                    <label>Username:</label>
                    <input
                        required
                        type="text"
                        className={'input-styles mb-4 ml-4'}
                        placeholder={'Enter name'}
                        name="username"
                        value={inputs.username}
                        onChange={handleChange}
                    />
                </div>

                <div className={'text-center'}>
                    <label>Password:</label>
                    <input
                        required
                        type="password"
                        className={'input-styles ml-4'}
                        placeholder={'Enter password'}
                        name="password"
                        value={inputs.password}
                        onChange={handleChange}
                    />
                </div>
                <button type={"submit"} className={(isDisabled ? 'bg-gray-500 text-black cursor-not-allowed' : 'bg-red-500 text-white') +' rounded-[4px] mt-4 p-2 w-full'} disabled={isDisabled}>Login</button>
            </form>
            {JSON.stringify(inputs,2,null)}
        </div>
       <h1 className={'font-bold text-center my-6'}>LIST HERE:</h1>
        <div className={'p-4 flex justify-center'}>
            <ul className={'flex justify-between basis-1/2 flex-col'}>
                {
                    storeData.map((v,i) => (
                        <div key={i} className={'flex justify-between w-full mb-4 pb-4 border-b-2 border-slate-500'}>
                            <div>
                                <li>{v.username}</li>
                                <li>{v.password}</li>
                            </div>
                            <button className={'rounded p-2 bg-red-500 text-white'} onClick={()=>removeItem(i)}>x</button>
                        </div>
                    ))
                }
            </ul>
        </div>
    </section>
  );
}

export default App;
