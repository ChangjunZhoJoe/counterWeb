    // src/App.js

    import React, { Component } from 'react';

    class App extends Component {

      constructor(props) {
        super(props);
        this.state = {counter: 0};
        this.increase=this.increase.bind(this);
        this.refreshCount=this.refreshCount.bind(this)
      }

      componentDidMount() {
        this.refreshCount()
        window.setInterval(()=>{this.refreshCount()}, 3000);
      }

      refreshCount(){
        fetch('https://l32vdty2ec.execute-api.ap-northeast-1.amazonaws.com/test5/getcount3',{
          method: 'POST',
          headers:{
            'Access-Control-Allow-Origin':'*'
          },
          mode:'cors'
        })
        .then(res => res.json())
        .then((data) => {
          this.setState({ counter: parseInt(data.Item.countNum.N) })
        })
        .catch(console.log)
      }

      increase(){
        fetch('https://l32vdty2ec.execute-api.ap-northeast-1.amazonaws.com/test5/increase')
        .then(res => res.json())
        .then((data) => {
          this.setState({ counter: this.state.counter +1 })
        })
        .catch(console.log)
      }

      render() {

        return (
          <div className="card">
            <div className="card-body">
              <p>count = {String(this.state.counter)}</p>
              <button onClick={this.increase} >
                increase
              </button>
            </div>
          </div>
        );
      }
    }
        

    export default App;