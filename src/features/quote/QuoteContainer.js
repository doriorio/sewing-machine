import { useState, useEffect } from 'react';
import { getRandomArbitrary } from '../../app/utils/randomNum';
import { CSSTransition } from 'react-transition-group' ;
import SocialSharing from '../social-sharing/SocialSharing';

export function QuoteContainer() {
    const [quote, setQuote] = useState('you give what you get');
    const [author, setAuthor] = useState(`c'est moi`);
    const [quoteVisibility, setQuoteVisibility] = useState(true)

    const buttonStyle = {
        display: 'block',
        backgroundColor: 'black',
        padding: 10,
        color: 'white'
    }
    const handleFocus = (evt) => {
        if (!author) return;
        setQuoteVisibility(false);

    }   
    const handleUnfocus = (evt) => {
        if (!quote) return;
        setQuoteVisibility(true);
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
            <div onMouseEnter={handleFocus} onMouseLeave={handleUnfocus}>
            {quoteVisibility ? 
                <h1 className='currentQuote'>{quote}</h1> :
            <CSSTransition 
                onEnter={handleFocus}
                timeout={200}
                classNames="fade-appear"

            >
                <h3>{author}</h3></CSSTransition>
            }
            </div>
            <button style={buttonStyle} onClick={callAPI}>Get New Quote</button>
            <SocialSharing />
        </section>
    ) 
}