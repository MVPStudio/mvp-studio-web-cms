(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{202:function(e,a,t){"use strict";t.r(a);var A=t(0),n=t.n(A),r=t(208),i=t(207),l=t(213),o=t(214),s=t.n(o),c=(t(210),t(215)),u=t.n(c),m=t(3),p=t.n(m),d=t(205),b=t(216),f=t(224),E=function(e){var a=e.setFormState,t=e.setSubmitResponse,A=[{value:"Cash",label:"Cash Funding"},{value:"Development",label:"Development Labor"},{value:"Design",label:"Design Labor"},{value:"Advertising",label:"Advertising"},{value:"Agile PM",label:"Agile PM Labor"}],r=[{value:"Private",label:"Private"},{value:"Public",label:"Public"},{value:"501c3",label:"501c3"}],i=Object(b.a)();return n.a.createElement(d.c,{initialValues:{formName:"Sponsor_Form",Name:"",Email:"",Type_Of_Organization:[],Project_Types_Interest:"",Interested_In_Projects:[],Type_Of_Sponsorship:[]},validationSchema:!0,onSubmit:function(){var e=u()(s.a.mark(function e(A,n){var r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/airtable",{method:"PATCH",headers:{"Content-type":"application/json"},body:JSON.stringify(A)});case 2:return e.next=4,e.sent.json();case 4:200===(r=e.sent).statusCode&&n.resetForm(),a(!0),t(r.message),n.setSubmitting(!1);case 9:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),render:function(e){var a=e.touched,t=e.errors,l=e.isSubmitting,o=e.handleSubmit,s=e.isValid,c=e.setFieldValue;return n.a.createElement(f.a,{sponsorOptions:A,showcaseOptions:i,typeOfOrganization:r,touched:a,errors:t,isSubmitting:l,handleSubmit:o,isValid:s,setFieldValue:c})}})};E.propTypes={setFormState:p.a.func.isRequired,setSubmitResponse:p.a.func.isRequired};var g=E;a.default=function(){return n.a.createElement(r.a,null,n.a.createElement(i.a,{title:"Become a Sponsor"}),n.a.createElement("h1",{style:{textAlign:"center"}},"Become a Sponsor"),n.a.createElement(l.a,null,function(e){var a=e.setFormState,t=e.setSubmitResponse;return n.a.createElement(g,{setFormState:a,setSubmitResponse:t})}))}},216:function(e,a,t){"use strict";var A=t(217);a.a=function(e){var a=A.data.allAirtable.edges.filter(function(e){return e.node.data.Approved});return"all"===e?a:a.map(function(e){var a=e.node;return{value:a.data.Name,label:a.data.Name}})}},217:function(e){e.exports={data:{allAirtable:{edges:[{node:{data:{Name:"15th Night",Approved:null,Description:null,URL:null,TeamMembers:null,ScreenShot:null}}},{node:{data:{Name:"SOAR",Approved:null,Description:null,URL:null,TeamMembers:null,ScreenShot:null}}},{node:{data:{Name:"Emerald Citizen",Approved:!0,Description:"Scott's cool open source React Magic",URL:"https://emeraldcitizen.org",TeamMembers:"Scott Lively",ScreenShot:{localFiles:[{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB3lAH/8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQABBQJf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGBAAAgMAAAAAAAAAAAAAAAAAAAERICH/2gAIAQEAAT8hJFtP/9oADAMBAAIAAwAAABCwz//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABoQAQACAwEAAAAAAAAAAAAAAAEAESAhUfH/2gAIAQEAAT8QVF5NfIqXh//Z",width:200,height:100,src:"/static/1eb056ee7a962caa30bd3b3b24e6627f/2113a/2019-02-1823.41.57.jpg",srcSet:"/static/1eb056ee7a962caa30bd3b3b24e6627f/2113a/2019-02-1823.41.57.jpg 1x,\n/static/1eb056ee7a962caa30bd3b3b24e6627f/45fe0/2019-02-1823.41.57.jpg 1.5x,\n/static/1eb056ee7a962caa30bd3b3b24e6627f/2e811/2019-02-1823.41.57.jpg 2x"}}}]}}}}]}}}},224:function(e,a,t){"use strict";t.d(a,"a",function(){return m});var A=t(7),n=t.n(A),r=t(0),i=t.n(r),l=t(205),o=t(3),s=t.n(o),c=t(220),u=t(211),m=function(e){function a(){return e.apply(this,arguments)||this}return n()(a,e),a.prototype.render=function(){var e=this.props,a=e.handleSubmit,t=e.errors,A=e.touched,n=e.isSubmitting,r=e.isValid,o=e.setFieldValue,s=e.sponsorOptions,m=e.showcaseOptions,p=e.typeOfOrganization;return i.a.createElement(u.a,{onSubmit:a},i.a.createElement("div",null,i.a.createElement("h3",null,"Sponsor Form"),i.a.createElement("p",null,"Please provide the following information:")),i.a.createElement("label",null,"Name:*",i.a.createElement(l.a,{className:A.Name&&t.Name?"invalid":"",type:"text",name:"Name",required:!0})),i.a.createElement("label",null,"Email:*",i.a.createElement(l.a,{className:A.Email&&t.Email?"invalid":"",type:"email",name:"Email",required:!0})),i.a.createElement("label",null,"Type of Organization:",i.a.createElement(l.a,{className:"select",component:c.a,name:"Type_Of_Organization",options:p,onChange:function(e){return o("Type_Of_Organization",e.value)}})),i.a.createElement("label",null,"Types of Projects Interested in:",i.a.createElement(l.a,{component:"textarea",name:"Project_Types_Interest"})),i.a.createElement("label",null,"Interested in Projects:",i.a.createElement(l.a,{className:"select",component:c.a,name:"Interested_In_Projects",isMulti:!0,closeMenuOnSelect:"false",options:m,onChange:function(e){return o("Interested_In_Projects",e.map(function(e){return e.value}))}})),i.a.createElement("label",null,"Type of Sponsorship:",i.a.createElement(l.a,{className:"select",component:c.a,name:"Type_Of_Sponsorship",isMulti:!0,closeMenuOnSelect:"false",options:s,onChange:function(e){return o("Type_Of_Sponsorship",e.map(function(e){return e.value}))}})),i.a.createElement("button",{type:"submit",disabled:n||!r},"Submit"))},a}(r.Component);m.propTypes={handleSubmit:s.a.func.isRequired,errors:s.a.object.isRequired,touched:s.a.object.isRequired,isSubmitting:s.a.bool,isValid:s.a.bool,setFieldValue:s.a.func.isRequired,sponsorOptions:s.a.arrayOf(o.object).isRequired,showcaseOptions:s.a.arrayOf(o.object).isRequired,typeOfOrganization:s.a.arrayOf(o.object).isRequired}}}]);
//# sourceMappingURL=component---src-pages-forms-sponsor-form-page-js-edc6d85b72dda01aca40.js.map