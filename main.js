//Game Object 
const game ={
	p1score:0,
	p2score:0,
	gameOver:false,
	winScore:5,
	loadEventListener(){
		const p1scoreD = document.getElementById("player1score");
        const p2scoreD = document.getElementById("player2score");
        const p1button=document.getElementById("p1");
        const p2button=document.getElementById("p2");
        const inputS = document.getElementById("inputScore");
        const winningScoreDisplay = document.querySelector('p span');
        const resetBtn = document.getElementById("reset");
		return{
			p1scoreD,
			p2scoreD,
			p1button,
			p2button,
			inputS,
			winningScoreDisplay,
			resetBtn
		}
	},
	listenP1() {
		const{p1scoreD}=this.loadEventListener()
		if(!this.gameOver){
			this.p1score++;
			this.getWinner(this.p1score, this.winScore);
		}
		//shoe change data
		p1scoreD.textContent = this.p1score;
	},
	listenP2() {
		const{p2scoreD}=this.loadEventListener()
		if(!this.gameOver){
			this.p2score++;
			this.getWinner(this.p2score, this.winScore);
		}
		//shoe change data
		p2scoreD.textContent = this.p2score;
	},
	reset(){
		const{p1scoreD,p1button,p2scoreD,p2button,inputS,winningScoreDisplay}=this.loadEventListener()
		this.p1score = 0;
		this.p2score = 0;
		
		this.gameOver = false;
		p1scoreD.textContent = this.p1score;
		p2scoreD.textContent = this.p2score;
		p1button.removeAttribute('disabled');
		p2button.removeAttribute('disabled');
		p2scoreD.classList.remove('winner');
		p1scoreD.classList.remove('winner');
		// inputS.textContent= inputS.value=''
		// winningScoreDisplay.textContent=inputS.value;
	},
	listenInput(){
		const{winningScoreDisplay,inputS}=this.loadEventListener()
		this.winScore = Number(inputS.value);
	    winningScoreDisplay.textContent = inputS.value;
        inputS.value = '';
        this.reset()
	},
	getWinner(oldScore,winScore){
		const{p1scoreD,p1button,p2scoreD,p2button}=this.loadEventListener()
		if(oldScore===winScore){
			if(this.p1score===winScore){
				p1scoreD.classList.add('winner');
			}else{
				p2scoreD.classList.add('winner');
			}  
		 gameOver = true;
		// console.log('Game Over');
		 p1button.setAttribute('disabled', 'disabled');
		 p2button.setAttribute('disabled', 'disabled');
		}
	},
	init(){
		const {p1button,p2button,inputS,winningScoreDisplay,resetBtn}=this.loadEventListener()
		resetBtn.addEventListener('click',()=>{
			game.reset()
			
		});  
		
		p1button.addEventListener('click',game.listenP1.bind(game));
		
		p2button.addEventListener('click',game.listenP2.bind(game));
		
		inputS.addEventListener('change',game.listenInput.bind(game)); 
	}
}
//
game.init();




