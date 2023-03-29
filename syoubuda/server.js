'use strict';

const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const app = express();
const server = http.Server(app);
const io = socketIO(server);

var play_flag = false;
var p1 = "0", p2 = "0", p3 = "0", p4 = "0", p5 = "0", p6 = "0", p7 = "0", p8 = "0", p9 = "0", p10 = "0", p11 = "0", p12 = "0", p13 = "0", p14 = "0", p15 = "0", p16 = "0", p17 = "0", p18 = "0", p19 = "0", p20 = "0", p21 = "0", p22 = "0", p23 = "0", p24 = "0", p25 = "0", p26 = "0", p27 = "0", p28 = "0", p29 = "0", p30 = "0" ;
var p1_life, p2_life, p3_life, p4_life, p5_life, p6_life, p7_life, p8_life, p9_life, p10_life, p11_life, p12_life, p13_life, p14_life, p15_life, p16_life, p17_life, p18_life, p19_life, p20_life, p21_life, p22_life, p23_life, p24_life, p25_life, p26_life, p27_life, p28_life, p29_life, p30_life;
var room1_num = 0, room2_num = 0, room3_num = 0, room4_num = 0, room5_num = 0, room6_num = 0, room7_num = 0, room8_num = 0, room9_num = 0, room10_num = 0, room11_num = 0, room12_num = 0, room13_num = 0, room14_num = 0, room15_num = 0;
var p1_ready = false, p2_ready = false, p3_ready = false, p4_ready = false, p5_ready = false, p6_ready = false, p7_ready = false, p8_ready = false, p9_ready = false, p10_ready = false, p11_ready = false, p12_ready = false, p13_ready = false, p14_ready = false, p15_ready = false, p16_ready = false, p17_ready = false, p18_ready = false, p19_ready = false, p20_ready = false, p21_ready = false, p22_ready = false, p23_ready = false, p24_ready = false, p25_ready = false, p26_ready = false, p27_ready = false, p28_ready = false, p29_ready = false, p30_ready = false;
const wordlen = 107;
const LIFE = 5;
var random = Math.floor( Math.random() * wordlen);

io.on('connection', function(socket) {
    socket.on('online1', () => {
        //console.log("socketId = " + socket.id);
        if (p1 === "0"){
            p1 = socket.id;
						p1_ready = true;
        } else if(p2 === "0"){
            p2 = socket.id;
						p2_ready = true;
        }	else {
					io.to(socket.id).emit('room_full');
				}
        //console.log("p1=" + p1  +"   p2 ="+ p2 );

        if(p1_ready && p2_ready){ 　　//ゲーム開始
						p1_ready = false;
						p2_ready = false;	
						p1_life = LIFE;
            p2_life = LIFE;
						random = Math.floor( Math.random() * wordlen);
            io.to(p1).emit('next',random);
						io.to(p2).emit('next',random);
            io.to(p1).emit('ready', 1);
            io.to(p2).emit('ready', 2);
        }
    });
		socket.on('online2', () => {
        //console.log("socketId = " + socket.id);
        if (p3 === "0"){
            p3 = socket.id;
						p3_ready = true;
        } else if(p4 === "0"){
            p4 = socket.id;
						p4_ready = true;
        }	else {
					io.to(socket.id).emit('room_full');
				}
        //console.log("p3=" + p3  +"   p4 ="+ p4 );
				
        if(p3_ready && p4_ready){ 　　//ゲーム開始
						p3_ready = false;
						p4_ready = false;
						p3_life = LIFE;
            p4_life = LIFE;
						random = Math.floor( Math.random() * wordlen);
            io.to(p3).emit('next',random);
						io.to(p4).emit('next',random);
            io.to(p3).emit('ready', 3);
            io.to(p4).emit('ready', 4);
        }
    });
		socket.on('online3', () => {
        //console.log("socketId = " + socket.id);
        if (p5 === "0"){
            p5 = socket.id;
						p5_ready = true;
        } else if(p6 === "0"){
            p6 = socket.id;
						p6_ready = true;
        }	else {
					io.to(socket.id).emit('room_full');
				}
        //console.log("p5=" + p5  +"   p6 ="+ p6 );
				
        if(p5_ready && p6_ready){ 　　//ゲーム開始
						p5_ready = false;
						p6_ready = false;
						p5_life = LIFE;
            p6_life = LIFE;
						random = Math.floor( Math.random() * wordlen);
            io.to(p5).emit('next',random);
						io.to(p6).emit('next',random);
            io.to(p5).emit('ready', 5);
            io.to(p6).emit('ready', 6);
        }
    });
		socket.on('online4', () => {
        //console.log("socketId = " + socket.id);
        if (p7 === "0"){
            p7 = socket.id;
						p7_ready = true;
        } else if(p8 === "0"){
            p8 = socket.id;
						p8_ready = true;
        }	else {
					io.to(socket.id).emit('room_full');
				}
        //console.log("p7=" + p7  +"   p8 ="+ p8 );
				
        if(p7_ready && p8_ready){ 　　//ゲーム開始
						p7_ready = false;
						p8_ready = false;
						p7_life = LIFE;
            p8_life = LIFE;
						random = Math.floor( Math.random() * wordlen);
            io.to(p7).emit('next',random);
						io.to(p8).emit('next',random);
            io.to(p7).emit('ready', 7);
            io.to(p8).emit('ready', 8);
        }
    });
		socket.on('online5', () => {
        //console.log("socketId = " + socket.id);
        if (p9 === "0"){
            p9 = socket.id;
						p9_ready = true;
        } else if(p10 === "0"){
            p10 = socket.id;
						p10_ready = true;
        }	else {
					io.to(socket.id).emit('room_full');
				}
        //console.log("p9=" + p9  +"   p10 ="+ p10 );
				
        if(p9_ready && p10_ready){ 　　//ゲーム開始
						p9_ready = false;
						p10_ready = false;
						p9_life = LIFE;
            p10_life = LIFE;
						random = Math.floor( Math.random() * wordlen);
            io.to(p9).emit('next',random);
						io.to(p10).emit('next',random);
            io.to(p9).emit('ready', 9);
            io.to(p10).emit('ready', 10);
        }
    });
		socket.on('online6', () => {
        //console.log("socketId = " + socket.id);
        if (p11 === "0"){
            p11 = socket.id;
						p11_ready = true;
        } else if(p12 === "0"){
            p12 = socket.id;
						p12_ready = true;
        }	else {
					io.to(socket.id).emit('room_full');
				}
        //console.log("p11=" + p11  +"   p12 ="+ p12 );
				
        if(p11_ready && p12_ready){ 　　//ゲーム開始
						p11_ready = false;
						p12_ready = false;
						p11_life = LIFE;
            p12_life = LIFE;
						random = Math.floor( Math.random() * wordlen);
            io.to(p11).emit('next',random);
						io.to(p12).emit('next',random);
            io.to(p11).emit('ready', 11);
            io.to(p12).emit('ready', 12);
        }
    });
		socket.on('online7', () => {
        //console.log("socketId = " + socket.id);
        if (p13 === "0"){
            p13 = socket.id;
						p13_ready = true;
        } else if(p14 === "0"){
            p14 = socket.id;
						p14_ready = true;
        }	else {
					io.to(socket.id).emit('room_full');
				}
        //console.log("p13=" + p13  +"   p14 ="+ p14 );
				
        if(p13_ready && p14_ready){ 　　//ゲーム開始
						p13_ready = false;
						p14_ready = false;
						p13_life = LIFE;
            p14_life = LIFE;
						random = Math.floor( Math.random() * wordlen);
            io.to(p13).emit('next',random);
						io.to(p14).emit('next',random);
            io.to(p13).emit('ready', 13);
            io.to(p14).emit('ready', 14);
        }
    });
		socket.on('online8', () => {
        //console.log("socketId = " + socket.id);
        if (p15 === "0"){
            p15 = socket.id;
						p15_ready = true;
        } else if(p16 === "0"){
            p16 = socket.id;
						p16_ready = true;
        }	else {
					io.to(socket.id).emit('room_full');
				}
        //console.log("p15=" + p15  +"   p16 ="+ p16 );
				
        if(p15_ready && p16_ready){ 　　//ゲーム開始
						p15_ready = false;
						p16_ready = false;
						p15_life = LIFE;
            p16_life = LIFE;
						random = Math.floor( Math.random() * wordlen);
            io.to(p15).emit('next',random);
						io.to(p16).emit('next',random);
            io.to(p15).emit('ready', 15);
            io.to(p16).emit('ready', 16);
        }
    });
		socket.on('online9', () => {
        //console.log("socketId = " + socket.id);
        if (p17 === "0"){
            p17 = socket.id;
						p17_ready = true;
        } else if(p18 === "0"){
            p18 = socket.id;
						p18_ready = true;
        }	else {
					io.to(socket.id).emit('room_full');
				}
        //console.log("p17=" + p17  +"   p18 ="+ p18 );
				
        if(p17_ready && p18_ready){ 　　//ゲーム開始
						p17_ready = false;
						p18_ready = false;
						p17_life = LIFE;
            p18_life = LIFE;
						random = Math.floor( Math.random() * wordlen);
            io.to(p17).emit('next',random);
						io.to(p18).emit('next',random);
            io.to(p17).emit('ready', 17);
            io.to(p18).emit('ready', 18);
        }
    });
		socket.on('online10', () => {
        //console.log("socketId = " + socket.id);
        if (p19 === "0"){
            p19 = socket.id;
						p19_ready = true;
        } else if(p20 === "0"){
            p20 = socket.id;
						p20_ready = true;
        }	else {
					io.to(socket.id).emit('room_full');
				}
        //console.log("p19=" + p19  +"   p20 ="+ p20 );
				
        if(p19_ready && p20_ready){ 　　//ゲーム開始
						p19_ready = false;
						p20_ready = false;
						p19_life = LIFE;
            p20_life = LIFE;
						random = Math.floor( Math.random() * wordlen);
            io.to(p19).emit('next',random);
						io.to(p20).emit('next',random);
            io.to(p19).emit('ready', 19);
            io.to(p20).emit('ready', 20);
        }
    });
		socket.on('online11', () => {
        //console.log("socketId = " + socket.id);
        if (p21 === "0"){
            p21 = socket.id;
						p21_ready = true;
        } else if(p22 === "0"){
            p22 = socket.id;
						p22_ready = true;
        }	else {
					io.to(socket.id).emit('room_full');
				}
        //console.log("p21=" + p21  +"   p22 ="+ p22 );
				
        if(p21_ready && p22_ready){ 　　//ゲーム開始
						p21_ready = false;
						p22_ready = false;
						p21_life = LIFE;
            p22_life = LIFE;
						random = Math.floor( Math.random() * wordlen);
            io.to(p21).emit('next',random);
						io.to(p22).emit('next',random);
            io.to(p21).emit('ready', 21);
            io.to(p22).emit('ready', 22);
        }
    });
		socket.on('online12', () => {
        //console.log("socketId = " + socket.id);
        if (p23 === "0"){
            p23 = socket.id;
						p23_ready = true;
        } else if(p24 === "0"){
            p24 = socket.id;
						p24_ready = true;
        }	else {
					io.to(socket.id).emit('room_full');
				}
        //console.log("p23=" + p23  +"   p24 ="+ p24 );
				
        if(p23_ready && p24_ready){ 　　//ゲーム開始
						p23_ready = false;
						p24_ready = false;
						p23_life = LIFE;
            p24_life = LIFE;
						random = Math.floor( Math.random() * wordlen);
            io.to(p23).emit('next',random);
						io.to(p24).emit('next',random);
            io.to(p23).emit('ready', 23);
            io.to(p24).emit('ready', 24);
        }
    });
		socket.on('online13', () => {
        //console.log("socketId = " + socket.id);
        if (p25 === "0"){
            p25 = socket.id;
						p25_ready = true;
        } else if(p26 === "0"){
            p26 = socket.id;
						p26_ready = true;
        }	else {
					io.to(socket.id).emit('room_full');
				}
        //console.log("p25=" + p25  +"   p26 ="+ p26 );
				
        if(p25_ready && p26_ready){ 　　//ゲーム開始
						p25_ready = false;
						p26_ready = false;
						p25_life = LIFE;
            p26_life = LIFE;
						random = Math.floor( Math.random() * wordlen);
            io.to(p25).emit('next',random);
						io.to(p26).emit('next',random);
            io.to(p25).emit('ready', 25);
            io.to(p26).emit('ready', 26);
        }
    });
		socket.on('online14', () => {
        //console.log("socketId = " + socket.id);
        if (p27 === "0"){
            p27 = socket.id;
						p27_ready = true;
        } else if(p28 === "0"){
            p28 = socket.id;
						p28_ready = true;
        }	else {
					io.to(socket.id).emit('room_full');
				}
        //console.log("p27=" + p27  +"   p28 ="+ p28 );
				
        if(p27_ready && p28_ready){ 　　//ゲーム開始
						p27_ready = false;
						p28_ready = false;
						p27_life = LIFE;
            p28_life = LIFE;
						random = Math.floor( Math.random() * wordlen);
            io.to(p27).emit('next',random);
						io.to(p28).emit('next',random);
            io.to(p27).emit('ready', 27);
            io.to(p28).emit('ready', 28);
        }
    });
		socket.on('online15', () => {
        //console.log("socketId = " + socket.id);
        if (p29 === "0"){
            p29 = socket.id;
						p29_ready = true;
        } else if(p30 === "0"){
            p30 = socket.id;
						p30_ready = true;
        }	else {
					io.to(socket.id).emit('room_full');
				}
        //console.log("p29=" + p29  +"   p30 ="+ p30 );
				
        if(p29_ready && p30_ready){ 　　//ゲーム開始
						p29_ready = false;
						p30_ready = false;
						p29_life = LIFE;
            p30_life = LIFE;
						random = Math.floor( Math.random() * wordlen);
            io.to(p29).emit('next',random);
						io.to(p30).emit('next',random);
            io.to(p29).emit('ready', 29);
            io.to(p30).emit('ready', 30);
        }
    });
		socket.on('skill',(player_no)=>{ //お邪魔スキル
		//console.log(player_no + "がスキルを発動した！！！！！！！")
			if(player_no == 1){
				socket.to(p2).emit('ojama');
			}else if(player_no == 2){
				socket.to(p1).emit('ojama');
			}else if(player_no == 3){
				socket.to(p4).emit('ojama');
			}else if(player_no == 4){
				socket.to(p3).emit('ojama');
			}else if(player_no == 5){
				socket.to(p6).emit('ojama');
			}else if(player_no == 6){
				socket.to(p5).emit('ojama');
			}else if(player_no == 7){
				socket.to(p8).emit('ojama');
			}else if(player_no == 8){
				socket.to(p7).emit('ojama');
			}else if(player_no == 9){
				socket.to(p10).emit('ojama');
			}else if(player_no == 10){
				socket.to(p9).emit('ojama');
			}else if(player_no == 11){
				socket.to(p12).emit('ojama');
			}else if(player_no == 12){
				socket.to(p11).emit('ojama');
			}else if(player_no == 13){
				socket.to(p14).emit('ojama');
			}else if(player_no == 14){
				socket.to(p13).emit('ojama');
			}else if(player_no == 15){
				socket.to(p16).emit('ojama');
			}else if(player_no == 16){
				socket.to(p15).emit('ojama');
			}else if(player_no == 17){
				socket.to(p18).emit('ojama');
			}else if(player_no == 18){
				socket.to(p17).emit('ojama');
			}else if(player_no == 19){
				socket.to(p20).emit('ojama');
			}else if(player_no == 20){
				socket.to(p19).emit('ojama');
			}else if(player_no == 21){
				socket.to(p22).emit('ojama');
			}else if(player_no == 22){
				socket.to(p21).emit('ojama');
			}else if(player_no == 23){
				socket.to(p24).emit('ojama');
			}else if(player_no == 24){
				socket.to(p23).emit('ojama');
			}else if(player_no == 25){
				socket.to(p26).emit('ojama');
			}else if(player_no == 26){
				socket.to(p25).emit('ojama');
			}else if(player_no == 27){
				socket.to(p28).emit('ojama');
			}else if(player_no == 28){
				socket.to(p27).emit('ojama');
			}else if(player_no == 29){
				socket.to(p30).emit('ojama');
			}else if(player_no == 30){
				socket.to(p29).emit('ojama');
			}
		});
		socket.on('room_out',()=>{
				if(socket.id === p1){
            io.to(p2).emit('enemy_left');
            p1 = "0";
						//console.log("p1=" + p1  +"   p2 ="+ p2 );
        }else  if(socket.id === p2){
            io.to(p1).emit('enemy_left');
            p2 = "0";
						//console.log("p1=" + p1  +"   p2 ="+ p2 );
        }else  if(socket.id === p3){
            io.to(p4).emit('enemy_left');
            p3 = "0";
						//console.log("p3=" + p3  +"   p4 ="+ p4 );
        }else  if(socket.id === p4){
            io.to(p3).emit('enemy_left');
            p4 = "0";
						//console.log("p3=" + p3  +"   p4 ="+ p4 );
        }else  if(socket.id === p5){
            io.to(p6).emit('enemy_left');
            p5 = "0";
						//console.log("p5=" + p5  +"   p6 ="+ p6 );
        }else  if(socket.id === p6){
            io.to(p5).emit('enemy_left');
            p6 = "0";
						//console.log("p5=" + p5  +"   p6 ="+ p6 );
        }else  if(socket.id === p7){
            io.to(p8).emit('enemy_left');
            p7 = "0";
						//console.log("p7=" + p7  +"   p8 ="+ p8 );
        }else  if(socket.id === p8){
            io.to(p7).emit('enemy_left');
            p8 = "0";
						//console.log("p7=" + p7  +"   p8 ="+ p8 );
        }else  if(socket.id === p9){
            io.to(p10).emit('enemy_left');
            p9 = "0";
						//console.log("p9=" + p9  +"   p10 ="+ p10 );
        }else  if(socket.id === p10){
            io.to(p9).emit('enemy_left');
            p10 = "0";
						//console.log("p9=" + p9  +"   p10 ="+ p10 );
        }else  if(socket.id === p11){
            io.to(p12).emit('enemy_left');
            p11 = "0";
						//console.log("p11=" + p11  +"   p12 ="+ p12 );
        }else  if(socket.id === p12){
            io.to(p11).emit('enemy_left');
            p12 = "0";
						//console.log("p11=" + p11  +"   p12 ="+ p12 );
				}else  if(socket.id === p13){
            io.to(p14).emit('enemy_left');
            p13 = "0";
						//console.log("p13=" + p13  +"   p14 ="+ p14 );
        }else  if(socket.id === p14){
            io.to(p13).emit('enemy_left');
            p14 = "0";
						//console.log("p13=" + p13  +"   p14 ="+ p14 );
				}else  if(socket.id === p15){
            io.to(p16).emit('enemy_left');
            p15 = "0";
						//console.log("p15=" + p15  +"   p16 ="+ p16 );
        }else  if(socket.id === p16){
            io.to(p15).emit('enemy_left');
            p16 = "0";
						//console.log("p15=" + p15  +"   p16 ="+ p16 );
				}else  if(socket.id === p17){
            io.to(p18).emit('enemy_left');
            p17 = "0";
						//console.log("p17=" + p17  +"   p18 ="+ p18 );
        }else  if(socket.id === p18){
            io.to(p17).emit('enemy_left');
            p18 = "0";
						//console.log("p17=" + p17  +"   p18 ="+ p18 );
				}else  if(socket.id === p19){
            io.to(p20).emit('enemy_left');
            p19 = "0";
						//console.log("p19=" + p19  +"   p20 ="+ p20 );
        }else  if(socket.id === p20){
            io.to(p19).emit('enemy_left');
            p20 = "0";
						//console.log("p19=" + p19  +"   p20 ="+ p20 );
				}else  if(socket.id === p21){
            io.to(p22).emit('enemy_left');
            p21 = "0";
						//console.log("p21=" + p21  +"   p22 ="+ p22 );
        }else  if(socket.id === p22){
            io.to(p21).emit('enemy_left');
            p22 = "0";
						//console.log("p21=" + p21  +"   p22 ="+ p22 );
				}else  if(socket.id === p23){
            io.to(p24).emit('enemy_left');
            p23 = "0";
						//console.log("p23=" + p23  +"   p24 ="+ p24 );
        }else  if(socket.id === p24){
            io.to(p23).emit('enemy_left');
            p24 = "0";
						//console.log("p23=" + p23  +"   p24 ="+ p24 );
				}else  if(socket.id === p25){
            io.to(p26).emit('enemy_left');
            p25 = "0";
						//console.log("p25=" + p25  +"   p26 ="+ p26 );
        }else  if(socket.id === p26){
            io.to(p25).emit('enemy_left');
            p26 = "0";
						//console.log("p25=" + p25  +"   p26 ="+ p26 );
				}else  if(socket.id === p27){
            io.to(p28).emit('enemy_left');
            p27 = "0";
						//console.log("p27=" + p27  +"   p28 ="+ p28 );
        }else  if(socket.id === p28){
            io.to(p27).emit('enemy_left');
            p28 = "0";
						//console.log("p27=" + p27  +"   p28 ="+ p28 );
				}else  if(socket.id === p29){
            io.to(p30).emit('enemy_left');
            p29 = "0";
						//console.log("p29=" + p29  +"   p30 ="+ p30 );
        }else  if(socket.id === p30){
            io.to(p29).emit('enemy_left');
            p30 = "0";
						//console.log("p29=" + p29  +"   p30 ="+ p30 );
				}
		});
		socket.on('replay', () => {
				if(socket.id === p1){
					p1_ready = true;
        }else  if(socket.id === p2){
          p2_ready = true;
        }
				if(p1_ready && p2_ready){
					p1_ready = false;
					p2_ready = false;
					p1_life = LIFE;
					p2_life = LIFE;
					random = Math.floor( Math.random() * wordlen);
					io.to(p1).emit('ready', 1);
					io.to(p2).emit('ready', 2);
					io.to(p1).emit('next',random);
					io.to(p2).emit('next',random);
				}
				
				if(socket.id === p3){
					p3_ready = true;
        }else  if(socket.id === p4){
          p4_ready = true;
        }
				if(p3_ready && p4_ready){
					p3_ready = false;
					p4_ready = false;
					p3_life = LIFE;
					p4_life = LIFE;
					random = Math.floor( Math.random() * wordlen);
					io.to(p3).emit('next',random);
					io.to(p4).emit('next',random);
					io.to(p3).emit('ready', 3);
					io.to(p4).emit('ready', 4);
				}
				
				if(socket.id === p5){
					p5_ready = true;
        }else  if(socket.id === p6){
          p4_ready = true;
        }
				if(p5_ready && p6_ready){
					p5_ready = false;
					p6_ready = false;
					p5_life = LIFE;
					p6_life = LIFE;
					random = Math.floor( Math.random() * wordlen);
					io.to(p5).emit('next',random);
					io.to(p6).emit('next',random);
					io.to(p5).emit('ready', 5);
					io.to(p6).emit('ready', 6);
				}
				
				if(socket.id === p7){
					p7_ready = true;
        }else  if(socket.id === p8){
          p8_ready = true;
        }
				if(p7_ready && p8_ready){
					p7_ready = false;
					p8_ready = false;
					p7_life = LIFE;
					p8_life = LIFE;
					random = Math.floor( Math.random() * wordlen);
					io.to(p7).emit('next',random);
					io.to(p8).emit('next',random);
					io.to(p7).emit('ready', 7);
					io.to(p8).emit('ready', 8);
				}
				
				if(socket.id === p9){
					p9_ready = true;
        }else  if(socket.id === p10){
          p10_ready = true;
        }
				if(p9_ready && p10_ready){
					p9_ready = false;
					p10_ready = false;
					p9_life = LIFE;
					p10_life = LIFE;
					random = Math.floor( Math.random() * wordlen);
					io.to(p9).emit('next',random);
					io.to(p10).emit('next',random);
					io.to(p9).emit('ready', 9);
					io.to(p10).emit('ready', 10);
				}
				
				if(socket.id === p11){
					p11_ready = true;
        }else  if(socket.id === p12){
          p12_ready = true;
        }
				if(p11_ready && p12_ready){
					p11_ready = false;
					p12_ready = false;
					p11_life = LIFE;
					p12_life = LIFE;
					random = Math.floor( Math.random() * wordlen);
					io.to(p11).emit('next',random);
					io.to(p12).emit('next',random);
					io.to(p11).emit('ready', 11);
					io.to(p12).emit('ready', 12);
				}
				
				if(socket.id === p13){
					p13_ready = true;
        }else  if(socket.id === p14){
          p14_ready = true;
        }
				if(p13_ready && p14_ready){
					p13_ready = false;
					p14_ready = false;
					p13_life = LIFE;
					p14_life = LIFE;
					random = Math.floor( Math.random() * wordlen);
					io.to(p13).emit('next',random);
					io.to(p14).emit('next',random);
					io.to(p13).emit('ready', 13);
					io.to(p14).emit('ready', 14);
				}
				
				if(socket.id === p15){
					p15_ready = true;
        }else  if(socket.id === p16){
          p16_ready = true;
        }
				if(p15_ready && p16_ready){
					p15_ready = false;
					p16_ready = false;
					p15_life = LIFE;
					p16_life = LIFE;
					random = Math.floor( Math.random() * wordlen);
					io.to(p15).emit('next',random);
					io.to(p16).emit('next',random);
					io.to(p15).emit('ready', 15);
					io.to(p16).emit('ready', 16);
				}
				
				if(socket.id === p17){
					p17_ready = true;
        }else  if(socket.id === p18){
          p18_ready = true;
        }
				if(p17_ready && p18_ready){
					p17_ready = false;
					p18_ready = false;
					p17_life = LIFE;
					p18_life = LIFE;
					random = Math.floor( Math.random() * wordlen);
					io.to(p17).emit('next',random);
					io.to(p18).emit('next',random);
					io.to(p17).emit('ready', 17);
					io.to(p18).emit('ready', 18);
				}
				
				if(socket.id === p19){
					p19_ready = true;
        }else  if(socket.id === p20){
          p20_ready = true;
        }
				if(p19_ready && p20_ready){
					p19_ready = false;
					p20_ready = false;
					p19_life = LIFE;
					p20_life = LIFE;
					random = Math.floor( Math.random() * wordlen);
					io.to(p19).emit('next',random);
					io.to(p20).emit('next',random);
					io.to(p19).emit('ready', 19);
					io.to(p20).emit('ready', 20);
				}
				
				if(socket.id === p21){
					p21_ready = true;
        }else  if(socket.id === p22){
          p22_ready = true;
        }
				if(p21_ready && p22_ready){
					p21_ready = false;
					p22_ready = false;
					p21_life = LIFE;
					p22_life = LIFE;
					random = Math.floor( Math.random() * wordlen);
					io.to(p21).emit('next',random);
					io.to(p22).emit('next',random);
					io.to(p21).emit('ready', 21);
					io.to(p22).emit('ready', 22);
				}
				
				if(socket.id === p23){
					p23_ready = true;
        }else  if(socket.id === p24){
          p24_ready = true;
        }
				if(p23_ready && p24_ready){
					p23_ready = false;
					p24_ready = false;
					p23_life = LIFE;
					p24_life = LIFE;
					random = Math.floor( Math.random() * wordlen);
					io.to(p23).emit('next',random);
					io.to(p24).emit('next',random);
					io.to(p23).emit('ready', 23);
					io.to(p24).emit('ready', 24);
				}
				
				if(socket.id === p25){
					p25_ready = true;
        }else  if(socket.id === p26){
          p26_ready = true;
        }
				if(p25_ready && p26_ready){
					p25_ready = false;
					p26_ready = false;
					p25_life = LIFE;
					p26_life = LIFE;
					random = Math.floor( Math.random() * wordlen);
					io.to(p25).emit('next',random);
					io.to(p26).emit('next',random);
					io.to(p25).emit('ready', 25);
					io.to(p26).emit('ready', 26);
				}
				
				if(socket.id === p27){
					p27_ready = true;
        }else  if(socket.id === p28){
          p28_ready = true;
        }
				if(p27_ready && p28_ready){
					p27_ready = false;
					p28_ready = false;
					p27_life = LIFE;
					p28_life = LIFE;
					random = Math.floor( Math.random() * wordlen);
					io.to(p27).emit('next',random);
					io.to(p28).emit('next',random);
					io.to(p27).emit('ready', 27);
					io.to(p28).emit('ready', 28);
				}
				
				if(socket.id === p29){
					p29_ready = true;
        }else  if(socket.id === p30){
          p30_ready = true;
        }
				if(p29_ready && p30_ready){
					p29_ready = false;
					p30_ready = false;
					p29_life = LIFE;
					p30_life = LIFE;
					random = Math.floor( Math.random() * wordlen);
					io.to(p29).emit('next',random);
					io.to(p30).emit('next',random);
					io.to(p29).emit('ready', 29);
					io.to(p30).emit('ready', 30);
				}
    });
		socket.on('offline', () => {
        if(socket.id === p1){
            io.to(p2).emit('enemy_left');
            p1 = "0";
						//console.log("p1=" + p1  +"   p2 ="+ p2 );
        }else  if(socket.id === p2){
            io.to(p1).emit('enemy_left');
            p2 = "0";
						//console.log("p1=" + p1  +"   p2 ="+ p2 );
        }else  if(socket.id === p3){
            io.to(p4).emit('enemy_left');
            p3 = "0";
						//console.log("p3=" + p3  +"   p4 ="+ p4 );
        }else  if(socket.id === p4){
            io.to(p3).emit('enemy_left');
            p4 = "0";
						//console.log("p3=" + p3  +"   p4 ="+ p4 );
        }else  if(socket.id === p5){
            io.to(p6).emit('enemy_left');
            p5 = "0";
						//console.log("p5=" + p5  +"   p6 ="+ p6 );
        }else  if(socket.id === p6){
            io.to(p5).emit('enemy_left');
            p6 = "0";
						//console.log("p5=" + p5  +"   p6 ="+ p6 );
        }else  if(socket.id === p7){
            io.to(p8).emit('enemy_left');
            p7 = "0";
						//console.log("p7=" + p7  +"   p8 ="+ p8 );
        }else  if(socket.id === p8){
            io.to(p7).emit('enemy_left');
            p8 = "0";
						//console.log("p7=" + p7  +"   p8 ="+ p8 );
        }else  if(socket.id === p9){
            io.to(p10).emit('enemy_left');
            p9 = "0";
						//console.log("p9=" + p9  +"   p10 ="+ p10 );
        }else  if(socket.id === p10){
            io.to(p9).emit('enemy_left');
            p10 = "0";
						//console.log("p9=" + p9  +"   p10 ="+ p10 );
        }else  if(socket.id === p11){
            io.to(p12).emit('enemy_left');
            p11 = "0";
						//console.log("p11=" + p11  +"   p12 ="+ p12 );
        }else  if(socket.id === p12){
            io.to(p11).emit('enemy_left');
            p12 = "0";
						//console.log("p11=" + p11  +"   p12 ="+ p12 );
				}else  if(socket.id === p13){
            io.to(p14).emit('enemy_left');
            p13 = "0";
						//console.log("p13=" + p13  +"   p14 ="+ p14 );
        }else  if(socket.id === p14){
            io.to(p13).emit('enemy_left');
            p14 = "0";
						//console.log("p13=" + p13  +"   p14 ="+ p14 );
				}else  if(socket.id === p15){
            io.to(p16).emit('enemy_left');
            p15 = "0";
						//console.log("p15=" + p15  +"   p16 ="+ p16 );
        }else  if(socket.id === p16){
            io.to(p15).emit('enemy_left');
            p16 = "0";
						//console.log("p15=" + p15  +"   p16 ="+ p16 );
				}else  if(socket.id === p17){
            io.to(p18).emit('enemy_left');
            p17 = "0";
						//console.log("p17=" + p17  +"   p18 ="+ p18 );
        }else  if(socket.id === p18){
            io.to(p17).emit('enemy_left');
            p18 = "0";
						//console.log("p17=" + p17  +"   p18 ="+ p18 );
				}else  if(socket.id === p19){
            io.to(p20).emit('enemy_left');
            p19 = "0";
						//console.log("p19=" + p19  +"   p20 ="+ p20 );
        }else  if(socket.id === p20){
            io.to(p19).emit('enemy_left');
            p20 = "0";
						//console.log("p19=" + p19  +"   p20 ="+ p20 );
				}else  if(socket.id === p21){
            io.to(p22).emit('enemy_left');
            p21 = "0";
						//console.log("p21=" + p21  +"   p22 ="+ p22 );
        }else  if(socket.id === p22){
            io.to(p21).emit('enemy_left');
            p22 = "0";
						//console.log("p21=" + p21  +"   p22 ="+ p22 );
				}else  if(socket.id === p23){
            io.to(p24).emit('enemy_left');
            p23 = "0";
						//console.log("p23=" + p23  +"   p24 ="+ p24 );
        }else  if(socket.id === p24){
            io.to(p23).emit('enemy_left');
            p24 = "0";
						//console.log("p23=" + p23  +"   p24 ="+ p24 );
				}else  if(socket.id === p25){
            io.to(p26).emit('enemy_left');
            p25 = "0";
						//console.log("p25=" + p25  +"   p26 ="+ p26 );
        }else  if(socket.id === p26){
            io.to(p25).emit('enemy_left');
            p26 = "0";
						//console.log("p25=" + p25  +"   p26 ="+ p26 );
				}else  if(socket.id === p27){
            io.to(p28).emit('enemy_left');
            p27 = "0";
						//console.log("p27=" + p27  +"   p28 ="+ p28 );
        }else  if(socket.id === p28){
            io.to(p27).emit('enemy_left');
            p28 = "0";
						//console.log("p27=" + p27  +"   p28 ="+ p28 );
				}else  if(socket.id === p29){
            io.to(p30).emit('enemy_left');
            p29 = "0";
						//console.log("p29=" + p29  +"   p30 ="+ p30 );
        }else  if(socket.id === p30){
            io.to(p29).emit('enemy_left');
            p30 = "0";
						//console.log("p29=" + p29  +"   p30 ="+ p30 );
				}
    });
    socket.on('life_update',(player_no)=>{
			if(player_no === 1 || player_no === 2){
        if(player_no === 1){
            p2_life--;
        }else if(player_no === 2){
            p1_life--;
        }
				io.to(p1).emit('life', p1_life ,p2_life);
				io.to(p2).emit('life', p2_life ,p1_life);
        if(p1_life > 0 && p2_life > 0){
            random = Math.floor( Math.random() * wordlen);
            io.to(p1).emit('next',random);
						io.to(p2).emit('next',random);
        }else {
            io.to(p1).emit('judge');
						io.to(p2).emit('judge');
        }
			}
			
			if(player_no === 3 || player_no === 4){
        if(player_no === 3){
            p4_life--;
        }else if(player_no === 4){
            p3_life--;
        }
				io.to(p3).emit('life', p3_life ,p4_life);
				io.to(p4).emit('life', p4_life ,p3_life);
        if(p3_life > 0 && p4_life > 0){
            random = Math.floor( Math.random() * wordlen);
            io.to(p3).emit('next',random);
						io.to(p4).emit('next',random);
        }else {

            io.to(p3).emit('judge');
						io.to(p4).emit('judge');
        }
			} 
			
			if(player_no === 5 || player_no === 6){
        if(player_no === 5){
            p6_life--;
        }else if(player_no === 6){
            p5_life--;
        }
				io.to(p5).emit('life', p5_life ,p6_life);
				io.to(p6).emit('life', p6_life ,p5_life);
        if(p5_life > 0 && p6_life > 0){
            random = Math.floor( Math.random() * wordlen);
            io.to(p5).emit('next',random);
						io.to(p6).emit('next',random);
        }else {
            io.to(p5).emit('judge');
						io.to(p6).emit('judge');
        }
			}
			
			if(player_no === 7 || player_no === 8){
        if(player_no === 7){
            p8_life--;
        }else if(player_no === 8){
            p7_life--;
        }
				io.to(p7).emit('life', p7_life ,p8_life);
				io.to(p8).emit('life', p8_life ,p7_life);
        if(p7_life > 0 && p8_life > 0){
            random = Math.floor( Math.random() * wordlen);
            io.to(p7).emit('next',random);
						io.to(p8).emit('next',random);
        }else {
            io.to(p7).emit('judge');
						io.to(p8).emit('judge');
        }
			}
			
			if(player_no === 9 || player_no === 10){
        if(player_no === 9){
            p10_life--;
        }else if(player_no === 10){
            p9_life--;
        }
				io.to(p9).emit('life', p9_life ,p10_life);
				io.to(p10).emit('life', p10_life ,p9_life);
        if(p9_life > 0 && p10_life > 0){
            random = Math.floor( Math.random() * wordlen);
            io.to(p9).emit('next',random);
						io.to(p10).emit('next',random);
        }else {
            io.to(p9).emit('judge');
						io.to(p10).emit('judge');
        }
			}
			
			if(player_no === 11 || player_no === 12){
        if(player_no === 11){
            p12_life--;
        }else if(player_no === 12){
            p11_life--;
        }
				io.to(p11).emit('life', p11_life ,p12_life);
				io.to(p12).emit('life', p12_life ,p11_life);
        if(p11_life > 0 && p12_life > 0){
            random = Math.floor( Math.random() * wordlen);
            io.to(p11).emit('next',random);
						io.to(p12).emit('next',random);
        }else {
            io.to(p11).emit('judge');
						io.to(p12).emit('judge');
        }
			} 
			
			if(player_no === 13 || player_no === 14){
        if(player_no === 13){
            p14_life--;
        }else if(player_no === 14){
            p13_life--;
        }
				io.to(p13).emit('life', p13_life ,p14_life);
				io.to(p14).emit('life', p14_life ,p13_life);
        if(p13_life > 0 && p14_life > 0){
            random = Math.floor( Math.random() * wordlen);
            io.to(p13).emit('next',random);
						io.to(p14).emit('next',random);
        }else {
            io.to(p13).emit('judge');
						io.to(p14).emit('judge');
        }
			} 
			
			if(player_no === 15 || player_no === 16){
        if(player_no === 15){
            p16_life--;
        }else if(player_no === 16){
            p15_life--;
        }
				io.to(p15).emit('life', p15_life ,p16_life);
				io.to(p16).emit('life', p16_life ,p15_life);
        if(p15_life > 0 && p16_life > 0){
            random = Math.floor( Math.random() * wordlen);
            io.to(p15).emit('next',random);
						io.to(p16).emit('next',random);
        }else {
            io.to(p15).emit('judge');
						io.to(p16).emit('judge');
        }
			} 
			
			if(player_no === 17 || player_no === 18){
        if(player_no === 17){
            p18_life--;
        }else if(player_no === 18){
            p17_life--;
        }
				io.to(p17).emit('life', p17_life ,p18_life);
				io.to(p18).emit('life', p18_life ,p17_life);
        if(p17_life > 0 && p18_life > 0){
            random = Math.floor( Math.random() * wordlen);
            io.to(p17).emit('next',random);
						io.to(p18).emit('next',random);
        }else {
            io.to(p17).emit('judge');
						io.to(p18).emit('judge');
        }
			}
			
			if(player_no === 19 || player_no === 20){
        if(player_no === 19){
            p20_life--;
        }else if(player_no === 20){
            p19_life--;
        }
				io.to(p19).emit('life', p19_life ,p20_life);
				io.to(p20).emit('life', p20_life ,p19_life);
        if(p19_life > 0 && p20_life > 0){
            random = Math.floor( Math.random() * wordlen);
            io.to(p19).emit('next',random);
						io.to(p20).emit('next',random);
        }else {
            io.to(p19).emit('judge');
						io.to(p20).emit('judge');
        }
			}
			
			if(player_no === 21 || player_no === 22){
        if(player_no === 21){
            p22_life--;
        }else if(player_no === 22){
            p21_life--;
        }
				io.to(p21).emit('life', p21_life ,p22_life);
				io.to(p22).emit('life', p22_life ,p21_life);
        if(p21_life > 0 && p22_life > 0){
            random = Math.floor( Math.random() * wordlen);
            io.to(p21).emit('next',random);
						io.to(p22).emit('next',random);
        }else {
            io.to(p21).emit('judge');
						io.to(p22).emit('judge');
        }
			}
			
			if(player_no === 23 || player_no === 24){
        if(player_no === 23){
            p24_life--;
        }else if(player_no === 24){
            p23_life--;
        }
				io.to(p23).emit('life', p23_life ,p24_life);
				io.to(p24).emit('life', p24_life ,p23_life);
        if(p23_life > 0 && p24_life > 0){
            random = Math.floor( Math.random() * wordlen);
            io.to(p23).emit('next',random);
						io.to(p24).emit('next',random);
        }else {
            io.to(p23).emit('judge');
						io.to(p24).emit('judge');
        }
			}
			
			if(player_no === 25 || player_no === 26){
        if(player_no === 25){
            p26_life--;
        }else if(player_no === 26){
            p25_life--;
        }
				io.to(p25).emit('life', p25_life ,p26_life);
				io.to(p26).emit('life', p26_life ,p25_life);
        if(p25_life > 0 && p26_life > 0){
            random = Math.floor( Math.random() * wordlen);
            io.to(p25).emit('next',random);
						io.to(p26).emit('next',random);
        }else {
            io.to(p25).emit('judge');
						io.to(p26).emit('judge');
        }
			}
			
			if(player_no === 27 || player_no === 28){
        if(player_no === 27){
            p28_life--;
        }else if(player_no === 28){
            p27_life--;
        }
				io.to(p27).emit('life', p27_life ,p28_life);
				io.to(p28).emit('life', p28_life ,p27_life);
        if(p27_life > 0 && p28_life > 0){
            random = Math.floor( Math.random() * wordlen);
            io.to(p27).emit('next',random);
						io.to(p28).emit('next',random);
        }else {
            io.to(p27).emit('judge');
						io.to(p28).emit('judge');
        }
			}
			
			if(player_no === 29 || player_no === 30){
        if(player_no === 29){
            p30_life--;
        }else if(player_no === 30){
            p29_life--;
        }
				io.to(p29).emit('life', p29_life ,p30_life);
				io.to(p30).emit('life', p30_life ,p29_life);
        if(p29_life > 0 && p30_life > 0){
            random = Math.floor( Math.random() * wordlen);
            io.to(p29).emit('next',random);
						io.to(p30).emit('next',random);
        }else {
            io.to(p29).emit('judge');
						io.to(p30).emit('judge');
        }
			}
   });
	 
		setInterval(function() {
			if(p1 !== "0")room1_num++;
			if(p2 !== "0")room1_num++;
			if(p3 !== "0")room2_num++;
			if(p4 !== "0")room2_num++;
			if(p5 !== "0")room3_num++;
			if(p6 !== "0")room3_num++;
			if(p7 !== "0")room4_num++;
			if(p8 !== "0")room4_num++;
			if(p9 !== "0")room5_num++;
			if(p10 !== "0")room5_num++;
			if(p11 !== "0")room6_num++;
			if(p12 !== "0")room6_num++;
			if(p13 !== "0")room7_num++;
			if(p14 !== "0")room7_num++;
			if(p15 !== "0")room8_num++;
			if(p16 !== "0")room8_num++;
			if(p17 !== "0")room9_num++;
			if(p18 !== "0")room9_num++;
			if(p19 !== "0")room10_num++;
			if(p20 !== "0")room10_num++;
			if(p21 !== "0")room11_num++;
			if(p22 !== "0")room11_num++;
			if(p23 !== "0")room12_num++;
			if(p24 !== "0")room12_num++;
			if(p25 !== "0")room13_num++;
			if(p26 !== "0")room13_num++;
			if(p27 !== "0")room14_num++;
			if(p28 !== "0")room14_num++;
			if(p29 !== "0")room15_num++;
			if(p30 !== "0")room15_num++;
			socket.emit('room',room1_num,room2_num,room3_num,room4_num,room5_num,room6_num,room7_num,room8_num,room9_num,room10_num,room11_num,room12_num,room13_num,room14_num,room15_num);
			room1_num = 0;
			room2_num = 0;
			room3_num = 0;
			room4_num = 0;
			room5_num = 0;
			room6_num = 0;
			room7_num = 0;
			room8_num = 0;
			room9_num = 0;
			room10_num = 0;
			room11_num = 0;
			room12_num = 0;
			room13_num = 0;
			room14_num = 0;
			room15_num = 0;
		}, 1000);
				
    socket.on('disconnect', () => {
        if(socket.id === p1){
            io.to(p2).emit('enemy_left');
            p1 = "0";
						//console.log("p1=" + p1  +"   p2 ="+ p2 );
        }else  if(socket.id === p2){
            io.to(p1).emit('enemy_left');
            p2 = "0";
						//console.log("p1=" + p1  +"   p2 ="+ p2 );
        }else  if(socket.id === p3){
            io.to(p4).emit('enemy_left');
            p3 = "0";
						//console.log("p3=" + p3  +"   p4 ="+ p4 );
        }else  if(socket.id === p4){
            io.to(p3).emit('enemy_left');
            p4 = "0";
						//console.log("p3=" + p3  +"   p4 ="+ p4 );
        }else  if(socket.id === p5){
            io.to(p6).emit('enemy_left');
            p5 = "0";
						//console.log("p5=" + p5  +"   p6 ="+ p6 );
        }else  if(socket.id === p6){
            io.to(p5).emit('enemy_left');
            p6 = "0";
						//console.log("p5=" + p5  +"   p6 ="+ p6 );
        }else  if(socket.id === p7){
            io.to(p8).emit('enemy_left');
            p7 = "0";
						//console.log("p7=" + p7  +"   p8 ="+ p8 );
        }else  if(socket.id === p8){
            io.to(p7).emit('enemy_left');
            p8 = "0";
						//console.log("p7=" + p7  +"   p8 ="+ p8 );
        }else  if(socket.id === p9){
            io.to(p10).emit('enemy_left');
            p9 = "0";
						//console.log("p9=" + p9  +"   p10 ="+ p10 );
        }else  if(socket.id === p10){
            io.to(p9).emit('enemy_left');
            p10 = "0";
						//console.log("p9=" + p9  +"   p10 ="+ p10 );
        }else  if(socket.id === p11){
            io.to(p12).emit('enemy_left');
            p11 = "0";
						//console.log("p11=" + p11  +"   p12 ="+ p12 );
        }else  if(socket.id === p12){
            io.to(p11).emit('enemy_left');
            p12 = "0";
						//console.log("p11=" + p11  +"   p12 ="+ p12 );
				}else  if(socket.id === p13){
            io.to(p14).emit('enemy_left');
            p13 = "0";
						//console.log("p13=" + p13  +"   p14 ="+ p14 );
        }else  if(socket.id === p14){
            io.to(p13).emit('enemy_left');
            p14 = "0";
						//console.log("p13=" + p13  +"   p14 ="+ p14 );
				}else  if(socket.id === p15){
            io.to(p16).emit('enemy_left');
            p15 = "0";
						//console.log("p15=" + p15  +"   p16 ="+ p16 );
        }else  if(socket.id === p16){
            io.to(p15).emit('enemy_left');
            p16 = "0";
						//console.log("p15=" + p15  +"   p16 ="+ p16 );
				}else  if(socket.id === p17){
            io.to(p18).emit('enemy_left');
            p17 = "0";
						//console.log("p17=" + p17  +"   p18 ="+ p18 );
        }else  if(socket.id === p18){
            io.to(p17).emit('enemy_left');
            p18 = "0";
						//console.log("p17=" + p17  +"   p18 ="+ p18 );
				}else  if(socket.id === p19){
            io.to(p20).emit('enemy_left');
            p19 = "0";
						//console.log("p19=" + p19  +"   p20 ="+ p20 );
        }else  if(socket.id === p20){
            io.to(p19).emit('enemy_left');
            p20 = "0";
						//console.log("p19=" + p19  +"   p20 ="+ p20 );
				}else  if(socket.id === p21){
            io.to(p22).emit('enemy_left');
            p21 = "0";
						//console.log("p21=" + p21  +"   p22 ="+ p22 );
        }else  if(socket.id === p22){
            io.to(p21).emit('enemy_left');
            p22 = "0";
						//console.log("p21=" + p21  +"   p22 ="+ p22 );
				}else  if(socket.id === p23){
            io.to(p24).emit('enemy_left');
            p23 = "0";
						//console.log("p23=" + p23  +"   p24 ="+ p24 );
        }else  if(socket.id === p24){
            io.to(p23).emit('enemy_left');
            p24 = "0";
						//console.log("p23=" + p23  +"   p24 ="+ p24 );
				}else  if(socket.id === p25){
            io.to(p26).emit('enemy_left');
            p25 = "0";
						//console.log("p25=" + p25  +"   p26 ="+ p26 );
        }else  if(socket.id === p26){
            io.to(p25).emit('enemy_left');
            p26 = "0";
						//console.log("p25=" + p25  +"   p26 ="+ p26 );
				}else  if(socket.id === p27){
            io.to(p28).emit('enemy_left');
            p27 = "0";
						//console.log("p27=" + p27  +"   p28 ="+ p28 );
        }else  if(socket.id === p28){
            io.to(p27).emit('enemy_left');
            p28 = "0";
						//console.log("p27=" + p27  +"   p28 ="+ p28 );
				}else  if(socket.id === p29){
            io.to(p30).emit('enemy_left');
            p29 = "0";
						//console.log("p29=" + p29  +"   p30 ="+ p30 );
        }else  if(socket.id === p30){
            io.to(p29).emit('enemy_left');
            p30 = "0";
						//console.log("p29=" + p29  +"   p30 ="+ p30 );
				}
    });
});

app.use('/static', express.static(__dirname + '/static'));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '/static/index.html'));
});

server.listen(3000, function() {
  //console.log('Starting server on port 3000');
});