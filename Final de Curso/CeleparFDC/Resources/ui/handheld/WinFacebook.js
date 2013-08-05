module.exports = (function() {
	
	var win = Ti.UI.createWindow({
		title: 'Facebook',
		backgroundColor: 'white',
		layout: 'vertical'
	});
	
	var btnAuthorize = Ti.UI.createButton({
		title: 'Autorizar facebook',
		height: '40dp',
		width: '60dp',
		top: '10dp'
	});
	
	btnAuthorize.addEventListener('click', function() {
		
		var fb = require('facebook');
		fb.appid = '235684463160760';
		fb.permissions = ['publish_stream', 'email'];
		
		fb.logout();
		
		fb.addEventListener('login', function(e) {
			
			if(e.success) {
				
				Ti.API.info('Facebook login success');
				
				var  txtFBStatus = Ti.UI.createTextArea({
					height: '70dp',
					width: '200dp',
					top: '15dp',
					color: 'black'
				});
				
				var btnPublish = Ti.UI.createButton({
					height: '40dp',
					width: '200dp',
					top: '10dp',
					title: 'Publicar'
				});
				
				var btnDialog = Ti.UI.createButton({
					top: '10dp',
					width: '200dp',
					height: '40dp',
					title: 'Dialog'
				});
				
				btnDialog.addEventListener('click', function() {
					
					fb.dialog('feed', {
						name: 'CELEPAR Mobile',
						message: 'Blablablablablablabla bla bla l balbl bla',
						caption: 'Caption blablabla',
						picture: 'http://vmatechs.com/wp-content/uploads/2013/07/android.jpg',
						description: 'Description blablablabal balb al'
					}, function(e) {
						
						if(e.success && e.result) {
							
							alert('Mensagem postada com sucesso! ' + e.result);
						} else {
							
							if(e.error) {
								
								alert('Erro: ' + e.error);
							} else {
								
								alert('Cancelado!');
							}
						}
					});
				});
				
				btnPublish.addEventListener('click', function() {
					
					if(txtFBStatus.value.match(/[a-zA-Z0-9]/)) {
						
						fb.requestWithGraphPath('me/feed', {
							
							message: txtFBStatus.value
						}, 
						'POST', 
						function(e) {
							
							if(e.success) {
								
								alert('Mensagem publicada com sucesso!');
							} else {
								
								if(e.error) {
									
									alert('Erro: ' + e.error);
								} else {
									
									alert('Erro desconhecido.');
								}
							}
						});
					}
				});
				
				win.add(txtFBStatus);
				win.add(btnPublish);
				win.add(btnDialog);
			} else if(e.error) {
				
				alert('Erro: ' + e.error);
			} else if(e.cancelled) {
				
				alert('Cancelado!');
			}
		});
		
		fb.authorize();
	});
	
	if(Ti.App.Properties.getBool('expresso') == false){

    var txtUserName = Ti.UI.createTextField({
        height: '50dp',
        width: '200dp',
        keyboardType: Ti.UI.KEYBOARD_APPEARANCE_DEFAULT,
        hintText: 'Login...',
        top: 20
    });
    
    var txtPassword = Ti.UI.createTextField({
        height: '50dp',
        width: '200dp',
        keyboardType: Ti.UI.KEYBOARD_APPEARANCE_DEFAULT,
        hintText: 'Senha...',
        top: 10,
        passwordMask: true
    });

    var btnAddUser = Ti.UI.createButton({
        title: 'Salvar',
        height: '50dp',
        width: '200dp',
        top: 20
    });
    
    btnAddUser.addEventListener('click', function() {
     $.api.execute("Login",{user: txtUserName.value,"password": txtPassword.value},
    function (result) {
        alert(JSON.stringify(result));
        Ti.App.Properties.setString('usuario', txtUserName.value);
        Ti.App.Properties.setBool('expresso', true);
        alert('salvo com sucesso!');
        Ti.API.info('salvar. ' + Ti.App.Properties.getString('usuario'));
        
        $.api.execute("Mail/Messages",{folderID: "INBOX",search: "", page: 1, resultsPerPage: 10 },
        function (result) {
            alert(JSON.stringify(result));
        },function(error) {
            alert(JSON.stringify(error));
        });
        
        
        $.api.execute("Catalog/Contacts",{contactType: "1",search: "" },
        function (result) {
            alert(JSON.stringify(result));
        },function(error) {
            alert(JSON.stringify(error));
        });
        
    },
    function (error) {
        alert(JSON.stringify(error));
    });
    if(e.error) {
                
                alert('Erro: ' + e.error);
            } else if(e.cancelled) {
                
                alert('Cancelado!');
            }
    
    });
    
        win.add(txtUserName);
    win.add(txtPassword);
    win.add(btnAddUser);
    
    }else{
        
    var btnlogout = Ti.UI.createButton({
        title: 'sair',
        height: '50dp',
        width: '200dp',
        top: 20
    });

        
    }

	win.add(btnAuthorize);

	
	return win;
})();
