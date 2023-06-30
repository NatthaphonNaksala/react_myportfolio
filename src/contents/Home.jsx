import React, { Component } from "react";
import Social from '../components/Social';
import ReactTypingEffect from "react-typing-effect";


// import ProfilerPic from "react";


class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src="https://i.pinimg.com/originals/6a/cc/4f/6acc4f1c53be19a872a0d9d5c46fdade.jpg"  alt="profile" className="profile" />
                <ReactTypingEffect text={['I am Natthaaphon','I am a Web Developer']} speed={80} eraseDelay={200} className="typingeffect" />
                <Social />
            </div>
        );
    }
}

export default Home;