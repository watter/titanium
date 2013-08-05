module.exports = (function() {
	
	var win = Ti.UI.createWindow({
		title: 'Add User',
		backgroundColor: 'white',
		layout: 'vertical'
	});
	
	var contatos = {
	    "contacts": [
	      {
	        "contactID": "23",
	        "contactMails": [
	          "aa@aa.com.br"
	        ],
	        "contactAlias": "aa",
	        "contactFirstName": "aa",
	        "contactLastName": "aa",
	        "contactFullName": "aa aa",
	        "contactBirthDate": "",
	        "contactNotes": "",
	        "contactHasImagePicture": 0,
	        "contactPhones": [
	          "aa"
	        ]
	      },
	      {
	        "contactID": "14",
	        "contactPhones": [
	          null
	        ],
	        "contactAlias": "Adriano",
	        "contactFirstName": "\tAdriano",
	        "contactLastName": "",
	        "contactFullName": "\tAdriano ",
	        "contactBirthDate": "",
	        "contactNotes": "",
	        "contactHasImagePicture": 0
	      },
	      {
	        "contactID": "24",
	        "contactMails": [
	          "adroaldo@myway.com"
	        ],
	        "contactAlias": "Aldo",
	        "contactFirstName": "Adroaldo",
	        "contactLastName": "Cavalheiro",
	        "contactFullName": "Adroaldo Cavalheiro",
	        "contactBirthDate": "",
	        "contactNotes": "",
	        "contactHasImagePicture": 0
	      },
	      {
	        "contactID": "12",
	        "contactPhones": [
	          "(222) 2222-22222"
	        ],
	        "contactAlias": "Cesar",
	        "contactFirstName": "Augusto Cesar",
	        "contactLastName": "Borges",
	        "contactFullName": "Augusto Cesar Borges",
	        "contactBirthDate": "",
	        "contactNotes": "",
	        "contactHasImagePicture": 0,
	        "contactMails": [
	          "augusto@ibm.com.br"
	        ]
	      },
	      {
	        "contactID": "11",
	        "contactMails": [
	          "celso.almeida@cmc.pr.gov.br"
	        ],
	        "contactAlias": "celsodemo",
	        "contactFirstName": "celso",
	        "contactLastName": "demo",
	        "contactFullName": "celso demo",
	        "contactBirthDate": "",
	        "contactNotes": "",
	        "contactHasImagePicture": 0
	      },
	      {
	        "contactID": "16",
	        "contactPhones": [
	          "(13)1222-2222"
	        ],
	        "contactAlias": "Demo",
	        "contactFirstName": "Demo",
	        "contactLastName": "Admin",
	        "contactFullName": "Demo Admin",
	        "contactBirthDate": "",
	        "contactNotes": "",
	        "contactHasImagePicture": 0,
	        "contactMails": [
	          "demo-admin@demo.expressolivre.org"
	        ]
	      },
	      {
	        "contactID": "8",
	        "contactPhones": [
	          "23326430"
	        ],
	        "contactAlias": "Zurita",
	        "contactFirstName": "Francisco",
	        "contactLastName": "Zurita",
	        "contactFullName": "Francisco Zurita",
	        "contactBirthDate": "",
	        "contactNotes": "",
	        "contactHasImagePicture": 0
	      },
	      {
	        "contactID": "7",
	        "contactMails": [
	          "teste@teste.com",
	          "Contato@contato.com.br"
	        ],
	        "contactAlias": "Jair",
	        "contactFirstName": "Jair",
	        "contactLastName": "Pereira",
	        "contactFullName": "Jair Pereira",
	        "contactBirthDate": "1955-05-16",
	        "contactNotes": "",
	        "contactHasImagePicture": 1
	      },
	      {
	        "contactID": "5",
	        "contactMails": [
	          "leila-tavares@oi.om.br"
	        ],
	        "contactAlias": "",
	        "contactFirstName": "Leila",
	        "contactLastName": "Tadayuki",
	        "contactFullName": "Leila Tavares",
	        "contactBirthDate": "",
	        "contactNotes": "",
	        "contactHasImagePicture": 0
	      },
	      {
	        "contactID": "21",
	        "contactMails": [
	          "lista-demopge@demo.expressolivre.org"
	        ],
	        "contactAlias": "MailList",
	        "contactFirstName": "MailList",
	        "contactLastName": "lista-demopge",
	        "contactFullName": "MailList lista-demopge",
	        "contactBirthDate": "",
	        "contactNotes": "",
	        "contactHasImagePicture": 0
	      },
	      {
	        "contactID": "17",
	        "contactMails": [
	          "bbb@glob.com"
	        ],
	        "contactAlias": "marcosjr",
	        "contactFirstName": "Marcos",
	        "contactLastName": "Junior",
	        "contactFullName": "Marcos Junior",
	        "contactBirthDate": "",
	        "contactNotes": "",
	        "contactHasImagePicture": 0,
	        "contactPhones": [
	          "(011) 2241-1221"
	        ]
	      },
	      {
	        "contactID": "9",
	        "contactPhones": [
	          "23326430"
	        ],
	        "contactAlias": "Paulo",
	        "contactFirstName": "Paulo",
	        "contactLastName": "",
	        "contactFullName": "Paulo ",
	        "contactBirthDate": "",
	        "contactNotes": "",
	        "contactHasImagePicture": 0
	      },
	      {
	        "contactID": "18",
	        "contactPhones": [
	          null
	        ],
	        "contactAlias": "sqsqsq",
	        "contactFirstName": "sqsqsqs",
	        "contactLastName": "qsqsqsq",
	        "contactFullName": "sqsqsqs qsqsqsq",
	        "contactBirthDate": "",
	        "contactNotes": "",
	        "contactHasImagePicture": 0
	      },
	      {
	        "contactID": "15",
	        "contactPhones": [
	          "(224) 4555-5666"
	        ],
	        "contactAlias": "Suporte",
	        "contactFirstName": "suporte",
	        "contactLastName": "",
	        "contactFullName": "suporte ",
	        "contactBirthDate": "",
	        "contactNotes": "",
	        "contactHasImagePicture": 0,
	        "contactMails": [
	          "suporte@expressolivre.org"
	        ]
	      },
	      {
	        "contactID": "2",
	        "contactPhones": [
	          "(71)1111-1111"
	        ],
	        "contactAlias": "Usuario",
	        "contactFirstName": "Usuario",
	        "contactLastName": "777",
	        "contactFullName": "Usuario 777",
	        "contactBirthDate": "",
	        "contactNotes": "",
	        "contactHasImagePicture": 0,
	        "contactMails": [
	          "demo@demo.expressolivre.org"
	        ]
	      },
	      {
	        "contactID": "22",
	        "contactMails": [
	          "demo@demo.expressolivre.org"
	        ],
	        "contactAlias": "Usuario",
	        "contactFirstName": "Usuario",
	        "contactLastName": "777 ",
	        "contactFullName": "Usuario 777 ",
	        "contactBirthDate": "",
	        "contactNotes": "",
	        "contactHasImagePicture": 0
	      }
	    ]
	};


	
	
	var tbl_data = [];
	
	for(var i=0,j=contatos.contacts.length; i<j; i++){
	  // Create an array of explicitly defined custom TableViewRowsvar tbl_data = [];for (var i = 0; i < 10; i++) {
        var row = Ti.UI.createTableViewRow(); // {layout: 'vertical'}
        var lblName = Ti.UI.createLabel({
        		top: '2dp',
                left: '15dp',
                font: { fontSize: 14, fontFamily: 'Helvetica', fontStyle: 'bold'}, 
                text: contatos.contacts[i].contactFullName 
        });

        var btnWrite = Ti.UI.createButton({
        		top: '0dp',
                right: '10dp',
                height: '30dp',
                width: '50dp',
                backgroundImage: '/images/lapis.png',
                font: { fontSize: 11, fontFamily: 'Helvetica', fontStyle: 'italic'}, 
                title: 'Write'
        });


		var mail = '';
		if ( (contatos.contacts[i].contactMails != null) && (contatos.contacts[i].contactMails[0]) ) {
			mail = contatos.contacts[i].contactMails[0];
		} else{
			mail = ''; 
		};
        var lblMail = Ti.UI.createLabel({
        		top: '25dp',
                left: '15dp',
                font: { fontSize: 11, fontFamily: 'Helvetica'}, 
                text: mail  
        });

        var imgPerson = Ti.UI.createImageView({
        		left: '0dp',
        		top: '0dp', 
                url: 'http://www.ginzacontacts.com/m/bxapxW4eGr3yQNadbiCnGD/stores/18/logo/box_contacts.png'
        });
        
        row.add(imgPerson);
        row.add(lblName);
        row.add(btnWrite);
        row.add(lblMail);
        tbl_data.push(row);
	};
	

	// Create a TableView.
	var tvContatos = Ti.UI.createTableView({data: tbl_data});

	
//	tvContatos.setData(tbl_data);
	
	// Listen for click events.
	tvContatos.addEventListener('click', function(e) {
		alert('title: \'' + e.row.title + '\', section: \'' + e.section.headerTitle + '\', index: ' + e.index);
	});
	
	// Add to the parent view.
	win.add(tvContatos);

	return win;
})();