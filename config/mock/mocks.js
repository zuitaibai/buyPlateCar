module.exports = app =>{
    app.post('/plat/car/news/getList', function(req, res) {
        res.writeHead(200, { "Content-Type": "application/json;charset=UTF-8" });
        let list =  {
            "code":200,
            "msg":"查询成功",
            "data":{
                "totalRecord":100,
                "pageSize":10,
                "maxPage":10,
                "data":[
                    /*
                        isSpecial	Int	是否是特色展示0否1是
                        specialUrl	string	特色连接 绝对路径
                        utime	Long	最后编辑时间 单位毫秒
                        factoryName	String	厂家名称
                        brandCode	String	品牌代码，逗号分割
                        brand	String	品牌名称，逗号分割
                        sellRange	int	销售区域1本市,2多市,3全国
                        businessType	int	商家类型 1生产厂家,2经销商
                        clickAmount	long	点击量
                        callAmount	long	拨打量
                        displayStyle	int	广告位展示样式 1单图,2三图
                        pictureNewUrl1	string	新版本列表图片1  单图时只有这个有值
                        pictureNewUrl2	string	新版本列表图片2  ，多图时会有值
                        pictureNewUrl3	string	新版本列表图片3  ，多图时会有值
                    */
                    {
                        "id":0,abstracts:'列表简介',province:'省名称',city:'市名称',county:'county',isSpecial:1,specialUrl:'http://www.baidu.com',utime:1525773830590,
                        factoryName:'厂家名称',brandCode:'12,23,55',brand:'品牌1,品牌2,品牌3',sellRange:1,businessType:1,clickAmount:554,callAmount:623,displayStyle:1,
                        pictureNewUrl1:'resource/img/p1.jpg',pictureNewUrl2:'resource/img/p2.jpg',pictureNewUrl3:'resource/img/p3.jpg'
                    },
                    {
                        "id":0,abstracts:'列表简介',province:'省名称',city:'市名称',county:'county',isSpecial:0,specialUrl:'http://www.baidu.com',utime:1525773830590,
                        factoryName:'厂家名称',brandCode:'12,23,55',brand:'品牌1,品牌2,品牌3',sellRange:2,businessType:2,clickAmount:554,callAmount:623,displayStyle:2,
                        pictureNewUrl1:'',pictureNewUrl2:'resource/img/p2.jpg',pictureNewUrl3:'resource/img/p3.jpg'
                    },
                    {
                        "id":0,abstracts:'列表简介',province:'省名称',city:'市名称',county:'county',isSpecial:0,specialUrl:'http://www.baidu.com',utime:1525773830590,
                        factoryName:'厂家名称',brandCode:'12,23,55',brand:'品牌1,品牌2,品牌3',sellRange:3,businessType:1,clickAmount:554,callAmount:623,displayStyle:2,
                        pictureNewUrl1:'resource/img/p1.jpg',pictureNewUrl2:'resource/img/p2.jpg',pictureNewUrl3:'resource/img/p3.jpg'
                    },
                    {
                        "id":0,abstracts:'列表简介',province:'省名称',city:'市名称',county:'county',isSpecial:1,specialUrl:'http://www.baidu.com',utime:1525773830590,
                        factoryName:'厂家名称',brandCode:'12,23,55',brand:'品牌1,品牌2,品牌3',sellRange:1,businessType:2,clickAmount:554,callAmount:623,displayStyle:2,
                        pictureNewUrl1:'resource/img/p1.jpg',pictureNewUrl2:'resource/img/p2.jpg',pictureNewUrl3:'resource/img/p3.jpg'
                    },
                    {
                        "id":0,abstracts:'列表简介',province:'省名称',city:'市名称',county:'county',isSpecial:1,specialUrl:'http://www.baidu.com',utime:1525773830590,
                        factoryName:'厂家名称',brandCode:'12,23,55',brand:'品牌1,品牌2,品牌3',sellRange:2,businessType:1,clickAmount:554,callAmount:623,displayStyle:1,
                        pictureNewUrl1:'',pictureNewUrl2:'resource/img/p2.jpg',pictureNewUrl3:'resource/img/p3.jpg'
                    },
                    {
                        "id":0,abstracts:'列表简介',province:'省名称',city:'市名称',county:'county',isSpecial:1,specialUrl:'http://www.baidu.com',utime:1525773830590,
                        factoryName:'厂家名称',brandCode:'12,23,55',brand:'品牌1,品牌2,品牌3',sellRange:1,businessType:2,clickAmount:554,callAmount:623,displayStyle:2,
                        pictureNewUrl1:'resource/img/p1.jpg',pictureNewUrl2:'resource/img/p2.jpg',pictureNewUrl3:'resource/img/p3.jpg'
                    },
                    {
                        "id":0,abstracts:'列表简介',province:'省名称',city:'市名称',county:'county',isSpecial:1,specialUrl:'http://www.baidu.com',utime:1525773830590,
                        factoryName:'厂家名称',brandCode:'12,23,55',brand:'品牌1,品牌2,品牌3',sellRange:2,businessType:1,clickAmount:554,callAmount:623,displayStyle:1,
                        pictureNewUrl1:'resource/img/p1.jpg',pictureNewUrl2:'resource/img/p2.jpg',pictureNewUrl3:'resource/img/p3.jpg'
                    }
                ]
            }
        };
        setTimeout(()=>res.end(JSON.stringify(list)),700);
    });
};
