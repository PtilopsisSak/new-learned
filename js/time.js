/**
 * Created by ASUS on 2020/7/28.
 Finished on 2020/8/1
 */
var d000=0;
var d225=225;
var d045=45;
var d090=90;
var d180=180;
var d270=270;
var d999=-90;
 /*
Private Sub Text1_Change()
s = Text1.Text
i = 1
Do Until c = "[" Or i > Len(s)
c = Mid(s, i, 1)
i = i + 1
Loop
out = Mid(s, 1, i - 1)
Do Until Mid(s, i + 4, 1) = "]" Or i > Len(s)
x = Mid(s, i, 5)
y = Mid(s, i + 5, 5)
If x < y Then t = y: y = x: x = t
out = out + x + y
i = i + 10
Loop
'out = out + "]"
Text2.Text = out
End Sub
*/
var ttf=[];
ttf[0]=[d225,d045,d225,d045,d225,d045,d225,d045,d225,d045,d225,d045,d225,d045,d225,d045,d225,d045,d225,d045,d225,d045,d225,d045,d225,d045,d225,d045,d225,d045,d225,d045,d225,d045,d225,d045,d225,d045,d225,d045,d225,d045,d225,d045,d225,d045,d225,d045]//defult
ttf[1]=[d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d270,d000,d180,d000,d180,d000,d270,d180,d090,d000,d180,d000,d180,d000,d180,d090,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999]//-:45
ttf[2]=[d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999]// :32，改一下
ttf[4]=[d270,d000,d180,d000,d180,d000,d270,d180,d270,d090,d270,d000,d270,d180,d270,d090,d270,d090,d270,d090,d270,d090,d270,d090,d270,d090,d270,d090,d270,d090,d270,d090,d270,d090,d090,d000,d180,d090,d270,d090,d090,d000,d180,d000,d180,d000,d180,d090]//0:48
ttf[5]=[
d999,d999,d270,d000,d270,d180,d999,d999,
d270,d000,d180,d090,d270,d090,d999,d999,
d090,d000,d180,d270,d270,d090,d999,d999,
d999,d999,d270,d090,d270,d090,d999,d999,
d270,d000,d180,d090,d090,d000,d270,d180,
d090,d000,d180,d000,d180,d000,d180,d090]//1
ttf[6]=[d270,d000,d180,d000,d180,d000,d270,d180,d090,d000,d180,d000,d270,d180,d270,d090,d270,d000,d180,d000,d180,d090,d270,d090,d270,d090,d270,d000,d180,d000,d180,d090,d270,d090,d090,d000,d180,d000,d270,d180,d090,d000,d180,d000,d180,d000,d180,d090];
ttf[7]=[d270,d000,d180,d000,d180,d000,d270,d180,d090,d000,d180,d000,d270,d180,d270,d090,d270,d000,d180,d000,d180,d090,d270,d090,d090,d000,d180,d000,d270,d180,d270,d090,d270,d000,d180,d000,d180,d090,d270,d090,d090,d000,d180,d000,d180,d000,d180,d090];
ttf[8]=[d270,d000,d270,d180,d270,d000,d270,d180,d270,d090,d270,d090,d270,d090,d270,d090,d270,d090,d090,d000,d180,d090,d270,d090,d090,d000,d180,d000,d270,d180,d270,d090,d999,d999,d999,d999,d270,d090,d270,d090,d999,d999,d999,d999,d090,d000,d180,d090];
ttf[9]=[d270,d000,d180,d000,d180,d000,d270,d180,d270,d090,d270,d000,d180,d000,d180,d090,d270,d090,d090,d000,d180,d000,d270,d180,d090,d000,d180,d000,d270,d180,d270,d090,d270,d000,d180,d000,d180,d090,d270,d090,d090,d000,d180,d000,d180,d000,d180,d090];
ttf[10]=[d270,d000,d180,d000,d180,d000,d270,d180,d270,d090,d270,d000,d180,d000,d180,d090,d270,d090,d090,d000,d180,d000,d270,d180,d270,d090,d270,d000,d270,d180,d270,d090,d270,d090,d090,d000,d180,d090,d270,d090,d090,d000,d180,d000,d180,d000,d180,d090];
ttf[11]=[d270,d000,d180,d000,d180,d000,d270,d180,d270,d090,d270,d000,d270,d180,d270,d090,d090,d000,d180,d090,d270,d090,d270,d090,d999,d999,d999,d999,d270,d090,d270,d090,d999,d999,d999,d999,d270,d090,d270,d090,d999,d999,d999,d999,d090,d000,d180,d090];
ttf[12]=[d270,d000,d180,d000,d180,d000,d270,d180,d270,d090,d270,d000,d270,d180,d270,d090,d270,d090,d090,d000,d180,d090,d270,d090,d270,d090,d270,d000,d270,d180,d270,d090,d270,d090,d090,d000,d180,d090,d270,d090,d090,d000,d180,d000,d180,d000,d180,d090];
ttf[13]=[d270,d000,d180,d000,d180,d000,d270,d180,d270,d090,d270,d000,d270,d180,d270,d090,d270,d090,d090,d000,d180,d090,d270,d090,d090,d000,d180,d000,d270,d180,d270,d090,d270,d000,d180,d000,d180,d090,d270,d090,d090,d000,d180,d000,d180,d000,d180,d090]//9
ttf[14]=[d999,d999,d999,d999,d999,d999,d999,d999,d999,d999,d270,d000,d180,d270,d999,d999,d999,d999,d090,d000,d180,d090,d999,d999,d999,d999,d270,d000,d180,d270,d999,d999,d999,d999,d090,d000,d180,d090,d999,d999,d999,d999,d999,d999,d999,d999,d999,d999]//::58


var process=[.05,.1,.25,.4,.5,.6,.75,.9,.95,1];
var cs=20;
//for (i=1;i<=cs;i++){process[i]=i/cs}

var cxt_size=15;
var cxt_int=0;
var color="#66ccff";
var line=2;
var auto_change=true;
var time_int=50;
if (time_int*process.length>950){time_int=Math.floor(950/process.length)}
var line_jo="round";
var line_cap="round";
document.getElementById("clock").style.height=2*6*(cxt_size+cxt_int)+"px";

var can_num=["canvas对象"];
var cxt_num=["canvas绘图"];
var cxt_num_ci=["当前进度"];
var cxt_num_bian=["变换量"];
var cxt_num_cur=["当期位置"];
for (i=1;i<=total;i++){
can_num[i]=document.getElementById("num"+i);
cxt_num[i]=can_num[i].getContext("2d");
cxt_num_ci[i]=0;
cxt_num_bian[i]=[];
cxt_num_cur[i] = ttf[0].map((value) => value)
can_num[i].width=2*4*(cxt_size+cxt_int);
can_num[i].height=2*6*(cxt_size+cxt_int);
cxt_num[i].lineWidth=line;
cxt_num[i].strokeStyle=color;
cxt_num[i].lineJoin=line_jo;
cxt_num[i].lineCap=line_cap
}
var row,xs,ys,xe1,ye1,xe2,ye2;
var lin;

//------------------------------------------
function draw(index_cur){
	if (cxt_num_ci[index_cur] == process.length) {
		for (k = 0; k < 48; k++) {
			cxt_num_cur[index_cur][k] += cxt_num_bian[index_cur][k]
		}
		return
	}
    cxt_num[index_cur].clearRect(0,0,2*4*(cxt_size+cxt_int),2*6*(cxt_size+cxt_int));
    for (i=0;i<24;i++){
        lin=i%4+1;
        row=Math.floor(i/4+1);
        xs=(cxt_size+cxt_int)*(2*lin-1);
        ys=(cxt_size+cxt_int)*(2*row-1);
        ang1=cxt_num_cur[index_cur][2*i]+cxt_num_bian[index_cur][2*i]*process[cxt_num_ci[index_cur]];
		if (ang1>=0){
			xe1=xs+cxt_size*Math.cos(ang1*Math.PI/180);
			ye1=ys-cxt_size*Math.sin(ang1*Math.PI/180)
		}else{
			xe1=xs+cxt_size*Math.cos(ang1*Math.PI/180)*(d999-ang1)/d999;
			ye1=ys-cxt_size*Math.sin(ang1*Math.PI/180)*(d999-ang1)/d999
		}
		ang2=cxt_num_cur[index_cur][2*i+1]+cxt_num_bian[index_cur][2*i+1]*process[cxt_num_ci[index_cur]];
		if (ang2>=0){
			xe2=xs+cxt_size*Math.cos(ang2*Math.PI/180);
			ye2=ys-cxt_size*Math.sin(ang2*Math.PI/180)
		}else{
	        xe2=xs+cxt_size*Math.cos(ang2*Math.PI/180)*(d999-ang2)/d999;
			ye2=ys-cxt_size*Math.sin(ang2*Math.PI/180)*(d999-ang2)/d999
		}
		if (!(ang1==d999&&ang2==d999)) {
			cxt_num[index_cur].beginPath();
			cxt_num[index_cur].moveTo(xe1,ye1);
			cxt_num[index_cur].lineTo(xs,ys);
			cxt_num[index_cur].lineTo(xe2,ye2);
			cxt_num[index_cur].stroke()
		}
	}
	cxt_num_ci[index_cur]+=1;
	setTimeout("fn("+index_cur+")", time_int);
//	setTimeout("alert(5)", 1000);

}
function fn(temp){
	return draw(temp)
}
function calculate(index_cur,muBiaoShuZhu){
    for (i=0;i<48;i++){
        cxt_num_bian[index_cur][i]=muBiaoShuZhu[i]-cxt_num_cur[index_cur][i]
    }
    cxt_num_ci[index_cur]=0;
	draw(index_cur)
}

var shang="--------";
var s;
function main(){
	if (document.visibilityState == "hidden" || !auto_change) {
		return
	}
    d=new Date();
    hor=d.getHours();
    min=d.getMinutes();
	sec=d.getSeconds();
    s="";
    if (hor<10){s="0"}
    s+=hor;
	s+=":";
    if (min<10){s+="0"}
    s+=min;
	s+=":";
    if (sec<10){s+="0"}
    s+=sec;
	string(s,1)
}
function string(s,val){
	if (!val) {auto_change=false}
		for (j=1;j<=total;j++){
		if (s.substr(j-1,1)!==shang.substr(j-1,1)){
			xia=s.charCodeAt(j-1)-44;
			if (xia==-12){xia=2}else{
 			if (!ttf[xia]){xia=0}}
		    calculate(j,ttf[xia])
		}
	}
	shang=s

}
setInterval("main()",1000);
function d(index_cur){
    cxt_num[index_cur].clearRect(0,0,2*4*(cxt_size+cxt_int),2*6*(cxt_size+cxt_int));
    for (i=0;i<24;i++){
        lin=i%4+1;
        row=Math.floor(i/4+1);
        xs=(cxt_size+cxt_int)*(2*lin-1);
        ys=(cxt_size+cxt_int)*(2*row-1);
        ang1=cxt_num_cur[index_cur][2*i];
		if (ang1>=0){
			xe1=xs+cxt_size*Math.cos(ang1*Math.PI/180);
			ye1=ys-cxt_size*Math.sin(ang1*Math.PI/180)
		}else{
			xe1=xs+cxt_size*Math.cos(ang1*Math.PI/180)*(d999-ang1)/d999;
			ye1=ys-cxt_size*Math.sin(ang1*Math.PI/180)*(d999-ang1)/d999
		}
		ang2=cxt_num_cur[index_cur][2*i+1];
		if (ang2>=0){
			xe2=xs+cxt_size*Math.cos(ang2*Math.PI/180);
			ye2=ys-cxt_size*Math.sin(ang2*Math.PI/180)
		}else{
	        xe2=xs+cxt_size*Math.cos(ang2*Math.PI/180)*(d999-ang2)/d999;
			ye2=ys-cxt_size*Math.sin(ang2*Math.PI/180)*(d999-ang2)/d999
		}
		if (!(ang1==d999&&ang2==d999)) {
			cxt_num[index_cur].beginPath();
			cxt_num[index_cur].moveTo(xe1,ye1);
			cxt_num[index_cur].lineTo(xs,ys);
			cxt_num[index_cur].lineTo(xe2,ye2);
			cxt_num[index_cur].stroke()
		}
    }
}

for (n=1;n<=total;n++){
	d(n)
	}

function auto(){
	auto_change=!auto_change;
	return auto_change
}



























