var okEnsure;var singleId;var singleName;var singleType;var singleLoginName;var sInfor;var singleDepartmentName;var singleDepartmentId;var singleWorkGroupName;var singleWorkGroupId;var singleEmail;var singleHonorificName;var singleWeight;var singleUserDeptName;var mId;var mName;var mLoginName;var infor;var userInfo;var mTreeType;var mType;var mDepartmentName;var mDepartmentId;var mWorkGroupName;var mWorkGroupId;var mEmail;var mHonorificName;var mWeight;var acsSystemUrl;var hiddenInputId;var showInputId;var loginNameId;var treeType;var isAppend;var mode;var onlineVisible;var departmentDisplayType;var userWithoutDeptVisible;var hiddenId;var showId;var loginNId;var acsUrl;var type;var formId;function popTree(i){var h=i.title;var g=i.innerWidth;treeType=i.treeType;var e=i.defaultTreeValue;var c=i.leafPage;var f=i.treeTypeJson;var j=i.multiple;hiddenInputId=i.hiddenInputId;showInputId=i.showInputId;acsSystemUrl=i.acsSystemUrl;var d=i.callBack;isAppend=i.isAppend;loginNameId=i.loginNameId;formId=i.formId;mode=i.mode;onlineVisible=i.onlineVisible;departmentDisplayType=i.departmentDisplayType;userWithoutDeptVisible=i.userWithoutDeptVisible;if(hiddenInputId==""||hiddenInputId==null){hiddenInputId="NOHiddenInputId"}if(showInputId==""||showInputId==null){showInputId="NOShowInputId"}if(loginNameId==""){loginNameId="noLoginName"}if(treeType==""||treeType==null){treeType="COMPANY"}if(c=="true"&&f==""){alert("\u8bf7\u8bbe\u5b9a\u9875\u7b7e\u53c2\u6570!");return}if(typeof(h)=="undefined"||typeof(g)=="undefined"){h="\u9009\u62e9";g="300"}if(typeof(h)=="defaultTreeValue"||e==""){e="id"}var b=acsSystemUrl;if(typeof(appRoot)!="undefined"&&appRoot!=""){b=appRoot}if(typeof(departmentDisplayType)=="undefined"){departmentDisplayType="NAME"}if(typeof(userWithoutDeptVisible)=="undefined"){userWithoutDeptVisible=false}var a=b+"/portal/popTree.action?treeType="+treeType+"&multiple="+j+"&hiddenInputId="+hiddenInputId+"&showInputId="+showInputId+"&callBack="+d+"&treeTypeJson="+f+"&leafPage="+c+"&defaultTreeValue="+e+"&isAppend="+isAppend+"&loginNameId="+loginNameId+"&formId="+formId+"&mode="+mode+"&onlineVisible="+onlineVisible+"&departmentDisplayType="+departmentDisplayType+"&userWithoutDeptVisible="+userWithoutDeptVisible;$.colorbox({href:encodeURI(a),iframe:true,innerWidth:g,innerHeight:400,overlayClose:false,title:h,onClosed:function(){if(okEnsure=="OK"){d.call();okEnsure=""}}})}function removeOption(a){hiddenId=a.hiddenId;showId=a.showId;loginNId=a.loginNId;acsUrl=a.acsUrl;type=a.type;formId=a.formId;if(hiddenId==""){hiddenId="NOHiddenInputId"}if(showId==""){alert("\u8bf7\u8f93\u5165\u663e\u793a\u57dfid");return}if(acsUrl==""){alert("\u8bf7\u8f93\u5165\u7cfb\u7edfwebRoot");return}if(type==""){alert("\u8bf7\u8f93\u5165\u6811\u7684\u7c7b\u578b");return}if(formId==""){alert("\u8bf7\u8f93\u5165formId");return}var c=acsUrl+"/portal/removeOptionTree.action";var b=createRemoveJson(showId,loginNId);var d=$("#removeStaffJson").val();if(typeof(d)=="undefined"){$("#"+formId).append("<input type='hidden' id='removeStaffJson' name='removeStaffJson' value='"+b+"'/> ")}else{$("#removeStaffJson").attr("value",b)}c=c+"?hiddenInputId="+hiddenId+"&showInputId="+showId+"&treeType="+type+"&loginNameId="+loginNId;$.colorbox({href:encodeURI(c),iframe:true,innerWidth:400,innerHeight:400,overlayClose:false,title:"\u79fb\u9664",onClosed:function(){}})}function getHiddenInputValueFromInput(){if(hiddenId=="NOHiddenInputId"){return $("#builtInInput").val()}else{return $("#"+hiddenId).val()}}function createRemoveJson(g,j){var k=getHiddenInputValueFromInput().split(",");var a=$("#"+g).val().split(",");var f="";if((j=="")||(typeof($("#"+j).val())=="undefined")){f="noLoginName"}else{f=$("#"+j).val().split(",")}if(getHiddenInputValueFromInput().indexOf("+#")==-1){var m="[";for(var h=0;h<k.length;h++){if(treeType=="DEPARTMENT_TREE"){m=m+'{"id":"'+k[h]+'","name":"'+a[h]+'","type":"department","loginName":""},'}else{if(treeType=="GROUP_TREE"){m=m+'{"id":"'+k[h]+'","name":"'+a[h]+'","type":"group","loginName":""},'}else{if(f=="noLoginName"){m=m+'{"id":"'+k[h]+'","name":"'+a[h]+'","type":"user","loginName":""},'}else{m=m+'{"id":"'+k[h]+'","name":"'+a[h]+'","type":"user","loginName":"'+f[h]+'"},'}}}}m=m.substring(0,m.length-1)+"]"}else{var b=k;var c=b.split("+#")[0].split("==")[1];var e=b.split("+#")[1].split("==")[1];var m="[";if(c!=""){var l=c.split(",");for(var h=0;h<l.length;h++){m=m+'{"id":"'+l[h]+'","name":"'+a[h]+'","type":"department","loginName":""},'}}if(e!=""){var d=e.split(",");for(var h=0;h<d.length;h++){m=m+'{"id":"'+d[h]+'","name":"'+a[h]+'","type":"group","loginName":""},'}}m=m.substring(0,m.length-1)+"]"}return m}function getId(){alert("\u65b9\u6cd5\u8c03\u7528\u4fee\u6539\uff1a\u8bf7\u628a\u3010getId()\u3011\u66f4\u6362\u4e3a\u3010jstree.getId()\u3011")}function getName(){alert("\u65b9\u6cd5\u8c03\u7528\u4fee\u6539\uff1a\u8bf7\u628a\u3010getName()\u3011\u66f4\u6362\u4e3a\u3010jstree.getName()\u3011")}function getType(){alert("\u65b9\u6cd5\u8c03\u7528\u4fee\u6539\uff1a\u8bf7\u628a\u3010getType()\u3011\u66f4\u6362\u4e3a\u3010jstree.getType()\u3011")}function getLoginName(){alert("\u65b9\u6cd5\u8c03\u7528\u4fee\u6539\uff1a\u8bf7\u628a\u3010getLoginName()\u3011\u66f4\u6362\u4e3a\u3010jstree.getLoginName()\u3011")}function getSingleInfor(){alert("\u65b9\u6cd5\u8c03\u7528\u4fee\u6539\uff1a\u8bf7\u628a\u3010getSingleInfor()\u3011\u66f4\u6362\u4e3a\u3010jstree.getSingleInfor()\u3011")}function getDepartmentName(){alert("\u65b9\u6cd5\u8c03\u7528\u4fee\u6539\uff1a\u8bf7\u628a\u3010getDepartmentName()\u3011\u66f4\u6362\u4e3a\u3010jstree.getDepartmentName()\u3011")}function getDepartmentId(){alert("\u65b9\u6cd5\u8c03\u7528\u4fee\u6539\uff1a\u8bf7\u628a\u3010getDepartmentId()\u3011\u66f4\u6362\u4e3a\u3010jstree.getDepartmentId()\u3011")}function getWorkGroupName(){alert("\u65b9\u6cd5\u8c03\u7528\u4fee\u6539\uff1a\u8bf7\u628a\u3010getWorkGroupName()\u3011\u66f4\u6362\u4e3a\u3010jstree.getWorkGroupName()\u3011")}function getWorkGroupId(){alert("\u65b9\u6cd5\u8c03\u7528\u4fee\u6539\uff1a\u8bf7\u628a\u3010getWorkGroupId()\u3011\u66f4\u6362\u4e3a\u3010jstree.getWorkGroupId()\u3011")}function getEmail(){alert("\u65b9\u6cd5\u8c03\u7528\u4fee\u6539\uff1a\u8bf7\u628a\u3010getEmail()\u3011\u66f4\u6362\u4e3a\u3010jstree.getEmail()\u3011")}function getHonorificName(){alert("\u65b9\u6cd5\u8c03\u7528\u4fee\u6539\uff1a\u8bf7\u628a\u3010getHonorificName()\u3011\u66f4\u6362\u4e3a\u3010jstree.getHonorificName()\u3011")}function getWeight(){alert("\u65b9\u6cd5\u8c03\u7528\u4fee\u6539\uff1a\u8bf7\u628a\u3010getWeight()\u3011\u66f4\u6362\u4e3a\u3010jstree.getWeight()\u3011")}function getUserDepartmentName(){alert("\u65b9\u6cd5\u8c03\u7528\u4fee\u6539\uff1a\u8bf7\u628a\u3010getUserDepartmentName()\u3011\u66f4\u6362\u4e3a\u3010jstree.getUserDepartmentName()\u3011")}function getIds(){alert("\u65b9\u6cd5\u8c03\u7528\u4fee\u6539\uff1a\u8bf7\u628a\u3010getIds()\u3011\u66f4\u6362\u4e3a\u3010jstree.getIds()\u3011")}function getNames(){alert("\u65b9\u6cd5\u8c03\u7528\u4fee\u6539\uff1a\u8bf7\u628a\u3010getNames()\u3011\u66f4\u6362\u4e3a\u3010jstree.getNames()\u3011")}function getLoginNames(){alert("\u65b9\u6cd5\u8c03\u7528\u4fee\u6539\uff1a\u8bf7\u628a\u3010getLoginNames()\u3011\u66f4\u6362\u4e3a\u3010jstree.getLoginNames()\u3011")}function getInfos(){alert("\u65b9\u6cd5\u8c03\u7528\u4fee\u6539\uff1a\u8bf7\u628a\u3010getInfos()\u3011\u66f4\u6362\u4e3a\u3010jstree.getInfos()\u3011")}function getUserInfos(){alert("\u65b9\u6cd5\u8c03\u7528\u4fee\u6539\uff1a\u8bf7\u628a\u3010getUserInfos()\u3011\u66f4\u6362\u4e3a\u3010jstree.getUserInfos()\u3011")}function getTreeType(){alert("\u65b9\u6cd5\u8c03\u7528\u4fee\u6539\uff1a\u8bf7\u628a\u3010getTreeType()\u3011\u66f4\u6362\u4e3a\u3010jstree.getTreeType()\u3011")}function getTypes(){alert("\u65b9\u6cd5\u8c03\u7528\u4fee\u6539\uff1a\u8bf7\u628a\u3010getTypes()\u3011\u66f4\u6362\u4e3a\u3010jstree.getTypes()\u3011")}function getDepartmentNames(){alert("\u65b9\u6cd5\u8c03\u7528\u4fee\u6539\uff1a\u8bf7\u628a\u3010getDepartmentNames()\u3011\u66f4\u6362\u4e3a\u3010jstree.getDepartmentNames()\u3011")}function getDepartmentIds(){alert("\u65b9\u6cd5\u8c03\u7528\u4fee\u6539\uff1a\u8bf7\u628a\u3010getDepartmentIds()\u3011\u66f4\u6362\u4e3a\u3010jstree.getDepartmentIds()\u3011")}function getWorkGroupNames(){alert("\u65b9\u6cd5\u8c03\u7528\u4fee\u6539\uff1a\u8bf7\u628a\u3010getWorkGroupNames()\u3011\u66f4\u6362\u4e3a\u3010jstree.getWorkGroupNames()\u3011")}function getWorkGroupIds(){alert("\u65b9\u6cd5\u8c03\u7528\u4fee\u6539\uff1a\u8bf7\u628a\u3010getWorkGroupIds()\u3011\u66f4\u6362\u4e3a\u3010jstree.getWorkGroupIds()\u3011")}function getEmails(){alert("\u65b9\u6cd5\u8c03\u7528\u4fee\u6539\uff1a\u8bf7\u628a\u3010getEmails()\u3011\u66f4\u6362\u4e3a\u3010jstree.getEmails()\u3011")}function getHonorificNames(){alert("\u65b9\u6cd5\u8c03\u7528\u4fee\u6539\uff1a\u8bf7\u628a\u3010getHonorificNames()\u3011\u66f4\u6362\u4e3a\u3010jstree.getHonorificNames()\u3011")}function getWeights(){alert("\u65b9\u6cd5\u8c03\u7528\u4fee\u6539\uff1a\u8bf7\u628a\u3010getWeights()\u3011\u66f4\u6362\u4e3a\u3010jstree.getWeights()\u3011")}var jstree={getId:function(){return singleId},getName:function(){return singleName},getType:function(){return singleType},getLoginName:function(){return singleLoginName},getSingleInfor:function(){return sInfor},getDepartmentName:function(){return singleDepartmentName},getDepartmentId:function(){return singleDepartmentId},getWorkGroupName:function(){return singleWorkGroupName},getWorkGroupId:function(){return singleWorkGroupId},getEmail:function(){return singleEmail},getHonorificName:function(){return singleHonorificName},getWeight:function(){return singleWeight},getUserDepartmentName:function(){return singleUserDeptName},getIds:function(){return mId},getNames:function(){return mName},getLoginNames:function(){return mLoginName},getInfos:function(){return infor},getUserInfos:function(){return userInfo},getTreeType:function(){return mTreeType},getTypes:function(){return mType},getDepartmentNames:function(){return mDepartmentName},getDepartmentIds:function(){return mDepartmentId},getWorkGroupNames:function(){return mWorkGroupName},getWorkGroupIds:function(){return mWorkGroupId},getEmails:function(){return mEmail},getHonorificNames:function(){return mHonorificName},getWeights:function(){return mWeight}};