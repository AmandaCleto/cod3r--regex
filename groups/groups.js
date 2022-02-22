const text = "O José Simão é muito engraçado... hehehehehe";
console.log(text.match(/(he)+/g)); //group a specif pattern
//[ 'hehehehehe' ]

const text2 = "http://www.site.info www.escola.ninja.br google.com.ag";
console.log(text2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g));