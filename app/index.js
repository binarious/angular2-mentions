System.registerDynamic("app/environment.js",[],!0,function(a,b,c){"use strict";return b.environment={production:!0},c.exports}),System.registerDynamic("app/common-names.js",[],!0,function(a,b,c){"use strict";return b.COMMON_NAMES=["Noah","Liam","Mason","Jacob","William","Ethan","Michael","Alexander","James","Daniel","Elijah","Benjamin","Logan","Aiden","Jayden","Matthew","Jackson","David","Lucas","Joseph","Anthony","Andrew","Samuel","Gabriel","Joshua","John","Carter","Luke","Dylan","Christopher","Isaac","Oliver","Henry","Sebastian","Caleb","Owen","Ryan","Nathan","Wyatt","Hunter","Jack","Christian","Landon","Jonathan","Levi","Jaxon","Julian","Isaiah","Eli","Aaron","Charles","Connor","Cameron","Thomas","Jordan","Jeremiah","Nicholas","Evan","Adrian","Gavin","Robert","Brayden","Grayson","Josiah","Colton","Austin","Angel","Jace","Dominic","Kevin","Brandon","Tyler","Parker","Ayden","Jason","Jose","Ian","Chase","Adam","Hudson","Nolan","Zachary","Easton","Blake","Jaxson","Cooper","Lincoln","Xavier","Bentley","Kayden","Carson","Brody","Asher","Nathaniel","Ryder","Justin","Leo","Juan","Luis","Camden","Emma","Olivia","Sophia","Isabella","Ava","Mia","Emily","Abigail","Madison","Charlotte","Harper","Sofia","Avery","Elizabeth","Amelia","Evelyn","Ella","Chloe","Victoria","Aubrey","Grace","Zoey","Natalie","Addison","Lillian","Brooklyn","Lily","Hannah","Layla","Scarlett","Aria","Zoe","Samantha","Anna","Leah","Audrey","Ariana","Allison","Savannah","Arianna","Camila","Penelope","Gabriella","Claire","Aaliyah","Sadie","Riley","Skylar","Nora","Sarah","Hailey","Kaylee","Paisley","Kennedy","Ellie","Peyton","Annabelle","Caroline","Madelyn","Serenity","Aubree","Lucy","Alexa","Alexis","Nevaeh","Stella","Violet","Genesis","Mackenzie","Bella","Autumn","Mila","Kylie","Maya","Piper","Alyssa","Taylor","Eleanor","Melanie","Naomi","Faith","Eva","Katherine","Lydia","Brianna","Julia","Ashley","Khloe","Madeline","Ruby","Sophie","Alexandra","London","Lauren","Gianna","Isabelle","Alice","Vivian","Hadley","Jasmine"],c.exports}),System.registerDynamic("app/tinymce.component.js",["@angular/core","../mention/mention","./common-names"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("../mention/mention"),h=a("./common-names"),i=function(){function a(a,b){this._elementRef=a,this._zone=b,this.items=h.COMMON_NAMES}return a.prototype.ngAfterViewInit=function(){tinymce.init({mode:"exact",height:100,theme:"modern",plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table contextmenu paste code"],toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",elements:"tmce",setup:this.tinySetup.bind(this)})},a.prototype.tinySetup=function(a){var b=this,c=this.mention;a.on("keydown",function(c){var d=window.frames[a.iframeElement.id],e=d.contentDocument.getElementById("tinymce");b._zone.run(function(){b.mention.keyHandler(c,e)})}),a.on("init",function(b){c.setIframe(a.iframeElement)})},d([f.Input(),e("design:type",Object)],a.prototype,"htmlContent",void 0),d([f.ViewChild(g.Mention),e("design:type",g.Mention)],a.prototype,"mention",void 0),a=d([f.Component({selector:"tinymce",template:'\n    <div class="form-group" style="position:relative">\n      <div [mention]="items"></div>\n      <div>\n        <textarea class="hidden" cols="60" rows="4" id="tmce">{{htmlContent}}</textarea>\n      </div>\n    </div>',directives:[g.Mention]}),e("design:paramtypes",[f.ElementRef,f.NgZone])],a)}();return b.TinyMCE=i,c.exports}),System.registerDynamic("app/ng2-mentions.component.js",["@angular/core","../mention/mention","./common-names","./tinymce.component"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("../mention/mention"),h=a("./common-names"),i=a("./tinymce.component"),j=function(){function a(){this.items=h.COMMON_NAMES}return a=d([f.Component({moduleId:c.id,selector:"ng2-mentions-app",templateUrl:"ng2-mentions.component.html",directives:[g.Mention,i.TinyMCE]}),e("design:paramtypes",[])],a)}();return b.Ng2MentionsAppComponent=j,c.exports}),System.registerDynamic("app/index.js",["./environment","./ng2-mentions.component"],!0,function(a,b,c){"use strict";var d=a("./environment");b.environment=d.environment;var e=a("./ng2-mentions.component");return b.Ng2MentionsAppComponent=e.Ng2MentionsAppComponent,c.exports});