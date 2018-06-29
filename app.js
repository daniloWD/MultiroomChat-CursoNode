/*Importar as configuraçôes do servidor */
var app = require('./config/server');

/* Parametrizar a porta de escuta */
var server = app.listen(80, function() {
    console.log('Servidor ouvindo na porta 80!');
});

var io = require('socket.io').listen(server);

app.set('io', io);

/*criar a conexão por websocket */
io.on('connection', function(socket) {
    console.log('Usuario conectado');

    socket.on('disconnect', function() {
        console.log('Usuário desconectado.');
    });

    var apelido = "";
    socket.on('msgParaServidor', function(data) {
        /* Dialogo */
        socket.emit(
            'msgParaCliente', {
                apelido: data.apelido,
                mensagem: data.mensagem
            }
        );
        socket.broadcast.emit(
            'msgParaCliente', {
                apelido: data.apelido,
                mensagem: data.mensagem
            }
        );

        /* Participantes */
        if (parseInt(data.apelido_atualizado_nos_clientes) == 0) {
            socket.emit(
                'participantesParaCliente', {
                    apelido: data.apelido
                }
            );

            socket.broadcast.emit(
                'participantesParaCliente', {
                    apelido: data.apelido
                }
            );
        }

    });

    socket.on('imgParaServidor', function(data) {
        /* Dialogo */
        socket.emit(
            'imgParaCliente', {
                apelido: data.apelido,
                mensagem: data.mensagem
            }
        );
        socket.broadcast.emit(
            'imgParaCliente', {
                apelido: data.apelido,
                mensagem: data.mensagem
            }
        );

        /* Participantes */
        if (parseInt(data.apelido_atualizado_nos_clientes) == 0) {
            socket.emit(
                'participantesParaCliente', {
                    apelido: data.apelido
                }
            );

            socket.broadcast.emit(
                'participantesParaCliente', {
                    apelido: data.apelido
                }
            );
        }

    });

    socket.on('musicaParaServidor', function(data) {
        /* Dialogo */
        socket.emit(
            'musicaParaCliente', {
                apelido: data.apelido,
                mensagem: data.mensagem
            }
        );
        socket.broadcast.emit(
            'musicaParaCliente', {
                apelido: data.apelido,
                mensagem: data.mensagem
            }
        );

        /* Participantes */
        if (parseInt(data.apelido_atualizado_nos_clientes) == 0) {
            socket.emit(
                'participantesParaCliente', {
                    apelido: data.apelido
                }
            );

            socket.broadcast.emit(
                'participantesParaCliente', {
                    apelido: data.apelido
                }
            );
        }

    });

    socket.on('videoParaServidor', function(data) {
        /* Dialogo */
        socket.emit(
            'videoParaCliente', {
                apelido: data.apelido,
                mensagem: data.mensagem
            }
        );
        socket.broadcast.emit(
            'videoParaCliente', {
                apelido: data.apelido,
                mensagem: data.mensagem
            }
        );

        /* Participantes */
        if (parseInt(data.apelido_atualizado_nos_clientes) == 0) {
            socket.emit(
                'participantesParaCliente', {
                    apelido: data.apelido
                }
            );

            socket.broadcast.emit(
                'participantesParaCliente', {
                    apelido: data.apelido
                }
            );
        }

    });



});
2