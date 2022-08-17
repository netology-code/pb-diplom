let players = ['x', 'o'];
let activePlayer = 0;
let gameField = null;

function creatGameField(){
	return[
		['','',''],
		['','',''],
		['','','']
	]
};
function startGame(){
	gameField = creatGameField();
	activePlayer = 0;
	renderBoard(gameField);
};
function isWinningSeguence(r0, r1, ri, c0, c1, ci) {
	let  firstSymbol = null;
	for (
	let r = r0, c = c0;
	Math.abs(r1-r)> 0 && Math.ads(c1-c)>0;
	r += ri, c+=c1
	){
		const symbol = gameField [r] [c];
		if (sumbol === ''){
			return false;
		}
		if (sumbol === null){
			firstSymbol = symbol;
			continue;
		}
		if (firstSymbol !== symbol){
			return false;
		}
	}
	return true;
	
	
}
function isWinningSituation(){
	const N = gameField.length;
	
	for (let i=0; i<N; ++i){
		if (isWinningSeguence(i, i+1,0,0,N,1) ||
		isWinningSeguence(0,N,1,i,i+1,0)
		){
			return true;
		}
	}
	if (isWinningSeguence(0,N,1,0,N,1) ||
		isWinningSeguence(N-1, -1, -1, 0, N, 1)
		){
			return true;
		}
	
	return true;
}
function click(row, column) {
	const playerSymbol = players [activePlayer];
	gameField [row][column] = playerSymbol;
	renderBoard(gameField);
	
	if (isWinningSituation()){
		showWinner(activePlayer);
	}
	activePlayer = (activePlayer + 1) % players.length;
	
}

