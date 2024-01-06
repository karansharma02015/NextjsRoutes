import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AutoComplete = (props) => {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);



    useEffect(()=> {
        const fetchData = async () => {
            try{
                const response = await axios.get(`https://admin-api.lalpathlabs.com/api/test/elastic/search?search_string=${query}&result_size=2&user_session_uid=undefined&city_name=Delhi`);
                setResults(response.data.result);
            } catch (error){
                console.error('error ', error);
            }
        };

        if(query.trim() !== 1){
            fetchData();
        }
        else{
            setResults([]);
        }
    },[query]);

return (
    <>

        <div>
            <input className='p-2' onChange={(e)=> setQuery(e.target.value)} value={query} type='text' placeholder='Start Typing' />
            <ul>
                {
                    results.map((users, index) => (
                        <li key={index}>{users.result}</li>
                    ))
                }
            </ul>
        </div>

    </>
)
}

export default AutoComplete