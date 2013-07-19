module.exports = function(color) {
	
	//Link direto para documentação da API:
	//http://docs.appcelerator.com/titanium/latest/
	
	//Criamos uma instancia da Window
	//Função de interface gráfica da API Ti.UI
	var win = Ti.UI.createWindow({
		title: 'Janela 1',
		backgroundColor: color
	});
	
	//Criamos o primeiro botão.
	//Vale notar que a estrutura da chamada é
	//a mesma para todas as funções da API de UI.
	//Ti.UI.<funcao>(<objeto de parametro>)
	var btnTrigger = Ti.UI.createButton({
		title: 'Ativar!',
		height: 40,
		width: 80,
		top: 20
	});
	
	//Criamos um eventListener, ou trigger/escuta de evento para
	//o botão btnTrigger. Um eventListener vai escutar pelo
	//evento que escolhermos e executar um callback quando
	//o tal evento for acionado.
	//A estrutura da criação de um eventListener é:
	//<objeto>.addEventListener(<str nomeDoEvento>, <callback>);
	//Todos os elementos de UI possuem eventos. Eles estão
	//documentados na página de cada um dos elementos na API
	btnTrigger.addEventListener('click', function(e) {
		
		//Criamos um alerta generico para mostrar a estrutura
		//do objeto de parametro na tela
		//alert(e);
		
		//Adicionamos a view à tela
		win.add(view);
		
		//Exemplo de animação (visto com detalhes depois)
		view.animate({ top: 100, duration: 300 });
	});
	
	//Adicionamos o botão à tela
	win.add(btnTrigger);
	
	//Criamos uma view que conterá outro botão
	//Uma view é um tipo de conteiner ou uma area em branco
	//A view é a base de todos os elementos de UI
	var view = Ti.UI.createView({
		height: 200,
		top: -200,
		//Para definirmos a largura, usamos a constante 
		//FILL da API UI, indicando que ela usará todo o 
		//espaço até preencher a tela
		width: Ti.UI.FILL, 
		backgroundColor: 'blue'
	});
	
	//Criamos o botão que irá dentro da view
	var btnVwButton = Ti.UI.createButton({
		title: 'Alerta!',
		height: 40,
		width: 80
	});
	
	//E o eventListener de click desse botão
	btnVwButton.addEventListener('click', function() {
		
		//Primeiro modelo de alerta, pouco customizável
		alert('Alerta 01!');
		
		//Função de callback para o timeout
		var mostrarAlertas = function() {
			
			//Segundo modelo de alerta. Totalmente customizável
			var alertDialog = Ti.UI.createAlertDialog({
				title: 'Alerta 02!',
				message: 'Esta é uma mensagem de alerta!',
				buttonNames: ['Ok', 'Talvez', 'Cancelar'],
				cancel: 2
			});
			
			//Criamos um evnetListener de click para o alerta
			//para identificarmos o botão que foi selecionado
			alertDialog.addEventListener('click', function(e) {
				
				//O objeto de parametro <e> possui as informações
				//do click. Uma delas é a informação (bool) que indica
				//se o botão clicado foi o botão de cancelar
				if(e.cancel) {
					
					//Alerta de módulo 1
					alert('Você cancelou!');
				} else {
					
					//Alerta de módulo 1
					alert('Ok!');
				}
			});
			
			//E mostramos o alerta na tela		
			alertDialog.show();
		};
		
		//Exemplo de uma função nativa do JavaScript
		//Podemos usar quaisquer funções, classes e propriedeas 
		//do JavaScript no nosso código em Titanium
		setTimeout(mostrarAlertas, 3000);
	});
	
	//Adicionamos o botão à view
	view.add(btnVwButton);
	
	//Criamos uma imageView carregando uma imagem
	//dinamicamente da internet
	var imgApple = Ti.UI.createImageView({
		//image: 'http://www.naturalhealth365.com/images/apple.jpg',
		//A propriedade image pode receber tanto um
		//blob, uma url para uma imagem local ou uma url para 
		//imagem online
		image: 'http://cdn.androidpolice.com/wp-content/uploads/2011/12/android-logo.png',
		height: 80,
		width: 80,
		//Como imageView herda do objeto View,
		//temos as propriedades da View também, como
		//propriedades de edição de borda
		borderRadius: 10,
		borderWidth: 3,
		borderColor: 'black',
		//A propriedade enableZoomControls é uma
		//propriedade específica do Android e ativa ou desativa
		//os controles de zoom na imagem
		enableZoomControls: true,
		//Setamos uma imagem padrão para ser mostrada enquanto
		//a imagem dinamica é carregada. Deve ser uma imagem local
		defaultImage: '/android/images/appicon.png',
		top: 100
	});
	
	win.add(imgApple);
	
	//Criamos uma label de texto
	var lblDescricao = Ti.UI.createLabel({
		text: 'Android',
		height: 30,
		width: 60,
		//Customizamos a fonte com um objeto definindo
		//as propriedes dela
		font: { fontSize: 14, fontWeight: 'bold' },
		bottom: 100
	});
	
	win.add(lblDescricao);
	
	return win;
};