webpackJsonp([9],{dzeO:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("P9l9"),s={props:{checkedRow:{type:Object,default:function(){}}},data:function(){return{reviewResult:!1,checkParentRow:{}}},mounted:function(){console.log(this.checkedRow),this.checkedRow&&(this.checkParentRow=this.checkedRow)},methods:{auditIdFormatter:function(t){return 1==t?"待发布":2==t?"待审核":3==t?"待部署":4==t?"已部署":0===t?"审核未通过":void 0},statusFormatter:function(t){return"SUCCESS"==t?"成功":"失败"},close:function(){this.$emit("close")}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{visible:!0,width:"980px","close-on-press-escape":!1,"show-close":!1,"append-to-body":""}},[a("div",{staticClass:"dialog-title",attrs:{slot:"title"},slot:"title"},[a("span",{staticClass:"dialong-text"},[t._v("查看")]),t._v(" "),a("span",{staticClass:"el-icon-close i-close",on:{click:t.close}})]),t._v(" "),a("div",{staticClass:"publist-content"},[a("div",{staticClass:"version-mess"},[a("div",{staticClass:"version-head"},[t._v("修正版本信息")]),t._v(" "),a("div",{staticClass:"version-item"},[a("span",{staticClass:"version-title"},[t._v("项目名称：")]),t._v(" "),a("span",{staticClass:"version-value"},[t._v(t._s(t.checkParentRow.projectName))]),t._v(" "),a("span",{staticClass:"version-title"},[t._v("修正版本号：")]),t._v(" "),a("span",{staticClass:"version-value"},[t._v(t._s(t.checkParentRow.changeSet))]),t._v(" "),a("span",{staticClass:"version-title"},[t._v("最新构建时间：")]),t._v(" "),a("span",{staticClass:"version-value"},[t._v(t._s(t.checkParentRow.newBulidDate))])]),t._v(" "),a("div",{staticClass:"version-item"},[a("span",{staticClass:"version-title"},[t._v("静态代码审核：")]),t._v(" "),a("span",{staticClass:"version-value"},[t._v(t._s(t.statusFormatter(t.checkParentRow.status)))]),t._v(" "),a("span",{staticClass:"version-title"},[t._v("单元测试结果：")]),t._v(" "),a("span",{staticClass:"version-value"},[t._v(t._s(t.statusFormatter(t.checkParentRow.status)))]),t._v(" "),a("span",{staticClass:"version-title"},[t._v("验证测试结果：")]),t._v(" "),a("span",{staticClass:"version-value"},[t._v(t._s(t.statusFormatter(t.checkParentRow.status)))])])]),t._v(" "),a("div",{staticClass:"change-record"},[a("div",{staticClass:"version-head"},[t._v("变更记录")]),t._v(" "),a("div",{staticClass:"record-content"},[a("div",{staticClass:"record-wrap"},[t._v("\n          "+t._s(t.checkParentRow.msg)+"\n        ")])])]),t._v(" "),a("div",{staticClass:"change-record"},[a("div",{staticClass:"version-head"},[t._v("发布类型")]),t._v(" "),a("div",{staticClass:"record-item"},[a("span",{staticClass:"record-title"},[t._v("灰度发布：")]),t._v(" "),a("div",{staticClass:"record-list"},t._l(10,function(e,i){return a("span",{key:i,staticClass:"record-value"},[t._v("192.168.21.28")])}),0)])]),t._v(" "),4==t.checkParentRow.auditId?a("div",{staticClass:"change-record"},[a("div",{staticClass:"version-head"},[t._v("审核")]),t._v(" "),a("div",{staticClass:"review-item review-result"},[a("span",{staticClass:"record-title"},[t._v("是否通过：")]),t._v(" "),a("span",{class:t.reviewResult?"record-value review-pass":"record-value review-nopass"},[t._v(t._s(t.auditIdFormatter(this.checkParentRow.auditId)))])]),t._v(" "),a("div",{staticClass:"review-item"},[a("span",{staticClass:"record-title"},[t._v("审核意见：")]),t._v(" "),a("div",[t._v(t._s(t.checkParentRow.remark))])])]):t._e()])])},staticRenderFns:[]};var l=a("VU/8")(s,o,!1,function(t){a("lWQ9")},null,null).exports,n={props:{restarRow:{type:Object,default:function(){}}},mounted:function(){console.log(this.restarRow),this.restarRow&&(this.checkParentRow=this.restarRow,this.getServerSet())},data:function(){return{checkParentRow:{},param:{nodeGroup:""},nodeGroupList:[]}},methods:{getServerSet:function(){var t=this;this.checkParentRow&&null==this.checkParentRow.projectName||this.$post(i.a.jenkins.getServerGroups,{projectName:this.checkParentRow.projectName},function(e){e.success&&e.ServerGroups&&e.ServerGroups.length>0?t.nodeGroupList=e.ServerGroups:(t.$message.error(e.message),t.nodeGroupList=[])})},send:function(){var t=this,e={};e.jobName=this.checkParentRow.projectName,e.tarGet=this.param.nodeGroup,e.number=Number(this.checkParentRow.version),null!=e.jobName?""!=e.tarGet?null!=e.number?this.$post(i.a.jenkins.jobRestart,e,function(e){e.success?(t.$message.success(e.message),t.nodeGroupList=[],t.param.nodeGroup=""):t.$message.error(e.message)}):this.$message.warning("构建ID不能为空！"):this.$message.warning("服务器群组不能为空！"):this.$message.warning("项目名不能为空！")},auditIdFormatter:function(t){if(t)return 1==t?"待发布":2==t?"待审核":3==t?"待部署":4==t?"已部署":0===t?"审核未通过":void 0},statusFormatter:function(t){if(t)return"SUCCESS"==t?"成功":"失败"},close:function(){this.$emit("close"),this.nodeGroupList=[],this.param.nodeGroup=""}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{visible:!0,width:"980px","close-on-press-escape":!1,"show-close":!1,"append-to-body":""}},[a("div",{staticClass:"dialog-title",attrs:{slot:"title"},slot:"title"},[a("span",{staticClass:"dialong-text"},[t._v("重启")]),t._v(" "),a("span",{staticClass:"el-icon-close i-close",on:{click:t.close}})]),t._v(" "),a("div",{staticClass:"publist-content"},[a("div",{staticClass:"version-mess"},[a("div",{staticClass:"version-head"},[t._v("修正版本信息")]),t._v(" "),a("div",{staticClass:"version-item"},[a("span",{staticClass:"version-title"},[t._v("项目名称：")]),t._v(" "),a("span",{staticClass:"version-value"},[t._v(t._s(t.checkParentRow.projectName))]),t._v(" "),a("span",{staticClass:"version-title"},[t._v("修正版本号：")]),t._v(" "),a("span",{staticClass:"version-value"},[t._v(t._s(t.checkParentRow.changeSet))]),t._v(" "),a("span",{staticClass:"version-title"},[t._v("最新构建时间：")]),t._v(" "),a("span",{staticClass:"version-value"},[t._v(t._s(t.checkParentRow.newBulidDate))])]),t._v(" "),a("div",{staticClass:"version-item"},[a("span",{staticClass:"version-title"},[t._v("静态代码审核：")]),t._v(" "),a("span",{staticClass:"version-value"},[t._v(t._s(t.statusFormatter(t.checkParentRow.status)))]),t._v(" "),a("span",{staticClass:"version-title"},[t._v("单元测试结果：")]),t._v(" "),a("span",{staticClass:"version-value"},[t._v(t._s(t.statusFormatter(t.checkParentRow.status)))]),t._v(" "),a("span",{staticClass:"version-title"},[t._v("验证测试结果：")]),t._v(" "),a("span",{staticClass:"version-value"},[t._v(t._s(t.statusFormatter(t.checkParentRow.status)))])])]),t._v(" "),a("div",{staticClass:"change-record"},[a("div",{staticClass:"version-head"},[t._v("变更记录")]),t._v(" "),a("div",{staticClass:"record-content"},[a("div",{staticClass:"record-wrap"},[t._v("\n          "+t._s(t.checkParentRow.msg)+"\n        ")])])]),t._v(" "),a("div",{staticClass:"change-record"},[a("div",{staticClass:"version-head"},[t._v("发布类型")]),t._v(" "),a("div",{staticClass:"version-item"},[a("span",{staticClass:"record-title",staticStyle:{width:"130px"}},[t._v("服务器群组设置：")]),t._v(" "),a("el-select",{staticClass:"version-select",attrs:{placeholder:"请选择",clearable:""},model:{value:t.param.nodeGroup,callback:function(e){t.$set(t.param,"nodeGroup",e)},expression:"param.nodeGroup"}},t._l(t.nodeGroupList,function(t,e){return a("el-option",{key:e,attrs:{label:t.host,value:t.host}})}),1)],1)]),t._v(" "),a("div",{staticClass:"send-confirm",attrs:{slot:"footer"},slot:"footer"},[a("button",{staticClass:"cancel-btn",on:{click:t.close}},[t._v("取消")]),t._v(" "),a("button",{staticClass:"save-btn",on:{click:t.send}},[t._v("确定")])])])])},staticRenderFns:[]};var c=a("VU/8")(n,r,!1,function(t){a("xcMW")},null,null).exports,d={props:{rollBackRow:{type:Object,default:function(){}}},mounted:function(){console.log(this.rollBackRow),this.rollBackRow&&(this.getRollData=this.rollBackRow)},data:function(){return{getRollData:{}}},methods:{close:function(){this.$emit("close")},submitRollBack:function(){var t=this;this.getRollData.projectName&&this.$post(i.a.jenkins.rollBack,{jobName:this.getRollData.projectName},function(e){e.success?(t.$message.success(e.message),t.$emit("close")):t.$message.error(e.message)})}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{staticClass:"rollBackPage",attrs:{visible:!0,width:"470px","close-on-press-escape":!1,"show-close":!1,"close-on-click-modal":!1,"append-to-body":""}},[a("div",{staticClass:"header",attrs:{slot:"title"},slot:"title"},[a("span",[t._v("回滚")]),t._v(" "),a("span",{staticClass:"el-icon-close",staticStyle:{cursor:"pointer"},attrs:{title:"关闭"},on:{click:t.close}})]),t._v(" "),a("div",{staticClass:"rollPage-main"},[t._v("\r\n       是否立即回滚？\r\n    ")]),t._v(" "),a("div",{staticClass:"rollBack-footer",attrs:{slot:"footer"},slot:"footer"},[a("div",{staticStyle:{width:"65px"}}),t._v(" "),a("button",{staticClass:"rollBackButton",staticStyle:{"margin-right":"30px"},attrs:{title:"取消"},on:{click:t.close}},[t._v("取 消")]),t._v(" "),a("button",{staticClass:"rollBackButton",attrs:{type:"primary",title:"确定"},on:{click:t.submitRollBack}},[t._v("确 定")])])])},staticRenderFns:[]};var v={components:{checkCom:l,restarCom:c,rollBackPage:a("VU/8")(d,u,!1,function(t){a("rAHH")},"data-v-465e0f4d",null).exports},data:function(){return{rollBackDialog:!1,rollBackRow:{},restarRow:{},checkedRow:{},projectNameSearch:"",BuildTime:[],AuditTime:[],todoData:[],todoDataInitSave:[],todoTableTotalInit:0,pagination:{page:1,size:10,total:30},showCheckDialog:!1,showRestarDialog:!1}},mounted:function(){this.getInit()},methods:{restarDialogClose:function(){this.showRestarDialog=!1,this.getInit()},rollBackClose:function(){this.rollBackDialog=!1,this.getInit()},handleRollBack:function(t){this.rollBackDialog=!0,this.rollBackRow=t},checkDialogClose:function(){this.showCheckDialog=!1},handleOpenCheck:function(t){this.$data.showCheckDialog=!0,this.checkedRow=t,console.log(this.checkedRow)},auditIdFormatter:function(t){return 1==t.auditId?"待发布":2==t.auditId?"待审核":3==t.auditId?"待部署":4==t.auditId?"已部署":0===t.auditId?"审核未通过":void 0},buildTimeChange:function(t){null==t&&(this.BuildTime=[])},auditTimeChange:function(t){null==t&&(this.AuditTime=[])},tableSearch:function(){var t=this;if(this.BuildTime=null==this.BuildTime?[]:this.BuildTime,this.AuditTime=null==this.AuditTime?[]:this.AuditTime,console.log("this.projectNameSearch:"+this.projectNameSearch,"this.BuildTime:"+this.BuildTime,"this.AuditTime:"+this.AuditTime),this.todoDataInitSave&&this.todoDataInitSave.length>0){if(""==this.projectNameSearch&&this.BuildTime&&0==this.BuildTime.length&&this.AuditTime&&0==this.AuditTime.length)return this.todoData=this.todoDataInitSave,this.pagination.total=this.todoTableTotalInit,void console.log("eight");this.todoData=this.todoDataInitSave.filter(function(e){if(""!=t.projectNameSearch&&t.BuildTime&&0==t.BuildTime.length&&t.AuditTime&&0==t.AuditTime.length){if(e.projectName&&e.projectName.indexOf(t.projectNameSearch)>-1)return console.log("first"),e}else if(""==t.projectNameSearch&&t.BuildTime&&t.BuildTime.length>0&&t.AuditTime&&0==t.AuditTime.length){var a=new Date(t.BuildTime[0]+" 00:00:00").getTime(),i=new Date(t.BuildTime[1]+" 23:59:59").getTime();if(e.latelyTime&&e.latelyTime>=a&&e.latelyTime<=i)return console.log("second"),e}else if(""==t.projectNameSearch&&t.BuildTime&&0==t.BuildTime.length&&t.AuditTime&&t.AuditTime.length>0){var s=new Date(t.AuditTime[0]+" 00:00:00").getTime(),o=new Date(t.AuditTime[1]+" 23:59:59").getTime();if(e.auditTime&&e.auditTime>=s&&e.auditTime<=o)return console.log("three"),e}else if(""!=t.projectNameSearch&&t.BuildTime&&t.BuildTime.length>0&&t.AuditTime&&0==t.AuditTime.length){var l=new Date(t.BuildTime[0]+" 00:00:00").getTime(),n=new Date(t.BuildTime[1]+" 23:59:59").getTime();if(e.projectName&&e.projectName.indexOf(t.projectNameSearch)>-1&&e.latelyTime&&e.latelyTime>=l&&e.latelyTime<=n)return console.log("four"),e}else if(""!=t.projectNameSearch&&t.BuildTime&&0==t.BuildTime.length&&t.AuditTime&&t.AuditTime.length>0){var r=new Date(t.AuditTime[0]+" 00:00:00").getTime(),c=new Date(t.AuditTime[1]+" 23:59:59").getTime();if(e.projectName&&e.projectName.indexOf(t.projectNameSearch)>-1&&e.auditTime&&e.auditTime>=r&&e.auditTime<=c)return console.log("five"),e}else if(""==t.projectNameSearch&&t.BuildTime&&t.BuildTime.length>0&&t.AuditTime&&t.AuditTime.length>0){var d=new Date(t.BuildTime[0]+" 00:00:00").getTime(),u=new Date(t.BuildTime[1]+" 23:59:59").getTime(),v=new Date(t.AuditTime[0]+" 00:00:00").getTime(),m=new Date(t.AuditTime[1]+" 23:59:59").getTime();if(console.log(e.auditTime,v,m),e.latelyTime&&e.latelyTime>=d&&e.latelyTime<=u&&e.auditTime&&e.auditTime>=v&&e.auditTime<=m)return console.log("six"),e}else if(""!=t.projectNameSearch&&t.BuildTime&&t.BuildTime.length>0&&t.AuditTime&&t.AuditTime.length>0){var h=new Date(t.BuildTime[0]+" 00:00:00").getTime(),p=new Date(t.BuildTime[1]+" 23:59:59").getTime(),g=new Date(t.AuditTime[0]+" 00:00:00").getTime(),_=new Date(t.AuditTime[1]+" 23:59:59").getTime();if(e.projectName&&e.projectName.indexOf(t.projectNameSearch)>-1&&e.latelyTime&&e.latelyTime>=h&&e.latelyTime<=p&&e.auditTime&&e.auditTime>=g&&e.auditTime<=_)return console.log("seven"),e}}),this.pagination.total=this.todoData.length,console.log(this.todoData)}},getInit:function(){var t=this;this.$post(i.a.jenkins.getProcessedTaskList,{currPage:this.pagination.page,pageSize:this.pagination.size},function(e){e.success?(t.todoData=e.buildTasks,t.todoDataInitSave=e.buildTasks,t.pagination.total=Number(e.BuildTaskCount),t.todoTableTotalInit=Number(e.BuildTaskCount),console.log(e)):(t.$message.warning(e.message),t.todoData=[],t.todoDataInitSave=[],t.todoTableTotalInit=0)})},handleCurrentChange:function(t){this.$data.pagination.page=t,this.getInit()},handleOpenRestar:function(t){this.$data.showRestarDialog=!0,this.restarRow=t}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"todo-page"},[a("div",{staticClass:"todo-content"},[a("div",{staticClass:"todo-head"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.projectNameSearch,expression:"projectNameSearch"}],staticClass:"todo-ipt",attrs:{type:"text",placeholder:"请输入项目名称"},domProps:{value:t.projectNameSearch},on:{input:function(e){e.target.composing||(t.projectNameSearch=e.target.value)}}}),t._v(" "),a("el-date-picker",{staticClass:"todo-date",attrs:{type:"daterange","range-separator":"至","start-placeholder":"构建时间起","end-placeholder":"构建时间止","value-format":"yyyy-MM-dd"},on:{change:t.buildTimeChange},model:{value:t.BuildTime,callback:function(e){t.BuildTime=e},expression:"BuildTime"}}),t._v(" "),a("el-date-picker",{staticClass:"todo-date",attrs:{type:"daterange","range-separator":"至","start-placeholder":"审核时间起","end-placeholder":"审核时间止","value-format":"yyyy-MM-dd"},on:{change:t.auditTimeChange},model:{value:t.AuditTime,callback:function(e){t.AuditTime=e},expression:"AuditTime"}}),t._v(" "),a("span",{staticClass:"iconfont i-search",on:{click:t.tableSearch}},[t._v("")])],1),t._v(" "),a("div",{staticClass:"todo-area"},[a("el-scrollbar",{staticClass:"test-scroll"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.todoData,border:""}},[a("el-table-column",{attrs:{prop:"projectName",label:"项目名称","min-width":"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"changeSet",label:"修正版本号","min-width":"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"newBulidDate",label:"最新构建时间","min-width":"140"}}),t._v(" "),a("el-table-column",{attrs:{prop:"durationTime",label:"上次持续时间","min-width":"140"}}),t._v(" "),a("el-table-column",{attrs:{prop:"winDate",label:"上次构建成功","min-width":"140"}}),t._v(" "),a("el-table-column",{attrs:{prop:"bulidLoserDate",label:"上次构建失败","min-width":"140"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"100",formatter:t.auditIdFormatter}}),t._v(" "),a("el-table-column",{attrs:{prop:"column8",label:"操作","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[4==e.row.auditId?[a("button",{staticClass:"check-btn",on:{click:function(a){return t.handleOpenCheck(e.row)}}},[t._v("查看")]),t._v(" "),a("button",{staticClass:"publish-btn",on:{click:function(a){return t.handleOpenRestar(e.row)}}},[t._v("重启")]),t._v(" "),a("button",{staticClass:"review-btn",on:{click:function(a){return t.handleRollBack(e.row)}}},[t._v("回滚")])]:[a("button",{staticClass:"check-btn",on:{click:function(a){return t.handleOpenCheck(e.row)}}},[t._v("查看")])]]}}])})],1),t._v(" "),a("div",{staticClass:"pagination-page"},[a("div",{staticClass:"pagination-left"},[a("el-pagination",{attrs:{"current-page":t.pagination.page,"page-size":t.pagination.size,layout:"total, prev, pager, next, jumper",total:t.pagination.total},on:{"current-change":t.handleCurrentChange}})],1),t._v(" "),a("div",{staticClass:"pagination-right"},[t._v("\n            当前显示"+t._s((t.pagination.page-1)*t.pagination.size+1)+"-"+t._s((t.pagination.page-1)*t.pagination.size+t.todoData.length)+"条记录 "),a("span",[t._v("共"+t._s(t.pagination.total)+"条记录")])])])],1)],1)]),t._v(" "),t.showCheckDialog?a("check-com",{attrs:{checkedRow:t.checkedRow},on:{close:t.checkDialogClose}}):t._e(),t._v(" "),t.showRestarDialog?a("restar-com",{attrs:{restarRow:t.restarRow},on:{close:t.restarDialogClose}}):t._e(),t._v(" "),t.rollBackDialog?a("rollBackPage",{attrs:{rollBackRow:t.rollBackRow},on:{close:t.rollBackClose}}):t._e()],1)},staticRenderFns:[]};var h=a("VU/8")(v,m,!1,function(t){a("iTsX")},"data-v-70bfc0d9",null);e.default=h.exports},iTsX:function(t,e){},lWQ9:function(t,e){},rAHH:function(t,e){},xcMW:function(t,e){}});