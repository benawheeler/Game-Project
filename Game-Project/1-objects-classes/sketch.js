//create a variable to hold one ball
let banana;

function setup() {
  createCanvas(800, 400);
  banana = new Banana(200,20); //make a new ball from the Ball class and call it b.
}


function draw(){
	background(220);
    banana.drawBanana(); //draw the ball called b (go look in the Ball class for the drawBall function)
    banana.moveBanana(); //move the ball called b (go look in the Ball class for the moveBall function)
}


//ball class from which to create new balls with similar properties.
class Banana {



	constructor(x,y,r,g,b){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.r= r;
        this.g= g;
        this.b= b;
	}
	drawBanana(){  // draw a ball on the screen at x,y
  //VERTEX
  push();
  scale(0.3);
  //rotate(random());
  fill(255,241,128);
  beginShape();
  vertex(this.x+25,this.y+309);
  vertex(this.x+108,this.y+324);
  vertex(this.x+183,this.y+329);
  vertex(this.x+251,this.y+329);
  vertex(this.x+300,this.y+319);
  vertex(this.x+358,this.y+302);
  vertex(this.x+394,this.y+279);
  vertex(this.x+428,this.y+256);
  vertex(this.x+450,this.y+231);
  vertex(this.x+475,this.y+190);
  vertex(this.x+490,this.y+148);
  vertex(this.x+458,this.y+190);
  vertex(this.x+410,this.y+226);
  vertex(this.x+363,this.y+242);
  vertex(this.x+242,this.y+265);
  vertex(this.x+127,this.y+270);
  vertex(this.x+39,this.y+279);
  vertex(this.x+25,this.y+288);
  vertex(this.x+28,this.y+310);
  endShape();
  //INSIDEVERTEX
  fill(255,226,0);
  beginShape();
  vertex(this.x+10,this.y+326);
  vertex(this.x+15,this.y+346);
  vertex(this.x+56,this.y+391);
  vertex(this.x+116,this.y+411);
  vertex(this.x+195,this.y+433);
  vertex(this.x+255,this.y+441);
  vertex(this.x+306,this.y+438);
  vertex(this.x+371,this.y+426);
  vertex(this.x+451,this.y+385);
  vertex(this.x+523,this.y+336);
  vertex(this.x+567,this.y+278);
  vertex(this.x+590,this.y+210);
  vertex(this.x+587,this.y+161);
  vertex(this.x+573,this.y+128);
  vertex(this.x+552,this.y+104);
  vertex(this.x+543,this.y+19);
  vertex(this.x+495,this.y+39);
  vertex(this.x+495,this.y+111);
  vertex(this.x+484,this.y+157);
  vertex(this.x+468,this.y+198);
  vertex(this.x+429,this.y+255);
  vertex(this.x+377,this.y+291);
  vertex(this.x+317,this.y+317);
  vertex(this.x+243,this.y+331);
  vertex(this.x+175,this.y+330);
  vertex(this.x+56,this.y+314);
  vertex(this.x+24,this.y+308);
  vertex(this.x+10,this.y+325);
  endShape();
  //BROWN LINE
  strokeWeight(14)
  stroke(204,161,12);
  bezier(this.x+360,this.y+427,this.x+438,this.y+408,this.x+536,this.y+328,this.x+582,this.y+236);
  //INSIDE BBANANA
  stroke(255,226,0);
  strokeWeight(15);
  bezier(this.x+27,this.y+311,this.x+116,this.y+327,this.x+175,this.y+335,this.x+248,this.y+331);
  bezier(this.x+248,this.y+331,this.x+306,this.y+324,this.x+372,this.y+301,this.x+426,this.y+260);
  bezier(this.x+426,this.y+260,this.x+454,this.y+229,this.x+477,this.y+194,this.x+493,this.y+148);
  //BROWN SPOT 1
  strokeWeight(15);
  stroke(68,36,0);
  bezier(this.x+13,this.y+319,this.x+16,this.y+313,this.x+18,this.y+306,this.x+20,this.y+296);
  bezier(this.x+499,this.y+27,this.x+508,this.y+25,this.x+524,this.y+17,this.x+543,this.y+13);
  //FULL BANANA
  strokeWeight(12);
  stroke(0);
  noFill();
  bezier(this.x+15,this.y+347,this.x+3,this.y+319,this.x+6,this.y+294,this.x+33,this.y+281);
  bezier(this.x+33,this.y+281,this.x+67,this.y+276,this.x+101,this.y+273,this.x+181,this.y+269);
  bezier(this.x+181,this.y+269,this.x+253,this.y+269,this.x+343,this.y+255,this.x+399,this.y+235);
  bezier(this.x+399,this.y+235,this.x+445,this.y+200,this.x+511,this.y+190,this.x+495,this.y+38);
  bezier(this.x+495,this.y+38,this.x+480,this.y+19,this.x+511,this.y+8,this.x+527,this.y+5);
  bezier(this.x+527,this.y+5,this.x+547,this.y+3,this.x+557,this.y+11,this.x+544,this.y+24);
  bezier(this.x+544,this.y+24,this.x+541,this.y+51,this.x+545,this.y+80,this.x+550,this.y+106);
  bezier(this.x+550,this.y+106,this.x+576,this.y+119,this.x+590,this.y+154,this.x+591,this.y+206);
  bezier(this.x+591,this.y+206,this.x+560,this.y+340,this.x+514,this.y+340,this.x+458,this.y+385);
  bezier(this.x+458,this.y+385,this.x+375,this.y+432,this.x+307,this.y+456,this.x+185,this.y+430);
  bezier(this.x+185,this.y+430,this.x+132,this.y+420,this.x+98,this.y+408,this.x+61,this.y+398);
  bezier(this.x+61,this.y+398,this.x+41,this.y+377,this.x+29,this.y+360,this.x+15,this.y+347);
  //BROWN SPOTS
  strokeWeight(6);
  stroke(0)
  bezier(this.x+500,this.y+39,this.x+512,this.y+37,this.x+523,this.y+27,this.x+539,this.y+22);
  bezier(this.x+14,this.y+325,this.x+26,this.y+321,this.x+26,this.y+304,this.x+26,this.y+290);
  pop();

	}
	moveBanana(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+7;
		this.y = this.y+5;
	}
}
