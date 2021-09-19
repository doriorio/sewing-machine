import { useState, useEffect } from 'react';
import { getRandomArbitrary } from '../../app/utils/randomNum';

export function QuoteContainer() {
    const [quote, setQuote] = useState('you give what you get');
    const [author, setAuthor] = useState(`c'est moi`);

    const buttonStyle = {
        display: 'block',
        backgroundColor: 'black',
        padding: 10,
        color: 'white'
    }
    const handleFocus = (evt) => {
        if (!author) return 
        evt.target.innerText = author;
        

    }   
    const handleUnfocus = (evt) => {
        evt.target.innerText = quote;
    }
    const sectionStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '50%'
    }

    const callAPI = () => { 
        console.log('calling API')
        
        let data = {};
        fetch('/api')
        .then(res => res.json()).then(json => {
            data = json['json'];
            console.log(data);
            let ind =  getRandomArbitrary(0, data.length);
            setQuote(data[ind].text);
            setAuthor(data[ind].author);
        });
    }

    return (
        <section style={sectionStyle}>
            <h1 className='currentQuote' onMouseEnter={handleFocus} onMouseLeave={handleUnfocus} >{quote}</h1>
            
            <button style={buttonStyle} onClick={callAPI}>Get New Quote</button>
        </section>
    ) 
}