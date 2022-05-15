class TicTacToe {
  gameArea = [
    ['-','-','-'],
    ['-','-','-'],
    ['-','-','-']
  ];
  firstPlayerSign;
  secondPlayerSign;
  statusTurnFirst = false;
  statusTurnSecond = false;
  firstArea = document.getElementById("one-area");
  secondArea = document.getElementById("two-area");
  thirdArea = document.getElementById("three-area");
  fourthArea = document.getElementById("four-area");
  fifthArea = document.getElementById("five-area");
  sixthArea = document.getElementById("six-area");
  seventhArea = document.getElementById("seven-area");
  eigthArea = document.getElementById("eigth-area");
  ninthArea = document.getElementById("nine-area");
  parentForBtn = document.getElementsByClassName('wrapper')[0]
  blocksArray = document.getElementsByClassName('block')
  arraySpans = []
  divWithX = document.getElementsByClassName('div-with-x')[0]
  divWithO = document.getElementsByClassName('div-with-o')[0]

  
  constructor() {}
  selectArea() {
    this.checkWinner()
    
    //Выбор знаков
    if(this.randomaizer(1,3) === 1){
      let getTexth2= document.getElementsByClassName('text-for-players')[0]
      getTexth2.innerHTML+=`(FIRST)`
      let getStarterText = document.getElementsByClassName('text-starter')[0]
      let getStarterText2 = document.getElementsByClassName('text-starter2')[0]
      this.divWithX.addEventListener('click',($event)=>{
        this.firstPlayerSign = this.divWithX.textContent|| '';
        this.secondPlayerSign = this.divWithO.textContent|| '';
        alert(`(FIRST) ваш знак (${this.firstPlayerSign})`)
        if(this.randomaizer(1,3) === 1) {
          getStarterText.innerHTML+= ` FIRST( ${this.firstPlayerSign} )`
          getStarterText2.innerHTML+= ` SECOND( ${this.secondPlayerSign} )`
          this.statusTurnFirst = true;
        }else {
          
          getStarterText.innerHTML+= ` SECOND( ${this.secondPlayerSign} )`
          getStarterText2.innerHTML+= ` FIRST( ${this.firstPlayerSign} )`
          this.statusTurnSecond = true
        }
      });
      
      this.divWithO.addEventListener('click',($event)=>{
        this.firstPlayerSign = this.divWithO.textContent|| '';
        this.secondPlayerSign = this.divWithX.textContent|| '';
        alert(`(FIRST) ваш знак(${this.firstPlayerSign})`)
        if(this.randomaizer(1,3) === 1) {
          
          getStarterText.innerHTML+= ` FIRST( ${this.firstPlayerSign} )`
          getStarterText2.innerHTML+= ` SECOND( ${this.secondPlayerSign} )`
          this.statusTurnFirst = true;
        }else {
          
          getStarterText.innerHTML+= ` SECOND( ${this.secondPlayerSign} )`
          getStarterText2.innerHTML+= ` FIRST( ${this.firstPlayerSign} )`
          this.statusTurnSecond = true
        }
      })
      

      

    }else {
      let getTexth2= document.getElementsByClassName('text-for-players')[0]
      getTexth2.innerHTML+=`(SECOND)`
      let getStarterText = document.getElementsByClassName('text-starter')[0]
      let getStarterText2 = document.getElementsByClassName('text-starter2')[0]
      this.divWithX.addEventListener('click',($event)=>{
        this.firstPlayerSign = this.divWithO.textContent || '';
        this.secondPlayerSign = this.divWithX.textContent|| '';
        alert(`(SECOND) ваш знак (${this.secondPlayerSign})`)
        if(this.randomaizer(1,3) === 1) {
          
          getStarterText.innerHTML+= ` FIRST( ${this.firstPlayerSign} )`
          getStarterText2.innerHTML+= ` SECOND( ${this.secondPlayerSign} )`
          this.statusTurnFirst = true;  
        }else {
          
          getStarterText.innerHTML+= ` SECOND( ${this.secondPlayerSign} )`
          getStarterText2.innerHTML+= ` FIRST( ${this.firstPlayerSign} )`
          this.statusTurnSecond = true
        }
      });
      this.divWithO.addEventListener('click',($event)=>{
        this.firstPlayerSign = this.divWithX.textContent|| '';
        this.secondPlayerSign = this.divWithO.textContent|| '';
        alert(`(SECOND) ваш знак (${this.secondPlayerSign})`)
        if(this.randomaizer(1,3) === 1) {
          
          getStarterText.innerHTML+= ` FIRST( ${this.firstPlayerSign} )`
          getStarterText2.innerHTML+=` SECOND( ${this.secondPlayerSign} )`
          this.statusTurnFirst = true;
        }else {
          
          getStarterText.innerHTML+= ` SECOND( ${this.secondPlayerSign} )`
          getStarterText2.innerHTML+= ` FIRST( ${this.firstPlayerSign} )`
          this.statusTurnSecond = true
        }
      })
      
      
    }
    this.checkWinner()
    
    
    
    
    
    //Выбор стартуещего
    this.parentForBtn.addEventListener('click',($event)=> {
      this.checkWinner()
      if($event.target.className !== 'wrapper') {
        
      let currentElement = $event.target; //div на который мы нажали
      //console.log(currentElement);
      if(this.statusTurnFirst) {

        currentElement.innerHTML = `<span class='signs-first'>${(this.firstPlayerSign) ?this.firstPlayerSign: ''}</span>`
        
        this.statusTurnFirst = false
        this.statusTurnSecond = true
        for (let i = 0; i < 9; i++) {
          const divItem = this.blocksArray[i];
          if(divItem === currentElement) { 
            if(i < 3) {
              this.gameArea[0][i] = this.firstPlayerSign
              this.checkWinner()
              
            }else if(i < 6) {
              this.gameArea[1][i-3] = this.firstPlayerSign
              this.checkWinner()
              
            }else if(i < 9){
              this.gameArea[2][i-6] = this.firstPlayerSign
              this.checkWinner()
              
            }
          }
        }
        
        
      }else {
        this.checkWinner()
        currentElement.innerHTML = `<span class='signs-second'>${(this.secondPlayerSign) ?this.secondPlayerSign: ''}</span>`
        this.statusTurnSecond = false
        this.statusTurnFirst = true
        for (let i = 0; i < 9; i++) {
          const divItem = this.blocksArray[i];
          if(divItem === currentElement) {
            if(i < 3) {
              this.gameArea[0][i] = this.secondPlayerSign
              console.log(this.gameArea);
            }else if(i < 6) {
              this.gameArea[1][i-3] = this.secondPlayerSign
              console.log(this.gameArea);
            }else if(i < 9){
              this.gameArea[2][i-6] = this.secondPlayerSign
              console.log(this.gameArea);
            }
          }
        }
        
      }
      }
      
        
      
      
    });
    
    this.checkWinner()
  }

  //
  //
  randomaizer(min,max) {
    
    return Math.floor(Math.random() * (max - min) ) + min;
    
  }
  checkWinner() {
    
    if(this.gameArea[0][0]+this.gameArea[0][1]+this.gameArea[0][2] === 'XXX' || this.gameArea[0][0]+this.gameArea[0][1]+this.gameArea[0][2] === 'OOO'){
      let winner = this.gameArea[0][0]+this.gameArea[0][1]+this.gameArea[0][2];
      ////////////
      if(winner === 'XXX') {
        if(this.firstPlayerSign === 'X'){
          alert(`FIRST PLAYER WIIIIIIN(${this.firstPlayerSign})`)
          document.getElementById('one-area').style.color = 'green'
          document.getElementById('two-area').style.color = 'green'
          document.getElementById('three-area').style.color = 'green'
          document.getElementById('one-area').style.color = 'green'
          document.getElementById('two-area').style.color = 'green'
          document.getElementById('three-area').style.color = 'green'
          document.getElementById('restart-btn').style.display = 'inline-block'
          this.restartGame();
        }else {
          alert(`SECOND PLAYER WIIIIIIN(${this.secondPlayerSign})`)
          document.getElementById('one-area').style.color = 'green'
          document.getElementById('two-area').style.color = 'green'
          document.getElementById('three-area').style.color = 'green'
          document.getElementById('one-area').style.color = 'green'
          document.getElementById('two-area').style.color = 'green'
          document.getElementById('three-area').style.color = 'green'
          document.getElementById('restart-btn').style.display = 'inline-block'
          this.restartGame();
        }
        
        
      }else{
        if(this.firstPlayerSign === 'O'){
          alert(`FIRST PLAYER WIIIIIIN(${this.firstPlayerSign})`)
          document.getElementById('one-area').style.color = 'green'
          document.getElementById('two-area').style.color = 'green'
          document.getElementById('three-area').style.color = 'green'
          document.getElementById('one-area').style.border = '3px solid red'
          document.getElementById('two-area').style.border = '3px solid red'
          document.getElementById('three-area').style.border = '3px solid red'
          document.getElementById('restart-btn').style.display = 'inline-block'
          this.restartGame();
        }else {
          alert(`SECOND PLAYER WIIIIIIN(${this.secondPlayerSign})`)
          document.getElementById('one-area').style.color = 'green'
          document.getElementById('two-area').style.color = 'green'
          document.getElementById('three-area').style.color = 'green'
          document.getElementById('one-area').style.border = '3px solid red'
          document.getElementById('two-area').style.border = '3px solid red'
          document.getElementById('three-area').style.border = '3px solid red'
          document.getElementById('restart-btn').style.display = 'inline-block'
          this.restartGame();
        }
      }
      ////////////
    }else if(this.gameArea[1][0] + this.gameArea[1][1] + this.gameArea[1][2] ==='XXX' || this.gameArea[1][0] + this.gameArea[1][1] + this.gameArea[1][2] ==='OOO' ){
      let winner = this.gameArea[1][0] + this.gameArea[1][1] + this.gameArea[1][2];
      ////////////
      if(winner === 'XXX') {
        if(this.firstPlayerSign === 'X'){
          alert(`FIRST PLAYER WIIIIIIN(${this.firstPlayerSign})`)
          document.getElementById('four-area').style.color = 'green'
          document.getElementById('five-area').style.color = 'green'
          document.getElementById('six-area').style.color = 'green'
          document.getElementById('four-area').style.border = '3px solid red'
          document.getElementById('five-area').style.border = '3px solid red'
          document.getElementById('six-area').style.border = '3px solid red'
          document.getElementById('restart-btn').style.display = 'inline-block'
          this.restartGame();
        }else {
          alert(`SECOND PLAYER WIIIIIIN(${this.secondPlayerSign})`)
          document.getElementById('four-area').style.color = 'green'
          document.getElementById('five-area').style.color = 'green'
          document.getElementById('six-area').style.color = 'green'
          document.getElementById('four-area').style.border = '3px solid red'
          document.getElementById('five-area').style.border = '3px solid red'
          document.getElementById('six-area').style.border = '3px solid red'
          document.getElementById('restart-btn').style.display = 'inline-block'
          this.restartGame();
        }
        
      }else{
        if(this.firstPlayerSign === 'O'){
          alert(`FIRST PLAYER WIIIIIIN(${this.firstPlayerSign})`)
          document.getElementById('four-area').style.color = 'green'
          document.getElementById('five-area').style.color = 'green'
          document.getElementById('six-area').style.color = 'green'
          document.getElementById('four-area').style.border = '3px solid red'
          document.getElementById('five-area').style.border = '3px solid red'
          document.getElementById('six-area').style.border = '3px solid red'
          document.getElementById('restart-btn').style.display = 'inline-block'
          this.restartGame();
        }else {
          alert(`SECOND PLAYER WIIIIIIN(${this.secondPlayerSign})`)
          document.getElementById('four-area').style.color = 'green'
          document.getElementById('five-area').style.color = 'green'
          document.getElementById('six-area').style.color = 'green'
          document.getElementById('four-area').style.border = '3px solid red'
          document.getElementById('five-area').style.border = '3px solid red'
          document.getElementById('six-area').style.border = '3px solid red'
          document.getElementById('restart-btn').style.display = 'inline-block'
          this.restartGame();
        }
      }
    }else if(this.gameArea[2][0] + this.gameArea[2][1] + this.gameArea[2][2]==='XXX' || this.gameArea[2][0] + this.gameArea[2][1] + this.gameArea[2][2]==='OOO') {
      let winner = this.gameArea[2][0] + this.gameArea[2][1] + this.gameArea[2][2];
      ////////////
      if(winner === 'XXX') {
        if(this.firstPlayerSign === 'X'){
          alert(`FIRST PLAYER WIIIIIIN(${this.firstPlayerSign})`)
          document.getElementById('seven-area').style.color = 'green'
          document.getElementById('eigth-area').style.color = 'green'
          document.getElementById('nine-area').style.color = 'green'
          document.getElementById('seven-area').style.border = '3px solid red'
          document.getElementById('eigth-area').style.border = '3px solid red'
          document.getElementById('nine-area').style.border = '3px solid red'
          document.getElementById('restart-btn').style.display = 'inline-block'
          this.restartGame();
        }else {
          alert(`SECOND PLAYER WIIIIIIN(${this.secondPlayerSign})`)
          document.getElementById('seven-area').style.color = 'green'
          document.getElementById('eigth-area').style.color = 'green'
          document.getElementById('nine-area').style.color = 'green'
          document.getElementById('seven-area').style.border = '3px solid red'
          document.getElementById('eigth-area').style.border = '3px solid red'
          document.getElementById('nine-area').style.border = '3px solid red'
          document.getElementById('restart-btn').style.display = 'inline-block'
          this.restartGame();
        }
        
      }else{
        if(this.firstPlayerSign === 'O'){
          alert(`FIRST PLAYER WIIIIIIN(${this.firstPlayerSign})`)
          document.getElementById('seven-area').style.color = 'green'
          document.getElementById('eigth-area').style.color = 'green'
          document.getElementById('nine-area').style.color = 'green'
          document.getElementById('seven-area').style.border = '3px solid red'
          document.getElementById('eigth-area').style.border = '3px solid red'
          document.getElementById('nine-area').style.border = '3px solid red'
          document.getElementById('restart-btn').style.display = 'inline-block'
          this.restartGame();
        }else {
          alert(`SECOND PLAYER WIIIIIIN(${this.secondPlayerSign})`)
          document.getElementById('seven-area').style.color = 'green'
          document.getElementById('eigth-area').style.color = 'green'
          document.getElementById('nine-area').style.color = 'green'
          document.getElementById('seven-area').style.border = '3px solid red'
          document.getElementById('eigth-area').style.border = '3px solid red'
          document.getElementById('nine-area').style.border = '3px solid red'
          document.getElementById('restart-btn').style.display = 'inline-block'
          this.restartGame();
        }
      }
    }else if(this.gameArea[0][0] + this.gameArea[1][0] + this.gameArea[2][0]==='XXX'||this.gameArea[0][0] + this.gameArea[1][0] + this.gameArea[2][0]==='OOO'){
      let winner = this.gameArea[0][0] + this.gameArea[1][0] + this.gameArea[2][0];
      ////////////
      if(winner === 'XXX') {
        if(this.firstPlayerSign === 'X'){
          alert(`FIRST PLAYER WIIIIIIN(${this.firstPlayerSign})`)
          document.getElementById('one-area').style.color = 'green'
          document.getElementById('four-area').style.color = 'green'
          document.getElementById('seven-area').style.color = 'green'
          document.getElementById('one-area').style.border = '3px solid red'
          document.getElementById('four-area').style.border = '3px solid red'
          document.getElementById('seven-area').style.border = '3px solid red'
          document.getElementById('restart-btn').style.display = 'inline-block'
          this.restartGame();
        }else {
          alert(`SECOND PLAYER WIIIIIIN(${this.secondPlayerSign})`)
          document.getElementById('one-area').style.color = 'green'
          document.getElementById('four-area').style.color = 'green'
          document.getElementById('seven-area').style.color = 'green'
          document.getElementById('one-area').style.border = '3px solid red'
          document.getElementById('four-area').style.border = '3px solid red'
          document.getElementById('seven-area').style.border = '3px solid red'
          document.getElementById('restart-btn').style.display = 'inline-block'
          this.restartGame();
        }
        
      }else{
        if(this.firstPlayerSign === 'O'){
          alert(`FIRST PLAYER WIIIIIIN(${this.firstPlayerSign})`)
          document.getElementById('one-area').style.color = 'green'
          document.getElementById('four-area').style.color = 'green'
          document.getElementById('seven-area').style.color = 'green'
          document.getElementById('one-area').style.border = '3px solid red'
          document.getElementById('four-area').style.border = '3px solid red'
          document.getElementById('seven-area').style.border = '3px solid red'
          document.getElementById('restart-btn').style.display = 'inline-block'
          this.restartGame();
        }else {
          alert(`SECOND PLAYER WIIIIIIN(${this.secondPlayerSign})`)
          document.getElementById('one-area').style.color = 'green'
          document.getElementById('four-area').style.color = 'green'
          document.getElementById('seven-area').style.color = 'green'
          document.getElementById('one-area').style.border = '3px solid red'
          document.getElementById('four-area').style.border = '3px solid red'
          document.getElementById('seven-area').style.border = '3px solid red'
          document.getElementById('restart-btn').style.display = 'inline-block'
          this.restartGame();
        }
      }
    }else if(this.gameArea[0][1] + this.gameArea[1][1] + this.gameArea[2][1]==='XXX' || this.gameArea[0][1] + this.gameArea[1][1] + this.gameArea[2][1]==='OOO'){
      let winner = this.gameArea[0][1] + this.gameArea[1][1] + this.gameArea[2][1];
      ////////////
      if(winner === 'XXX') {
        if(this.firstPlayerSign === 'X'){
          alert(`FIRST PLAYER WIIIIIIN(${this.firstPlayerSign})`)
          document.getElementById('two-area').style.color = 'green'
          document.getElementById('five-area').style.color = 'green'
          document.getElementById('eigth-area').style.color = 'green'
          document.getElementById('two-area').style.border = '3px solid red'
          document.getElementById('five-area').style.border = '3px solid red'
          document.getElementById('eigth-area').style.border = '3px solid red'
          document.getElementById('restart-btn').style.display = 'inline-block'
          this.restartGame();
        }else {
          alert(`SECOND PLAYER WIIIIIIN(${this.secondPlayerSign})`)
          document.getElementById('two-area').style.color = 'green'
          document.getElementById('five-area').style.color = 'green'
          document.getElementById('eigth-area').style.color = 'green'
          document.getElementById('two-area').style.border = '3px solid red'
          document.getElementById('five-area').style.border = '3px solid red'
          document.getElementById('eigth-area').style.border = '3px solid red'
          document.getElementById('restart-btn').style.display = 'inline-block'
          this.restartGame();
        }
        
      }else{
        if(this.firstPlayerSign === 'O'){
          alert(`FIRST PLAYER WIIIIIIN(${this.firstPlayerSign})`)
          document.getElementById('two-area').style.color = 'green'
          document.getElementById('five-area').style.color = 'green'
          document.getElementById('eigth-area').style.color = 'green'
          document.getElementById('two-area').style.border = '3px solid red'
          document.getElementById('five-area').style.border = '3px solid red'
          document.getElementById('eigth-area').style.border = '3px solid red'
          document.getElementById('restart-btn').style.display = 'inline-block'
          this.restartGame();
        }else {
          alert(`SECOND PLAYER WIIIIIIN(${this.secondPlayerSign})`)
          document.getElementById('two-area').style.color = 'green'
          document.getElementById('five-area').style.color = 'green'
          document.getElementById('eigth-area').style.color = 'green'
          document.getElementById('two-area').style.border = '3px solid red'
          document.getElementById('five-area').style.border = '3px solid red'
          document.getElementById('eigth-area').style.border = '3px solid red'
          document.getElementById('restart-btn').style.display = 'inline-block'
          this.restartGame();
        }
      }
    }else if(this.gameArea[0][2] + this.gameArea[1][2] + this.gameArea[2][2]==='XXX'||this.gameArea[0][2] + this.gameArea[1][2] + this.gameArea[2][2]==='OOO'){
      let winner = this.gameArea[0][2] + this.gameArea[1][2] + this.gameArea[2][2];
      ////////////
      if(winner === 'XXX') {
        if(this.firstPlayerSign === 'X'){
          alert(`FIRST PLAYER WIIIIIIN(${this.firstPlayerSign})`)
          document.getElementById('three-area').style.color = 'green'
          document.getElementById('six-area').style.color = 'green'
          document.getElementById('nine-area').style.color = 'green'
          document.getElementById('three-area').style.border = '3px solid red'
          document.getElementById('six-area').style.border = '3px solid red'
          document.getElementById('nine-area').style.border = '3px solid red'
          document.getElementById('restart-btn').style.display = 'inline-block'
          this.restartGame();
        }else {
          alert(`SECOND PLAYER WIIIIIIN(${this.secondPlayerSign})`)
          document.getElementById('three-area').style.color = 'green'
          document.getElementById('six-area').style.color = 'green'
          document.getElementById('nine-area').style.color = 'green'
          document.getElementById('three-area').style.border = '3px solid red'
          document.getElementById('six-area').style.border = '3px solid red'
          document.getElementById('nine-area').style.border = '3px solid red'
          document.getElementById('restart-btn').style.display = 'inline-block'
          this.restartGame();
        }
        
      }else{
        if(this.firstPlayerSign === 'O'){
          alert(`FIRST PLAYER WIIIIIIN(${this.firstPlayerSign})`)
          document.getElementById('three-area').style.color = 'green'
          document.getElementById('six-area').style.color = 'green'
          document.getElementById('nine-area').style.color = 'green'
          document.getElementById('three-area').style.border = '3px solid red'
          document.getElementById('six-area').style.border = '3px solid red'
          document.getElementById('nine-area').style.border = '3px solid red'
          document.getElementById('restart-btn').style.display = 'inline-block'
          this.restartGame();
        }else {
          alert(`SECOND PLAYER WIIIIIIN(${this.secondPlayerSign})`)
          document.getElementById('three-area').style.color = 'green'
          document.getElementById('six-area').style.color = 'green'
          document.getElementById('nine-area').style.color = 'green'
          document.getElementById('three-area').style.border = '3px solid red'
          document.getElementById('six-area').style.border = '3px solid red'
          document.getElementById('nine-area').style.border = '3px solid red'
          document.getElementById('restart-btn').style.display = 'inline-block'
          this.restartGame();
        }
      }
    }else if(this.gameArea[0][0] + this.gameArea[1][1] + this.gameArea[2][2]==='XXX' || this.gameArea[0][0] + this.gameArea[1][1] + this.gameArea[2][2]==='OOO'){
      let winner = this.gameArea[0][0] + this.gameArea[1][1] + this.gameArea[2][2];
      ////////////
      if(winner === 'XXX') {
        if(this.firstPlayerSign === 'X'){
          alert(`FIRST PLAYER WIIIIIIN(${this.firstPlayerSign})`)
          document.getElementById('one-area').style.color = 'green'
          document.getElementById('five-area').style.color = 'green'
          document.getElementById('nine-area').style.color = 'green'
          document.getElementById('one-area').style.border = '3px solid red'
          document.getElementById('five-area').style.border = '3px solid red'
          document.getElementById('nine-area').style.border = '3px solid red'
          document.getElementById('restart-btn').style.display = 'inline-block'
          this.restartGame();
        }else {
          alert(`SECOND PLAYER WIIIIIIN(${this.secondPlayerSign})`)
          document.getElementById('one-area').style.color = 'green'
          document.getElementById('five-area').style.color = 'green'
          document.getElementById('nine-area').style.color = 'green'
          document.getElementById('one-area').style.border = '3px solid red'
          document.getElementById('five-area').style.border = '3px solid red'
          document.getElementById('nine-area').style.border = '3px solid red'
          document.getElementById('restart-btn').style.display = 'inline-block'
          this.restartGame();
        }
        
      }else{
        if(this.firstPlayerSign === 'O'){
          alert(`FIRST PLAYER WIIIIIIN(${this.firstPlayerSign})`)
          document.getElementById('one-area').style.color = 'green'
          document.getElementById('five-area').style.color = 'green'
          document.getElementById('nine-area').style.color = 'green'
          document.getElementById('one-area').style.border = '3px solid red'
          document.getElementById('five-area').style.border = '3px solid red'
          document.getElementById('nine-area').style.border = '3px solid red'
          document.getElementById('restart-btn').style.display = 'inline-block'
          this.restartGame();
        }else {
          alert(`SECOND PLAYER WIIIIIIN(${this.secondPlayerSign})`)
          document.getElementById('one-area').style.color = 'green'
          document.getElementById('five-area').style.color = 'green'
          document.getElementById('nine-area').style.color = 'green'
          //
          document.getElementById('one-area').style.border = '3px solid red'
          document.getElementById('five-area').style.border = '3px solid red'
          document.getElementById('nine-area').style.border = '3px solid red'
          document.getElementById('restart-btn').style.display = 'inline-block'
          this.restartGame();
        }
      }
    }else if(this.gameArea[0][2] + this.gameArea[1][1] + this.gameArea[2][0]==='XXX' || this.gameArea[0][2] + this.gameArea[1][1] + this.gameArea[2][0]==='OOO'){
      let winner =this.gameArea[0][2] + this.gameArea[1][1] + this.gameArea[2][0];
      ////////////
      if(winner === 'XXX') {
        if(this.firstPlayerSign === 'X'){
          alert(`FIRST PLAYER WIIIIIIN(${this.firstPlayerSign})`)
          document.getElementById('three-area').style.color = 'green'
          document.getElementById('five-area').style.color = 'green'
          document.getElementById('seven-area').style.color = 'green'
          document.getElementById('three-area').style.border = '3px solid red'
          document.getElementById('five-area').style.border = '3px solid red'
          document.getElementById('seven-area').style.border = '3px solid red'
          document.getElementById('restart-btn').style.display = 'inline-block'
          this.restartGame();
        }else {
          alert(`SECOND PLAYER WIIIIIIN(${this.secondPlayerSign})`)
          document.getElementById('three-area').style.color = 'green'
          document.getElementById('five-area').style.color = 'green'
          document.getElementById('seven-area').style.color = 'green'
          document.getElementById('three-area').style.border = '3px solid red'
          document.getElementById('five-area').style.border = '3px solid red'
          document.getElementById('seven-area').style.border = '3px solid red'
          document.getElementById('restart-btn').style.display = 'inline-block'
          this.restartGame();
        }
        
      }else{
        if(this.firstPlayerSign === 'O'){
          alert(`FIRST PLAYER WIIIIIIN(${this.firstPlayerSign})`)
          document.getElementById('three-area').style.color = 'green'
          document.getElementById('five-area').style.color = 'green'
          document.getElementById('seven-area').style.color = 'green'
          document.getElementById('three-area').style.border = '3px solid red'
          document.getElementById('five-area').style.border = '3px solid red'
          document.getElementById('seven-area').style.border = '3px solid red'
          document.getElementById('restart-btn').style.display = 'inline-block'
          this.restartGame();
        }else {
          alert(`SECOND PLAYER WIIIIIIN(${this.secondPlayerSign})`)
          document.getElementById('three-area').style.color = 'green'
          document.getElementById('five-area').style.color = 'green'
          document.getElementById('seven-area').style.color = 'green'
          document.getElementById('three-area').style.border = '3px solid red'
          document.getElementById('five-area').style.border = '3px solid red'
          document.getElementById('seven-area').style.border = '3px solid red'
          document.getElementById('restart-btn').style.display = 'inline-block'
          this.restartGame();
        }
      }
    }
  }
  restartGame(){
    
    
    this.gameArea =  [
      ['-','-','-'],
      ['-','-','-'],
      ['-','-','-']
    ];
    this.statusTurnFirst = false;
    this.statusTurnSecond = false;
    this.firstPlayerSign = '';
    this.secondPlayerSign = '';
    
  }

}
let ticTacToe = new TicTacToe();
ticTacToe.selectArea()
let restartGame = document.getElementById('restart-btn');
restartGame.addEventListener('click',()=>ticTacToe.restartGame());




//[0][0] + [0][1] + [0][2]  Верх горизонт   DONE
//[1][0] + [1][1] + [1][2]  Центр горизонт DONE
//[2][0] + [2][1] + [2][2]  Низ горизонт DONE

////this.gameArea[0][0] + this.gameArea[1][0] + this.gameArea[2][0]  Лево вертикаль DONE
//this.gameArea[0][1] + this.gameArea[1][1] + this.gameArea[2][1]  Центр вертикаль DONE
//this.gameArea[0][2] + this.gameArea[1][2] + this.gameArea[2][2]  Право вертикаль DONE

//this.gameArea[0][0] + this.gameArea[1][1] + this.gameArea[2][2]  Левая диагональ DONE
//this.gameArea[0][2] + this.gameArea[1][1] + this.gameArea[2][0]  Правая диагональ DONE

