// Função para lidar com as requisições POST que chegam
async function handleRequest(request) {
    if (request.method === 'POST') {
      try {
        // Obter o corpo da requisição
        const data = await request.json();
        
        // Exibir a mensagem no console
        console.log('Mensagem recebida:', data.message);
        console.log('Timestamp:', data.timestamp);
        
        // Atualizar o status na página
        document.getElementById('status').innerText = `Última notificação: ${data.message} - ${data.timestamp}`;
        
        // Responder com um status 200 OK
        return new Response('Notificação recebida com sucesso', { status: 200 });
      } catch (error) {
        console.error('Erro ao processar a requisição:', error);
        return new Response('Erro ao processar a requisição', { status: 500 });
      }
    } else {
      return new Response('Método não permitido', { status: 405 });
    }
  }
  
  // Verificar se a requisição é POST e chamar a função de tratamento
  addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event.request));
  });
  