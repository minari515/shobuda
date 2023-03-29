function changeCategory(target_id){
  var categories, i;
  categories　= document.getElementsByClassName('category');
  for(i = 0; i < categories.length; i++){
    var cat;
    cat = categories[i];
    if(cat.id == target_id){
      cat.className = "category show";
    }else{
      cat.className = "category hidden";
    }
  }
  document.getElementById('mode').checked = false;
}
const wordlists = ["arigatou","amidakuzi","amanattou","itatigokko","urasimatarou","ukokkei","uzuranotamago","eigakann","esiritori","onigawara","osyougatu","karaage","kabusikigaisya","kibidango","kityoumenn","kirigirisu","kumanokodou","kurumiwariningyou","kurumaebi","kesigomu","kenmazai","gomihiroi","kosihikari","konnnitiha","konbanha","samisigariya","sanjinooyatu","simanagasi","syabusyabu","syourainoyume","surumeika","seminonukegara","sebangou","soumennnagasi","somosomonohanasi","zoukingake","taimingu","takanotume","darumaotosi","tikyuuondanka","tyarenziseisin","tuukikou","tenagazaru","tesuuryou","tokagenosippo","toumorokosi","namahousou","namikimiti","naritakuukou","ningyou","nitiyoubi","nuigurumi","nukayorokobi","nengajou","nettyuusyou","nousagyou","noudouteki","hamigakiko","haisupekku","hiraisinn","higanbana","hukanzennnensyou","hukuwajutu","heikinjumyou","hensyuutyou","hokkaidou","hokensitu","mataasita","matiawasebasyo","mitinoeki","mikangari","musyozoku","mukasibanasi","mekanizumu","mentenansu","mousiwakenai","mokutekiti","mondaisyuu","yasaiitame","yakizakana","yuukiyasai","yuureiyasiki","yonagunizima","yobousessyu","yo-gurutoaisu","yotubanokuro-ba-","raionkingu","raziotaisou","rasutosupa-to","risutobando","rikanozikkenn","ritiumuiondenti","riko-da-","rizo-tohoteru","ru-zuri-hu","ru-zusokkusu","remonkajuu","repo-tokadai","reitousyokuhinn","rensahannnou","rouzinho-mu","rokatatyuusya","roudoukumiai","ro-zumari-","waingurasu","wa-kusyoppu","warabimoti"];
var wordlist = wordlists.slice();
var wordlistJapanese = ["ありがとう","あみだくじ","甘納豆","いたちごっこ","浦島太郎","烏骨鶏","うずらの卵","映画館","絵しりとり","鬼瓦","お正月","唐揚げ","株式会社","きびだんご","几帳面","キリギリス","熊野古道","くるみ割り人形","車海老","消しゴム","研磨剤","ゴミ拾い","コシヒカリ","こんにちは","こんばんは","さみしがり屋","三時のおやつ","島流し","しゃぶしゃぶ","将来の夢","スルメイカ","セミの抜け殻","背番号","そうめん流し","そもそもの話","雑巾がけ","タイミング","鷹の爪","だるま落とし","地球温暖化","チャレンジ精神","通気口","テナガザル","手数料","トカゲのしっぽ","トウモロコシ","生放送","並木道","成田空港","人形","日曜日","ぬいぐるみ","ぬか喜び","年賀状","熱中症","農作業","能動的","歯磨き粉","ハイスペック","避雷針","彼岸花","不完全燃焼","腹話術","平均寿命","編集長","北海道","保健室","また明日","待ち合わせ場所","道の駅","みかん狩り","無所属","昔話","メカニズム","メンテナンス","申し訳ない","目的地","問題集","野菜炒め","焼き魚","有機野菜","幽霊屋敷","与那国島","予防接種","ヨーグルトアイス","四葉のクローバー","ライオンキング","ラジオ体操","ラストスパート","リストバンド","理科の実験","リチウムイオン電池","リコーダー","リゾートホテル","ルーズリーフ","ルーズソックス","レモン果汁","レポート課題","冷凍食品","連鎖反応","老人ホーム","路肩駐車","労働組合","ローズマリー","ワイングラス","ワークショップ","わらび餅"];
const skill_word = ['0','1','2','3','4','5','6','7','8','9','-','^','@','[',';',':',']',',','.','/'];
const LIFE = 5;
var readytime = 5;
var readytime_tu = 5;
var readytime2_tu = 5;
var tutorial_num = 0;
var start_flag = false;
var tutorial_flag = false;
var online_flag = false;
var solo_flag =false;
var score;
var correct;
var mistake;
var char_num = 0;
var word_char;
var word_num;
var playcount = 5;
var playNum = playcount;
var mylife = LIFE;
var hislife = LIFE;
var mynum = 0;
var count = 0;
var type_time;
var type_time_tu;
var timer_stop = false;
var next_skill_flag = false;
var skill_flag = false;
var skill_tu_flag = false;
var skill_point = 0;
var skill_point_tu = 0;
var skill_num;
var no_miss = 0;
var round1_flag = true; //マッチング後1ラウンド目なら演出を加える
var countStop_flag = false;
var mute_flag = false;
const socket = io();

function Online1(){
                                     //console.log("online");
		document.getElementById('button_audio').currentTime = 0;
		document.getElementById('button_audio').play();
		syoshin.innerHTML = "";
		chukyu.innerHTML = "";
		joukyu.innerHTML = "";
		japanese_solo.innerHTML = "";
		word_solo.innerHTML = "";
		scoredis_solo.innerHTML = "";
		count_solo.innerHTML = "";
		winlose.innerHTML = "";
		play_count.innerHTML = "";
		start_button_solo.style.visibility ="visible";
		solo_flag = false;
		timer_stop = true;
		wait_matching.innerHTML = "対戦相手を探しています";
		start_button1.style.visibility ="hidden";
		start_button2.style.visibility ="hidden";
		start_button3.style.visibility ="hidden";
		start_button4.style.visibility ="hidden";
		start_button5.style.visibility ="hidden";
		start_button6.style.visibility ="hidden";
		start_button7.style.visibility ="hidden";
		start_button8.style.visibility ="hidden";
		start_button9.style.visibility ="hidden";
		start_button10.style.visibility ="hidden";
		start_button11.style.visibility ="hidden";
		start_button12.style.visibility ="hidden";
		start_button13.style.visibility ="hidden";
		start_button14.style.visibility ="hidden";
		start_button15.style.visibility ="hidden";
		room_out.style.visibility ="visible";
		if(!online_flag){
				socket.emit('online1');
				online_flag = true;
    }else{
			socket.emit('replay');
		}
}
function Online2(){
                                     //console.log("online");
		document.getElementById('button_audio').currentTime = 0;
		document.getElementById('button_audio').play();
		syoshin.innerHTML = "";
		chukyu.innerHTML = "";
		joukyu.innerHTML = "";
		japanese_solo.innerHTML = "";
		word_solo.innerHTML = "";
		scoredis_solo.innerHTML = "";
		count_solo.innerHTML = "";
		winlose.innerHTML = "";
		play_count.innerHTML = "";
		start_button_solo.style.visibility ="visible";
		solo_flag = false;
		timer_stop = true;
		wait_matching.innerHTML = "対戦相手を探しています";
		start_button1.style.visibility ="hidden";
		start_button2.style.visibility ="hidden";
		start_button3.style.visibility ="hidden";
		start_button4.style.visibility ="hidden";
		start_button5.style.visibility ="hidden";
		start_button6.style.visibility ="hidden";
		start_button7.style.visibility ="hidden";
		start_button8.style.visibility ="hidden";
		start_button9.style.visibility ="hidden";
		start_button10.style.visibility ="hidden";
		start_button11.style.visibility ="hidden";
		start_button12.style.visibility ="hidden";
		start_button13.style.visibility ="hidden";
		start_button14.style.visibility ="hidden";
		start_button15.style.visibility ="hidden";
		room_out.style.visibility ="visible";
		if(!online_flag){
				socket.emit('online2');
				online_flag = true;
    }else{
			socket.emit('replay');
		}
}
function Online3(){
                                     //console.log("online");
		document.getElementById('button_audio').currentTime = 0;
		document.getElementById('button_audio').play();
		syoshin.innerHTML = "";
		chukyu.innerHTML = "";
		joukyu.innerHTML = "";
		japanese_solo.innerHTML = "";
		word_solo.innerHTML = "";
		scoredis_solo.innerHTML = "";
		count_solo.innerHTML = "";
		winlose.innerHTML = "";
		play_count.innerHTML = "";
		start_button_solo.style.visibility ="visible";
		solo_flag = false;
		timer_stop = true;
		wait_matching.innerHTML = "対戦相手を探しています";
		start_button1.style.visibility ="hidden";
		start_button2.style.visibility ="hidden";
		start_button3.style.visibility ="hidden";
		start_button4.style.visibility ="hidden";
		start_button5.style.visibility ="hidden";
		start_button6.style.visibility ="hidden";
		start_button7.style.visibility ="hidden";
		start_button8.style.visibility ="hidden";
		start_button9.style.visibility ="hidden";
		start_button10.style.visibility ="hidden";
		start_button11.style.visibility ="hidden";
		start_button12.style.visibility ="hidden";
		start_button13.style.visibility ="hidden";
		start_button14.style.visibility ="hidden";
		start_button15.style.visibility ="hidden";
		room_out.style.visibility ="visible";
		if(!online_flag){
				socket.emit('online3');
				online_flag = true;
    }else{
			socket.emit('replay');
		}
}
function Online4(){
                                     //console.log("online");
		document.getElementById('button_audio').currentTime = 0;
		document.getElementById('button_audio').play();
		syoshin.innerHTML = "";
		chukyu.innerHTML = "";
		joukyu.innerHTML = "";
		japanese_solo.innerHTML = "";
		word_solo.innerHTML = "";
		scoredis_solo.innerHTML = "";
		count_solo.innerHTML = "";
		winlose.innerHTML = "";
		play_count.innerHTML = "";
		start_button_solo.style.visibility ="visible";
		solo_flag = false;
		timer_stop = true;
		wait_matching.innerHTML = "対戦相手を探しています";
		start_button1.style.visibility ="hidden";
		start_button2.style.visibility ="hidden";
		start_button3.style.visibility ="hidden";
		start_button4.style.visibility ="hidden";
		start_button5.style.visibility ="hidden";
		start_button6.style.visibility ="hidden";
		start_button7.style.visibility ="hidden";
		start_button8.style.visibility ="hidden";
		start_button9.style.visibility ="hidden";
		start_button10.style.visibility ="hidden";
		start_button11.style.visibility ="hidden";
		start_button12.style.visibility ="hidden";
		start_button13.style.visibility ="hidden";
		start_button14.style.visibility ="hidden";
		start_button15.style.visibility ="hidden";
		room_out.style.visibility ="visible";
		if(!online_flag){
				socket.emit('online4');
				online_flag = true;
    }else{
			socket.emit('replay');
		}
}
function Online5(){
                                     //console.log("online");
		document.getElementById('button_audio').currentTime = 0;
		document.getElementById('button_audio').play();
		syoshin.innerHTML = "";
		chukyu.innerHTML = "";
		joukyu.innerHTML = "";
		japanese_solo.innerHTML = "";
		word_solo.innerHTML = "";
		scoredis_solo.innerHTML = "";
		count_solo.innerHTML = "";
		winlose.innerHTML = "";
		play_count.innerHTML = "";
		start_button_solo.style.visibility ="visible";
		solo_flag = false;
		timer_stop = true;
		wait_matching.innerHTML = "対戦相手を探しています";
		start_button1.style.visibility ="hidden";
		start_button2.style.visibility ="hidden";
		start_button3.style.visibility ="hidden";
		start_button4.style.visibility ="hidden";
		start_button5.style.visibility ="hidden";
		start_button6.style.visibility ="hidden";
		start_button7.style.visibility ="hidden";
		start_button8.style.visibility ="hidden";
		start_button9.style.visibility ="hidden";
		start_button10.style.visibility ="hidden";
		start_button11.style.visibility ="hidden";
		start_button12.style.visibility ="hidden";
		start_button13.style.visibility ="hidden";
		start_button14.style.visibility ="hidden";
		start_button15.style.visibility ="hidden";
		room_out.style.visibility ="visible";
		if(!online_flag){
				socket.emit('online5');
				online_flag = true;
    }else{
			socket.emit('replay');
		}
}
function Online6(){
                                     //console.log("online");
		document.getElementById('button_audio').currentTime = 0;
		document.getElementById('button_audio').play();
		syoshin.innerHTML = "";
		chukyu.innerHTML = "";
		joukyu.innerHTML = "";
		japanese_solo.innerHTML = "";
		word_solo.innerHTML = "";
		scoredis_solo.innerHTML = "";
		count_solo.innerHTML = "";
		winlose.innerHTML = "";
		play_count.innerHTML = "";
		start_button_solo.style.visibility ="visible";
		solo_flag = false;
		timer_stop = true;
		wait_matching.innerHTML = "対戦相手を探しています";
		start_button1.style.visibility ="hidden";
		start_button2.style.visibility ="hidden";
		start_button3.style.visibility ="hidden";
		start_button4.style.visibility ="hidden";
		start_button5.style.visibility ="hidden";
		start_button6.style.visibility ="hidden";
		start_button7.style.visibility ="hidden";
		start_button8.style.visibility ="hidden";
		start_button9.style.visibility ="hidden";
		start_button10.style.visibility ="hidden";
		start_button11.style.visibility ="hidden";
		start_button12.style.visibility ="hidden";
		start_button13.style.visibility ="hidden";
		start_button14.style.visibility ="hidden";
		start_button15.style.visibility ="hidden";
		room_out.style.visibility ="visible";
		if(!online_flag){
				socket.emit('online6');
				online_flag = true;
    }else{
			socket.emit('replay');
		}
}
function Online7(){
                                     //console.log("online");
		document.getElementById('button_audio').currentTime = 0;
		document.getElementById('button_audio').play();
		syoshin.innerHTML = "";
		chukyu.innerHTML = "";
		joukyu.innerHTML = "";
		japanese_solo.innerHTML = "";
		word_solo.innerHTML = "";
		scoredis_solo.innerHTML = "";
		count_solo.innerHTML = "";
		winlose.innerHTML = "";
		play_count.innerHTML = "";
		start_button_solo.style.visibility ="visible";
		solo_flag = false;
		timer_stop = true;
		wait_matching.innerHTML = "対戦相手を探しています";
		start_button1.style.visibility ="hidden";
		start_button2.style.visibility ="hidden";
		start_button3.style.visibility ="hidden";
		start_button4.style.visibility ="hidden";
		start_button5.style.visibility ="hidden";
		start_button6.style.visibility ="hidden";
		start_button7.style.visibility ="hidden";
		start_button8.style.visibility ="hidden";
		start_button9.style.visibility ="hidden";
		start_button10.style.visibility ="hidden";
		start_button11.style.visibility ="hidden";
		start_button12.style.visibility ="hidden";
		start_button13.style.visibility ="hidden";
		start_button14.style.visibility ="hidden";
		start_button15.style.visibility ="hidden";
		room_out.style.visibility ="visible";
		if(!online_flag){
				socket.emit('online7');
				online_flag = true;
    }else{
			socket.emit('replay');
		}
}
function Online8(){
                                     //console.log("online");
		document.getElementById('button_audio').currentTime = 0;
		document.getElementById('button_audio').play();
		syoshin.innerHTML = "";
		chukyu.innerHTML = "";
		joukyu.innerHTML = "";
		japanese_solo.innerHTML = "";
		word_solo.innerHTML = "";
		scoredis_solo.innerHTML = "";
		count_solo.innerHTML = "";
		winlose.innerHTML = "";
		play_count.innerHTML = "";
		start_button_solo.style.visibility ="visible";
		solo_flag = false;
		timer_stop = true;
		wait_matching.innerHTML = "対戦相手を探しています";
		start_button1.style.visibility ="hidden";
		start_button2.style.visibility ="hidden";
		start_button3.style.visibility ="hidden";
		start_button4.style.visibility ="hidden";
		start_button5.style.visibility ="hidden";
		start_button6.style.visibility ="hidden";
		start_button7.style.visibility ="hidden";
		start_button8.style.visibility ="hidden";
		start_button9.style.visibility ="hidden";
		start_button10.style.visibility ="hidden";
		start_button11.style.visibility ="hidden";
		start_button12.style.visibility ="hidden";
		start_button13.style.visibility ="hidden";
		start_button14.style.visibility ="hidden";
		start_button15.style.visibility ="hidden";
		room_out.style.visibility ="visible";
		if(!online_flag){
				socket.emit('online8');
				online_flag = true;
    }else{
			socket.emit('replay');
		}
}
function Online9(){
                                     //console.log("online");
		document.getElementById('button_audio').currentTime = 0;
		document.getElementById('button_audio').play();
		syoshin.innerHTML = "";
		chukyu.innerHTML = "";
		joukyu.innerHTML = "";
		japanese_solo.innerHTML = "";
		word_solo.innerHTML = "";
		scoredis_solo.innerHTML = "";
		count_solo.innerHTML = "";
		winlose.innerHTML = "";
		play_count.innerHTML = "";
		start_button_solo.style.visibility ="visible";
		solo_flag = false;
		timer_stop = true;
		wait_matching.innerHTML = "対戦相手を探しています";
		start_button1.style.visibility ="hidden";
		start_button2.style.visibility ="hidden";
		start_button3.style.visibility ="hidden";
		start_button4.style.visibility ="hidden";
		start_button5.style.visibility ="hidden";
		start_button6.style.visibility ="hidden";
		start_button7.style.visibility ="hidden";
		start_button8.style.visibility ="hidden";
		start_button9.style.visibility ="hidden";
		start_button10.style.visibility ="hidden";
		start_button11.style.visibility ="hidden";
		start_button12.style.visibility ="hidden";
		start_button13.style.visibility ="hidden";
		start_button14.style.visibility ="hidden";
		start_button15.style.visibility ="hidden";
		room_out.style.visibility ="visible";
		if(!online_flag){
				socket.emit('online9');
				online_flag = true;
    }else{
			socket.emit('replay');
		}
}
function Online10(){
                                     //console.log("online");
		document.getElementById('button_audio').currentTime = 0;
		document.getElementById('button_audio').play();
		syoshin.innerHTML = "";
		chukyu.innerHTML = "";
		joukyu.innerHTML = "";
		japanese_solo.innerHTML = "";
		word_solo.innerHTML = "";
		scoredis_solo.innerHTML = "";
		count_solo.innerHTML = "";
		winlose.innerHTML = "";
		play_count.innerHTML = "";
		start_button_solo.style.visibility ="visible";
		solo_flag = false;
		timer_stop = true;
		wait_matching.innerHTML = "対戦相手を探しています";
		start_button1.style.visibility ="hidden";
		start_button2.style.visibility ="hidden";
		start_button3.style.visibility ="hidden";
		start_button4.style.visibility ="hidden";
		start_button5.style.visibility ="hidden";
		start_button6.style.visibility ="hidden";
		start_button7.style.visibility ="hidden";
		start_button8.style.visibility ="hidden";
		start_button9.style.visibility ="hidden";
		start_button10.style.visibility ="hidden";
		start_button11.style.visibility ="hidden";
		start_button12.style.visibility ="hidden";
		start_button13.style.visibility ="hidden";
		start_button14.style.visibility ="hidden";
		start_button15.style.visibility ="hidden";
		room_out.style.visibility ="visible";
		if(!online_flag){
				socket.emit('online10');
				online_flag = true;
    }else{
			socket.emit('replay');
		}
}
function Online11(){
                                     //console.log("online");
		document.getElementById('button_audio').currentTime = 0;
		document.getElementById('button_audio').play();
		syoshin.innerHTML = "";
		chukyu.innerHTML = "";
		joukyu.innerHTML = "";
		japanese_solo.innerHTML = "";
		word_solo.innerHTML = "";
		scoredis_solo.innerHTML = "";
		count_solo.innerHTML = "";
		winlose.innerHTML = "";
		play_count.innerHTML = "";
		start_button_solo.style.visibility ="visible";
		solo_flag = false;
		timer_stop = true;
		wait_matching.innerHTML = "対戦相手を探しています";
		start_button1.style.visibility ="hidden";
		start_button2.style.visibility ="hidden";
		start_button3.style.visibility ="hidden";
		start_button4.style.visibility ="hidden";
		start_button5.style.visibility ="hidden";
		start_button6.style.visibility ="hidden";
		start_button7.style.visibility ="hidden";
		start_button8.style.visibility ="hidden";
		start_button9.style.visibility ="hidden";
		start_button10.style.visibility ="hidden";
		start_button11.style.visibility ="hidden";
		start_button12.style.visibility ="hidden";
		start_button13.style.visibility ="hidden";
		start_button14.style.visibility ="hidden";
		start_button15.style.visibility ="hidden";
		room_out.style.visibility ="visible";
		if(!online_flag){
				socket.emit('online11');
				online_flag = true;
    }else{
			socket.emit('replay');
		}
}
function Online12(){
                                     //console.log("online");
		document.getElementById('button_audio').currentTime = 0;
		document.getElementById('button_audio').play();
		syoshin.innerHTML = "";
		chukyu.innerHTML = "";
		joukyu.innerHTML = "";
		japanese_solo.innerHTML = "";
		word_solo.innerHTML = "";
		scoredis_solo.innerHTML = "";
		count_solo.innerHTML = "";
		winlose.innerHTML = "";
		play_count.innerHTML = "";
		start_button_solo.style.visibility ="visible";
		solo_flag = false;
		timer_stop = true;
		wait_matching.innerHTML = "対戦相手を探しています";
		start_button1.style.visibility ="hidden";
		start_button2.style.visibility ="hidden";
		start_button3.style.visibility ="hidden";
		start_button4.style.visibility ="hidden";
		start_button5.style.visibility ="hidden";
		start_button6.style.visibility ="hidden";
		start_button7.style.visibility ="hidden";
		start_button8.style.visibility ="hidden";
		start_button9.style.visibility ="hidden";
		start_button10.style.visibility ="hidden";
		start_button11.style.visibility ="hidden";
		start_button12.style.visibility ="hidden";
		start_button13.style.visibility ="hidden";
		start_button14.style.visibility ="hidden";
		start_button15.style.visibility ="hidden";
		room_out.style.visibility ="visible";
		if(!online_flag){
				socket.emit('online12');
				online_flag = true;
    }else{
			socket.emit('replay');
		}
}
function Online13(){
                                     //console.log("online");
		document.getElementById('button_audio').currentTime = 0;
		document.getElementById('button_audio').play();
		syoshin.innerHTML = "";
		chukyu.innerHTML = "";
		joukyu.innerHTML = "";
		japanese_solo.innerHTML = "";
		word_solo.innerHTML = "";
		scoredis_solo.innerHTML = "";
		count_solo.innerHTML = "";
		winlose.innerHTML = "";
		play_count.innerHTML = "";
		start_button_solo.style.visibility ="visible";
		solo_flag = false;
		timer_stop = true;
		wait_matching.innerHTML = "対戦相手を探しています";
		start_button1.style.visibility ="hidden";
		start_button2.style.visibility ="hidden";
		start_button3.style.visibility ="hidden";
		start_button4.style.visibility ="hidden";
		start_button5.style.visibility ="hidden";
		start_button6.style.visibility ="hidden";
		start_button7.style.visibility ="hidden";
		start_button8.style.visibility ="hidden";
		start_button9.style.visibility ="hidden";
		start_button10.style.visibility ="hidden";
		start_button11.style.visibility ="hidden";
		start_button12.style.visibility ="hidden";
		start_button13.style.visibility ="hidden";
		start_button14.style.visibility ="hidden";
		start_button15.style.visibility ="hidden";
		room_out.style.visibility ="visible";
		if(!online_flag){
				socket.emit('online13');
				online_flag = true;
    }else{
			socket.emit('replay');
		}
}
function Online14(){
                                     //console.log("online");
		document.getElementById('button_audio').currentTime = 0;
		document.getElementById('button_audio').play();
		syoshin.innerHTML = "";
		chukyu.innerHTML = "";
		joukyu.innerHTML = "";
		japanese_solo.innerHTML = "";
		word_solo.innerHTML = "";
		scoredis_solo.innerHTML = "";
		count_solo.innerHTML = "";
		winlose.innerHTML = "";
		play_count.innerHTML = "";
		start_button_solo.style.visibility ="visible";
		solo_flag = false;
		timer_stop = true;
		wait_matching.innerHTML = "対戦相手を探しています";
		start_button1.style.visibility ="hidden";
		start_button2.style.visibility ="hidden";
		start_button3.style.visibility ="hidden";
		start_button4.style.visibility ="hidden";
		start_button5.style.visibility ="hidden";
		start_button6.style.visibility ="hidden";
		start_button7.style.visibility ="hidden";
		start_button8.style.visibility ="hidden";
		start_button9.style.visibility ="hidden";
		start_button10.style.visibility ="hidden";
		start_button11.style.visibility ="hidden";
		start_button12.style.visibility ="hidden";
		start_button13.style.visibility ="hidden";
		start_button14.style.visibility ="hidden";
		start_button15.style.visibility ="hidden";
		room_out.style.visibility ="visible";
		if(!online_flag){
				socket.emit('online14');
				online_flag = true;
    }else{
			socket.emit('replay');
		}
}
function Online15(){
                                     //console.log("online");
		document.getElementById('button_audio').currentTime = 0;
		document.getElementById('button_audio').play();
		syoshin.innerHTML = "";
		chukyu.innerHTML = "";
		joukyu.innerHTML = "";
		japanese_solo.innerHTML = "";
		word_solo.innerHTML = "";
		scoredis_solo.innerHTML = "";
		count_solo.innerHTML = "";
		winlose.innerHTML = "";
		play_count.innerHTML = "";
		start_button_solo.style.visibility ="visible";
		solo_flag = false;
		timer_stop = true;
		wait_matching.innerHTML = "対戦相手を探しています";
		start_button1.style.visibility ="hidden";
		start_button2.style.visibility ="hidden";
		start_button3.style.visibility ="hidden";
		start_button4.style.visibility ="hidden";
		start_button5.style.visibility ="hidden";
		start_button6.style.visibility ="hidden";
		start_button7.style.visibility ="hidden";
		start_button8.style.visibility ="hidden";
		start_button9.style.visibility ="hidden";
		start_button10.style.visibility ="hidden";
		start_button11.style.visibility ="hidden";
		start_button12.style.visibility ="hidden";
		start_button13.style.visibility ="hidden";
		start_button14.style.visibility ="hidden";
		start_button15.style.visibility ="hidden";
		room_out.style.visibility ="visible";
		if(!online_flag){
				socket.emit('online15');
				online_flag = true;
    }else{
			socket.emit('replay');
		}
}


function roomOut(){
		document.getElementById('button_audio').currentTime = 0;
		document.getElementById('button_audio').play();	
		document.getElementById('battle_audio').pause();
		document.getElementById('main_audio').play();
		$('body').css('background-image','url(static/main.jpg)');
		$('.category').css('visibility','visible');
		socket.emit('room_out');
		online_flag = false;
		round1_flag = true;
		mylife_img.style.visibility ="hidden";
		hislife_img.style.visibility ="hidden";
		skill_img.style.visibility ="hidden";
		count_online.innerHTML = "";
		japanese.innerHTML = "";
		word.innerHTML = "";
		winlose.innerHTML = "";
		scoredis.innerHTML = "";
		wait_matching.innerHTML = "";
		syoshin.innerHTML = "初心者ルーム";
		chukyu.innerHTML = "中級者ルーム";
		joukyu.innerHTML = "上級者ルーム";
		document.getElementById("start_button1").value="room1";
		start_button1.style.visibility ="visible";
		document.getElementById("start_button2").value="room2";
		start_button2.style.visibility ="visible";
		document.getElementById("start_button3").value="room3";
		start_button3.style.visibility ="visible";
		document.getElementById("start_button4").value="room4";
		start_button4.style.visibility ="visible";
		document.getElementById("start_button5").value="room5";
		start_button5.style.visibility ="visible";
		document.getElementById("start_button6").value="room6";
		start_button6.style.visibility ="visible";
		document.getElementById("start_button7").value="room7";
		start_button7.style.visibility ="visible";
		document.getElementById("start_button8").value="room8";
		start_button8.style.visibility ="visible";
		document.getElementById("start_button9").value="room9";
		start_button9.style.visibility ="visible";
		document.getElementById("start_button10").value="room10";
		start_button10.style.visibility ="visible";
		document.getElementById("start_button11").value="room11";
		start_button11.style.visibility ="visible";
		document.getElementById("start_button12").value="room12";
		start_button12.style.visibility ="visible";
		document.getElementById("start_button13").value="room13";
		start_button13.style.visibility ="visible";
		document.getElementById("start_button14").value="room14";
		start_button14.style.visibility ="visible";
		document.getElementById("start_button15").value="room15";
		start_button15.style.visibility ="visible";
		room_out.style.visibility ="hidden";
}

function ready(){
                                     //console.log("ready");
		start_flag = false;
		countStop_flag = false
		readytime = 5;
		if(round1_flag){
			document.getElementById('matching_audio').currentTime = 0;
			document.getElementById('matching_audio').play();
			document.getElementById('main_audio').pause();
			document.getElementById('battle_audio').currentTime = 0;
			document.getElementById('battle_audio').play();
			readytime += 3;
			$('body').css('background-image','url(static/matching.jpg)');
			$('.category').css('visibility','hidden');
			room_out.style.visibility ="hidden";
			round1_flag = false;
		}else{
			count_online.innerHTML=readytime;
			room_out.style.visibility ="visible";
		}
		var readytimer = setInterval(function(){
			readytime--;
			if(readytime < 6){
				count_online.innerHTML=readytime;
			}
			if (readytime == 5){
				$('body').css('background-image','url(static/battle.jpg)');
				$('.category').css('visibility','visible');
				mylife_img.style.visibility ="visible";
				document.getElementById("mylife_img").src = "static/mylife_"+mylife+".jpg";
				hislife_img.style.visibility ="visible";
				document.getElementById("hislife_img").src = "static/hislife_"+hislife+".jpg";
				skill_img.style.visibility ="visible";
				room_out.style.visibility ="visible";
			}
			if(readytime == 0){
				count_online.innerHTML="fight!";
			}
			if(readytime <= 0 || !online_flag || countStop_flag){
				clearInterval(readytimer);
				if(!online_flag || countStop_flag){
					count_online.innerHTML = "";
				}
				countStop_flag = false;
				start_flag = true;
			}
		},1000);
}
function gameStart(){
                                     //console.log("gameStart");
		//$('body').css('background-image','url(static/battle.jpg)');
		mylife = LIFE;
		hislife = LIFE;
		score = 0.0;
		mistake = 0;
		correct = 0;
		skill_point = 0;
		no_miss = 0;
		scoredis.innerHTML="";
		wait_matching.innerHTML = "";
		
}
function wordDisplay(){
                                     //console.log("wordDisplay");   
//				random = Math.floor( Math.random() * wordlist.length );
		char_num = 0;
		wordlist = wordlists.slice();
		if(next_skill_flag){
			document.getElementById('skilled_audio').currentTime = 0;
			document.getElementById('skilled_audio').play();	
			next_skill_flag = false;
			skill_flag = true;
			skill_num = Math.floor( Math.random() * skill_word.length );
			wordlist[word_num] += skill_word[skill_num];
		}
		if(skill_flag){
			word.innerHTML=wordlist[word_num].substr(0,wordlist[word_num].length-1)+"<span style='color: red;'>"+wordlist[word_num].substr(wordlist[word_num].length-1,wordlist[word_num].length)+"</span>";
		}else{
			word.innerHTML=wordlist[word_num];
		}
    japanese.innerHTML=wordlistJapanese[word_num];
    charInsort();
	
}
function charInsort(){
    word_char = wordlist[word_num].charAt(char_num);
}
function finish(){
                                         //console.log("finish");
		start_flag = false;
		round1_flag = true;
		$('body').css('background-image','url(static/battle.jpg)');
		$('.category').css('visibility','visible');
		if (correct !== 0){
		    scoredis.innerHTML="<hr>正タイプ数:"+correct+"<br>ミスタイプ数:"+mistake+"<br>正答率"+(correct/(correct+mistake)*100).toFixed(1)+"%";
		} else {
		     scoredis.innerHTML="<hr>正タイプ数:"+correct+"<br>ミスタイプ数:"+mistake+"<br>正答率0%";
		}
		count_online.innerHTML="";
		word.innerHTML="";
		japanese.innerHTML="";
		if(mynum == 1 || mynum == 2){			
			start_button1.style.visibility ="visible";
			document.getElementById("start_button1").value="Replay";
		}
		if(mynum == 3 || mynum == 4){
			start_button2.style.visibility ="visible";
			document.getElementById("start_button2").value="Replay";
		}
		if(mynum == 5 || mynum == 6){
			start_button3.style.visibility ="visible";
			document.getElementById("start_button3").value="Replay";
		}
		if(mynum == 7 || mynum == 8){
			start_button4.style.visibility ="visible";
			document.getElementById("start_button4").value="Replay";
		}
		if(mynum == 9 || mynum == 10){
			start_button5.style.visibility ="visible";
			document.getElementById("start_button5").value="Replay";
		}
		if(mynum == 11 || mynum == 12){			
			start_button6.style.visibility ="visible";
			document.getElementById("start_button6").value="Replay";
		}
		if(mynum == 13 || mynum == 14){
			start_button7.style.visibility ="visible";
			document.getElementById("start_button7").value="Replay";
		}
		if(mynum == 15 || mynum == 16){
			start_button8.style.visibility ="visible";
			document.getElementById("start_button8").value="Replay";
		}
		if(mynum == 17 || mynum == 18){
			start_button9.style.visibility ="visible";
			document.getElementById("start_button9").value="Replay";
		}
		if(mynum == 19 || mynum == 20){
			start_button10.style.visibility ="visible";
			document.getElementById("start_button10").value="Replay";
		}
		if(mynum == 21 || mynum == 22){
			start_button11.style.visibility ="visible";
			document.getElementById("start_button11").value="Replay";
		}
		if(mynum == 23 || mynum == 24){
			start_button12.style.visibility ="visible";
			document.getElementById("start_button12").value="Replay";
		}
		if(mynum == 25 || mynum == 26){
			start_button13.style.visibility ="visible";
			document.getElementById("start_button13").value="Replay";
		}
		if(mynum == 27 || mynum == 28){
			start_button14.style.visibility ="visible";
			document.getElementById("start_button14").value="Replay";
		}
		if(mynum == 29 || mynum == 30){
			start_button15.style.visibility ="visible";
			document.getElementById("start_button15").value="Replay";
		}
		word_char=0;
		char_num = 0;
}
document.onkeydown = function(e) {
    
		if(e.keyCode == 189){
				keyStr = "-";
		}else if(e.keyCode == 188){
				keyStr = ","
		}else if(e.keyCode == 222){
				keyStr = "^"
		}else if(e.keyCode == 192){
				keyStr = "@"
		}else if(e.keyCode == 219){
				keyStr = "["
		}else if(e.keyCode == 187){
				keyStr = ";"
		}else if(e.keyCode == 186){
				keyStr = ":"
		}else if(e.keyCode == 221){
				keyStr = "]"
		}else if(e.keyCode == 190){
				keyStr = "."
		}else if(e.keyCode == 191){
				keyStr = "/"
		}else{
				var keyStr = String.fromCharCode(e.keyCode);
				keyStr = keyStr.toLowerCase();
		}
		if(start_flag){
			if(keyStr == word_char){
					document.getElementById('miss_audio').pause();
					document.getElementById('miss_audio').currentTime = 0;
					document.getElementById('type_audio').pause();
					document.getElementById('type_audio').currentTime = 0;
					document.getElementById('type_audio').play();
					
					if(online_flag){
						if(skill_flag){
							word.innerHTML="<span style='color: tomato;'>"+wordlist[word_num].substr(0,char_num+1)+"</span>"+wordlist[word_num].substr(char_num+1,wordlist[word_num].length-char_num-2)+"<span style='color: red;'>"+wordlist[word_num].substr(wordlist[word_num].length-1,wordlist[word_num].length-char_num -1)+"</span>";
						}else{
							word.innerHTML="<span style='color: tomato;'>"+wordlist[word_num].substr(0,char_num+1)+"</span>"+wordlist[word_num].substr(char_num+1,wordlist[word_num].length);
						}
						if(no_miss > 4){
							if(mylife < hislife){
								skill_point = skill_point + hislife - mylife + 1;
							}else{
								skill_point++;
							}
							if(skill_point > 4 && skill_point < 10){
								document.getElementById("skill_img").src = "static/skill_0.jpg";
							}else if(skill_point > 9 && skill_point < 20){
								document.getElementById("skill_img").src = "static/skill_10.jpg";
							}else if(skill_point > 19 && skill_point < 30){
								document.getElementById("skill_img").src = "static/skill_20.jpg";
							}else if(skill_point > 29){
								document.getElementById("skill_img").src = "static/skill_30.jpg";
							}
							if(skill_point >= 30){
								document.getElementById('skill_audio').currentTime = 0;
								document.getElementById('skill_audio').play();
								socket.emit('skill',mynum);
								skill_point = 0;
							}
						}else{
							no_miss++; 
						}
					}else if(solo_flag){
						word_solo.innerHTML="<span style='color: tomato;'>"+wordlist[word_num].substr(0,char_num+1)+"</span>"+wordlist[word_num].substr(char_num+1,wordlist[word_num].length);
					}else if(tutorial_flag){
						if(hislife == 4){
							word_tu.innerHTML="<span style='color: tomato;'>"+wordlist[word_num].substr(0,char_num+1)+"</span>"+wordlist[word_num].substr(char_num+1,wordlist[word_num].length-char_num-2)+"<span style='color: red;'>"+wordlist[word_num].substr(wordlist[word_num].length-1,wordlist[word_num].length-char_num -1)+"</span>";
						}else{
							word_tu.innerHTML="<span style='color: tomato;'>"+wordlist[word_num].substr(0,char_num+1)+"</span>"+wordlist[word_num].substr(char_num+1,wordlist[word_num].length);
						}
						if(no_miss > 4){							
							skill_point_tu++;
							if(skill_point_tu > 3 && skill_point_tu < 10){
								document.getElementById("skill_tu_img").src = "static/skill_0.jpg";
							}else if(skill_point_tu > 9 && skill_point_tu < 20){
								document.getElementById("skill_tu_img").src = "static/skill_10.jpg";
							}else if(skill_point_tu > 19 && skill_point_tu < 30){
								document.getElementById("skill_tu_img").src = "static/skill_20.jpg";
							}else if(skill_point_tu > 29){
								document.getElementById("skill_tu_img").src = "static/skill_30.jpg";
							}
							if(skill_point_tu >= 30){
								document.getElementById('skill_audio').currentTime = 0;
								document.getElementById('skill_audio').play();
								skill_point_tu = 0;
							}	
						}else{
							no_miss++; 
						}
					}
					char_num++;
					correct++;
					charInsort();
			}else{
					document.getElementById('miss_audio').pause();
					document.getElementById('miss_audio').currentTime = 0;
					document.getElementById('type_audio').pause();
					document.getElementById('type_audio').currentTime = 0;
					document.getElementById('miss_audio').play();
					if(online_flag || tutorial_flag)no_miss = 0;
					mistake++;
			}
		}
		if(char_num == wordlist[word_num].length){
				char_num=0;
				if(online_flag){
				socket.emit('life_update',mynum);
			} else if (solo_flag){
				playcount--;
				if(playcount > 0){
					ready_solo();
					wordDisplay_solo();
				}else{
					finish_solo();
				}
			}else if(tutorial_flag){
				life_tu();
				if(hislife == 4){
					timer_stop = true;
					type_time_tu = type_time;
					//console.log("type_time_tu =" + type_time_tu);
					next();
				}else if(hislife > 0){
					ready_tu();
					wordDisplay_tu();
				}else {
					timer_stop = true;
					next();
				}
			}	
    
    }
};

socket.on('next',rand =>{
	word_num = rand;
	ready();
	wordDisplay();
});
socket.on('life', (my_life, his_life) =>{//どちらかがお題を打ち終わると送られる
		skill_flag = false;
    mylife = my_life;
    hislife = his_life;
		mylife_img.style.visibility ="visible";
		document.getElementById("mylife_img").src = "static/mylife_"+mylife+".jpg";
		hislife_img.style.visibility ="visible";
		document.getElementById("hislife_img").src = "static/hislife_"+hislife+".jpg";
});
socket.on('ready',player_no =>{
	mynum = player_no;
	gameStart();
	//console.log('mynum = ' + mynum);
	next_skill_flag = false;
	document.getElementById("skill_img").src = "static/skill_0.jpg";
	mylife_img.style.visibility ="hidden";
	hislife_img.style.visibility ="hidden";
	skill_img.style.visibility ="hidden";
	
});
socket.on('judge',() =>{
	document.getElementById('battle_audio').pause();
  word.innerHTML="";
	japanese.innerHTML="";
	count_online.innerHTML="";
    if (mylife === 0){
				document.getElementById('lose_audio').currentTime = 0;
				document.getElementById('lose_audio').play();	
        winlose.innerHTML="you lose...";
        //console.log('you lose');
    } else {
				document.getElementById('win_audio').currentTime = 0;
				document.getElementById('win_audio').play();	
        winlose.innerHTML="you win!!!";
        //console.log('you win');
    }
    finish();
});
socket.on('ojama',() =>{
	next_skill_flag = true;
});
socket.on('enemy_left',() =>{
	countStop_flag = true;
	word.innerHTML="";
	japanese.innerHTML="";
	count_online.innerHTML="";
	wait_matching.innerHTML = "対戦相手を探しています";
	//console.log('enemyleft')
  finish();
});
socket.on('room_full',() =>{
  roomOut();
});
socket.on('room',(room1,room2,room3,room4,room5,room6,room7,room8,room9,room10,room11,room12,room13,room14,room15) =>{
                                  //   //console.log("room");
	if(!online_flag){
		document.getElementById("start_button1").value=("room1 " + room1 + "/2");
		document.getElementById("start_button2").value=("room2 " + room2 + "/2");
		document.getElementById("start_button3").value=("room3 " + room3 + "/2");
		document.getElementById("start_button4").value=("room4 " + room4 + "/2");
		document.getElementById("start_button5").value=("room5 " + room5 + "/2");
		document.getElementById("start_button6").value=("room6 " + room6 + "/2");
		document.getElementById("start_button7").value=("room7 " + room7 + "/2");
		document.getElementById("start_button8").value=("room8 " + room8 + "/2");
		document.getElementById("start_button9").value=("room9 " + room9 + "/2");
		document.getElementById("start_button10").value=("room10 " + room10 + "/2");
		document.getElementById("start_button11").value=("room11 " + room11 + "/2");
		document.getElementById("start_button12").value=("room12 " + room12 + "/2");
		document.getElementById("start_button13").value=("room13 " + room13 + "/2");
		document.getElementById("start_button14").value=("room14 " + room14 + "/2");
		document.getElementById("start_button15").value=("room15 " + room15 + "/2");
	}
});

function timer(){
		timer_stop = false;
		type_time = 0;
                                     //console.log("timer");
		var playtime = setInterval(function(){
			type_time += 0.1;  
			if(timer_stop){
				clearInterval(playtime);
			}
		},100);
} 

function mainImage(){
	$('body').css('background-image','url(static/main.jpg)');
	if(!online_flag){
		document.getElementById('battle_audio').pause();
		document.getElementById('main_audio').play();
	}
}

function onlineImage(){
	if(online_flag){
		$('body').css('background-image','url(static/battle.jpg)');
	} else {
		$('body').css('background-image','url(static/main.jpg)');
		document.getElementById('battle_audio').pause();
		document.getElementById('main_audio').play();
	}
}

function mute(){
    if(mute_flag){
				document.getElementById("mute_button").value=("off");
        document.getElementById('battle_audio').muted = false;
				document.getElementById('button_audio').muted = false;
				document.getElementById('lose_audio').muted = false;
				document.getElementById('main_audio').muted = false;
				document.getElementById('matching_audio').muted = false;
				document.getElementById('miss_audio').muted = false;
				document.getElementById('skill_audio').muted = false;
				document.getElementById('skilled_audio').muted = false;
				document.getElementById('type_audio').muted = false;
				document.getElementById('win_audio').muted = false;

				mute_flag = false
    }else{
				document.getElementById("mute_button").value=("on");
        document.getElementById('battle_audio').muted = true;
				document.getElementById('button_audio').muted = true;
				document.getElementById('lose_audio').muted = true;
				document.getElementById('main_audio').muted = true;
				document.getElementById('matching_audio').muted = true;
				document.getElementById('miss_audio').muted = true;
				document.getElementById('skill_audio').muted = true;
				document.getElementById('skilled_audio').muted = true;
				document.getElementById('type_audio').muted = true;
				document.getElementById('win_audio').muted = true;
				
				mute_flag = true;
    }
}


function gameStart_solo(){
                                     //console.log("gameStart_solo"); 
		document.getElementById('button_audio').currentTime = 0;
		document.getElementById('button_audio').play();
		$('body').css('background-image','url(static/battle.jpg)');
		mylife_img.style.visibility ="hidden";
		hislife_img.style.visibility ="hidden";
		skill_img.style.visibility ="hidden";
		count_online.innerHTML = "";
		japanese.innerHTML = "";
		word.innerHTML = "";
		winlose.innerHTML = "";
		scoredis.innerHTML = "";
		wait_matching.innerHTML = "";
		syoshin.innerHTML = "初心者ルーム";
		chukyu.innerHTML = "中級者ルーム";
		joukyu.innerHTML = "上級者ルーム";
		start_button1.style.visibility ="visible";
		document.getElementById("start_button1").value="room1";
		start_button1.style.visibility ="visible";
		document.getElementById("start_button2").value="room2";
		start_button2.style.visibility ="visible";
		document.getElementById("start_button3").value="room3";
		start_button3.style.visibility ="visible";
		document.getElementById("start_button4").value="room4";
		start_button4.style.visibility ="visible";
		document.getElementById("start_button5").value="room5";
		start_button5.style.visibility ="visible";
		document.getElementById("start_button6").value="room6";
		start_button6.style.visibility ="visible";
		document.getElementById("start_button7").value="room7";
		start_button7.style.visibility ="visible";
		document.getElementById("start_button8").value="room8";
		start_button8.style.visibility ="visible";
		document.getElementById("start_button9").value="room9";
		start_button9.style.visibility ="visible";
		document.getElementById("start_button10").value="room10";
		start_button10.style.visibility ="visible";
		document.getElementById("start_button11").value="room11";
		start_button11.style.visibility ="visible";
		document.getElementById("start_button12").value="room12";
		start_button12.style.visibility ="visible";
		document.getElementById("start_button13").value="room13";
		start_button13.style.visibility ="visible";
		document.getElementById("start_button14").value="room14";
		start_button14.style.visibility ="visible";
		document.getElementById("start_button15").value="room15";
		start_button15.style.visibility ="visible";
		
		if(online_flag){
			socket.emit('offline');																 
			online_flag = false;
			round1_flag = true;
		}
		solo_flag = true;
		tutorial_flag = false;
		playcount = 5;
		score = 0.0;
		mistake = 0;
		correct = 0;
		scoredis_solo.innerHTML="";
		start_button_solo.style.visibility ="hidden";
		timer();
		ready_solo();
		wordDisplay_solo();
}
function ready_solo(){
                                     //console.log("ready_solo");
		start_flag = false;
		readytime_solo = 5;
		count_solo.innerHTML=readytime_solo;
		readytime_solo--;
		var readytimer_solo = setInterval(function(){
			count_solo.innerHTML=readytime_solo;
			if(readytime_solo == 0)
				count_solo.innerHTML="fight!";
			readytime_solo--;
			if(readytime_solo < 0 || !solo_flag){
				clearInterval(readytimer_solo);
				start_flag = true;
				if(!solo_flag)count_solo.innerHTML = "";
			}
		},1000);
}
function wordDisplay_solo(){
                                     //console.log("wordDisplay_solo");
		word_num = Math.floor( Math.random() * wordlist.length );
    word_solo.innerHTML=wordlist[word_num];
    japanese_solo.innerHTML=wordlistJapanese[word_num];
		play_count.innerHTML = "あと"+playcount+"回";
    charInsort();
}
function finish_solo(){
                                         //console.log("finish_solo"); 
		timer_stop = true;
		type_time = Math.round((type_time - playNum * 5) *10 ) / 10;
		start_button_solo.style.visibility ="visible";
		document.getElementById("start_button_solo").value="Replay";
		word_solo.innerHTML="";
		japanese_solo.innerHTML="";
		play_count.innerHTML = "";
		count_solo.innerHTML="";
		start_flag = false;
		scoredis_solo.innerHTML="<hr>正タイプ数:"+correct+"<br>ミスタイプ数:"+mistake+"<br>正答率:"+(correct/(correct+mistake)*100).toFixed(1)+"%"+"<br>タイピング速度："+ Math.round(correct / type_time  * 10) / 10 +"文字/秒";
		word_char=0;
		char_num = 0;
}

function tutorial(){
                                     //console.log("tutorialt");
 		document.getElementById('button_audio').currentTime = 0;
		document.getElementById('button_audio').play();
		$('body').css('background-image','url(static/battle.jpg)');
		score = 0.0;
		mistake = 0;
		correct = 0;
		skill_point_tu = 0;
		mylife = LIFE;
		hislife = LIFE;
		if(online_flag){
			socket.emit('offline');																 
			online_flag = false;
		}
		solo_flag = false;
		tutorial_flag = true;
		scoredis_tu.innerHTML="";
		tutorial1.innerHTML="これが対戦画面になります<br>画面中央のカウントダウン終了後、相手と同時にお題を打ち始めます<br>相手よりも先に打ち終わると相手のライフを削ることができます";
		mylife_tu_img.style.visibility ="visible";
		document.getElementById("mylife_tu_img").src = "static/mylife_"+mylife+".jpg";
		hislife_tu_img.style.visibility ="visible";
		document.getElementById("hislife_tu_img").src = "static/mylife_"+hislife+".jpg";
		skill_tu_img.style.visibility ="visible";
		tutorial_button.style.visibility ="hidden";
		document.getElementById("next_button").value = "次へ";
		next_button.style.visibility ="visible"; 
		win_tu.innerHTML="";
		readytime_tu = 5;
		count_tu.innerHTML=readytime_tu;
		wordDisplay_tu();
}
function ready_tu(){
                                     //console.log("ready_tu");
		start_flag = false;
		readytime_tu = 5;
		count_tu.innerHTML=readytime_tu;
		readytime_tu--;
		var readytimer_tu = setInterval(function(){
			count_tu.innerHTML=readytime_tu;
			if(readytime_tu == 0)
				count_tu.innerHTML="fight!";
			readytime_tu--;
			if(readytime_tu < 0){
				clearInterval(readytimer_tu);
				start_flag = true;
			}
		},1000);
}
function next(){
																		//console.log("count = " + count);
		document.getElementById('button_audio').currentTime = 0;
		document.getElementById('button_audio').play();
		if(count == 0){
        tutorial1.innerHTML="また、ミスなくタイピングをすることによって画面左下のスキルゲージを溜め<br>お邪魔スキルを発動することもでき、相手にお邪魔文字を送ることができます";
		}else if(count == 1){
        tutorial1.innerHTML="スキルゲージは負けている時ほど溜まりやすいので<br>ミスをせずにタイピングして逆転を狙いましょう！";
		}else if(count == 2){
        tutorial1.innerHTML="それでは一度やってみましょう！";
		}else if(count == 3){
			next_button.style.visibility ="hidden"; 
			tutorial1.innerHTML="";
			timer();
			ready_tu();
		}else if(count == 4){
        tutorial1.innerHTML="相手よりも先に打ち終ったので<br>相手のライフを削ることができました！";
				next_button.style.visibility ="visible";				
		}else if(count == 5){
        tutorial1.innerHTML="おや？お題の最後に赤い文字が追加されていますね<br>これがお邪魔スキルによるお邪魔文字です";
				readytime_tu = 5;
				count_tu.innerHTML=readytime_tu;
				wordDisplay_tu();
		}else if(count == 6){
        tutorial1.innerHTML="説明は以上です<br>相手のライフが無くなるまでプレイしてください";
		}else if(count == 7){      
        readytime_tu = 5;
				count_tu.innerHTML=readytime_tu;
        next_button.style.visibility ="hidden"; 
        tutorial1.innerHTML="";
				timer();
        ready_tu();
    }else if(count == 8){
        tutorial1.innerHTML="相手のライフがなくなったのであなたの勝利です<br>次に結果画面の説明です";
				next_button.style.visibility ="visible";
		}else if(count == 9){
        tutorial1.innerHTML="上から正タイプ数、ミスタイプ数、正答率,タイピング速度になります<br>以上でチュートリアルを終了します<br>さらなる速さを求めてたくさん挑戦してみてください！";
				finish_tu();
				document.getElementById("next_button").value = "初めから見る";
		}else if(count == 10){
			tutorial();
			count = -1;
		}
    count++;  
}
function wordDisplay_tu(){
                                     //console.log("wordDisplay_tu");
    word_num = Math.floor( Math.random() * wordlist.length );
		skill_num = Math.floor( Math.random() * skill_word.length );
    wordlist = wordlists.slice();
    if(hislife == 4){
    wordlist[word_num] += skill_word[skill_num];
    word_tu.innerHTML=wordlist[word_num].substr(0,wordlist[word_num].length-1)+"<span style='color: red;'>"+wordlist[word_num].substr(wordlist[word_num].length-1,wordlist[word_num].length)+"</span>";
    }else{
    word_tu.innerHTML=wordlist[word_num];
    }
    japanese_tu.innerHTML=wordlistJapanese[word_num];
    charInsort();
}

function life_tu(){
    hislife--;
    mylife_img.style.visibility ="visible";
		document.getElementById("mylife_tu_img").src = "static/mylife_"+mylife+".jpg";
		hislife_img.style.visibility ="visible";
		document.getElementById("hislife_tu_img").src = "static/hislife_"+hislife+".jpg";
		
}


function finish_tu(){
                                         //console.log("finish_tu"); 
		timer_stop = true;
		type_time = Math.round((type_time + type_time_tu - (playNum) * 5) *10 ) / 10;
//console.log("type_time = " + type_time);
		win_tu.innerHTML="You Win!";
		word_tu.innerHTML="";
		japanese_tu.innerHTML="";
		count_tu.innerHTML="";
		start_flag = false;
		scoredis_tu.innerHTML="<hr>正タイプ数:"+correct+"<br>ミスタイプ数:"+mistake+"<br>正答率:"+(correct/(correct+mistake)*100).toFixed(1)+"%"+"<br>タイピング速度："+ Math.round(correct / type_time  * 10) / 10 +"文字/秒";
		word_char=0;
		char_num = 0;
}