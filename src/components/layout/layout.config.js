
const menulist = [
    {
        name:"设置",
        path:"/admin/setting"
    },
    {
        name:"canvas",
        path:"/admin/canvas"
    },
    {
        name:"echarts",
        path:"/echarts"
    },{
        name:"highcharts",
        path:"/highcharts"
    },
    {
        name:"目录一",
        children:[{
            name:"关于",
            path:"/admin/about"
        },{
            name:"列表",
            path:"/admin/table"
        }]
    },
]
export default  menulist