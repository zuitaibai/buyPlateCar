import React from 'react';
import Item from '../common/item/Index'
import ajax from '../../util/ajax'
import api from '../../util/api'

import '../../public/css/common.pcss';
import '../../public/css/flex.css';
import './index.pcss';

import Areas from '../common/areas/index'


class Index extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeTab: 0,
            tab0: [],
            tab1: [],
            area1:{
                display: false,
                label: '全国',
            },
            area2:{
                display: false,
                label: '全国',
            }
        };
        this.changeTab= this.changeTab.bind(this);
    }
    changeTab(eq){
        if(eq===this.state.activeTab) return;
        eq=eq?eq:0;
        let stat = {activeTab:eq};
        stat[`area${this.state.activeTab+1}`] = {
            display: false,
            label: this.state[`area${this.state.activeTab+1}`].label
        };
        this.setState(stat);
        if(!this.state['tab'+eq].length) this.getList(eq);
    }
    async getList(tabIndex=0){
        let a = await ajax.post(api.list,{carTypeCode:tabIndex});
        if(tabIndex===0) this.setState({
            tab0: a.data.data
        });
        else this.setState({
            tab1: a.data.data
        })
    }
    componentDidMount() {
        this.changeTab();
    }
    area1Change(p,c,t,pIndex,cIndex,tIndex){
        console.info('area1: %s,%s,%s,%d,%d,%d',p,c,t,pIndex,cIndex,tIndex);
        this.setState({
            area1:{
                display: false,
                label: p+c+t
            }
        });
    }
    area2Change(p,c,t,pIndex,cIndex,tIndex){
        console.info('area2: %s,%s,%s,%d,%d,%d',p,c,t,pIndex,cIndex,tIndex);
        this.setState({
            area2:{
                display: false,
                label: p+c+t
            }
        });
    }
    toggleAreas(){
        var stat = {};
        stat[`area${this.state.activeTab+1}`]={
            display: !this.state[`area${this.state.activeTab+1}`].display,
            label: this.state[`area${this.state.activeTab+1}`].label
        };
        this.setState(stat);
    }
    render() {
        return (
            <div className="app-main" flex="dir:top">
                <header flex-box="0" className="head" flex="dir:left main:justify cross:center">
                    <div className="head-back"><span className="head-back-btn">back</span></div>
                    <ul className="headTabs" flex="main:center">
                        <li className={this.state.activeTab===0?'active':''} onClick={()=> this.changeTab(0)}>买车头</li>
                        <li className={this.state.activeTab===1?'active':''} onClick={()=> this.changeTab(1)}>买挂车</li>
                    </ul>
                    <a href="/businessJoin">商家入住</a>
                </header>
                <section flex-box="0" className="neck" flex="cross:center">
                    <div flex-box="1">
                        <p className="neck-area" onClick={this.toggleAreas.bind(this)}>{this.state[`area${this.state.activeTab+1}`].label}</p>
                        <div className="neckChild" style={{display:this.state.area1.display?'block':'none'}}>
                            <Areas callback={this.area1Change.bind(this)} />
                        </div>
                        <div className="neckChild" style={{display:this.state.area2.display?'block':'none'}}>
                            <Areas callback={this.area2Change.bind(this)} />
                        </div>
                    </div>
                    <div flex-box="0"></div>
                    <div flex-box="1">品牌</div>
                </section>
                <main className="main" flex-box="1">
                    <section className="list1w">
                        <ul>
                            {
                                this.state['tab'+this.state.activeTab].map((v,i)=>
                                    <Item datas={v} key = {i} />
                                )
                            }
                        </ul>
                    </section>
                </main>
            </div>
        );
    }
}

export default Index;