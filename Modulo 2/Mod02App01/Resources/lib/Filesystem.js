Titanium.API.info('Diretório Resources:' + Titanium.Filesystem.resourcesDirectory);
Titanium.API.info('Diretório Temp:' + Titanium.Filesystem.tempDirectory);
Titanium.API.info('Diretório do App:' + Titanium.Filesystem.applicationDirectory);
Titanium.API.info('Diretório de Application Data:' + Titanium.Filesystem.applicationDataDirectory);
Titanium.API.info('Diretório Application Support:' + Titanium.Filesystem.applicationSupportDirectory);

Titanium.API.info('Armazenamento externo disponível:' + Titanium.Filesystem.isExternalStoragePresent());
Titanium.API.info('Diretório External Storage:' + Titanium.Filesystem.externalStorageDirectory);
Titanium.API.info('Separador:' + Titanium.Filesystem.separator);
Titanium.API.info('Terminação de linha:' + Titanium.Filesystem.lineEnding);

//Adquirindo referência para o arquivo texto.txt
//f recebe uma instancia do objeto Ti.Filesystem.File
var f = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, 'texto.txt');
Ti.API.info('Arquivo = ' + f);

//Para lermos o arquivo, chamamos a função <read()> do objeto.
var conteudo = f.read();

//O conteúdo é retornado como um BLOB
Ti.API.info("Objeto BLOB conteudo = "+conteudo);
//Lemos o texto acessando a propriedade <text> do blob
//Podemos identificar o MIME Type do arquivo também pela propriedade <mimeType>
Ti.API.info('Texto conteudo = ' + conteudo.text);
//E podemos identificar várias outras propriedades do arquivo também, como:
Ti.API.info('Arquivo do Blob = ' + conteudo.file);
Ti.API.info('nativePath = ' + f.nativePath);
Ti.API.info('Verificar se o arquivo existe = ' + f.exists());
Ti.API.info('Tamanho = ' + f.size);
Ti.API.info('Read Only = ' + f.readonly);
Ti.API.info('Symlink (Link Simbólico) = ' + f.symbolicLink);
Ti.API.info('Executável = ' + f.executable);
Ti.API.info('Hidden (Escondido) = ' + f.hidden);
Ti.API.info('Writeable (editável) = ' + f.writable);
Ti.API.info('Nome = ' + f.name);
Ti.API.info('Extensão = ' + f.extension());
Ti.API.info('Criado em = ' + String(new Date(f.createTimestamp())));

var dir = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory);
Ti.API.info('Listar Diretório = ' + dir.getDirectoryListing());
Ti.API.info('Pai = ' + dir.getParent());
Ti.API.info('Espaço Disponível = ' + dir.spaceAvailable());

var novoDir = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'meuDir');
Ti.API.info("meuDir criado: " + novoDir.createDirectory());
Ti.API.info('novoDir ' + novoDir);

var novoArquivo = Titanium.Filesystem.getFile(novoDir.nativePath,'novoArquivo.txt');
novoArquivo.write(f.read());

Ti.API.info('Listar Diretório em novoDir = ' + novoDir.getDirectoryListing());
Ti.API.info("novoArquivo.txt criado: " + String(new Date(novoArquivo.createTimestamp())));
Ti.API.info("novoArquivo.txt modificado: " + String(new Date(novoArquivo.modificationTimestamp())));
Ti.API.info("novoArquivo.txt renomeado para novoNome.txt: " + novoArquivo.rename('novoNome.txt'));

var arquivoRenomeado = Titanium.Filesystem.getFile(novoDir.nativePath, 'novoNome.txt');
Ti.API.info("Deletar novoArquivo.txt (Deve falhar): " + novoArquivo.deleteFile());
Ti.API.info("Deletar novoNome.txt: " + arquivoRenomeado.deleteFile());
Ti.API.info("Deletar meuDir: " + novoDir.deleteDirectory());
Ti.API.info('Listar diretório novoDir depois de deletar o diretório = ' + novoDir.getDirectoryListing());

//Acessar arquivos JS compilados
var arquivoJS = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'app.js');
Ti.API.info("app.js existe? " + String(new Date(arquivoJS.createTimestamp())));
Ti.API.info("app.js existe? " + arquivoJS.exists());
Ti.API.info("app.js tamanho: " + arquivoJS.size);

var arquivoTeste = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'texto.txt');
Ti.API.info('texto.txt existe? ' + arquivoTeste.exists());
Ti.API.info('texto.txt tamanho: ' + arquivoTeste.size + ' bytes');

//A função <write()> pode receber um boolean indicando se deverá fazer um "append" ao
//arquivo ou sobrescrever. O default é FALSE, ou seja, por default, se o valor não for
//informado, a função <write()> irá sobrescrever o arquivo!
if(!arquivoTeste.write("texto escrito através do código com: write()\n", true)) {
	Ti.API.info("Não conseguimos escrever no arquivo.");
}

Ti.API.info("Conteúdo do arquivoTeste:\n" + (arquivoTeste.read()).text);











