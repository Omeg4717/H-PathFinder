// Authomated Lines Exceeding Pathing H-farm
// ALEPH

var ctx = document.getElementById('canvas1').getContext('2d');
var A = {x: 0, y:0};

const Upoints = [
    {x:365.7, y:2}, {x:247, y:363}, {x:387, y:417.4}, {x:427, y:400}, {x:426, y:432}, {x:560, y:80}, {x:529, y:74},
    {x:544, y:129}, {x:748, y:116}, {x:800, y:127}, {x:774, y:222}, {x:722, y:205}, {x:739, y:365}, {x:558, y:338}, {x:457, y:268},
    {x:778, y:370}, {x:760, y:438}, {x:723, y:432}, {x:898, y:386}, {x:918, y:307}, {x:1085, y:413}, {x:1117, y:417}, {x:1187, y:428},
    {x:1225, y:488}, {x:1182, y:449}, {x:1197, y:494}, {x:1172, y:496}, {x:1241, y:210}, {x:1013, y:167}, {x:1001, y:214},
    {x:1239, y:576}, {x:1252, y:565}, {x:1278, y:650}, {x:1373, y:680}, {x:1386, y:614}, {x:1271, y:552}, {x:1391, y:596},
    {x:1434, y:427}, {x:1250, y:532}, {x:1242, y:524}, {x:1428, y:398}, {x:1462, y:252}, {x:1406, y:242}, {x:1397, y:307},
    {x:1141, y:618}, {x:1105, y:648}, {x:1065, y:631}, {x:1054, y:630}, {x:962, y:508}, {x:920, y:680}, {x:912, y:707},
    {x:834, y:676}, {x:752, y:645}, {x:840, y:649}, {x:853, y:588}, {x:697, y:532}, {x:713, y:472}, {x:669, y:703}, {x:647, y:700},
    {x:669, y:703}, {x:715, y:698}, {x:727, y:680}, {x:800, y:732}, {x:386, y:669}, {x:626, y:507}, {x:644, y:448}, {x:471, y:451},
    {x:607, y:445}, {x:442, y:439}, {x:203, y:512}, {x:105, y:463}, {x:14, y:752}, {x:3, y:788}, {x:179, y:596}, {x:140, y:730},
    {x:147, y:589}, {x:111, y:711}, {x:165, y:530}, {x:130, y:513}, {x:54, y:770}, {x:43, y:805}, {x:90, y:787}, {x:111, y:835},
    {x:120, y:800}
];
//{x:1225, y:488}

const lines = [
    [{x:365.7, y:2}, {x:247, y:363}], [{x:247, y:363}, {x:387, y:417.4}], [{x:387, y:417.4}, {x:427, y:400}],
    [{x:427, y:400}, {x:426, y:432}], [{x:560, y:80}, {x:529, y:74}], [{x:426, y:432}, {x:387, y:417.4}],
    [{x:365.7, y:2}, {x:529, y:74}], [{x:560, y:80}, {x:544, y:129}], [{x:560, y:80}, {x:748, y:116}],
    [{x:748, y:116}, {x:800, y:127}],
    
    [{x:774, y:222}, {x:800, y:127}], [{x:774, y:222}, {x:722, y:205}],
    [{x:748, y:116}, {x:722, y:205}], [{x:774, y:222}, {x:739, y:365}], [{x:558, y:338}, {x:739, y:365}],
    [{x:558, y:338}, {x:427, y:400}], [{x:457, y:268}, {x:427, y:400}], [{x:778, y:370}, {x:739, y:365}],
    [{x:778, y:370}, {x:760, y:438}], [{x:723, y:432}, {x:739, y:365}],

    [{x:898, y:386}, {x:778, y:370}], [{x:898, y:386}, {x:918, y:307}], [{x:898, y:386}, {x:1085, y:413}],
    [{x:1117, y:417}, {x:1085, y:413}], [{x:1117, y:417}, {x:1187, y:428}], [{x:1225, y:488}, {x:1187, y:428}],
    [{x:1182, y:449}, {x:1187, y:428}], [{x:1182, y:449}, {x:1197, y:494}], [{x:1182, y:449}, {x:1172, y:496}],
    [{x:1197, y:494}, {x:1172, y:496}],

    [{x:1241, y:210}, {x:1187, y:428}], [{x:1241, y:210}, {x:1013, y:167}], [{x:1001, y:214}, {x:1013, y:167}],
    [{x:800, y:127}, {x:1013, y:167}], [{x:1197, y:494}, {x:1239, y:576}], [{x:1182, y:449}, {x:1252, y:565}],
    [{x:1239, y:576}, {x:1252, y:565}], [{x:1239, y:576}, {x:1278, y:650}], [{x:1373, y:680}, {x:1278, y:650}],
    [{x:1386, y:614}, {x:1252, y:565}],
    
    [{x:1271, y:552}, {x:1252, y:565}], [{x:1271, y:552}, {x:1391, y:596}],
    [{x:1271, y:552}, {x:1434, y:427}], [{x:1271, y:552}, {x:1250, y:532}], [{x:1242, y:524}, {x:1250, y:532}],
    [{x:1250, y:532}, {x:1428, y:398}], [{x:1462, y:252}, {x:1428, y:398}], [{x:1462, y:252}, {x:1406, y:242}],
    [{x:1397, y:307}, {x:1406, y:242}], [{x:1241, y:210}, {x:1406, y:242}],
    
    [{x:1141, y:618}, {x:1172, y:496}],
    [{x:1141, y:618}, {x:1105, y:648}], [{x:1065, y:631}, {x:1105, y:648}], [{x:1065, y:631}, {x:1054, y:630}],
    [{x:1065, y:631}, {x:1117, y:417}], [{x:962, y:508}, {x:1085, y:413}], [{x:962, y:508}, {x:920, y:680}],
    [{x:912, y:707}, {x:920, y:680}], [{x:912, y:707}, {x:834, y:676}], [{x:752, y:645}, {x:834, y:676}],

    [{x:840, y:649}, {x:834, y:676}], [{x:840, y:649}, {x:920, y:680}], [{x:840, y:649}, {x:853, y:588}],
    [{x:962, y:508}, {x:907, y:548}], [{x:697, y:532}, {x:853, y:588}], [{x:697, y:532}, {x:713, y:472}],
    [{x:697, y:532}, {x:647, y:700}], [{x:669, y:703}, {x:647, y:700}], [{x:669, y:703}, {x:715, y:698}],
    [{x:752, y:645}, {x:715, y:698}],
    
    [{x:800, y:732}, {x:715, y:698}], [{x:386, y:669}, {x:647, y:700}],
    [{x:697, y:532}, {x:626, y:507}], [{x:644, y:448}, {x:626, y:507}], [{x:471, y:451}, {x:626, y:507}],
    [{x:471, y:451}, {x:607, y:445}], [{x:426, y:432}, {x:442, y:439}], [{x:386, y:669}, {x:442, y:439}],
    [{x:471, y:451}, {x:442, y:439}], [{x:105, y:463}, {x:203, y:512}],
    
    [{x:105, y:463}, {x:14, y:752}],
    [{x:3, y:788}, {x:14, y:752}], [{x:179, y:596}, {x:203, y:512}], [{x:179, y:596}, {x:386, y:669}],
    [{x:179, y:596}, {x:140, y:730}], [{x:179, y:596}, {x:147, y:589}], [{x:111, y:711}, {x:140, y:730}],
    [{x:111, y:711}, {x:147, y:589}], [{x:165, y:530}, {x:147, y:589}], [{x:165, y:530}, {x:130, y:513}],

    [{x:54, y:770}, {x:130, y:513}], [{x:54, y:770}, {x:14, y:752}], [{x:54, y:770}, {x:43, y:805}], [{x:3, y:788}, {x:43, y:805}],
    [{x:54, y:770}, {x:90, y:787}], [{x:111, y:711}, {x:90, y:787}], [{x:111, y:835}, {x:43, y:805}],
    [{x:111, y:835}, {x:120, y:800}], [{x:120, y:800}, {x:90, y:787}], [{x:120, y:800}, {x:140, y:730}],

    [{x:457, y:268}, {x:544, y:129}], [{x:723, y:432} , {x:760, y:438}], [{x:1001, y:214}, {x:918, y:307}],
    [{x:920, y:680}, {x:1054, y:630}], [{x:644, y:448}, {x:713, y:472}], [{x:1225, y:488}, {x:1242, y:524}],
    [{x:1225, y:488}, {x:1311, y:397}], [{x:607, y:445}, {x:644, y:448}], [{x:1373, y:680}, {x:1386, y:614}],
    [{x:1391, y:596}, {x:1386, y:614}], 

    [{x:1391, y:596}, {x:1434, y:427}], [{x:723, y:432}, {x:713, y:472}], [{x:907, y:548}, {x:853, y:588}],
    [{x:907, y:548}, {x:900, y:570}], [{x:1311, y:397}, {x:1397, y:307}]
];

function distance(x1, y1, x2, y2) {
    return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
}


function Closest(Xvalue, Yvalue, First){
    let e = 0;
    let dis = 0;
    let lowScore = -1;
    let Saved = -1;
    let YES = false;
    if(First == true){
        while(e < 84){
            dis = distance(Xvalue, Yvalue, Upoints[e].x, Upoints[e].y);
            if(dis < lowScore || lowScore == -1){
                lowScore = dis;
                Saved = e;
            }
            e++;
        }
        drawGradientLine({x:Xvalue, y:Yvalue}, {x:Upoints[Saved].x, y:Upoints[Saved].y}, false, 'red');
        dis = distance(A.x, A.y, Upoints[Saved].x, Upoints[Saved].y);
        if(dis > 0){
            Closest(Upoints[Saved].x, Upoints[Saved].y, false);
        }
    }else{
        while(e < 115){
            if(lines[e][0].x == Xvalue && lines[e][0].y == Yvalue){
                dis = distance(A.x, A.y, lines[e][1].x, lines[e][1].y);
                if(dis <= lowScore || lowScore == -1){
                    lowScore = dis;
                    Saved = e;
                }
            }
            e++;
        }
        e = 0;
        dis = 0;
        while(e < 115){
            if(lines[e][1].x == Xvalue && lines[e][1].y == Yvalue){
                dis = distance(A.x, A.y, lines[e][0].x, lines[e][0].y);
                if(dis <= lowScore || lowScore == -1){
                    lowScore = dis;
                    Saved = e;
                    YES = true;
                }
            }
            e++;
        }
        if(YES == false && lowScore != -1){
            drawGradientLine({x:Xvalue, y:Yvalue}, {x:lines[Saved][1].x, y:lines[Saved][1].y}, false, 'red');
            dis = distance(A.x, A.y, lines[Saved][1].x, lines[Saved][1].y);
            if(dis > 0){
                Closest(lines[Saved][1].x, lines[Saved][1].y, false);
            }
        }else if(YES && lowScore != -1){
            drawGradientLine({x:Xvalue, y:Yvalue}, {x:lines[Saved][0].x, y:lines[Saved][0].y}, false, 'red');
            dis = distance(A.x, A.y, lines[Saved][0].x, lines[Saved][0].y);
            if(dis > 0){
                Closest(lines[Saved][0].x, lines[Saved][0].y, false);
            }
        }
    }
    //HERE DRAW LINE
    //HERE DREW LINE
    //WHY HERE DRAW LINE
}

function GetInput(){
    let y = event.clientY;
    let x = event.clientX;
    alert(x + " " + y);
    drawGradientLine( {x:1225, y:488}, {x:1311, y:397}, false, 'black');
    while(true){
        let responce = prompt("WHERE DO YOU WANT TO GO?").toLowerCase();
        if(responce == "myp" || responce == "myp building" || responce == "middle year program building" || responce == "middle year program"){
            A.x = 918;
            A.y = 307;
            break;
        }else if(responce == "pyp" || responce == "pyp building" || responce == "primary year program building" || responce == "primary year program"){
            A.x = 1311;
            A.y = 397;
            break;
        }else if(responce == "college" || responce == "college building"){
            A.x = 457;
            A.y = 268;
            break;
        }else if(responce == "hill" || responce == "hill building" || responce == "the hill" || responce == "the hill building"){
            A.x = 723;
            A.y = 432;
            break;
        }else if(responce == "amor" || responce == "amor building" || responce == "restaurant building" || responce == "restaurant"){
            A.x = 900;
            A.y = 570;
            break;
        }else if(responce == "dp" || responce == "dp building" || responce == "diplom program building" || responce == "diplom program"){
            A.x = 147;
            A.y = 589;
            break;
        }else if(responce == "gym" || responce == "gym building"){
            A.x = 1054;
            A.y = 630;
            break;  
        }else if(responce == "serra" || responce == "serra building" || responce == "greenhouse" || responce == "greenhouse building"){
            A.x = 1054;
            A.y = 630;
            break;
        }else{
            alert("INVALID RESPONCE, PLEASE DON'T ADD SPACES, PUNCTUATION OR SPECIAL CHARACTERS");
        }
    }
    Closest(x, y, true);
}

function drawGradientLine( xy1, xy2, underline, color ) {
  ctx.lineWidth = 1;
  ctx.strokeStyle = color;
  ctx.beginPath();
    ctx.moveTo(xy1.x, xy1.y);
    ctx.lineTo(xy2.x, xy2.y);
    ctx.stroke();
  ctx.restore();
  
  if ( underline ) {
    const linelen = distance( xy1, xy2);
    const hyp1 = line_width / 2;
    const angle = Math.asin( (xy2.y - xy1.y) / (linelen) );
    const dy = (angle < 0) ? -1 * hyp1 * Math.cos( angle ) : hyp1 * Math.cos( angle );
    const dx = (angle < 0) ? -1 * hyp1 * Math.sin( angle ) : hyp1 * Math.sin( angle );
 
    const c1 = {
        x: xy1.x - dx, 
      y: xy1.y + dy
    };
    const c2 = {
        x:xy2.x - dx, 
      y: xy2.y + dy
    };
    
    ctx.save();  
    ctx.lineWidth = 1
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(c1.x, c1.y);
    ctx.lineTo(c2.x, c2.y);
    ctx.stroke();
    ctx.restore();
  }
}

// drawGradientLine( {x:920, y:680}, {x:1054, y:630} , false, 'black'); 
// drawGradientLine( {x:752, y:645}, {x:727, y:680}, false, 'black'); 
// drawGradientLine( {x:1225, y:488}, {x:1242, y:524}, false, 'black'); 
// drawGradientLine( {x:1225, y:488}, {x:1397, y:307}, false, 'black'); 
// drawGradientLine( {x:607, y:445}, {x:644, y:448}, false, 'black');
// drawGradientLine( {x:457, y:268}, {x:544, y:129}, false, 'black');
// drawGradientLine( {x:723, y:432} , {x:760, y:438}, false, 'black');
// drawGradientLine( {x:1001, y:214}, {x:918, y:307}, false, 'black');
// drawGradientLine( {x:1373, y:680}, {x:1386, y:614}, false, 'black');
// drawGradientLine( {x:1391, y:596}, {x:1386, y:614}, false, 'black');
// drawGradientLine( {x:1391, y:596}, {x:1434, y:427}, false, 'black');
// drawGradientLine( {x:723, y:432}, {x:713, y:472}, false, 'black');
// drawGradientLine( {x:644, y:448}, {x:713, y:472}, false, 'black');
// drawGradientLine( {x:365.7, y:2}, {x:247, y:363}, false, 'black');
// drawGradientLine( {x:247, y:363}, {x:387, y:417.4}, false, 'black');
// drawGradientLine( {x:387, y:417.4}, {x:427, y:400}, false, 'black');
// drawGradientLine( {x:427, y:400}, {x:426, y:432}, false, 'black');
// drawGradientLine( {x:560, y:80}, {x:529, y:74}, false, 'black');
// drawGradientLine( {x:426, y:432}, {x:387, y:417.4}, false, 'black');
// drawGradientLine( {x:365.7, y:2}, {x:529, y:74}, false, 'black');
// drawGradientLine( {x:560, y:80}, {x:544, y:129}, false, 'black');
// drawGradientLine( {x:560, y:80}, {x:748, y:116}, false, 'black');
// drawGradientLine( {x:748, y:116}, {x:800, y:127}, false, 'black');
// drawGradientLine( {x:774, y:222}, {x:800, y:127}, false, 'black');
// drawGradientLine( {x:774, y:222}, {x:722, y:205}, false, 'black');
// drawGradientLine( {x:748, y:116}, {x:722, y:205}, false, 'black');
// drawGradientLine( {x:774, y:222}, {x:739, y:365}, false, 'black');
// drawGradientLine( {x:558, y:338}, {x:739, y:365}, false, 'black');
// drawGradientLine( {x:558, y:338}, {x:427, y:400}, false, 'black');
// drawGradientLine( {x:457, y:268}, {x:427, y:400}, false, 'black');
// drawGradientLine( {x:778, y:370}, {x:739, y:365}, false, 'black');
// drawGradientLine( {x:778, y:370}, {x:760, y:438}, false, 'black'); 
// drawGradientLine( {x:723, y:432}, {x:739, y:365}, false, 'black');
// drawGradientLine( {x:898, y:386}, {x:778, y:370}, false, 'black');
// drawGradientLine( {x:898, y:386}, {x:918, y:307}, false, 'black');
// drawGradientLine( {x:898, y:386}, {x:1085, y:413}, false, 'black');
// drawGradientLine( {x:1117, y:417}, {x:1085, y:413}, false, 'black');
// drawGradientLine( {x:1117, y:417}, {x:1187, y:428}, false, 'black');
// drawGradientLine( {x:1225, y:488}, {x:1187, y:428}, false, 'black');
// drawGradientLine( {x:1182, y:449}, {x:1187, y:428}, false, 'black');
// drawGradientLine( {x:1182, y:449}, {x:1197, y:494}, false, 'black');
// drawGradientLine( {x:1182, y:449}, {x:1172, y:496}, false, 'black');
// drawGradientLine( {x:1197, y:494}, {x:1172, y:496}, false, 'black');
// drawGradientLine( {x:1241, y:210}, {x:1187, y:428}, false, 'black');
// drawGradientLine( {x:1241, y:210}, {x:1013, y:167}, false, 'black');
// drawGradientLine( {x:1001, y:214}, {x:1013, y:167}, false, 'black');
// drawGradientLine( {x:800, y:127}, {x:1013, y:167}, false, 'black');
// drawGradientLine( {x:1197, y:494}, {x:1239, y:576}, false, 'black');
// drawGradientLine( {x:1182, y:449}, {x:1252, y:565}, false, 'black');
// drawGradientLine( {x:1239, y:576}, {x:1252, y:565}, false, 'black');
// drawGradientLine( {x:1239, y:576}, {x:1278, y:650}, false, 'black');
// drawGradientLine( {x:1373, y:680}, {x:1278, y:650}, false, 'black');
// drawGradientLine( {x:1386, y:614}, {x:1252, y:565}, false, 'black');
// drawGradientLine( {x:1271, y:552}, {x:1252, y:565}, false, 'black');
// drawGradientLine( {x:1271, y:552}, {x:1391, y:596}, false, 'black');
// drawGradientLine( {x:1271, y:552}, {x:1434, y:427}, false, 'black');
// drawGradientLine( {x:1271, y:552}, {x:1250, y:532}, false, 'black');
// drawGradientLine( {x:1242, y:524}, {x:1250, y:532}, false, 'black');
// drawGradientLine( {x:1250, y:532}, {x:1428, y:398}, false, 'black');
// drawGradientLine( {x:1462, y:252}, {x:1428, y:398}, false, 'black');
// drawGradientLine( {x:1462, y:252}, {x:1406, y:242}, false, 'black');
// drawGradientLine( {x:1397, y:307}, {x:1406, y:242}, false, 'black');
// drawGradientLine( {x:1241, y:210}, {x:1406, y:242}, false, 'black');
// drawGradientLine( {x:1141, y:618}, {x:1172, y:496}, false, 'black');
// drawGradientLine( {x:1141, y:618}, {x:1105, y:648}, false, 'black');
// drawGradientLine( {x:1065, y:631}, {x:1105, y:648}, false, 'black');
// drawGradientLine( {x:1065, y:631}, {x:1054, y:630}, false, 'black');
// drawGradientLine( {x:1065, y:631}, {x:1117, y:417}, false, 'black');
// drawGradientLine( {x:962, y:508}, {x:1085, y:413}, false, 'black');
// drawGradientLine( {x:962, y:508}, {x:920, y:680}, false, 'black');
// drawGradientLine( {x:912, y:707}, {x:920, y:680}, false, 'black');
// drawGradientLine( {x:912, y:707}, {x:834, y:676}, false, 'black');
// drawGradientLine( {x:752, y:645}, {x:834, y:676}, false, 'black');
// drawGradientLine( {x:840, y:649}, {x:834, y:676}, false, 'black');
// drawGradientLine( {x:840, y:649}, {x:920, y:680}, false, 'black');
// drawGradientLine( {x:840, y:649}, {x:853, y:588}, false, 'black');
// drawGradientLine( {x:907, y:548}, {x:853, y:588}, false, 'black');
// drawGradientLine( {x:962, y:508}, {x:907, y:548}, false, 'black');
// drawGradientLine( {x:697, y:532}, {x:853, y:588}, false, 'black');
// drawGradientLine( {x:697, y:532}, {x:713, y:472}, false, 'black');
// drawGradientLine( {x:697, y:532}, {x:647, y:700}, false, 'black');
// drawGradientLine( {x:669, y:703}, {x:647, y:700}, false, 'black');
// drawGradientLine( {x:669, y:703}, {x:715, y:698}, false, 'black');
// drawGradientLine( {x:727, y:680}, {x:715, y:698}, false, 'black');
// drawGradientLine( {x:800, y:732}, {x:715, y:698}, false, 'black');
// drawGradientLine( {x:386, y:669}, {x:647, y:700}, false, 'black');
// drawGradientLine( {x:697, y:532}, {x:626, y:507}, false, 'black');
// drawGradientLine( {x:644, y:448}, {x:626, y:507}, false, 'black');
// drawGradientLine( {x:471, y:451}, {x:626, y:507}, false, 'black');
// drawGradientLine( {x:471, y:451}, {x:607, y:445}, false, 'black');
// drawGradientLine( {x:426, y:432}, {x:442, y:439}, false, 'black');
// drawGradientLine( {x:386, y:669}, {x:442, y:439}, false, 'black');
// drawGradientLine( {x:471, y:451}, {x:442, y:439}, false, 'black');
// drawGradientLine( {x:247, y:363}, {x:203, y:512}, false, 'black');
// drawGradientLine( {x:105, y:463}, {x:203, y:512}, false, 'black');
// drawGradientLine( {x:105, y:463}, {x:14, y:752}, false, 'black');
// drawGradientLine( {x:3, y:788}, {x:14, y:752}, false, 'black');
// drawGradientLine( {x:179, y:596}, {x:203, y:512}, false, 'black');
// drawGradientLine( {x:179, y:596}, {x:386, y:669}, false, 'black');
// drawGradientLine( {x:179, y:596}, {x:140, y:730}, false, 'black');
// drawGradientLine( {x:179, y:596}, {x:147, y:589}, false, 'black');
// drawGradientLine( {x:111, y:711}, {x:140, y:730}, false, 'black');
// drawGradientLine( {x:111, y:711}, {x:147, y:589}, false, 'black');
// drawGradientLine( {x:165, y:530}, {x:147, y:589}, false, 'black');
// drawGradientLine( {x:165, y:530}, {x:130, y:513}, false, 'black');
// drawGradientLine( {x:54, y:770}, {x:130, y:513}, false, 'black');
// drawGradientLine( {x:54, y:770}, {x:14, y:752}, false, 'black');
// drawGradientLine( {x:54, y:770}, {x:43, y:805}, false, 'black');
// drawGradientLine( {x:3, y:788}, {x:43, y:805}, false, 'black');
// drawGradientLine( {x:54, y:770}, {x:90, y:787}, false, 'black');
// drawGradientLine( {x:111, y:711}, {x:90, y:787}, false, 'black');
// drawGradientLine( {x:111, y:835}, {x:43, y:805}, false, 'black');
// drawGradientLine( {x:111, y:835}, {x:120, y:800}, false, 'black');
// drawGradientLine( {x:120, y:800}, {x:90, y:787}, false, 'black');
// drawGradientLine( {x:120, y:800}, {x:140, y:730}, false, 'black');