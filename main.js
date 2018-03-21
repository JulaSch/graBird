var game = new Phaser.Game(400, 500);

var mainState = {
	preload: function (){
		//wrzucanie plików z obrazkami i audio
		game.load.image('bird', 'bird.png');

	},

	create: function(){
		//ustawianie na miejscu obiektów, które mają się pojawić po starcie gry
		game.stage.backgroudColor = '#71c9f2';
		game.physics.startSystem(Phaser.Physics.ARCADE);//WŁĄCZAMY FIZYKĘ (ala grawitacja, arkadowa-> 2D, góra i dół)
		this.bird = game.add.sprite(100, 350, 'bird');//umiejscowienie obrazka
		game.physics.arcade.enable(this.bird);//włączenie grawitacji dla ptaka
		this.bird.body.gravity.y = 1000//określenie grawitacji wokół osi y (w dół jezeli dodatnia wartość, ujemna to do góry), 1000 jednostek->moc z którą spada
		





	},

	upload: function(){
		//co ma się zmieniać w czasie

	},
};

game.state.add('main', mainState);//brak zdefiniowania co to game.state
game.state.start('main');