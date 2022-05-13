/*setting*/
var array = [[ 5, 3,[],[], 7,[],[],[],[]]
            ,[ 6,[],[], 1, 9, 5,[],[],[]]
            ,[[], 9, 8,[],[],[],[], 6,[]]
            ,[ 8,[],[],[], 6,[],[],[], 3]
            ,[ 4,[],[], 8,[], 3,[],[], 1]
            ,[ 7,[],[],[], 2,[],[],[], 6]
            ,[[], 6,[],[],[],[], 2, 8,[]]
            ,[[],[],[], 4, 1, 9,[],[], 5]
            ,[[],[],[],[], 8,[],[], 7, 9]];

var check = [[[],[],[],[],[],[],[],[],[]]
            ,[[],[],[],[],[],[],[],[],[]]
            ,[[],[],[],[],[],[],[],[],[]]
            ,[[],[],[],[],[],[],[],[],[]]
            ,[[],[],[],[],[],[],[],[],[]]
            ,[[],[],[],[],[],[],[],[],[]]
            ,[[],[],[],[],[],[],[],[],[]]
            ,[[],[],[],[],[],[],[],[],[]]
            ,[[],[],[],[],[],[],[],[],[]]];

var find_out_yellow = [[[],[],[],[],[],[],[],[],[]]
                      ,[[],[],[],[],[],[],[],[],[]]
                      ,[[],[],[],[],[],[],[],[],[]]
                      ,[[],[],[],[],[],[],[],[],[]]
                      ,[[],[],[],[],[],[],[],[],[]]
                      ,[[],[],[],[],[],[],[],[],[]]
                      ,[[],[],[],[],[],[],[],[],[]]
                      ,[[],[],[],[],[],[],[],[],[]]
                      ,[[],[],[],[],[],[],[],[],[]]];

var find_out_duplicate_numbers = [[[],[],[],[],[],[],[],[],[]]
                                 ,[[],[],[],[],[],[],[],[],[]]
                                 ,[[],[],[],[],[],[],[],[],[]]
                                 ,[[],[],[],[],[],[],[],[],[]]
                                 ,[[],[],[],[],[],[],[],[],[]]
                                 ,[[],[],[],[],[],[],[],[],[]]
                                 ,[[],[],[],[],[],[],[],[],[]]
                                 ,[[],[],[],[],[],[],[],[],[]]
                                 ,[[],[],[],[],[],[],[],[],[]]];

var corrected = [[0,0,0,0,0,0,0,0,0]
                ,[0,0,0,0,0,0,0,0,0]
                ,[0,0,0,0,0,0,0,0,0]
                ,[0,0,0,0,0,0,0,0,0]
                ,[0,0,0,0,0,0,0,0,0]
                ,[0,0,0,0,0,0,0,0,0]
                ,[0,0,0,0,0,0,0,0,0]
                ,[0,0,0,0,0,0,0,0,0]
                ,[0,0,0,0,0,0,0,0,0]];

var row = [[0,0,0,0,0,0,0,0,0]
          ,[0,0,0,0,0,0,0,0,0]
          ,[0,0,0,0,0,0,0,0,0]
          ,[0,0,0,0,0,0,0,0,0]
          ,[0,0,0,0,0,0,0,0,0]
          ,[0,0,0,0,0,0,0,0,0]
          ,[0,0,0,0,0,0,0,0,0]
          ,[0,0,0,0,0,0,0,0,0]
          ,[0,0,0,0,0,0,0,0,0]];

var column = [[0,0,0,0,0,0,0,0,0]
             ,[0,0,0,0,0,0,0,0,0]
             ,[0,0,0,0,0,0,0,0,0]
             ,[0,0,0,0,0,0,0,0,0]
             ,[0,0,0,0,0,0,0,0,0]
             ,[0,0,0,0,0,0,0,0,0]
             ,[0,0,0,0,0,0,0,0,0]
             ,[0,0,0,0,0,0,0,0,0]
             ,[0,0,0,0,0,0,0,0,0]];

var block = [[0,0,0,0,0,0,0,0,0]
            ,[0,0,0,0,0,0,0,0,0]
            ,[0,0,0,0,0,0,0,0,0]
            ,[0,0,0,0,0,0,0,0,0]
            ,[0,0,0,0,0,0,0,0,0]
            ,[0,0,0,0,0,0,0,0,0]
            ,[0,0,0,0,0,0,0,0,0]
            ,[0,0,0,0,0,0,0,0,0]
            ,[0,0,0,0,0,0,0,0,0]];

/*load the setting data*/            
for ( var i = 0 ; i < 9 ; i ++ ){
    for ( var j = 0 ; j < 9 ; j ++ ){
        var pointer = document.getElementById("block-"+ (i+1) + (j+1) );
        pointer.innerText = array[i][j];
        pointer.style.fontSize = "40px";
        pointer.style.fontFamily = "Sans-serif";
        pointer.style.textAlign = "center";
        pointer.style.lineHeight = "60px";
        if ( array[i][j] == "" ){
            check[i][j] = 0;
        }
        else{
            check[i][j] = 1;
            pointer.style.backgroundColor = "gray";
            pointer.style.color = "black";
        }
    }
}
function victroy_title_appearing(){
    var title = document.getElementById("victory_title");
    title.innerText = "VICTORY";
    title.style.fontSize = "60px";
    title.style.fontFamily = "fantasy";
    title.style.transform = "translate(-50%,0%)";
    title.style.left = "50%";
}
function mousemove_play(){
    const AUDIO = new Audio("music/Mousemove.mp3");
    AUDIO.play();
}
function rewind_play(){
    const AUDIO = new Audio("music/We_will_Be_Right_Back.mp3");
    AUDIO.play();
    var object = document.getElementById("victory");
    object.remove();
    var load = document.getElementById("loading");
    load.style.width = "400px";
    load.style.height = "200px";
    load.style.backgroundColor = "rgb(102,255,255)";
    load.style.border = "5px solid black";
    load.style.borderRadius = "10px";
    load.style.transform = "translate(0%,75%)";
    load.innerText = "Loading";
    load.style.textAlign = "center";
    load.style.lineHeight = "200px";
    load.style.fontFamily = "fantasy";
    load.style.fontSize = "50px";
    setTimeout(function(){ load.innerText = "Loading."},1000);
    setTimeout(function(){ load.innerText = "Loading.."},2000);
    setTimeout(function(){ load.innerText = "Loading..."},3000);
    setTimeout(function(){window.location.reload()},4000);
}
function thankyou(){
    const AUDIO = new Audio("music/GTA_SA_Sound_Effect.mp3");
    AUDIO.play();
    var board = document.getElementById("victory");
    board.remove();
    var thank = document.getElementById("thankyou");
    thank.style.width = "400px";
    thank.style.height = "200px";
    //thank.style.backgroundColor = "white";
    thank.style.border = "5px solid black";
    thank.style.top = "150px";
    thank.style.backgroundImage = "url(https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)";
    thank.style.animationName = "moveup_fade_in";
    thank.style.animationDuration = "1000ms";
    thank.style.animationIterationCount = "1";
    thank.innerHTML = thank.innerHTML + `
    <div id = "sentence"></div>
    <div id = "title"></div>
    <div id = "contexts"></div>
    <div id = "title2"></div>
    <div id = "contexts2"></div>
    <div id = "title3"></div>
    <div id = "contexts3"></div>
    <div id = "title4"></div>
    <div id = "contexts4"></div>
    <div id = "contexts5"></div>
    <img id = "picture3"></img>
    `;
    var sentence = document.getElementById("sentence");
    var title = document.getElementById("title");
    var contexts = document.getElementById("contexts");
    var title2 = document.getElementById("title2");
    var contexts2 = document.getElementById("contexts2");
    var title3 = document.getElementById("title3");
    var contexts3 = document.getElementById("contexts3");
    var title4 = document.getElementById("title4");
    var contexts4 = document.getElementById("contexts4");
    var contexts5 = document.getElementById("contexts5");
    var picture3 = document.getElementById("picture3");
    sentence.innerText = "Thank you\nfor playing";
    sentence.style.fontFamily = "fantasy";
    sentence.style.fontSize = "50px";
    sentence.style.top = "20%";
    sentence.style.left = "25%";
    setTimeout(function(){
        sentence.style.animationName = "fade_out";
        sentence.style.animationDuration = "1000ms";
        sentence.style.animationIterationCount = "1";
        setTimeout(function(){
            sentence.remove();
            title.innerText = "STAFF";
            contexts.innerText = "Director:Chendy Lee\nDesigner:Chendy Lee\nEngineer:Chendy Lee";
            title.style.fontFamily = "fantasy";
            contexts.style.fontFamily = "fantasy";
            title.style.fontSize = "50px";
            contexts.style.fontSize = "30px";
            title.style.animationName = "fade_in";
            contexts.style.animationName = "fade_in";
            title.style.animationDuration = "1000ms";
            contexts.style.animationDuration = "1000ms";
            title.style.animationIterationCount = "1";
            contexts.style.animationIterationCount = "1";
            title.style.textAlign = "center";
            contexts.style.textAlign = "center";
            setTimeout(function(){
                title.style.animationName = "fade_out";
                contexts.style.animationName = "fade_out";
                title.style.animationDuration = "1000ms";
                contexts.style.animationDuration = "1000ms";
                title.style.animationIterationCount = "1";
                contexts.style.animationIterationCount = "1";
                setTimeout(function(){
                    title.remove();
                    contexts.remove();
                    title2.innerText = "TIME SPENT ON PROJECT";
                    contexts2.innerText = "About 1 month";
                    contexts2.style.color = "red";
                    title2.style.fontSize = "40px";
                    contexts2.style.fontSize = "30px";
                    title2.style.fontFamily = "fantasy";
                    contexts2.style.fontFamily = "fantasy";
                    title2.style.animationName = "fade_in";
                    contexts2.style.animationName = "fade_in";
                    title2.style.animationDuration = "1000ms";
                    contexts2.style.animationDuration = "1000ms";
                    title2.style.animationIterationCount = "1";
                    contexts2.style.animationIterationCount = "1";
                    title2.style.textAlign = "center";
                    contexts2.style.textAlign = "center";
                    contexts2.style.lineHeight = "100px";
                    setTimeout(function(){
                        title2.style.animationName = "fade_out";
                        contexts2.style.animationName = "fade_out";
                        title2.style.animationDuration = "1000ms";
                        contexts2.style.animationDuration = "1000ms";
                        title2.style.animationIterationCount = "1";
                        contexts2.style.animationIterationCount = "1";
                        setTimeout(function(){
                            title2.remove();
                            contexts2.remove();
                            title3.innerText = "PROGRAMMING LANGUAGE";
                            contexts3.innerText = "Front-End(HTML/CSS/JavaScript)";
                            contexts3.style.color = "blue";
                            title3.style.fontFamily = "fantasy";
                            contexts3.style.fontFamily = "fantasy";
                            title3.style.fontSize = "35px";
                            contexts3.style.fontSize = "30px";
                            contexts3.style.lineHeight = "100px";
                            title3.style.animationName = "fade_in";
                            contexts3.style.animationName = "fade_in";
                            title3.style.animationDuration = "1000ms";
                            contexts3.style.animationDuration = "1000ms";
                            title3.style.animationIterationCount = "1";
                            contexts3.style.animationIterationCount = "1";
                            title3.style.textAlign = "center";
                            contexts3.style.textAlign = "center";
                            setTimeout(function(){
                                title3.style.animationName = "fade_out";
                                contexts3.style.animationName = "fade_out";
                                title3.style.animationDuration = "1000ms";
                                contexts3.style.animationDuration = "1000ms";
                                title3.style.animationIterationCount = "1";
                                contexts3.style.animationIterationCount = "1";
                                setTimeout(function(){
                                    title3.remove();
                                    contexts3.remove();
                                    title4.innerText = "THOUGHTS FOR CODING";
                                    contexts4.innerText = "Honestly, it hard to prepare\nthis work. QQ";
                                    contexts4.style.color = "blue";
                                    title4.style.fontFamily = "fantasy";
                                    contexts4.style.fontFamily = "fantasy";
                                    title4.style.fontSize = "35px";
                                    contexts4.style.fontSize = "30px";
                                    title4.style.animationName = "fade_in";
                                    contexts4.style.animationName = "fade_in";
                                    title4.style.animationDuration = "1000ms";
                                    contexts4.style.animationDuration = "1000ms";
                                    title4.style.animationIterationCount = "1";
                                    contexts4.style.animationIterationCount = "1";
                                    title4.style.textAlign = "center";
                                    contexts4.style.textAlign = "center";
                                    setTimeout(function(){
                                        contexts4.style.animationName = "fade_out";
                                        contexts4.style.animationDuration = "1000ms";
                                        contexts4.style.animationIterationCount = "1";
                                        setTimeout(function(){
                                            contexts4.remove();
                                            contexts5.innerText = "But I believe the experience is worthwhile!";
                                            contexts5.style.color = "blue";
                                            contexts5.style.fontFamily = "fantasy";
                                            contexts5.style.fontSize = "30px";
                                            contexts5.style.animationName = "fade_in";
                                            contexts5.style.animationDuration = "1000ms";
                                            contexts5.style.animationIterationCount = "1";
                                            contexts5.style.textAlign = "center";
                                            setTimeout(function(){
                                                title4.style.animationName = "fade_out";
                                                title4.style.animationDuration = "1000ms";
                                                title4.style.animationIterationCount = "1";
                                                contexts5.style.animationName = "fade_out";
                                                contexts5.style.animationDuration = "1000ms";
                                                contexts5.style.animationIterationCount = "1";
                                                setTimeout(function(){
                                                    title4.remove();
                                                    contexts5.remove();
                                                    thank.style.animationName = "fade_out";
                                                    thank.style.animationDuration = "1000ms";
                                                    thank.style.animationIterationCount = "1";
                                                    setTimeout(function(){
                                                        thank.remove();
                                                        setTimeout(function(){window.location.reload()},1000);
                                                    },1000);
                                                },900);
                                            },2000);
                                        },900);
                                    },2000);
                                },900);
                            },2000);
                        },900);
                    },2000);
                },900);
            },2000);
        },900);
    },2000);
}
/*show the victory screen*/
function victory(){
    const AUDIO = new Audio("music/Win.mp3");
    AUDIO.play();
    var board = document.getElementById("victory");
    board.style.width = "520px";
    board.style.height = "200px";
    board.style.border = "10px solid black";
    board.style.animationName = "rotating";
    board.style.animationDuration = "1000ms";
    board.style.animationIterationCount = "1";
    board.innerHTML = board.innerHTML + `
    <div id = "victory_title"></div>
    <div id = "question"></div>
    <div id = "yes"></div>
    <div id = "no"></div>
    `;
    victroy_title_appearing();
    setTimeout(function(){
        var word = document.getElementById("question");
        word.style.animationName = "fade_in";
        word.style.animationDuration = "500ms";
        word.style.animationIterationCount = "1";
        word.innerText = "Do you want to try again ?";
        word.style.fontSize = "50px";
        word.style.fontFamily = "fantasy";
        word.style.top = "30%";
        setTimeout(function(){
            var yesbotton = document.getElementById("yes");
            var nobotton = document.getElementById("no");
            //botton for yes
            yesbotton.style.animationName = "fade_in";
            yesbotton.style.animationDuration = "500ms";
            yesbotton.style.animationIterationCount = "1";
            yesbotton.innerText = "Yes";
            yesbotton.style.fontSize = "50px";
            yesbotton.style.fontFamily = "fantasy";
            yesbotton.style.bottom = "10%";
            yesbotton.style.left = "25%";
            yesbotton.addEventListener("mouseenter",function(){
                this.style.color = "yellow";
                mousemove_play();
            })
            yesbotton.addEventListener("mouseout",function(){
                this.style.color = "black";
            })
            yesbotton.addEventListener("click",function(){
                rewind_play();
            })
            //botton for no
            nobotton.style.animationName = "fade_in";
            nobotton.style.animationDuration = "500ms";
            nobotton.style.animationIterationCount = "1";
            nobotton.innerText = "No";
            nobotton.style.fontSize = "50px";
            nobotton.style.fontFamily = "fantasy";
            nobotton.style.bottom = "10%";
            nobotton.style.right = "25%";
            nobotton.addEventListener("mouseenter",function(){
                this.style.color = "yellow";
                mousemove_play();
            })
            nobotton.addEventListener("mouseout",function(){
                this.style.color = "black";
            })
            nobotton.addEventListener("click",function(){
                thankyou();
            })
        }, 500);
    }, 1500 );
}
/*single out the duplicate numbers in the same row or column or block*/
function single_out(number,m,n){
    var x,y,s,t,a,b;
    /*judge the same row*/
    for ( x = 0; x < 9; x ++ ){
        if ( x == n ){
            continue;
        }
        if ( number == array[m][x]){
            find_out_duplicate_numbers[m][n] = document.getElementById("block-"+ (m+1) + (n+1) );
            find_out_duplicate_numbers[m][x] = document.getElementById("block-"+ (m+1) + (x+1) );
            find_out_duplicate_numbers[m][n].style.color = "red";
            find_out_duplicate_numbers[m][x].style.color = "red";
        }
        else{
            corrected[m][n] += 1;
            row[m][x] += 3;
        }
    }
    /*judge the same column*/
    for ( x = 0; x < 9; x ++ ){
        if ( x == m ){
            continue;
        }
        if ( number == array[x][n]){
            find_out_duplicate_numbers[m][n] = document.getElementById("block-"+ (m+1) + (n+1) );
            find_out_duplicate_numbers[x][n] = document.getElementById("block-"+ (x+1) + (n+1) );
            find_out_duplicate_numbers[m][n].style.color = "red";
            find_out_duplicate_numbers[x][n].style.color = "red";
        }
        else{
            corrected[m][n] += 1;
            column[x][n] += 3;
        }
    }
    /*judge the same block*/
    for ( s = 0 ; s <= 9 ; s += 3 ){
        if ( m >= s && m <= (s+2)){
            for ( t= 0 ; t <= 9 ; t+= 3 ){
                if ( n>= t && n <= (t+2)){
                    for ( x = s; x <= (s+2); x ++ ){
                        for ( y = t; y <= (t+2); y ++ ){
                            if ( x == m || y == n ){
                                continue;
                            }
                            if ( number == array[x][y]){
                                find_out_duplicate_numbers[m][n] = document.getElementById("block-"+ (m+1) + (n+1) );
                                find_out_duplicate_numbers[x][y] = document.getElementById("block-"+ (x+1) + (y+1) );
                                find_out_duplicate_numbers[m][n].style.color = "red";
                                find_out_duplicate_numbers[x][y].style.color = "red";
                            }
                            else{
                                corrected[m][n] += 1;
                                block[x][y] += 3;
                            }
                        }
                    }
                }
            }
        }
    }
    /*change back black if corrected*/
    for ( x = 0 ; x < 9 ; x ++ ){
        for ( y = 0 ; y < 9 ; y ++ ){
            //console.log("corrected"+x+y+"="+corrected[x][y]+"\t"+row[x][y]+" "+column[x][y]+" "+block[x][y],"\n");
            if (corrected[x][y] == 20){
                corrected[x][y] = document.getElementById("block-"+ (x+1) + (y+1) );
                corrected[x][y].style.color = "black";
            }
                for ( s = 0 ; s < 9 ; s ++ ){//correct the row
                    if ( s == y ){
                        continue;
                    }
                    else{
                        if ((row[x][s]==3)&&(array[x][y]!=array[x][s])){
                            corrected[x][s] = document.getElementById("block-"+ (x+1) + (s+1) );
                            corrected[x][s].style.color = "black";
                            var lower_bound = 1;
                            for ( a = 0 ; a < 8 ; a ++ ){
                                for ( b = lower_bound ; b < 9 ; b ++ ){
                                    if (array[x][a] == array[x][b]){
                                        corrected[x][a] = document.getElementById("block-"+ (x+1) + (a+1) );
                                        corrected[x][b] = document.getElementById("block-"+ (x+1) + (b+1) );
                                        corrected[x][a].style.color = "red";
                                        corrected[x][b].style.color = "red";
                                    }
                                }
                                lower_bound ++;
                            }
                            corrected[x][s] = 0;
                        }
                    }
                }
                for ( t = 0 ; t < 9 ; t ++ ){//correct the column
                    if ( t == x ){
                        continue;
                    }
                    else{
                        if ((column[t][y]==3)&&(array[x][y]!=array[t][y])){
                            corrected[t][y] = document.getElementById("block-"+ (t+1) + (y+1) );
                            corrected[t][y].style.color = "black";
                            var lower_bound = 1;
                            for ( a = 0 ; a < 8 ; a ++ ){
                                for ( b = lower_bound ; b < 9 ; b ++ ){
                                    if (array[a][y] == array[b][y]){
                                        corrected[a][y] = document.getElementById("block-"+ (a+1) + (y+1) );
                                        corrected[b][y] = document.getElementById("block-"+ (b+1) + (y+1) );
                                        corrected[a][y].style.color = "red";
                                        corrected[b][y].style.color = "red"; 
                                    }
                                }
                                lower_bound ++;
                            }
                            corrected[t][y] = 0;
                        }
                    }
                }
                for ( s = 0 ; s < 9 ; s += 3 ){
                    if ( x >= s && x <= (s+2) ){
                        for ( t = 0 ; t < 9 ; t += 3 ){
                            if ( y >= t && y <= (t+2) ){
                                for ( a = s ; a <= (s+2) ; a ++ ){
                                    for ( b = t ; b <= (t+2) ; b ++ ){
                                        if ( a == x || b == y ){
                                            continue;
                                        }
                                        else{
                                            if ((block[a][b]==3)&&(array[x][y]!=array[a][b])){
                                                corrected[a][b] = document.getElementById("block-"+ (a+1) + (b+1) );
                                                corrected[a][b].style.color = "black";
                                            }
                                        }
                                    }
                                }
                                if ( array[s][t] == array[s+2][t] ){
                                    corrected[s][t] = document.getElementById("block-"+ (s+1) + (t+1) );
                                    corrected[s+2][t] = document.getElementById("block-"+ (s+3) + (t+1) );
                                }
                                if ( array[s][t] == array[s][t+2] ){
                                    corrected[s][t] = document.getElementById("block-"+ (s+1) + (t+1) );
                                    corrected[s][t+2] = document.getElementById("block-"+ (s+1) + (t+3) );
                                }
                                if ( array[s][t] == array[s+2][t+2] ){
                                    corrected[s][t] = document.getElementById("block-"+ (s+1) + (t+1) );
                                    corrected[s+2][t+2] = document.getElementById("block-"+ (s+3) + (t+3) );
                                }
                                if ( array[s+2][t] == array[s][t+2] ){
                                    corrected[s+2][t] = document.getElementById("block-"+ (s+3) + (t+1) );
                                    corrected[s][t+2] = document.getElementById("block-"+ (s+1) + (t+3) );
                                }
                                if ( array[s+2][t] == array[s+2][t+2] ){
                                    corrected[s+2][t] = document.getElementById("block-"+ (s+3) + (t+1) );
                                    corrected[s+2][t+2] = document.getElementById("block-"+ (s+3) + (t+3) );
                                }
                                if ( array[s][t+2] == array[s+2][t+2] ){
                                    corrected[s][t+2] = document.getElementById("block-"+ (s+1) + (t+3) );
                                    corrected[s+2][t+2] = document.getElementById("block-"+ (s+3) + (t+3) );
                                }
                            }
                        }
                    }
                }    
            corrected[x][y] = 0;
        }
    }
    for ( x = 0 ; x < 9 ; x ++ ){//make all the entries trun back to zeros 
        for ( y = 0 ; y < 9 ; y ++ ){
            row[x][y] = 0;
            column[x][y] = 0;
            block[x][y] = 0;
        }
    }
}
/*check whether all the inputed numbers satisfy all the conditions*/
function conditions_review(){
    //conditions for rows
    var x,y,z,a,b,row_accumulation = 0,column_accumulation = 0,block_accumulation = 0;
    for ( y = 0 ; y < 9 ; y ++ ){
        for ( x = 0 ; x < 9 ; x ++ ){
            if (array[y][x] == 1)      row[y][0] = 1;
            else if (array[y][x] == 2) row[y][1] = 1;
            else if (array[y][x] == 3) row[y][2] = 1;
            else if (array[y][x] == 4) row[y][3] = 1;
            else if (array[y][x] == 5) row[y][4] = 1;
            else if (array[y][x] == 6) row[y][5] = 1;
            else if (array[y][x] == 7) row[y][6] = 1;
            else if (array[y][x] == 8) row[y][7] = 1;
            else if (array[y][x] == 9) row[y][8] = 1;
            else console.log("ERROR");
        }
    }
    for ( y = 0 ; y < 9 ; y ++ ){
        for ( x = 0 ; x < 9 ; x ++ ){
            console.log("row["+y+"]["+x+"] = "+ row[y][x]);
            row_accumulation += row[y][x];
            row[y][x] = 0;
        }
    }
    //conditions for columns
    for ( x = 0 ; x < 9 ; x ++ ){
        for ( y = 0 ; y < 9 ; y ++ ){
            if (array[y][x] == 1)      column[x][0] = 1;
            else if (array[y][x] == 2) column[x][1] = 1;
            else if (array[y][x] == 3) column[x][2] = 1;
            else if (array[y][x] == 4) column[x][3] = 1;
            else if (array[y][x] == 5) column[x][4] = 1;
            else if (array[y][x] == 6) column[x][5] = 1;
            else if (array[y][x] == 7) column[x][6] = 1;
            else if (array[y][x] == 8) column[x][7] = 1;
            else if (array[y][x] == 9) column[x][8] = 1;
            else console.log("ERROR");
        }
    }
    for ( y = 0 ; y < 9 ; y ++ ){
        for ( x = 0 ; x < 9 ; x ++ ){
            console.log("column["+y+"]["+x+"] = "+ column[y][x]);
            column_accumulation += column[y][x];
            column[y][x] = 0;
        }
    }
    //conditions for blocks
    z = 0;
    for ( a = 0 ; a < 9 ; a += 3 ){
        for ( b = 0 ; b < 9 ; b += 3 ){
            for ( x = a ; x <= (a+2) ; x ++ ){
                for ( y = b ; y <= (b+2) ; y ++ ){
                    if (array[x][y] == 1)      block[z][0] = 1;
                    else if (array[x][y] == 2) block[z][1] = 1;
                    else if (array[x][y] == 3) block[z][2] = 1;
                    else if (array[x][y] == 4) block[z][3] = 1;
                    else if (array[x][y] == 5) block[z][4] = 1;
                    else if (array[x][y] == 6) block[z][5] = 1;
                    else if (array[x][y] == 7) block[z][6] = 1;
                    else if (array[x][y] == 8) block[z][7] = 1;
                    else if (array[x][y] == 9) block[z][8] = 1;
                    else console.log("ERROR");
                }
            }
            z ++;
        }
    }
    for ( x = 0 ; x < 9 ; x ++ ){
        for ( y = 0 ; y < 9 ; y ++ ){
            console.log("block["+x+"]["+y+"] = "+ block[x][y]);
            block_accumulation += block[x][y];
            block[x][y] = 0;
        }
    }
    console.log("row total:"+row_accumulation);
    console.log("column total:"+column_accumulation);
    console.log("block total:"+block_accumulation);
    if ( row_accumulation == 81 && column_accumulation == 81 && block_accumulation == 81 ){
        victory();
    }
    else{
        var screen = document.getElementById("victory");
        screen.innerText = " ";
    }
    row_accumulation = 0;
    column_accumulation = 0;
    block_accumulation = 0;
    z = 0;
}
/*input the number from keyboard*/
function input(number){
    var m, n;
    for ( m = 0; m < 9; m ++ ){
        for ( n = 0; n < 9; n ++ ){
            find_out_yellow[m][n] = document.getElementById("block-"+ (m+1) + (n+1) );
            if (find_out_yellow[m][n].style.backgroundColor == "yellow"){
                find_out_yellow[m][n].innerText = number;
                find_out_yellow[m][n].style.color = "black";
                array[m][n] = number;
                single_out(number,m,n);
                conditions_review();
            }
        }
    }
}
/*main function*/
var number = "";
var amount = 0;
for ( var i = 0 ; i < 9 ; i ++ ){
    for ( var j = 0 ; j < 9 ; j ++ ){
        var item = document.getElementById("block-"+ (i+1) + (j+1) );
        if (item.style.backgroundColor != "gray"){
            item.addEventListener("mouseenter",function(){   
                this.style.backgroundColor="yellow";
                window.addEventListener("keypress",function(event){
                    number = event.key;
                    if (number==1||number==2||number==3||number==4||number==5||number==6||number==7||number==8||number==9){
                        input(number);
                    }
                })          
            })
            item.addEventListener("mouseout",function(){
                this.style.backgroundColor="white";
            })
        }
    }
}
var count = 0;
var bottom1 = document.getElementById("bottom1");
var bottom2 = document.getElementById("bottom2");
var bottom3 = document.getElementById("bottom3");
var answer = document.getElementById("answer");
answer.style.opacity = "0%";
bottom1.addEventListener("mouseenter",function(){
    this.style.color = "yellow";
    window.addEventListener("click",function(event){
        if(bottom2.style.color != "yellow"){
            if(bottom3.style.color != "yellow"){
                setTimeout(function(){
                    answer.style.animationName = "fade_in";
                    answer.style.animationDuration = "1000ms";
                    answer.style.animationIterationCount = "1";
                    answer.style.opacity = "100%";
                },1000);
            }
        }
    })
    bottom1.addEventListener("mouseout",function(){
        this.style.color = "azure";
    })
})


bottom2.addEventListener("mouseenter",function(){
    this.style.color = "yellow";
    bottom2.addEventListener("mouseout",function(){
        this.style.color = "azure";
    })
    window.addEventListener("click",function(event){
        if(bottom1.style.color != "yellow"){
            if(bottom3.style.color != "yellow"){
                count++;
                console.log("%d",count);
            }
            if(count == 1){
                console.log("到一了");
                count = 0;
                victory();
            }
        }
    })
})

bottom3.addEventListener("mouseenter",function(){
    this.style.color = "yellow";
    bottom3.addEventListener("mouseout",function(){
        this.style.color = "azure";
    })
    window.addEventListener("click",function(event){
        if(bottom1.style.color != "yellow"){
            if(bottom2.style.color != "yellow"){
                window.location.reload();
            }
        }
    })
})



var pass = " ";
window.addEventListener("keypress",function(event){
    pass = event.key;
    if ( pass == "Enter"){
        console.log("executing the victory function.");
        victory();
        count = 0;
    }
})