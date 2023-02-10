import { useState } from 'react';

function Search({results, setResults}) {

    const [search, setSearch] = useState('');
    

    const handleChange = event => setSearch(event.target.value);
    const handleSubmit = event => {
        event.preventDefault();
        fetch(`https://swapi.dev/api/people/?search=${search}`)
        .then(res => res.json())
        .then(data => {
            setResults(data.results[0]);
        })
    };

    return (
        <>

        <h1>Star Wars Search</h1>

        {!results ? <p>Please type a character's name into the search box.</p> : (
            <div>
                <h2>Name: {results.name}</h2>
                <h3>Birth Year: {results.birth_year}</h3>
            </div>
        )}

        <form onSubmit={handleSubmit}> 
            <input type="text" 
            onChange={handleChange}
            value={search}
            placeholder="Type your Search"></input>
            <button>Submit</button>
        </form>
           
        </>
    );
}

export default Search;