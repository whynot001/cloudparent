webpackJsonp([4],{"1pMG":function(e,t){},"5zde":function(e,t,a){a("zQR9"),a("qyJz"),e.exports=a("FeBl").Array.from},"9bBU":function(e,t,a){a("mClu");var o=a("FeBl").Object;e.exports=function(e,t,a){return o.defineProperty(e,t,a)}},C4MV:function(e,t,a){e.exports={default:a("9bBU"),__esModule:!0}},CcW7:function(e,t){},Chrt:function(e,t){},EBMY:function(e,t){},FNsZ:function(e,t){},Gu7T:function(e,t,a){"use strict";t.__esModule=!0;var o,s=a("c/Tr"),i=(o=s)&&o.__esModule?o:{default:o};t.default=function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return(0,i.default)(e)}},"RVA+":function(e,t){},bOdI:function(e,t,a){"use strict";t.__esModule=!0;var o,s=a("C4MV"),i=(o=s)&&o.__esModule?o:{default:o};t.default=function(e,t,a){return t in e?(0,i.default)(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},"c/Tr":function(e,t,a){e.exports={default:a("5zde"),__esModule:!0}},fBQ2:function(e,t,a){"use strict";var o=a("evD5"),s=a("X8DO");e.exports=function(e,t,a){t in e?o.f(e,t,s(0,a)):e[t]=a}},hlnb:function(e,t){},mClu:function(e,t,a){var o=a("kM2E");o(o.S+o.F*!a("+E39"),"Object",{defineProperty:a("evD5").f})},qyJz:function(e,t,a){"use strict";var o=a("+ZMJ"),s=a("kM2E"),i=a("sB3e"),n=a("msXi"),r=a("Mhyx"),l=a("QRG4"),c=a("fBQ2"),p=a("3fs2");s(s.S+s.F*!a("dY0y")(function(e){Array.from(e)}),"Array",{from:function(e){var t,a,s,u,d=i(e),h="function"==typeof this?this:Array,g=arguments.length,m=g>1?arguments[1]:void 0,v=void 0!==m,f=0,_=p(d);if(v&&(m=o(m,g>2?arguments[2]:void 0,2)),void 0==_||h==Array&&r(_))for(a=new h(t=l(d.length));t>f;f++)c(a,f,v?m(d[f],f):d[f]);else for(u=_.call(d),a=new h;!(s=u.next()).done;f++)c(a,f,v?n(u,m,[s.value,f],!0):s.value);return a.length=f,a}})},zg3N:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("Gu7T"),s=a.n(o),i=a("P9l9"),n={props:{},created:function(){},mounted:function(){console.log(this.$parent.$parent),this.getInit(),this.$parent.$parent.$data.devGrupChoseData&&(this.devGrupChoseRows=this.$parent.$parent.$data.devGrupChoseData,console.log("fu",this.devGrupChoseRows))},components:{},data:function(){return{multipleSelection:[],userNameKey:null,choosePersonTable:[],devGrupChoseRows:[],pagination:{page:1,total:30,size:10}}},methods:{searchKey:function(){this.getInit()},handleCurrentChange:function(e){this.pagination.page=e,this.getInit()},getInit:function(){var e=this,t={};t.page=this.pagination.page,t.limit=this.pagination.size,t.username=this.userNameKey,this.$post(i.a.systemManager.userList,t,function(t){0===t.code?(e.choosePersonTable=t.page.list,e.pagination.total=Number(t.page.totalCount),e.getChecked(e.devGrupChoseRows),console.log(t)):e.$message.error(t.msg)})},getChecked:function(e){var t=this;this.$nextTick(function(){t.$refs.choosePersonTableEdit.clearSelection();for(var a=0;a<e.length;a++)for(var o=0;o<t.$data.choosePersonTable.length;o++)e[a].userId==t.$data.choosePersonTable[o].userId&&t.$refs.choosePersonTableEdit.toggleRowSelection(t.$data.choosePersonTable[o])})},handleSelectionChange:function(e){this.multipleSelection=e,console.log(this.multipleSelection)},closeEdit:function(){this.$emit("closeDevGruop")},submitDevPerson:function(){this.$emit("closeDevGruop"),this.$emit("devGrupChoseInfo",this.multipleSelection),console.log(this.multipleSelection)}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"lookDetailDialog",attrs:{visible:!0,width:"820px","close-on-press-escape":!1,"close-on-click-modal":!1,"show-close":!1,"append-to-body":""}},[a("div",{staticClass:"header",attrs:{slot:"title"},slot:"title"},[a("span",[e._v("选择成员")]),e._v(" "),a("span",{staticClass:"el-icon-close",staticStyle:{cursor:"pointer"},attrs:{title:"关闭"},on:{click:e.closeEdit}})]),e._v(" "),a("div",{staticClass:"search_left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.userNameKey,expression:"userNameKey"}],ref:"DevNameKey",staticClass:"searchInput",attrs:{placeholder:"用户名称"},domProps:{value:e.userNameKey},on:{input:function(t){t.target.composing||(e.userNameKey=t.target.value)}}}),e._v(" "),a("div",{staticClass:"search_icon"},[a("span",{staticClass:"el-icon-search",attrs:{title:"搜索"},on:{click:e.searchKey}})])]),e._v(" "),a("el-table",{ref:"choosePersonTableEdit",staticStyle:{width:"100%"},attrs:{border:"",data:e.choosePersonTable},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"username",label:"用户名称","min-width":"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"roleNames",label:"角色","min-width":"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"email",label:"邮箱","min-width":"160"}}),e._v(" "),a("el-table-column",{attrs:{prop:"mobile",label:"电话号码","min-width":"130"}})],1),e._v(" "),a("div",{staticClass:"pagination"},[a("div",{staticClass:"pagination-left"},[a("el-pagination",{attrs:{"current-page":e.pagination.page,"page-size":e.pagination.size,layout:"total, prev, pager, next, jumper",total:e.pagination.total},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),a("div",{staticClass:"pagination-right"},[e._v("\n      当前显示"+e._s((e.pagination.page-1)*e.pagination.size+1)+"-"+e._s((e.pagination.page-1)*e.pagination.size+e.choosePersonTable?e.choosePersonTable.length:"0")+"条记录 "),a("span",[e._v("共"+e._s(e.pagination.total)+"条记录")])])]),e._v(" "),a("span",{staticClass:"newprojectDialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("button",{staticClass:"newDialogButton",staticStyle:{"margin-right":"30px"},attrs:{title:"取消"},on:{click:e.closeEdit}},[e._v("取 消")]),e._v(" "),a("button",{staticClass:"newDialogButton",attrs:{type:"primary",title:"确定"},on:{click:e.submitDevPerson}},[e._v("确 定")])])],1)},staticRenderFns:[]};var l,c=a("VU/8")(n,r,!1,function(e){a("CcW7")},"data-v-4dbc79df",null).exports,p=a("bOdI"),u=a.n(p),d={props:{},created:function(){},mounted:function(){console.log(this.$parent),this.getParentData()},components:{},data:function(){return{leaderIDArr:[],multipleSelection:[],userNameKey:null,choosePersonTable:[],devGrupChoseRows:[],pagination:{page:1,total:30,size:10}}},methods:(l={getParentData:function(){this.getInit(),this.$parent.$parent.$data.editRow&&0!=this.$parent.$parent.$data.editRow&&(this.devGrupChoseRows=this.$parent.$parent.$data.editRow,console.log("rows",this.devGrupChoseRows),this.multipleSelection&&this.multipleSelection.length>0?this.leaderIDArr=this.multipleSelection:this.leaderIDArr.push({userId:this.devGrupChoseRows.groupLeaderId}))},searchKey:function(){this.getInit()},handleCurrentChange:function(e){this.pagination.page=e,this.getInit()},getInit:function(){var e=this,t={};t.page=this.pagination.page,t.limit=this.pagination.size,t.username=this.userNameKey,this.$post(i.a.systemManager.userList,t,function(t){0===t.code?(e.choosePersonTable=t.page.list,e.pagination.total=Number(t.page.totalCount),e.getChecked(e.leaderIDArr)):e.$message.error(t.msg)})}},u()(l,"handleCurrentChange",function(e){this.pagination.page=e,this.getInit()}),u()(l,"getChecked",function(e){var t=this;t.$data.choosePersonTable&&0!=t.$data.choosePersonTable.length&&t.$nextTick(function(){t.$refs.editchooseNumberTable.clearSelection();for(var a=0;a<e.length;a++)for(var o=0;o<t.$data.choosePersonTable.length;o++)e[a].userId==t.$data.choosePersonTable[o].userId&&t.$refs.editchooseNumberTable.toggleRowSelection(t.$data.choosePersonTable[o])})}),u()(l,"handleSelectionChange",function(e){e&&0!=e.length&&(e.length>1?(e[e.length-1].sysGroupId&&e[e.length-1].sysGroupId==this.devGrupChoseRows.groupId||!e[e.length-1].sysGroupId?(this.multipleSelection=[e[e.length-1]],this.getChecked(this.multipleSelection)):(this.$message.warning("该成员已经加入其他项目,请重新选择!"),this.getChecked(this.multipleSelection)),console.log(this.multipleSelection)):(this.multipleSelection=e,console.log(this.multipleSelection)))}),u()(l,"closeEdit",function(){this.$emit("closeGroupLeader"),this.multipleSelection=[]}),u()(l,"submitDevPerson",function(){this.$emit("closeGroupLeader"),this.$emit("groupLeaderInfo",this.multipleSelection),this.multipleSelection=[],console.log(this.multipleSelection)}),l)},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"lookDetailDialog",attrs:{visible:!0,width:"720px","close-on-press-escape":!1,"close-on-click-modal":!1,"show-close":!1,"append-to-body":""}},[a("div",{staticClass:"header",attrs:{slot:"title"},slot:"title"},[a("span",[e._v("选择研发负责人")]),e._v(" "),a("span",{staticClass:"el-icon-close",staticStyle:{cursor:"pointer"},attrs:{title:"取消"},on:{click:e.closeEdit}})]),e._v(" "),a("div",{staticClass:"search_left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.userNameKey,expression:"userNameKey"}],ref:"DevNameKey",staticClass:"searchInput",attrs:{placeholder:"用户名称"},domProps:{value:e.userNameKey},on:{input:function(t){t.target.composing||(e.userNameKey=t.target.value)}}}),e._v(" "),a("div",{staticClass:"search_icon"},[a("span",{staticClass:"el-icon-search",attrs:{title:"搜索"},on:{click:e.searchKey}})])]),e._v(" "),a("el-table",{ref:"editchooseNumberTable",staticStyle:{width:"100%"},attrs:{border:"",data:e.choosePersonTable},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"username",label:"用户名称","min-width":"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"roleNames",label:"角色","min-width":"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"email",label:"邮箱","min-width":"160"}}),e._v(" "),a("el-table-column",{attrs:{prop:"mobile",label:"电话号码","min-width":"130"}})],1),e._v(" "),a("div",{staticClass:"pagination"},[a("div",{staticClass:"pagination-left"},[a("el-pagination",{attrs:{"current-page":e.pagination.page,"page-size":e.pagination.size,layout:"total, prev, pager, next, jumper",total:e.pagination.total},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),a("div",{staticClass:"pagination-right"},[e._v("\n      当前显示"+e._s((e.pagination.page-1)*e.pagination.size+1)+"-"+e._s((e.pagination.page-1)*e.pagination.size+e.choosePersonTable?e.choosePersonTable.length:"0")+"条记录 "),a("span",[e._v("共"+e._s(e.pagination.total)+"条记录")])])]),e._v(" "),a("span",{staticClass:"newprojectDialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("button",{staticClass:"newDialogButton",staticStyle:{"margin-right":"30px"},attrs:{title:"取消"},on:{click:e.closeEdit}},[e._v("取 消")]),e._v(" "),a("button",{staticClass:"newDialogButton",attrs:{type:"primary",title:"确定"},on:{click:e.submitDevPerson}},[e._v("确 定")])])],1)},staticRenderFns:[]};var g={components:{ChooseGroupDialog:c,ChooseLeaderDilog:a("VU/8")(d,h,!1,function(e){a("FNsZ")},"data-v-235fb975",null).exports},mounted:function(){console.log(this.$parent.$data.editRow),this.$parent.$data.editRow&&(this.editRow=this.$parent.$data.editRow,this.editprojectForm.groupName=this.editRow.groupName,this.editprojectForm.groupLeaderMobile=this.editRow.groupLeaderMobile,this.getInit()),console.log(this.$parent)},data:function(){return{devGrupChoseDataUsernames:null,editRow:null,groupLeaderShow:!1,groupLeaderData:[],devGrupChoseData:[],ChooseGroupShow:!1,editprojectForm:{groupName:null,groupLeaderMobile:null},pagination:{page:1,total:30,size:10}}},methods:{getInit:function(){var e=this;e.editRow&&e.editRow.groupId&&e.$post(i.a.systemManager.groupUserList,{groupId:e.editRow.groupId},function(t){if(0===t.code&&t.list&&t.list.length>0){for(var a=0;a<t.list.length;a++)if(t.list[a].userId&&e.editRow.groupLeaderId&&t.list[a].userId==e.editRow.groupLeaderId){var o=[t.list[0],t.list[a]];t.list[a]=o[0],t.list[0]=o[1]}e.devGrupChoseData=t.list,console.log(e.devGrupChoseData)}else e.$message.error(t.msg)})},devGrupChoseInfo:function(e){var t;if(this.devGrupChoseData&&0==this.devGrupChoseData.length)(t=this.devGrupChoseData).push.apply(t,s()(e));else if(this.devGrupChoseData&&0!=this.devGrupChoseData.length){var a,o={};(a=this.devGrupChoseData).push.apply(a,s()(e)),this.devGrupChoseData=this.devGrupChoseData.reduce(function(e,t){return!o[t.userId]&&(o[t.userId]=e.push(t)),e},[])}var i=[];this.devGrupChoseData.forEach(function(e){i.push(e.username)}),this.devGrupChoseDataUsernames=i.join(","),console.log(this.devGrupChoseData)},groupLeaderInfo:function(e){console.log(e),this.groupLeaderData=e,e&&0!=e.length&&(this.editprojectForm.groupLeaderMobile=e[0].mobile)},closeGroupLeader:function(){this.groupLeaderShow=!1},chooseGroupLeaderName:function(){this.groupLeaderShow=!0},deleteCheckedHandle:function(e,t){this.devGrupChoseData.splice(e,1);var a=[];this.devGrupChoseData.forEach(function(e){a.push(e.username)}),this.devGrupChoseDataUsernames=a.join(",")},closeDevGruop:function(){this.ChooseGroupShow=!1},chooseDevGroup:function(){this.ChooseGroupShow=!0},closeEdit:function(){this.$emit("closeEdit"),this.editprojectForm={},this.devGrupChoseData=[],this.groupLeaderData=[],this.devGrupChoseDataUsernames=null},submitEditProDialog:function(){var e=this,t={},a=[];if(this.devGrupChoseData&&this.devGrupChoseData.length>0&&(this.devGrupChoseData.forEach(function(e){a.push(e.userId)}),t.userIds=a.join(",")),t.groupName=this.editprojectForm.groupName,t.groupName){if(t.groupLeaderMobile=this.editprojectForm.groupLeaderMobile,t.groupLeaderMobile){if(11!=t.groupLeaderMobile.length)return void this.$message.warning("请输入有效的11位号码！");if(!/^1[3456789]\d{9}$/.test(t.groupLeaderMobile))return this.$message.warning("手机号码有误，请重填"),!1}this.groupLeaderData&&this.groupLeaderData.length>0?t.groupLeaderId=this.groupLeaderData[0].userId:t.groupLeaderId=this.editRow.groupLeaderId,t.groupId=this.editRow.groupId,this.$post(i.a.systemManager.groupSave,t,function(t){0===t.code?(e.$message.success("编辑项目成功！"),e.closeEdit(),e.$emit("refresh")):e.$message.error(t.msg)})}else this.$message.warning("研发组名称不能为空!")}}},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"editprojectDialog",attrs:{visible:!0,width:"820px","close-on-press-escape":!1,"close-on-click-modal":!1,"show-close":!1,"append-to-body":""}},[a("div",{staticClass:"header",attrs:{slot:"title"},slot:"title"},[a("span",[e._v("编辑")]),e._v(" "),a("span",{staticClass:"el-icon-close",staticStyle:{cursor:"pointer"},attrs:{title:"关闭"},on:{click:e.closeEdit}})]),e._v(" "),a("div",{staticClass:"newprojectDialog_form"},[a("div",{staticClass:"form_item"},[a("div",{staticClass:"form_item_left"},[a("span",{staticClass:"star"},[e._v("*")]),a("span",{staticClass:"form_item_label"},[e._v("研发组名称")])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.editprojectForm.groupName,expression:"editprojectForm.groupName"}],staticClass:"form_input",attrs:{type:"text",placeholder:"请输入"},domProps:{value:e.editprojectForm.groupName},on:{input:function(t){t.target.composing||e.$set(e.editprojectForm,"groupName",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form_item"},[a("div",{staticClass:"form_item_left"},[a("span",{staticClass:"star"}),a("span",{staticClass:"form_item_label"},[e._v("研发组负责人")])]),e._v(" "),e.groupLeaderData&&e.groupLeaderData.length>0?a("div",{staticClass:"form_item_text"},[e._v(e._s(e.groupLeaderData[0].username))]):e.editRow?a("div",{staticClass:"form_item_text"},[e._v(e._s(e.editRow.groupLeaderName?e.editRow.groupLeaderName:""))]):e._e(),e._v(" "),a("button",{staticClass:"newChoseBut",attrs:{title:"选择"},on:{click:e.chooseGroupLeaderName}},[e._v("选择")])]),e._v(" "),a("div",{staticClass:"form_item"},[a("div",{staticClass:"form_item_left"},[a("span",{staticClass:"star"}),a("span",{staticClass:"form_item_label"},[e._v("负责人电话")])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.editprojectForm.groupLeaderMobile,expression:"editprojectForm.groupLeaderMobile"}],staticClass:"form_input",attrs:{type:"text",disabled:e.editprojectForm.groupLeaderMobile,placeholder:"请输入",oninput:"value=value.replace(/[^\\d]/g,'')",maxlength:"11"},domProps:{value:e.editprojectForm.groupLeaderMobile},on:{input:function(t){t.target.composing||e.$set(e.editprojectForm,"groupLeaderMobile",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form_item"},[a("div",{staticClass:"form_item_left",staticStyle:{"text-align":"right"}},[a("span",{staticClass:"star"}),a("span",{staticClass:"form_item_label"},[e._v("研发成员")])]),e._v(" "),e.devGrupChoseDataUsernames?a("div",{staticClass:"form_item_text"},[e._v(e._s(e.devGrupChoseDataUsernames))]):e.editRow?a("div",{staticClass:"form_item_text"},[e._v(e._s(e.editRow.userNames?e.editRow.userNames:""))]):e._e(),e._v(" "),a("button",{staticClass:"newChoseBut",attrs:{title:"选择"},on:{click:e.chooseDevGroup}},[e._v("选择")])])]),e._v(" "),e.devGrupChoseData&&e.devGrupChoseData.length>0?a("el-table",{staticClass:"systemsManage_table",staticStyle:{width:"100%"},attrs:{data:e.devGrupChoseData,border:""}},[a("el-table-column",{attrs:{type:"selection",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"username",label:"用户名称","min-width":"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"roleNames",label:"角色","min-width":"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"email",label:"邮箱","min-width":"160"}}),e._v(" "),a("el-table-column",{attrs:{prop:"mobile",label:"电话号码","min-width":"130"}}),e._v(" "),a("el-table-column",{attrs:{prop:"dat7",label:"操作","min-width":"90"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("button",{staticClass:"editCheckedBut",attrs:{title:"移除"},on:{click:function(a){return e.deleteCheckedHandle(t.$index,t.row)}}},[e._v("移除")])]}}],null,!1,2733025422)})],1):e._e(),e._v(" "),a("span",{staticClass:"newprojectDialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("button",{staticClass:"newDialogButton",staticStyle:{"margin-right":"30px"},attrs:{title:"取消"},on:{click:e.closeEdit}},[e._v("取 消")]),e._v(" "),a("button",{staticClass:"newDialogButton",attrs:{type:"primary",title:"确定"},on:{click:e.submitEditProDialog}},[e._v("确 定")])]),e._v(" "),e.ChooseGroupShow?[a("ChooseGroupDialog",{on:{closeDevGruop:e.closeDevGruop,devGrupChoseInfo:e.devGrupChoseInfo}})]:e._e(),e._v(" "),e.groupLeaderShow?[a("ChooseLeaderDilog",{on:{closeGroupLeader:e.closeGroupLeader,groupLeaderInfo:e.groupLeaderInfo}})]:e._e()],2)},staticRenderFns:[]};var v=a("VU/8")(g,m,!1,function(e){a("1pMG")},"data-v-0a5050d9",null).exports,f={props:{lookDetailRow:{type:Object,default:{}}},mounted:function(){this.getInit(),this.lookDetailTable.push(this.lookDetailRow),console.log(this.lookDetailRow)},data:function(){return{lookDetailTable:[]}},methods:{getInit:function(){var e=this,t=[];this.lookDetailRow&&this.lookDetailRow.userIds&&(this.lookDetailRow.userIds.split(",").forEach(function(e){t.push(Number(e))}),this.$post(i.a.systemManager.queryListByIds,t,function(t){0===t.code?(e.lookDetailTable=t.list,console.log(t)):e.$message.error(t.msg)}))},closeEdit:function(){this.$emit("closeDetail")}}},_={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"lookDetailDialog",attrs:{visible:!0,width:"820px","close-on-press-escape":!1,"close-on-click-modal":!1,"show-close":!1,"append-to-body":""}},[a("div",{staticClass:"header",attrs:{slot:"title"},slot:"title"},[a("span",[e._v("查看成员")]),e._v(" "),a("span",{staticClass:"el-icon-close",staticStyle:{cursor:"pointer"},attrs:{title:"关闭"},on:{click:e.closeEdit}})]),e._v(" "),a("el-table",{ref:"lookDetailTable",staticStyle:{width:"100%"},attrs:{border:"",data:e.lookDetailTable}},[a("el-table-column",{attrs:{prop:"username",label:"用户名称","min-width":"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"roleNames",label:"角色","min-width":"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"email",label:"邮箱","min-width":"160"}}),e._v(" "),a("el-table-column",{attrs:{prop:"mobile",label:"电话号码","min-width":"130"}})],1)],1)},staticRenderFns:[]};var C,b=a("VU/8")(f,_,!1,function(e){a("RVA+")},"data-v-3b977c74",null).exports,w={props:{},created:function(){},mounted:function(){this.getInit(),this.$parent.$data.devGrupChoseData&&(this.devGrupChoseRows=this.$parent.$data.devGrupChoseData,console.log(this.devGrupChoseRows))},components:{},data:function(){return{multipleSelection:[],userNameKey:null,choosePersonTable:[],devGrupChoseRows:[],pagination:{page:1,total:30,size:10}}},methods:(C={searchKey:function(){this.getInit()},handleCurrentChange:function(e){this.pagination.page=e,this.getInit()},getInit:function(){var e=this,t={};t.page=this.pagination.page,t.limit=this.pagination.size,t.username=this.userNameKey,this.$post(i.a.systemManager.listByNoGroup,t,function(t){0===t.code?(e.choosePersonTable=t.page.list,e.pagination.total=Number(t.page.totalCount),e.getChecked(e.devGrupChoseRows),console.log(t)):e.$message.error(t.msg)})}},u()(C,"handleCurrentChange",function(e){this.pagination.page=e,this.getInit()}),u()(C,"getChecked",function(e){var t=this;this.$nextTick(function(){for(var a=0;a<e.length;a++)for(var o=0;o<t.$data.choosePersonTable.length;o++)e[a].userId==t.$data.choosePersonTable[o].userId&&t.$refs.choosePersonTableRef.toggleRowSelection(t.$data.choosePersonTable[o])})}),u()(C,"handleSelectionChange",function(e){this.multipleSelection=e,console.log(this.multipleSelection)}),u()(C,"closeEdit",function(){this.$emit("closeDevGruop")}),u()(C,"submitDevPerson",function(){this.$emit("closeDevGruop"),this.$emit("devGrupChoseInfo",this.multipleSelection),console.log(this.multipleSelection)}),C)},D={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"lookDetailDialog",attrs:{visible:!0,width:"820px","close-on-press-escape":!1,"close-on-click-modal":!1,"show-close":!1,"append-to-body":""}},[a("div",{staticClass:"header",attrs:{slot:"title"},slot:"title"},[a("span",[e._v("选择成员")]),e._v(" "),a("span",{staticClass:"el-icon-close",staticStyle:{cursor:"pointer"},attrs:{title:"关闭"},on:{click:e.closeEdit}})]),e._v(" "),a("div",{staticClass:"search_left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.userNameKey,expression:"userNameKey"}],ref:"DevNameKey",staticClass:"searchInput",attrs:{placeholder:"用户名称"},domProps:{value:e.userNameKey},on:{input:function(t){t.target.composing||(e.userNameKey=t.target.value)}}}),e._v(" "),a("div",{staticClass:"search_icon"},[a("span",{staticClass:"el-icon-search",attrs:{title:"搜索"},on:{click:e.searchKey}})])]),e._v(" "),a("el-table",{ref:"choosePersonTableRef",staticStyle:{width:"100%"},attrs:{border:"",data:e.choosePersonTable},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"username",label:"用户名称","min-width":"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"roleNames",label:"角色","min-width":"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"email",label:"邮箱","min-width":"160"}}),e._v(" "),a("el-table-column",{attrs:{prop:"mobile",label:"电话号码","min-width":"130"}})],1),e._v(" "),a("div",{staticClass:"pagination"},[a("div",{staticClass:"pagination-left"},[a("el-pagination",{attrs:{"current-page":e.pagination.page,"page-size":e.pagination.size,layout:"total, prev, pager, next, jumper",total:e.pagination.total},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),a("div",{staticClass:"pagination-right"},[e._v("\n      当前显示"+e._s((e.pagination.page-1)*e.pagination.size+1)+"-"+e._s((e.pagination.page-1)*e.pagination.size+e.choosePersonTable?e.choosePersonTable.length:"0")+"条记录 "),a("span",[e._v("共"+e._s(e.pagination.total)+"条记录")])])]),e._v(" "),a("span",{staticClass:"newprojectDialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("button",{staticClass:"newDialogButton",staticStyle:{"margin-right":"30px"},attrs:{title:"取消"},on:{click:e.closeEdit}},[e._v("取 消")]),e._v(" "),a("button",{staticClass:"newDialogButton",attrs:{type:"primary",title:"确定"},on:{click:e.submitDevPerson}},[e._v("确 定")])])],1)},staticRenderFns:[]};var y,G=a("VU/8")(w,D,!1,function(e){a("hlnb")},"data-v-af4128a0",null).exports,$={props:{},created:function(){},mounted:function(){this.getInit(),this.$parent.$data.groupLeaderData&&(this.devGrupChoseRows=this.$parent.$data.groupLeaderData)},components:{},data:function(){return{multipleSelection:[],userNameKey:null,choosePersonTable:[],devGrupChoseRows:[],pagination:{page:1,total:30,size:10}}},methods:(y={searchKey:function(){this.getInit()},handleCurrentChange:function(e){this.pagination.page=e,this.getInit()},getInit:function(){var e=this,t={};t.page=this.pagination.page,t.limit=this.pagination.size,t.username=this.userNameKey,this.$post(i.a.systemManager.listByNoGroup,t,function(t){0===t.code?(e.choosePersonTable=t.page.list,e.getChecked(e.devGrupChoseRows)):e.$message.error(t.msg)})}},u()(y,"handleCurrentChange",function(e){this.pagination.page=e,this.getInit()}),u()(y,"getChecked",function(e){var t=this;this.$data.choosePersonTable&&0!=this.$data.choosePersonTable.length&&this.$nextTick(function(){for(var a=0;a<e.length;a++)for(var o=0;o<t.$data.choosePersonTable.length;o++)e[a].userId==t.$data.choosePersonTable[o].userId&&t.$refs.choosePersonTableRef.toggleRowSelection(t.$data.choosePersonTable[o])})}),u()(y,"handleSelectionChange",function(e){e.length>1?(this.multipleSelection=[e[e.length-1]],this.$refs.choosePersonTableRef.clearSelection(),this.getChecked(this.multipleSelection)):this.multipleSelection=e,console.log(this.multipleSelection)}),u()(y,"closeEdit",function(){this.$emit("closeGroupLeader")}),u()(y,"submitDevPerson",function(){this.$emit("closeGroupLeader"),this.$emit("groupLeaderInfo",this.multipleSelection),console.log(this.multipleSelection)}),y)},S={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"lookDetailDialog",attrs:{visible:!0,width:"720px","close-on-press-escape":!1,"close-on-click-modal":!1,"show-close":!1,"append-to-body":""}},[a("div",{staticClass:"header",attrs:{slot:"title"},slot:"title"},[a("span",[e._v("选择研发负责人")]),e._v(" "),a("span",{staticClass:"el-icon-close",staticStyle:{cursor:"pointer"},attrs:{title:"关闭"},on:{click:e.closeEdit}})]),e._v(" "),a("div",{staticClass:"search_left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.userNameKey,expression:"userNameKey"}],ref:"DevNameKey",staticClass:"searchInput",attrs:{placeholder:"用户名称"},domProps:{value:e.userNameKey},on:{input:function(t){t.target.composing||(e.userNameKey=t.target.value)}}}),e._v(" "),a("div",{staticClass:"search_icon"},[a("span",{staticClass:"el-icon-search",attrs:{title:"搜索"},on:{click:e.searchKey}})])]),e._v(" "),a("el-table",{ref:"choosePersonTableRef",staticStyle:{width:"100%"},attrs:{border:"",data:e.choosePersonTable},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"username",label:"用户名称","min-width":"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"roleNames",label:"角色","min-width":"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"email",label:"邮箱","min-width":"160"}}),e._v(" "),a("el-table-column",{attrs:{prop:"mobile",label:"电话号码","min-width":"130"}})],1),e._v(" "),a("div",{staticClass:"pagination"},[a("div",{staticClass:"pagination-left"},[a("el-pagination",{attrs:{"current-page":e.pagination.page,"page-size":e.pagination.size,layout:"total, prev, pager, next, jumper",total:e.pagination.total},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),a("div",{staticClass:"pagination-right"},[e._v("\n      当前显示"+e._s((e.pagination.page-1)*e.pagination.size+1)+"-"+e._s((e.pagination.page-1)*e.pagination.size+e.choosePersonTable?e.choosePersonTable.length:"0")+"条记录 "),a("span",[e._v("共"+e._s(e.pagination.total)+"条记录")])])]),e._v(" "),a("span",{staticClass:"newprojectDialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("button",{staticClass:"newDialogButton",staticStyle:{"margin-right":"30px"},attrs:{title:"取消"},on:{click:e.closeEdit}},[e._v("取 消")]),e._v(" "),a("button",{staticClass:"newDialogButton",attrs:{type:"primary",title:"确定"},on:{click:e.submitDevPerson}},[e._v("确 定")])])],1)},staticRenderFns:[]};var L={components:{EditDialog:v,LookGroupDialog:b,ChooseGroupDialog:G,ChooseLeaderDilog:a("VU/8")($,S,!1,function(e){a("Chrt")},"data-v-809104e0",null).exports},mounted:function(){this.getSysGroupIdList()},data:function(){return{devGrupChoseDataUsernames:null,groupLeaderShow:!1,groupLeaderData:[],devGrupChoseData:[],ChooseGroupShow:!1,lookDetailShow:!1,lookDetailRow:{},ResourceGrantRow:{},ResourceGrantShow:!1,editRow:{},editDialogShow:!1,projecttableData:[],projectOptions:[],projectForm:{groupName:null,username:null},pagination:{page:1,total:30,size:10},newprojectDialog:!1,addprojectForm:{groupName:null,groupLeaderMobile:null}}},methods:{groupLeaderInfo:function(e){this.groupLeaderData=e,e&&0!=e.length?this.addprojectForm.groupLeaderMobile=e[0].mobile:this.addprojectForm.groupLeaderMobile=null},closeGroupLeader:function(){this.groupLeaderShow=!1},chooseGroupLeaderName:function(){this.groupLeaderShow=!0},getSysGroupIdList:function(){var e=this,t={};(t=this.projectForm).page=this.pagination.page,t.limit=this.pagination.size,this.$post(i.a.systemManager.groupList,t,function(t){0===t.code?(e.projecttableData=t.page.list,e.pagination.total=Number(t.page.totalCount)):e.$message.error(t.msg)})},submitNewProDialog:function(){var e=this,t={},a=[];if(this.devGrupChoseData&&this.devGrupChoseData.length>0&&(this.devGrupChoseData.forEach(function(e){a.push(e.userId)}),t.userIds=a.join(",")),this.groupLeaderData&&0!=this.groupLeaderData.length&&(t.groupLeaderId=this.groupLeaderData[0].userId),t.groupName=this.addprojectForm.groupName,t.groupName){if(t.groupLeaderMobile=this.addprojectForm.groupLeaderMobile,t.groupLeaderMobile){if(11!=t.groupLeaderMobile.length)return void this.$message.warning("请输入有效的11位号码！");if(!/^1[3456789]\d{9}$/.test(t.groupLeaderMobile))return this.$message.warning("手机号码有误，请重填"),!1}this.$post(i.a.systemManager.groupSave,t,function(t){0===t.code?(e.$message.success("新增项目成功！"),e.getSysGroupIdList(),e.closenewprojectDialog()):e.$message.error(t.msg)})}else this.$message.warning("研发组名称不能为空!")},closenewprojectDialog:function(){this.newprojectDialog=!1,this.addprojectForm={},this.devGrupChoseData=[],this.groupLeaderData=[],this.devGrupChoseDataUsernames=null},devGrupChoseInfo:function(e){var t;if(this.devGrupChoseData&&0==this.devGrupChoseData.length)(t=this.devGrupChoseData).push.apply(t,s()(e));else if(this.devGrupChoseData&&0!=this.devGrupChoseData.length){var a,o={};(a=this.devGrupChoseData).push.apply(a,s()(e)),this.devGrupChoseData=this.devGrupChoseData.reduce(function(e,t){return!o[t.userId]&&(o[t.userId]=e.push(t)),e},[])}var i=[];this.devGrupChoseData.forEach(function(e){i.push(e.username)}),this.devGrupChoseDataUsernames=i.join(","),console.log(this.devGrupChoseData)},closeDevGruop:function(){this.ChooseGroupShow=!1},chooseDevGroup:function(){this.ChooseGroupShow=!0},closeDetail:function(){this.lookDetailShow=!1},groupDetail:function(e){this.lookDetailShow=!0,this.lookDetailRow=e,console.log(this.lookDetailRow)},projectSearch:function(){this.pagination.page=1,this.getSysGroupIdList()},closeEdit:function(){this.editDialogShow=!1},editHandle:function(e,t){this.editDialogShow=!0,this.editRow=t,console.log(this.editRow)},deleteCheckedHandle:function(e,t){this.devGrupChoseData.splice(e,1);var a=[];this.devGrupChoseData.forEach(function(e){a.push(e.username)}),this.devGrupChoseDataUsernames=a.join(",")},deleteHandle:function(e,t){var a=this;t.projectNames?t.projectNames||this.$message.warning("该项目已有数据，不能删除!"):this.$confirm("确定删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$get(i.a.systemManager.groupDelete+"/"+t.groupId,null,function(t){0===t.code?(a.$message.success("删除成功!"),a.projecttableData.splice(e,1),a.getSysGroupIdList()):a.$message.error(t.msg)})})},handleCurrentChange:function(e){this.pagination.page=e,this.getSysGroupIdList()},handleAddproject:function(){this.newprojectDialog=!1},addprojectHandle:function(){this.newprojectDialog=!0}}},I={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"systemsProjectManage"},[a("div",{staticClass:"systemsManage_search"},[a("div",{staticClass:"systemsManage_search_left-wrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.projectForm.groupName,expression:"projectForm.groupName"}],staticClass:"searchInput",staticStyle:{"margin-right":"20px"},attrs:{placeholder:"研发组名称"},domProps:{value:e.projectForm.groupName},on:{input:function(t){t.target.composing||e.$set(e.projectForm,"groupName",t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.projectForm.username,expression:"projectForm.username"}],staticClass:"searchInput",attrs:{placeholder:"研发组负责人"},domProps:{value:e.projectForm.username},on:{input:function(t){t.target.composing||e.$set(e.projectForm,"username",t.target.value)}}}),e._v(" "),a("div",{staticClass:"search_icon"},[a("span",{staticClass:"el-icon-search",attrs:{title:"搜索"},on:{click:e.projectSearch}})])]),e._v(" "),a("div",{staticClass:"addproject",on:{click:e.addprojectHandle}},[e._v("\n        添加\n      ")])]),e._v(" "),a("el-table",{ref:"projecttableData",staticClass:"systemsManage_table",staticStyle:{width:"100%"},attrs:{data:e.projecttableData,border:"",height:"441"}},[a("el-table-column",{attrs:{prop:"groupName",label:"研发名称","min-width":"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"groupLeaderName",label:"研发组负责人","min-width":"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"groupLeaderMobile",label:"负责人电话","min-width":"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"userNames",label:"成员","min-width":"130"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"tableNumber",on:{click:function(a){return e.groupDetail(t.row)}}},[e._v(e._s(t.row.userNames))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"projectNames",label:"项目名称","min-width":"130"}}),e._v(" "),a("el-table-column",{attrs:{prop:"dat7",label:"操作","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("button",{staticClass:"tablebutton editBut",attrs:{title:"编辑"},on:{click:function(a){return e.editHandle(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("button",{staticClass:"tablebutton deleteBut",attrs:{title:"删除"},on:{click:function(a){return e.deleteHandle(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{staticClass:"pagination"},[a("div",{staticClass:"pagination-left"},[a("el-pagination",{attrs:{"current-page":e.pagination.page,"page-size":e.pagination.size,layout:"total, prev, pager, next, jumper",total:e.pagination.total},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),a("div",{staticClass:"pagination-right"},[e._v("\n        当前显示"+e._s((e.pagination.page-1)*e.pagination.size+1)+"-"+e._s((e.pagination.page-1)*e.pagination.size+e.projecttableData.length)+"条记录 "),a("span",[e._v("共"+e._s(e.pagination.total)+"条记录")])])]),e._v(" "),a("el-dialog",{staticClass:"addprojectDialog",attrs:{visible:e.newprojectDialog,width:"820px","close-on-press-escape":!1,"close-on-click-modal":!1,"show-close":!1,"append-to-body":""},on:{"update:visible":function(t){e.newprojectDialog=t}}},[a("div",{staticClass:"header",attrs:{slot:"title"},slot:"title"},[a("span",[e._v("添加")]),e._v(" "),a("span",{staticClass:"el-icon-close",staticStyle:{cursor:"pointer"},attrs:{title:"关闭"},on:{click:e.closenewprojectDialog}})]),e._v(" "),a("div",{staticClass:"newprojectDialog_form"},[a("div",{staticClass:"form_item"},[a("div",{staticClass:"form_item_left"},[a("span",{staticClass:"star"},[e._v("*")]),a("span",{staticClass:"form_item_label"},[e._v("研发组名称")])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.addprojectForm.groupName,expression:"addprojectForm.groupName"}],staticClass:"form_input",attrs:{type:"text",placeholder:"请输入"},domProps:{value:e.addprojectForm.groupName},on:{input:function(t){t.target.composing||e.$set(e.addprojectForm,"groupName",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form_item"},[a("div",{staticClass:"form_item_left"},[a("span",{staticClass:"star"}),a("span",{staticClass:"form_item_label"},[e._v("研发组负责人")])]),e._v(" "),a("div",{staticClass:"form_item_text"},[e._v(e._s(e.groupLeaderData&&e.groupLeaderData.length>0?e.groupLeaderData[0].username:""))]),e._v(" "),a("button",{staticClass:"newChoseBut",attrs:{title:"选择"},on:{click:e.chooseGroupLeaderName}},[e._v("选择")])]),e._v(" "),a("div",{staticClass:"form_item"},[a("div",{staticClass:"form_item_left"},[a("span",{staticClass:"star"}),a("span",{staticClass:"form_item_label"},[e._v("负责人电话")])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.addprojectForm.groupLeaderMobile,expression:"addprojectForm.groupLeaderMobile"}],staticClass:"form_input",attrs:{type:"text",disabled:e.addprojectForm.groupLeaderMobile,placeholder:"请输入",oninput:"value=value.replace(/[^\\d]/g,'')",maxlength:"11"},domProps:{value:e.addprojectForm.groupLeaderMobile},on:{input:function(t){t.target.composing||e.$set(e.addprojectForm,"groupLeaderMobile",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form_item"},[a("div",{staticClass:"form_item_left",staticStyle:{"text-align":"right"}},[a("span",{staticClass:"star"}),a("span",{staticClass:"form_item_label"},[e._v("研发成员")])]),e._v(" "),a("div",{staticClass:"form_item_text"},[e._v(e._s(e.devGrupChoseDataUsernames?e.devGrupChoseDataUsernames:""))]),e._v(" "),a("button",{staticClass:"newChoseBut",attrs:{title:"选择"},on:{click:e.chooseDevGroup}},[e._v("选择")])])]),e._v(" "),e.devGrupChoseData&&e.devGrupChoseData.length>0?a("el-table",{staticClass:"systemsManage_table",staticStyle:{width:"100%"},attrs:{data:e.devGrupChoseData,border:"",height:"441"}},[a("el-table-column",{attrs:{type:"selection",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"username",label:"用户名称","min-width":"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"roleNames",label:"角色","min-width":"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"email",label:"邮箱","min-width":"160"}}),e._v(" "),a("el-table-column",{attrs:{prop:"mobile",label:"电话号码","min-width":"130"}}),e._v(" "),a("el-table-column",{attrs:{prop:"dat7",label:"操作","min-width":"90"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("button",{staticClass:"editCheckedBut",attrs:{title:"移除"},on:{click:function(a){return e.deleteCheckedHandle(t.$index,t.row)}}},[e._v("移除")])]}}],null,!1,2733025422)})],1):e._e(),e._v(" "),a("span",{staticClass:"newprojectDialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("button",{staticClass:"newDialogButton",staticStyle:{"margin-right":"30px"},attrs:{title:"取消"},on:{click:e.closenewprojectDialog}},[e._v("取 消")]),e._v(" "),a("button",{staticClass:"newDialogButton",attrs:{type:"primary",title:"确定"},on:{click:e.submitNewProDialog}},[e._v("确 定")])])],1),e._v(" "),e.editDialogShow?[a("EditDialog",{on:{closeEdit:e.closeEdit,refresh:e.getSysGroupIdList}})]:e._e(),e._v(" "),e.lookDetailShow?[a("LookGroupDialog",{attrs:{lookDetailRow:e.lookDetailRow},on:{closeDetail:e.closeDetail}})]:e._e(),e._v(" "),e.ChooseGroupShow?[a("ChooseGroupDialog",{on:{closeDevGruop:e.closeDevGruop,devGrupChoseInfo:e.devGrupChoseInfo}})]:e._e(),e._v(" "),e.groupLeaderShow?[a("ChooseLeaderDilog",{on:{closeGroupLeader:e.closeGroupLeader,groupLeaderInfo:e.groupLeaderInfo}})]:e._e()],2)},staticRenderFns:[]};var N=a("VU/8")(L,I,!1,function(e){a("EBMY")},"data-v-6a112eeb",null);t.default=N.exports}});