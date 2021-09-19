import React from 'react';

class SocialSharing extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
           <section>
            <button>
                Twitter
            </button>

            <button>
                Tumblr
            </button>
           </section>
        )
    }
}

export default SocialSharing;