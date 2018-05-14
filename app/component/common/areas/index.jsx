import React from 'react';
import '../../../public/css/flex.css';
import './area.pcss';
import areaData from './areaData';

const {province, city, county} = areaData;

class Areas extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            step: 1,
            step1Activ: undefined,
            step2Activ: undefined,
            step3Activ: undefined,
            stepTxt1: '全国',
            stepTxt2: '请选择',
            stepTxt3: '请选择',
            list1:province,
            list2:[],
            list3:[]
        };

        if(this.props.initData && this.props.initData.length===3){
            let [a,b,c] = this.props.initData;
            let arr = this.calcInitData(a,b,c);
            this.state.step1Activ = arr[0];
            this.state.step2Activ = arr[1];
            this.state.step3Activ = arr[2];
            this.state.stepTxt1 = a;
            this.state.stepTxt2 = b;
            this.state.stepTxt3 = c;
            this.state.step = 3;
            this.state.list2 = city[arr[0]];
            this.state.list3 = county[arr[0]][arr[1]];
        }
    }
    calcInitData(pStr,cStr,tStr){
        let pIndex = province.indexOf(pStr), CIndex = -1, tIndex = -1;
        if(pIndex>-1){
            CIndex = city[pIndex].indexOf(cStr);
            if(CIndex>-1){
                tIndex = county[pIndex][CIndex].indexOf(tStr);
            }
        }
        return [pIndex, CIndex, tIndex]
    }
    sclick(index,callback){
        if(this.state.step===1){
            this.setState({
                step: 2,
                stepTxt2: '请选择',
                stepTxt3: '请选择',
                stepTxt1: province[index],
                step1Activ: index,
                list2:city[index],
                list3:[]
            });
        }else if(this.state.step===2){
            var list3 = county[this.state.step1Activ][index];
            if(!list3 || !list3.length){
                this.setState({
                    list3: [],
                    step: 2,
                    stepTxt3: '请选择',
                    stepTxt2: city[this.state.step1Activ][index],
                    step2Activ: index
                });
                this.props.callback && this.props.callback(
                    this.state.stepTxt1,city[this.state.step1Activ][index],'-1',
                    this.state.step1Activ, index, -1
                );
                return;
            }
            this.setState({
                list3: list3,
                step: 3,
                stepTxt3: '请选择',
                stepTxt2: city[this.state.step1Activ][index],
                step2Activ: index
            });
        }else if(this.state.step===3){
            this.setState({
                stepTxt3: county[this.state.step1Activ][this.state.step2Activ][index],
                step3Activ: index
            });
            this.props.callback && this.props.callback(
                this.state.stepTxt1,this.state.stepTxt2,county[this.state.step1Activ][this.state.step2Activ][index],
                this.state.step1Activ,this.state.step2Activ,index
            );
        }
    }
    tapclick(index){
        this.setState({step:index})
    }
    render() {
        let b = 0;
        let arr = this.state['list'+this.state.step].map((v,i)=> {
            b = i;
            return <span onClick={ this.sclick.bind(this, i) } className={i===this.state[`step${this.state.step}Activ`]?'active':''} key={i}>{v}</span>;
        });
        if((b+1) % 4 !== 0) arr.push(<span key={b+1}></span>);
        return (
            <React.Fragment>
                <ul className="areas-top" flex="">
                        <li flex-box="0"></li>
                    <li ref="stepLabel1" flex-box="1" onClick={this.tapclick.bind(this,1)} className={this.state.step===1?'active':''}>{this.state.stepTxt1}</li>
                        <li flex-box="0"></li>
                    <li ref="stepLabel2" flex-box="1" onClick={this.tapclick.bind(this,2)} className={this.state.step===2?'active':''}>{this.state.stepTxt2}</li>
                        <li flex-box="0"></li>
                    <li ref="stepLabel3" flex-box="1" onClick={this.tapclick.bind(this,3)} className={this.state.step===3?'active':''}>{this.state.stepTxt3}</li>
                        <li flex-box="0"></li>
                </ul>
                <div className="areas-btm">
                    {arr}
                </div>
            </React.Fragment>
        )
    }
}

export default Areas;