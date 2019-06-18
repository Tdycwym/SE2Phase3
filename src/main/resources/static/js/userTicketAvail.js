// $(document).ready(function(){
//     getUsedTicket();
//
// // 得到列表
//     function getUsedTicket() {
//         // 发请求得到全部电影票
//         getRequest(
//             '/ticket/get/' + sessionStorage.getItem('id'),
//             function (res) {
//                 // console.log(res)
//                 renderAvailTicket(res.content);
//             },
//             function (error) {
//                 alert(error);
//             });
//         // console.log("end")
//
// // 遍历：
// // 1. 是否过期（结束时间<当前时间），过期被选中
// // 2. 分类，按照排片id分成不同的list
// // 填进去
//     }
// });
//
// function renderAvailTicket(originList) {
//     // console.log(originList)
//
//
//     // 按照排片分类
//     let resList=getSortedList(originList)
//     // console.log(resList)
//
//     // 按照时间筛一下
//     // let a = renderOrder(resList,getValidSche(resList))
//     let a=getValidSche(resList,renderOrder)
//
//     console .log(a)
//     //开始填数据
//
// }
//
// function getSortedList(originList) {
//     let resList=[]
//     var sche={}
//     originList.forEach(ticket =>{
//         //筛选状态为已完成的
//         if(ticket.state==="已完成")
//         {
//             if (!sche[ticket.scheduleId]) {
//                 resList.push({
//                     scheId: ticket.scheduleId,
//                     tList: [ticket],
//                 })
//                 sche[ticket.scheduleId] = ticket
//             } else {
//                 resList.forEach(ele = > {
//                     if(ele.scheId == ticket.scheduleId
//             )
//                 {
//                     ele.tList.push(ticket)
//                 }
//             })
//             }
//         }
//     })
//     return resList
// }
//
// function getValidSche(scheList,callback) {
//     let cur=new Date()
//     for (let i=0;i<scheList.length;i++){
//         let schedule=scheList[i]
//         getRequest(
//             "/schedule/" + schedule.scheId,
//             function (res) {
//                 let tempSche = res.content
//                 if (!isBefore(cur,new Date(tempSche.endTime))) {
//                     schedule.schedule=tempSche
//                 }
//                 else {
//                     schedule.scheId=null
//                 }
//                 if (i==scheList.length-1){
//                     return callback(scheList)
//                 }
//             }
//         )
//     }
// }
//
// //TODO
// var renderOrder=function (finList) {
//     let orderStr=""
//     finList.forEach(function (order) {
//         console.log(order)
//         //判断是否过期
//         if (order.scheId!=null){
//             let ordItemStr=''
//             //形成座位
//             let seatList=''
//             order.tList.forEach(function (ticket) {
//                 seatList+='<div class="order-ticket">'+(ticket.rowIndex + 1) + "排" + (ticket.columnIndex + 1) + "座" +'</div>'
//             })
//             seatList='<div class="ticket-item col-md-8 right">'+seatList+'</div>'
//             let curSchedule=order.schedule
//             ordItemStr='<div class="order-item col-md-4"><div class="order-item-inside"><div class="order-basic-title"><span class="name">'+
//                 curSchedule.movieName+'</span><span class="hall">'+
//                 curSchedule.hallName+'</span><span class="startTime">'+
//                 curSchedule.startTime.substring(0, 10) + ' ' + curSchedule.startTime.substring(11, 16)+'</span></div><div class="order-content"><div class="ticket-list"><div class="ticket-title col-md-4 left">已选择座位：</div>'+
//                 seatList+'</div><div class="order-operate"></div></div></div></div>'
//             orderStr+=ordItemStr
//         }
//     })
//
//     $('.order-container').append(orderStr)
//
//     return true;
// }
//
// function isBefore(first,second) {
//     return first<second
// }
//

//模拟
$(document).ready(function(){
    console.log(a)
        function getUsedTicket() {
        // 发请求得到全部电影票
        getRequest(
            '/ticket/get/' + sessionStorage.getItem('id'),
            function (res) {
                console.log(res.content)
            },
            function (error) {
                alert(error);
            });
}


//得到退票策略
    function getRefundstrategy(){

    }

//点击确认

    function startRefund() {
        var r=confirm("确认退票？")
        if (r){
            let ticketId=getTicketList()
        }
    }
    }

//得到被选中的票的id
function getTicketList() {
    var list=$("input[name='select-ticket']:checked")
    var ticketList=[]
    // console.log(list)
    if (list.length==0){
        alert("请选择要退的票")
    }
    else {
        list.each(function(){
            var cur=$(this).val()
            // console.log(cur)
            // // console.log("*******************************")
            ticketList.push(cur)
        })
        return ticketList
    }
}