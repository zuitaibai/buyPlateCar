import React from 'react';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red'
        };
        this.input = this.input.bind(this);
    }
    input(e){
        this.setState({
            color:this.refs.a.value
        });
    }
    componentDidMount(){
        (async ()=>{
            let res = await fetch('/some/path').then(res=>res.json());
            console.log(res);
            this.setState({color:res.color});
        })();
    }

    componentWillUnmount(){ }
    render() {
        return (
            <React.Fragment>
                Some text. color: <span style={{color:this.state.color}}>{this.state.color}</span>
                <h2>这是demo</h2>
                <div flex="main:center cross:center" style={{height:100}}>
                    <div>这是demo 这是demo 这是demo</div>
                </div>
                <input type="text" ref="a" onChange={this.input}/>
            </React.Fragment>
        );
    }
}

export default Index;