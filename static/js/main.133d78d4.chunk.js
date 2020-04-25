(this["webpackJsonpgithub-portfolio-criodo"]=this["webpackJsonpgithub-portfolio-criodo"]||[]).push([[0],{104:function(e,t,a){e.exports=a(200)},109:function(e,t,a){},152:function(e,t,a){},177:function(e,t){},200:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(95),c=a.n(o),i=(a(109),a(8)),l=a(9),d=a(11),s=a(10),m=a(98),p=a(212),E=a(15),_=a(25),u=a(49),C=a(19),g=a.n(C),R=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes;return n.a.createElement("div",{className:e.container},this.props.children)}}]),a}(r.Component),y=g()((function(e){return{container:{margin:"40px 0px",height:"auto",background:e.palette.primary.white,padding:"65px 0px 25px 0px",boxShadow:"0 10px 20px 0 rgba(20,21,26,0.1)"}}}))(R),T=a(214),x=a(99),h=a(215),b=function(e){switch(e){case"heading1":case"heading2":case"heading3":case"heading4":case"heading5":case"headLine":case"button":case"title":case"subHeader":case"button":default:return"Open Sans"}},f=function(e){switch(e){case"heading1":return"32px";case"heading2":return"24px";case"heading3":return"18px";case"heading4":return"16px";case"heading5":return"14px";case"body1":return"18px";case"body2":return"16px";case"body3":return"14px";case"body4":return"12px";case"quote":return"20px";case"button":default:return"14px"}},O=function(e){switch(e){case"heading1":case"heading2":case"heading3":case"heading4":case"heading5":return"600";case"body1":case"body2":case"body3":case"body4":return"400";case"quote":case"button":return"600";case"bold":return"800";default:return"400"}},A=function(e){var t=e.classes,a=(e.color,Object(x.a)(e,["color"]));return n.a.createElement(h.a,Object.assign({className:t.root,style:{cursor:e.cursor?e.cursor:"default",fontFamily:e.fontFamily?e.fontFamily:b(e.type),fontSize:e.fontSize?e.fontSize:f(e.type),fontWeight:e.fontWeight?e.fontWeight:O(e.type),color:e.color?e.color:function(t){if("dark"===e.currentTheme)return"#ffffff";switch(t){case"heading1":case"heading2":case"heading3":case"heading4":case"heading5":return"#000000";case"button":return"#FFFFFF";default:return"#000000"}}(e.type),letterSpacing:"0.04em"}},a),e.children)};A.defaultProps={type:"body"};var N=g()((function(e){return{root:{letterSpacing:0,opacity:1}}}))(A),v=a(18),I=a(59),M=a.n(I),L=(a(70),a(152),r.Component,a(4)),P=a.n(L),k=a(3),D=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={meDetail:{},user:"",isLoading:!0,qbox:{},qmoney:"",qcharm:"",qprep:""},r.title=r.title.bind(Object(u.a)(r)),r}return Object(l.a)(a,[{key:"title",value:function(e){return e.split(" ").map((function(e){return e.slice(0,1).toUpperCase()+e.slice(1).toLowerCase()})).join(" ")}},{key:"render",value:function(){var e=this.props.classes;return n.a.createElement(T.a,{container:!0},n.a.createElement(T.a,{row:!0,lg:2,md:1,xs:1}),n.a.createElement(T.a,{row:!0,lg:7,md:10,xs:10},n.a.createElement(y,null,n.a.createElement("div",{className:e.top},n.a.createElement(N,{fontSize:"48px"},"Harikrishna K P"),n.a.createElement("div",{className:e.subtitle},n.a.createElement(N,{fontSize:"34px",color:"rgba(0,0,0,0.6)"},"Backend Developer"),n.a.createElement("a",{href:"https://www.linkedin.com/in/harikrishna-kp/",target:"_blank",rel:"noopener"},n.a.createElement(v.a,{icon:["fab","linkedin"],className:e.socialIcon})),n.a.createElement("a",{href:"https://github.com/h4hari1997",target:"_blank",rel:"noopener"},n.a.createElement(v.a,{icon:["fab","github"],className:e.socialIcon}))),n.a.createElement("div",{className:e.programs},n.a.createElement(T.a,{container:!0},n.a.createElement(T.a,{item:!0,lg:1,md:1,xs:12},n.a.createElement(N,{type:"body2",color:"rgba(0,0,0,0.6)"},"Programs:")),n.a.createElement(T.a,{item:!0,lg:5,md:5,xs:12,style:{marginLeft:"40px"}},n.a.createElement(N,{type:"body2",color:"#7C8DFF"},"Crio Launch")))),n.a.createElement("a",{href:"".concat("https://raw.githubusercontent.com/CrioDo/Crio-Launch-March-2020-h4hari2015/gh-pages/static/media/Crio-Launch-March-2020-Certificate.png"),target:"_blank"},n.a.createElement("div",{className:"viewCertificate",style:{padding:"10px",border:"1px solid #7C8DFF",width:"max-content",borderRadius:"4px",margin:"0px 0px 60px 0px",display:"inline-flex",alignItems:"center"}},n.a.createElement(v.a,{icon:["fas","file-alt"],style:{marginRight:"10px"},className:e.arrowIcon}),n.a.createElement(N,{type:"body2",color:"#7C8DFF",cursor:"pointer"},"VIEW CERTIFICATE")))),n.a.createElement("div",{className:e.middle},n.a.createElement(N,{type:"body1",color:"rgba(0,0,0,0.6)"},"Crio Experience"),n.a.createElement("div",{className:e.programRow},n.a.createElement("div",{className:e.programPill},n.a.createElement("img",{alt:"Crio.Do",src:M.a,style:{marginRight:"10px"}}),n.a.createElement(N,{type:"heading3",color:"rgba(255,255,255,1)"},"Crio Launch")),n.a.createElement(N,{type:"body5",color:"rgba(0,0,0,0.6)"},"31 Jan 2020 - 10 Apr 2020")),n.a.createElement("ul",{className:"timeline"},k.qbox_outer&&k.qbox_outer.cardContentContainer?n.a.createElement(n.a.Fragment,null,n.a.createElement("li",null,n.a.createElement("div",{className:e.MERow,class:"meRow"},n.a.createElement(T.a,{container:!0},n.a.createElement(T.a,{item:!0,xs:12},n.a.createElement(N,{type:"heading3",color:"rgba(0,0,0,1)"},"QBox"),n.a.createElement("div",{style:{marginTop:"16px"}},n.a.createElement(N,{type:"body5",color:"rgba(0,0,0,1)"}," ",P()(k.qbox_outer.cardContentContainer.cardContentList[1].cardBody)," "),n.a.createElement("div",{style:{marginTop:"25px"}},n.a.createElement(T.a,{item:!0,xs:12,md:2},n.a.createElement(N,{type:"body5",color:"rgba(0,0,0,0.6)"},"Skills Learned:")),n.a.createElement(T.a,{item:!0,xs:12,md:10},n.a.createElement(N,{type:"body5",color:"rgba(0,0,0,1)"},P()(k.qbox_outer.skills)," "))),n.a.createElement("div",{style:{margin:"30px 0px"}},n.a.createElement(T.a,{container:!0},n.a.createElement(T.a,{item:!0,xs:4},n.a.createElement(E.b,{to:{pathname:"/detail/ME_QBOX",aboutProps:{data:this.state.meDetail.ME_QBOX,getTitle:this.props.getTitle}}},n.a.createElement(N,{type:"body5",color:"#7C8DFF",cursor:"pointer"},"VIEW DETAILS",n.a.createElement(v.a,{icon:["fas","arrow-right"],className:e.arrowIcon}))))))))))),n.a.createElement("div",{style:{marginLeft:"80px",borderBottom:"1px solid #d8d8d8",marginBottom:"30px"}})):"",n.a.createElement("li",null,n.a.createElement("div",{className:e.MERow,class:"meRow"},n.a.createElement(T.a,{container:!0},n.a.createElement(T.a,{item:!0,xs:12},n.a.createElement(N,{type:"heading3",color:"rgba(0,0,0,1)"},"QMoney"),n.a.createElement("div",{style:{marginTop:"16px"}},n.a.createElement(N,{type:"body5",color:"rgba(0,0,0,1)"},P()(k.qmoney_outer.cardContentContainer.cardContentList[1].cardBody)," "),n.a.createElement("div",{style:{marginTop:"25px"}},n.a.createElement(T.a,{item:!0,xs:12,md:2},n.a.createElement(N,{type:"body5",color:"rgba(0,0,0,0.6)"},"Skills Learned:")),n.a.createElement(T.a,{item:!0,xs:12,md:10},n.a.createElement(N,{type:"body5",color:"rgba(0,0,0,1)"},P()(k.qmoney_outer.skills)," "))),n.a.createElement("div",{style:{margin:"40px 0px"}},n.a.createElement(T.a,{container:!0},n.a.createElement(T.a,{item:!0,xs:4},n.a.createElement(E.b,{to:{pathname:"/detail/ME_QMONEY",aboutProps:{data:this.state.meDetail.ME_QMONEY,getTitle:this.props.getTitle}}},n.a.createElement(N,{type:"body5",color:"#7C8DFF",cursor:"pointer"},"VIEW DETAILS",n.a.createElement(v.a,{icon:["fas","arrow-right"],className:e.arrowIcon}))))))))))),n.a.createElement("div",{style:{marginLeft:"80px",borderBottom:"1px solid #d8d8d8",marginBottom:"30px"}})," ",n.a.createElement("li",null,n.a.createElement("div",{className:e.MERow,class:"meRow"},n.a.createElement(T.a,{container:!0},n.a.createElement(T.a,{item:!0,xs:12},n.a.createElement(N,{type:"heading3",color:"rgba(0,0,0,1)"},"QPrep"),n.a.createElement("div",{style:{marginTop:"16px"}},n.a.createElement(N,{type:"body5",color:"rgba(0,0,0,1)"},P()(k.qprep_outer.cardContentContainer.cardContentList[1].cardBody)," "),n.a.createElement("div",{style:{marginTop:"25px"}},n.a.createElement(T.a,{item:!0,xs:12,md:2},n.a.createElement(N,{type:"body5",color:"rgba(0,0,0,0.6)"},"Skills Learned:")),n.a.createElement(T.a,{item:!0,xs:12,md:10},n.a.createElement(N,{type:"body5",color:"rgba(0,0,0,1)"},"Applied DSA"),n.a.createElement("br",null)))))))),k.qcharm_outer&&k.qcharm_inner?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{style:{marginLeft:"80px",borderBottom:"1px solid #d8d8d8",marginBottom:"30px"}}),n.a.createElement("li",null,n.a.createElement("div",{className:e.MERow,class:"meRow"},n.a.createElement(T.a,{container:!0},n.a.createElement(T.a,{item:!0,xs:12},n.a.createElement(N,{type:"heading3",color:"rgba(0,0,0,1)"},"QCharm"),n.a.createElement("div",{style:{marginTop:"16px"}},n.a.createElement(N,{type:"body5",color:"rgba(0,0,0,1)"},P()(k.qcharm_outer.cardContentContainer.cardContentList[1].cardBody)," "),n.a.createElement("div",{style:{marginTop:"25px"}},n.a.createElement(T.a,{item:!0,xs:12,md:2},n.a.createElement(N,{type:"body5",color:"rgba(0,0,0,0.6)"},"Skills Learned:")),n.a.createElement(T.a,{item:!0,xs:12,md:10},n.a.createElement(N,{type:"body5",color:"rgba(0,0,0,1)"},P()(k.qcharm_outer.skills)," ")))))))," ",n.a.createElement("div",{style:{margin:"30px 0px"}},n.a.createElement(T.a,{container:!0},n.a.createElement(T.a,{item:!0,xs:4},n.a.createElement(E.b,{to:{pathname:"/detail/ME_QCHARM",aboutProps:{data:this.state.meDetail.ME_QCHARM,getTitle:this.props.getTitle}}},n.a.createElement(N,{type:"body5",color:"#7C8DFF",cursor:"pointer"},"VIEW DETAILS",n.a.createElement(v.a,{icon:["fas","arrow-right"],className:e.arrowIcon})))))))):"")))),n.a.createElement(T.a,{row:!0,lg:2,md:1,xs:1}))}}]),a}(r.Component),S=g()((function(e){return{top:{borderBottom:"1px solid"+e.palette.primary.primaryBorder,padding:"0px 55px"},middle:{margin:"45px 55px"},subtitle:{display:"flex",alignItems:"center"},socialIcon:{color:e.palette.primary.primary,fontSize:"32px",marginLeft:"20px"},arrowIcon:{color:e.palette.primary.primary,marginLeft:"5px",cursor:"pointer"},programs:{margin:"35px 0px 30px 0px",color:"rgba(0, 0, 0, 0.6)",display:"flex",alignItems:"center"},programRow:{padding:"10px 0px 0px 0px"},MERow:{margin:"55px 0px 0px 0px"},programPill:{display:"flex",alignItems:"center",background:"#3f3f3f",width:"fit-content",padding:"16px",borderRadius:"8px",margin:"10px 0px"}}}))(D),w=a(97),B=a.n(w),Q=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes;return n.a.createElement("div",{className:e.navbar},n.a.createElement(E.c,{to:"/"},n.a.createElement("img",{alt:"Crio.Do",src:B.a}),n.a.createElement("div",{style:{marginLeft:"16px"}},n.a.createElement(N,{type:"heading4",fontWeight:"bold",cursor:"pointer"},this.props.title))))}}]),a}(r.Component),q=g()((function(e){return{navbar:{height:"80px",background:e.palette.primary.white,display:"flex",padding:"0px 32px",alignItems:"center",borderBottom:"1px solid"+e.palette.primary.primaryBorder}}}))(Q),Y=(a(196),function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={meDetail:{},data:"",me:"",isLoading:!0},r}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.meid;this.setState({me:e},(function(){})),this.container.scrollTop=0}},{key:"render",value:function(){var e=this,t=this.props.classes;return n.a.createElement(T.a,{container:!0,ref:function(t){return e.container=t}},n.a.createElement(T.a,{row:!0,lg:2,md:1,xs:1}),n.a.createElement(T.a,{row:!0,lg:7,md:10,xs:10},n.a.createElement(y,null,"ME_QBOX"===this.state.me?n.a.createElement(n.a.Fragment,null,n.a.createElement(E.b,{to:{pathname:"/"}},n.a.createElement("div",{style:{display:"inline-flex",alignItems:"center",marginBottom:"20px"}},n.a.createElement(v.a,{icon:["fas","arrow-left"],style:{fontSize:"1.5em",margin:"0px 10px 0px 55px",cursor:"pointer",color:"#999"}}),n.a.createElement(N,{cursor:"pointer",color:"#999"},"Back"))),n.a.createElement("div",{className:t.top},n.a.createElement(T.a,{container:!0},n.a.createElement(T.a,{item:!0,xs:12},n.a.createElement("div",{style:{margin:"0px 0px 10px 0px"}},n.a.createElement(N,{fontSize:"46px"}," QBox")),n.a.createElement(N,{fontSize:"30px",color:"rgba(0,0,0,0.6)"},P()(k.qbox_outer.cardContentContainer.cardContentList[0].cardBody)," "),n.a.createElement(N,{fontSize:"14px"},P()(k.qbox_outer.cardContentContainer.cardContentList[1].cardBody))),n.a.createElement(T.a,{item:!0,xs:5,style:{textAlign:"right"}}),n.a.createElement(T.a,{item:!0,xs:12},n.a.createElement("div",{style:{textAlign:"center"}},P()(k.qbox_milestone0.cardContentContainer.cardContentList[0].cardBody)," ")))),n.a.createElement("div",{className:t.middle},n.a.createElement(N,{color:"rgba(0,0,0,1)",fontSize:"20px"},"QBox Modules"),n.a.createElement("ul",{className:"timeline"},k.qbox_inner.map((function(e,a){return n.a.createElement(n.a.Fragment,null,n.a.createElement("li",null,n.a.createElement("div",{className:t.MERow,class:"meRow"},n.a.createElement(T.a,{container:!0},n.a.createElement(T.a,{item:!0,xs:12},n.a.createElement(N,{type:"heading3",color:"rgba(0,0,0,1)"},P()(e.cardContentContainer.containerTitle)),n.a.createElement("div",{style:{marginTop:"16px"}},n.a.createElement(T.a,{container:!0},n.a.createElement(T.a,{item:!0,xs:12,md:12,lg:12},n.a.createElement(N,{type:"body5",color:"rgba(0,0,0,0.6)"},"Scope of work:")),n.a.createElement(T.a,{item:!0,xs:12,md:12,lg:12},n.a.createElement("br",null),n.a.createElement(N,{type:"body5",color:"#000"},P()(e.cardContentContainer.cardContentList[0].cardBody)))),n.a.createElement("div",{style:{marginTop:"25px"}},n.a.createElement(T.a,{item:!0,xs:12,md:2},n.a.createElement(N,{type:"body5",color:"rgba(0,0,0,0.6)"},"Skills Learned:")),n.a.createElement(T.a,{item:!0,xs:12,md:10},n.a.createElement(N,{type:"body5",color:"rgba(0,0,0,1)"},P()(e.cardContentContainer.cardContentList[1].cardBody))))))))),a!==k.qbox_inner.length-1?n.a.createElement("div",{style:{borderBottom:"1px solid #d8d8d8",margin:"30px 0px 30px 80px"}}):"")}))))):"ME_QMONEY"===this.state.me?n.a.createElement(n.a.Fragment,null," ",n.a.createElement(E.b,{to:{pathname:"/"}},n.a.createElement("div",{style:{display:"inline-flex",alignItems:"center",marginBottom:"20px"}},n.a.createElement(v.a,{icon:["fas","arrow-left"],style:{fontSize:"1.5em",margin:"0px 10px 0px 55px",cursor:"pointer",color:"#999"}}),n.a.createElement(N,{cursor:"pointer",color:"#999"},"Back"))),n.a.createElement("div",{className:t.top},n.a.createElement(T.a,{container:!0},n.a.createElement(T.a,{item:!0,xs:12},n.a.createElement("div",{style:{margin:"0px 0px 10px 0px"}},n.a.createElement(N,{fontSize:"46px"}," QMoney")),n.a.createElement(N,{fontSize:"30px",color:"rgba(0,0,0,0.6)"},P()(k.qmoney_outer.cardContentContainer.cardContentList[0].cardBody)," "),n.a.createElement(N,{fontSize:"14px"},P()(k.qmoney_outer.cardContentContainer.cardContentList[1].cardBody))),n.a.createElement(T.a,{item:!0,xs:5,style:{textAlign:"right"}}),n.a.createElement(T.a,{item:!0,xs:12},n.a.createElement("div",{style:{textAlign:"center"}},P()(k.qmoney_milestone0.cardContentContainer.cardContentList[0].cardBody)," ")))),n.a.createElement("div",{className:t.middle},n.a.createElement("div",{style:{margin:"0px 0px 20px 0px"}},n.a.createElement(N,{color:"rgba(0,0,0,1)",fontSize:"20px"},"QMoney Modules")),n.a.createElement("ul",{className:"timeline"},k.qmoney_inner.map((function(e,a){return n.a.createElement(n.a.Fragment,null,n.a.createElement("li",null,n.a.createElement("div",{className:t.MERow,class:"meRow"},n.a.createElement(T.a,{container:!0},n.a.createElement(T.a,{item:!0,xs:12},n.a.createElement(N,{type:"heading3",color:"rgba(0,0,0,1)"},P()(e.cardContentContainer.containerTitle)),n.a.createElement("div",{style:{marginTop:"16px"}},n.a.createElement(T.a,{container:!0},n.a.createElement(T.a,{item:!0,xs:12,md:12,lg:12},n.a.createElement(N,{type:"body5",color:"rgba(0,0,0,0.6)"},"Scope of work:")),n.a.createElement(T.a,{item:!0,xs:12,md:12,lg:12},n.a.createElement("br",null),n.a.createElement(N,{type:"body5",color:"#000"},P()(e.cardContentContainer.cardContentList[0].cardBody)))),n.a.createElement("div",{style:{marginTop:"25px"}},n.a.createElement(T.a,{item:!0,xs:12,md:2},n.a.createElement(N,{type:"body5",color:"rgba(0,0,0,0.6)"},"Skills Learned:")),n.a.createElement(T.a,{item:!0,xs:12,md:10},n.a.createElement(N,{type:"body5",color:"rgba(0,0,0,1)"},P()(e.cardContentContainer.cardContentList[1].cardBody))))))))),a!==k.qmoney_inner.length-1?n.a.createElement("div",{style:{borderBottom:"1px solid #d8d8d8",margin:"30px 0px 30px 80px"}}):"")}))))):"ME_QCHARM"===this.state.me&&k.qcharm_outer&&k.qcharm_inner?n.a.createElement(n.a.Fragment,null," ",n.a.createElement(E.b,{to:{pathname:"/"}},n.a.createElement("div",{style:{display:"inline-flex",alignItems:"center",marginBottom:"20px"}},n.a.createElement(v.a,{icon:["fas","arrow-left"],style:{fontSize:"1.5em",margin:"0px 10px 0px 55px",cursor:"pointer",color:"#999"}}),n.a.createElement(N,{cursor:"pointer",color:"#999"},"Back"))),n.a.createElement("div",{className:t.top},n.a.createElement(T.a,{container:!0},n.a.createElement(T.a,{item:!0,xs:12},n.a.createElement("div",{style:{margin:"0px 0px 10px 0px"}},n.a.createElement(N,{fontSize:"46px"}," QCharm")),n.a.createElement(N,{fontSize:"30px",color:"rgba(0,0,0,0.6)"},P()(k.qcharm_outer.cardContentContainer.cardContentList[0].cardBody)," "),n.a.createElement(N,{fontSize:"14px"},P()(k.qcharm_outer.cardContentContainer.cardContentList[1].cardBody))),n.a.createElement(T.a,{item:!0,xs:5,style:{textAlign:"right"}}),n.a.createElement(T.a,{item:!0,xs:12},n.a.createElement("div",{style:{textAlign:"center"}},P()(k.qcharm_milestone0.cardContentContainer.cardContentList[0].cardBody)," ")))),n.a.createElement("div",{className:t.middle},n.a.createElement(N,{color:"rgba(0,0,0,1)",fontSize:"20px"},"QCharm Modules"),n.a.createElement("ul",{className:"timeline"},k.qcharm_inner.map((function(e,a){return n.a.createElement(n.a.Fragment,null,n.a.createElement("li",null,n.a.createElement("div",{className:t.MERow,class:"meRow"},n.a.createElement(T.a,{container:!0},n.a.createElement(T.a,{item:!0,xs:12},n.a.createElement(N,{type:"heading3",color:"rgba(0,0,0,1)"},P()(e.cardContentContainer.containerTitle)),n.a.createElement("div",{style:{marginTop:"16px"}},n.a.createElement(T.a,{container:!0},n.a.createElement(T.a,{item:!0,xs:12,md:12,lg:12},n.a.createElement(N,{type:"body5",color:"rgba(0,0,0,0.6)"},"Scope of work:")),n.a.createElement(T.a,{item:!0,xs:12,md:12,lg:12},n.a.createElement("br",null),n.a.createElement(N,{type:"body5",color:"#000"},P()(e.cardContentContainer.cardContentList[0].cardBody)))),n.a.createElement("div",{style:{marginTop:"25px"}},n.a.createElement(T.a,{item:!0,xs:12,md:2},n.a.createElement(N,{type:"body5",color:"rgba(0,0,0,0.6)"},"Skills Learned:")),n.a.createElement(T.a,{item:!0,xs:12,md:10},n.a.createElement(N,{type:"body5",color:"rgba(0,0,0,1)"},P()(e.cardContentContainer.cardContentList[1].cardBody))))))))),a!==k.qcharm_inner.length-1?n.a.createElement("div",{style:{borderBottom:"1px solid #d8d8d8",margin:"30px 0px 30px 80px"}}):"")}))))):n.a.createElement("center",null,n.a.createElement(N,{color:"#999999"},"No data available")))),n.a.createElement(T.a,{row:!0,lg:2,md:1,xs:1}))}}]),a}(r.Component)),F=g()((function(e){return{top:{borderBottom:"1px solid"+e.palette.primary.primaryBorder,padding:"0px 55px 60px 55px"},middle:{margin:"45px 55px"},subtitle:{display:"flex",alignItems:"center"},socialIcon:{color:e.palette.primary.primary,fontSize:"32px",marginLeft:"20px"},arrowIcon:{color:e.palette.primary.primary,marginLeft:"5px",cursor:"pointer"},programs:{margin:"45px 0px",color:"rgba(0, 0, 0, 0.6)",display:"flex",alignItems:"center"},programRow:{padding:"60px 0px 0px 0px"},MERow:{margin:"55px 0px 0px 0px"},programPill:{display:"inline-flex",alignItems:"center",background:"#3f3f3f",width:"fit-content",padding:"16px",borderRadius:"8px",margin:"10px 0px"}}}))(Y),J=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).theme=Object(m.a)({palette:{primary:{main:"#7C8DFF",primary:"#7C8DFF",primaryBackground:"#F1F4FE",primaryBorder:"#D8D8D8",white:"#fff",black:"#000000",red:"#E66565",green:"#70CC63",orange:"#E6935A",grey:"#999999",greyTwo:"#EEEEEE",purple:"#570DA8",yellow:"#F1C21B"},secondary:{main:"#ffffff",secondaryBackground:"#C9D0FF",tertiaryBackground:"#F7F7F7"}}}),r.state={title:"Crio.Do Portfolio",defaultPath:"/Crio-Launch-Feb-2020-h4hari2015",detailPath:"/detail/:meid"},console.log(r.state.detailPath),r}return Object(l.a)(a,[{key:"getTitle",value:function(e){this.setState({title:this.state.title.concat(e)})}},{key:"render",value:function(){var e=this;this.props.classes;return n.a.createElement(E.a,{basename:this.state.defaultPath},n.a.createElement(p.a,{theme:this.theme},n.a.createElement("div",{style:{backgroundColor:this.theme.palette.secondary.tertiaryBackground,height:"100vh",overflowX:"scroll"}},n.a.createElement(q,{title:this.state.title}),n.a.createElement(_.c,null,n.a.createElement(_.a,{exact:!0,path:this.state.defaultPath,render:function(){return n.a.createElement(S,{getTitle:e.getTitle.bind(e)})}}),n.a.createElement(_.a,{path:this.state.detailPath,component:F}),n.a.createElement(_.a,{render:function(){return n.a.createElement(S,{getTitle:e.getTitle.bind(e)})}})))))}}]),a}(r.Component),U=a(41),V=a(62),G=a(42);U.b.add(V.b,V.a,G.b,G.d,G.c,G.a);var j=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){document.title="Portfolio - Crio.Do"}},{key:"render",value:function(){return n.a.createElement(J,null)}}]),a}(r.Component);a(197).config(),c.a.render(n.a.createElement(j,null),document.getElementById("root"))},3:function(e){e.exports=JSON.parse('{"qmoney_inner":[{"cardContentContainer":{"cardContentList":[{"cardTitle":"Scope of work","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Scope_of_work_card card-content-body\'><ol>\\n<li>\\n<p>Used Tiingo\u2019s REST APIs to fetch stock quotes.</p>\\n</li>\\n<li>\\n<p>Computed the annualized returns based on stock purchase date and holding period.</p>\\n</li>\\n</ol></div>","cardId":"ME_QMONEYPROJECT_REPORT_MILESTONE_2_CARD_1"},{"cardTitle":"Skills used","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Skills_used_card card-content-body\'><p>Java, REST API, Jackson</p></div>","cardId":"ME_QMONEYPROJECT_REPORT_MILESTONE_2_CARD_2"}],"containerId":"CONTAINER_REGULAR_ME_QMONEY_PROJECT_REPORT_MILESTONE_1","containerVariant":"CARD_CONTENT_CONTAINER_VARIANT_REGULAR","containerTitle":"Fetch stock quotes and compute annualized stock returns","containerTldr":"","permalinkId":"container-regular-me_qmoney-project_report-milestone-1","containerType":"CARD_CONTENT_CONTAINER_TYPE_COMPLEX"}},{"cardContentContainer":{"cardContentList":[{"cardTitle":"Scope of work","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Scope_of_work_card card-content-body\'><ol>\\n<li>\\n<p>Refactored code to adapt to an updated interface contract published by the backend team.</p>\\n</li>\\n<li>\\n<p>Published the portfolio manager library as a JAR for easy versioning and distribution.</p>\\n</li>\\n<li>\\n<p>Created examples to help document library (JAR) usage.</p>\\n</li>\\n</ol></div>","cardId":"ME_QMONEYPROJECT_REPORT_MILESTONE_3_CARD_1"},{"cardTitle":"Skills used","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Skills_used_card card-content-body\'><p>Interfaces, Code Refactoring, Gradle</p></div>","cardId":"ME_QMONEYPROJECT_REPORT_MILESTONE_3_CARD_2"}],"containerId":"CONTAINER_REGULAR_ME_QMONEY_PROJECT_REPORT_MILESTONE_2","containerVariant":"CARD_CONTENT_CONTAINER_VARIANT_REGULAR","containerTitle":"Refactor using Java interfaces and publish a JAR file","containerTldr":"","permalinkId":"container-regular-me_qmoney-project_report-milestone-2","containerType":"CARD_CONTENT_CONTAINER_TYPE_COMPLEX"}},{"cardContentContainer":{"cardContentList":[{"cardTitle":"Scope of work","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Scope_of_work_card card-content-body\'><ol>\\n<li>\\n<p>Added support for a backup stock quote service (Alpha Vantage) to improve service availability.</p>\\n</li>\\n<li>\\n<p>Improved application stability with comprehensive error reporting and better exception handling.</p>\\n</li>\\n</ol></div>","cardId":"ME_QMONEYPROJECT_REPORT_MILESTONE_4_CARD_1"},{"cardTitle":"Skills used","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Skills_used_card card-content-body\'><p>Interfaces, Exception Handling</p></div>","cardId":"ME_QMONEYPROJECT_REPORT_MILESTONE_4_CARD_2"}],"containerId":"CONTAINER_REGULAR_ME_QMONEY_PROJECT_REPORT_MILESTONE_3","containerVariant":"CARD_CONTENT_CONTAINER_VARIANT_REGULAR","containerTitle":"Improve application availability and stability","containerTldr":"","permalinkId":"container-regular-me_qmoney-project_report-milestone-3","containerType":"CARD_CONTENT_CONTAINER_TYPE_COMPLEX"}}],"qcharm_milestone0":{"cardContentContainer":{"cardContentList":[{"cardTitle":"Image","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Image_card card-content-body\'><p><img alt=\'image alt text\' src=\'https://storage.googleapis.com/crio-content-container-assets/ME_ME_QCHARM_MODULE_PROJECT_REPORT_image_0.png\' style=\'max-width:750px;\'/></p><p>QCharm Architecture</p><p><img alt=\'image alt text\' src=\'https://storage.googleapis.com/crio-content-container-assets/ME_ME_QCHARM_MODULE_PROJECT_REPORT_image_1.png\' style=\'max-width:750px;\'/></p><p>QCharm IDE</p></div>","cardId":"ME_QCHARMPROJECT_REPORT_MILESTONE_1_CARD_1"}],"containerId":"CONTAINER_REGULAR_ME_QCHARM_PROJECT_REPORT_MILESTONE_0","containerVariant":"CARD_CONTENT_CONTAINER_VARIANT_REGULAR","containerTitle":"Extended Overview","containerTldr":"","permalinkId":"container-regular-me_qcharm-project_report-milestone-0","containerType":"CARD_CONTENT_CONTAINER_TYPE_COMPLEX"}},"qcharm_inner":[{"cardContentContainer":{"cardContentList":[{"cardTitle":"Scope of work","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Scope_of_work_card card-content-body\'><ol>\\n<li>\\n<p>Wrote code to load a source code into an ArrayList in memory.</p>\\n</li>\\n<li>\\n<p>Implemented file navigation operations (scroll up/down).</p>\\n</li>\\n<li>\\n<p>Developed the search feature using Hashmap</p>\\n</li>\\n</ol></div>","cardId":"ME_QCHARMPROJECT_REPORT_MILESTONE_2_CARD_1"},{"cardTitle":"Skills used","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Skills_used_card card-content-body\'><p>ArrayList, String, Naive Search</p></div>","cardId":"ME_QCHARMPROJECT_REPORT_MILESTONE_2_CARD_2"}],"containerId":"CONTAINER_REGULAR_ME_QCHARM_PROJECT_REPORT_MILESTONE_1","containerVariant":"CARD_CONTENT_CONTAINER_VARIANT_REGULAR","containerTitle":"Load a source file into memory and perform file navigation operations","containerTldr":"","permalinkId":"container-regular-me_qcharm-project_report-milestone-1","containerType":"CARD_CONTENT_CONTAINER_TYPE_COMPLEX"}},{"cardContentContainer":{"cardContentList":[{"cardTitle":"Scope of work","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Scope_of_work_card card-content-body\'><ol>\\n<li>\\n<p>Implemented the cut, copy, and paste features.</p>\\n</li>\\n<li>\\n<p>Improved search performance using KMP algorithm.</p>\\n</li>\\n<li>\\n<p>Enhanced head-of-file edit performance by migrating to a LinkedList implementation.</p>\\n</li>\\n</ol></div>","cardId":"ME_QCHARMPROJECT_REPORT_MILESTONE_3_CARD_1"},{"cardTitle":"Skills used","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Skills_used_card card-content-body\'><p>String manipulation, KMP search, LinkedList, Time Complexity</p></div>","cardId":"ME_QCHARMPROJECT_REPORT_MILESTONE_3_CARD_2"}],"containerId":"CONTAINER_REGULAR_ME_QCHARM_PROJECT_REPORT_MILESTONE_2","containerVariant":"CARD_CONTENT_CONTAINER_VARIANT_REGULAR","containerTitle":"Edit operations and improved performance","containerTldr":"","permalinkId":"container-regular-me_qcharm-project_report-milestone-2","containerType":"CARD_CONTENT_CONTAINER_TYPE_COMPLEX"}}],"qmoney_milestone0":{"cardContentContainer":{"cardContentList":[{"cardTitle":"Image","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Image_card card-content-body\'><p><img alt=\'image alt text\' src=\'https://storage.googleapis.com/crio-content-container-assets/ME_ME_QMONEY_MODULE_PROJECT_REPORT_image_0.png\' style=\'max-width:750px;\'/></p><p>QMoney Architecture</p><p><img alt=\'image alt text\' src=\'https://storage.googleapis.com/crio-content-container-assets/ME_ME_QMONEY_MODULE_PROJECT_REPORT_image_1.png\' style=\'max-width:750px;\'/></p><p>QMoney Portfolio Manager Interface</p></div>","cardId":"ME_QMONEYPROJECT_REPORT_MILESTONE_1_CARD_1"}],"containerId":"CONTAINER_REGULAR_ME_QMONEY_PROJECT_REPORT_MILESTONE_0","containerVariant":"CARD_CONTENT_CONTAINER_VARIANT_REGULAR","containerTitle":"Extended Overview","containerTldr":"","permalinkId":"container-regular-me_qmoney-project_report-milestone-0","containerType":"CARD_CONTENT_CONTAINER_TYPE_COMPLEX"}},"qprep_outer":{"cardContentContainer":{"cardContentList":[{"cardTitle":"Headline","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Headline_card card-content-body\'><p>Structured methodology to solve PS/DS problems.</p></div>","cardId":"ME_PS_DS1PROJECT_REPORT_OVERVIEW_1_CARD_1"},{"cardTitle":"Overview","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Overview_card card-content-body\'><p>Learn and Practice algorithmic problems in a structured way.</p><p>During the course of this QPrep Micro-Experience, the developer is expected to solve problems in a structured way by:</p><ol>\\n<li>\\n<p>First articulating the problem statement clearly with examples.</p>\\n</li>\\n<li>\\n<p>Brainstorming multiple approaches, understanding trade-offs and writing pseudocode for the chosen approach.</p>\\n</li>\\n<li>\\n<p>Implementing the solution and testing it.</p>\\n</li>\\n</ol><p>The deliberate divide-and-conquer practice helps the developer to approach unknown problems with reasonable confidence.</p></div>","cardId":"ME_PS_DS1PROJECT_REPORT_OVERVIEW_1_CARD_2"}],"containerId":"CONTAINER_REGULAR_ME_PS_DS1_PROJECT_REPORT_OVERVIEW_0","containerVariant":"CARD_CONTENT_CONTAINER_VARIANT_REGULAR","containerTitle":"ME_PS_DS1","containerTldr":"","permalinkId":"container-regular-me_ps_ds1-project_report-overview-0","containerType":"CARD_CONTENT_CONTAINER_TYPE_COMPLEX"}},"qcharm_outer":{"skills":"Applied DS, ArrayList, Naive Search, String manipulation, KMP search, Linked List, Time Complexity","cardContentContainer":{"cardContentList":[{"cardTitle":"Headline","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Headline_card card-content-body\'><p>A browser-based online code editor.</p></div>","cardId":"ME_QCHARMPROJECT_REPORT_OVERVIEW_1_CARD_1"},{"cardTitle":"Overview","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Overview_card card-content-body\'><p>QCharm is an online IDE. Programmers use QCharm to write source code and execute it inside the editor.</p><p>During the course of this Micro-Experience, the developer:</p><ul>\\n<li>\\n<p>Implemented basic editor features that included: opening a file, navigation, search/replace, cut/copy/paste, undo/redo.</p>\\n</li>\\n<li>\\n<p>Implemented the same functionality with multiple data structures to understand the effect of design choices on performance.</p>\\n</li>\\n<li>\\n<p>Improved the performance further by using hybrid data structures and algorithms.</p>\\n</li>\\n</ul></div>","cardId":"ME_QCHARMPROJECT_REPORT_OVERVIEW_1_CARD_2"}],"containerId":"CONTAINER_REGULAR_ME_QCHARM_PROJECT_REPORT_OVERVIEW_0","containerVariant":"CARD_CONTENT_CONTAINER_VARIANT_REGULAR","containerTitle":"ME_QCHARM","containerTldr":"","permalinkId":"container-regular-me_qcharm-project_report-overview-0","containerType":"CARD_CONTENT_CONTAINER_TYPE_COMPLEX"}},"qmoney_outer":{"skills":"Java, REST API, Jackson, Interfaces, Code Refactoring, Gradle, Exception Handling","cardContentContainer":{"cardContentList":[{"cardTitle":"Headline","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Headline_card card-content-body\'><p>A visual stock portfolio analyzer.</p></div>","cardId":"ME_QMONEYPROJECT_REPORT_OVERVIEW_1_CARD_1"},{"cardTitle":"Overview","cardType":"CARD_TYPE_REGULAR","@class":"com.crio.backend.modules.content.models.CardContent","cardBody":"<div class=\'Overview_card card-content-body\'><p>QMoney is a visual stock portfolio analyzer. It helps portfolio managers make trade recommendations for their clients.</p><p>During the course of this Micro-Experience, the developer:</p><ul>\\n<li>\\n<p>Implemented the core logic of the portfolio manager and published it as a library.</p>\\n</li>\\n<li>\\n<p>Refactored code to add support for multiple stock quote services.</p>\\n</li>\\n<li>\\n<p>Improved application stability and performance.</p>\\n</li>\\n</ul></div>","cardId":"ME_QMONEYPROJECT_REPORT_OVERVIEW_1_CARD_2"}],"containerId":"CONTAINER_REGULAR_ME_QMONEY_PROJECT_REPORT_OVERVIEW_0","containerVariant":"CARD_CONTENT_CONTAINER_VARIANT_REGULAR","containerTitle":"ME_QMONEY","containerTldr":"","permalinkId":"container-regular-me_qmoney-project_report-overview-0","containerType":"CARD_CONTENT_CONTAINER_TYPE_COMPLEX"}}}')},59:function(e,t,a){e.exports=a.p+"static/media/crio-logo-white.c9536e04.svg"},97:function(e,t,a){e.exports=a.p+"static/media/crio-logo.63be71d0.svg"}},[[104,1,2]]]);
//# sourceMappingURL=main.133d78d4.chunk.js.map