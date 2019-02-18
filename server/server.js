const express=require('express');
const server=express();
const {mock,Random}=require('mockjs')
const api=require('./api')
server.get(api.FOCUSLIST_URL, (req, res)=>{
    let result = mock({
        message: 'ok',
        status: 0,
        data: {
            'bannerList|3': [
                {
                    'id|+1': 4123498,
                    name: '@ctitle',  
                    img: "@image('375x180', '@color')"
                }
            ],
            'newItemList|9':[
                {
                    'id|+1':4321567,
                    name:'Time特权',
                    topName:'会员商户',
                    'price|+10':234,
                    title:'@ctitle',
                    meijin:'@ctitle',
                    chihe:'@ctitle',
                    bieshu:'@ctitle',
                    img: "@image('375x180', '@color')"
                }
            ]

        }
    })
    res.json(result);
})
server.get(api.TUANJIAN_URL, (req, res)=>{
    let result = mock({
        message: 'ok',
        status: 0,
        data: {
            PicUrl:"@image('375x180', '@color')",
            'list|8':[
                {
                    'id|+1':4321557,
                    'cityList|4':[
                        {
                            city:'@city'
                        }
                    ],
                    img: "@image('375x180', '@color')",
                    people:'10-20人',
                    title:'@ctitle',
                    meijin:'@ctitle',
                    chihe:'@ctitle'
                }
            ]
        }
    })
    res.json(result);
})
server.get('/api/carefully/ItemList/tuanjianList/tenList', (req, res)=>{
    let result = mock({
        message: 'ok',
        status: 0,
        data: {
            'Itemlist|8':[
                {
                    'id|+1':4321567,
                    name:'Time特权',
                    topName:'会员商户',
                    'price|+10':234,
                    title:'@ctitle',
                    meijin:'@ctitle',
                    chihe:'@ctitle',
                    bieshu:'@ctitle',
                    img: "@image('375x180', '@color')"
                }
            ]
        }
    })
    res.json(result);
})
server.get(api.QINGZI_URL, (req, res)=>{
    let result = mock({
        message: 'ok',
        status: 0,
        data: {
            PicUrl:"@image('375x180', '@color')",
            'list|8':[
                {
                    'id|+1':4321577,
                    name:'@ctitle',
                    img: "@image('375x180', '@color')",
                    title:'@ctitle'
                }
            ]
        }
    })
    res.json(result);
})
server.get('/api/carefully/ItemList/qingziList/zhuti', (req, res)=>{
    let result = mock({
        message: 'ok',
        status: 0,
        data: {
            PicUrl:"@image('375x180', '@color')",
            'Itemlist|8':[
                {
                    'id|+1':4321567,
                    name:'Time特权',
                    topName:'会员商户',
                    'price|+10':234,
                    title:'@ctitle',
                    meijin:'@ctitle',
                    chihe:'@ctitle',
                    bieshu:'@ctitle',
                    img: "@image('375x180', '@color')"
                }
            ]
        }
    })
    res.json(result);
})
server.get(api.FAXIAN_URL, (req, res)=>{
    let result = mock({
        message: 'ok',
        status: 0,
        data: {
            PicUrl:"@image('375x180', '@color')",
            'Itemlist|8':[
                {
                    'id|+1':4321567,
                    'price|+10':234,
                    title:'@ctitle',
                    img: "@image('375x180', '@color')"
                }
            ],
            'cityTab|5':[
                {
                    city:'@city',
                    'childrenCity|8':[
                        {
                            child:'@city'
                        }
                    ]
                }
            ]
        }
    })
    res.json(result);
})
const port=9000;
server.listen(port);
console.log('run server port:'+port);