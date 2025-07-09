let peerConnection;

// 1. Генерация оффера (кода)
async function generateOffer() {
  peerConnection = new RTCPeerConnection();
  
  // Создаем канал данных (для сообщений)
  const dataChannel = peerConnection.createDataChannel('chat');
  dataChannel.onmessage = (e) => alert(`Получено: ${e.data}`);
  
  // Генерируем оффер
  const offer = await peerConnection.createOffer();
  await peerConnection.setLocalDescription(offer);
  
  // Выводим код для копирования
  document.getElementById('local-code').value = JSON.stringify(offer);
}

// 2. Подключение по коду
async function connect() {
  const remoteOffer = document.getElementById('remote-code').value;
  if (!remoteOffer) return;

  peerConnection = new RTCPeerConnection();
  peerConnection.ondatachannel = (e) => {
    e.channel.onmessage = (msg) => alert(`Получено: ${msg.data}`);
  };

  // Устанавливаем оффер собеседника
  await peerConnection.setRemoteDescription(JSON.parse(remoteOffer));
  
  // Отправляем ответ
  const answer = await peerConnection.createAnswer();
  await peerConnection.setLocalDescription(answer);
  
  // Теперь можно обмениваться данными!
  peerConnection.getDataChannel('chat').send('Привет!');
}