import React from 'react';
import './item.pcss';


export default class Item extends React.Component {

    render(){
        const { datas } = this.props;
        let brandsArr = datas.brand.split(',').map((v,i)=> <span key={i+1}>{v}</span> );
        let brandsArrPush = datas.businessType===1 ? <span key="0" className="company">厂家直销</span> : <span key="0" className="dealer">经销商</span>;
        brandsArr.unshift(brandsArrPush);
        let li = '';
        if(+datas.displayStyle===2) li = (
            <li className="list1">
                <p>{datas.factoryName}</p>
                <div className="brand">{brandsArr}</div>
                <a href={datas.isSpecial===1?datas.specialUrl:'javascript:;'}>
                    <dl flex="main:justify"><dd><img src={datas.pictureNewUrl1} alt=""/></dd><dd><img src={datas.pictureNewUrl2} alt=""/></dd><dd><img src={datas.pictureNewUrl3} alt=""/></dd></dl>
                </a>
                <p><em><span>{datas.clickAmount}</span>查看</em> <em><span>{datas.callAmount}</span>咨询</em></p>
            </li>
        );
        else if(+datas.displayStyle===1) li = (
            <li className="list2">
                <a href={datas.isSpecial===1?datas.specialUrl:'javascript:;'} flex="">
                    <div flex-box="0"><img src={datas.pictureNewUrl1} alt=""/></div>
                    <div flex-box="1" flex="dir:top box:justify">
                        <p>{datas.factoryName}</p>
                        <div className="brand">{brandsArr}</div>
                        <p><em><span>{datas.clickAmount}</span>查看</em> <em><span>{datas.callAmount}</span>咨询</em></p>
                    </div>
                </a>
            </li>
        );
        return li
    }
}


