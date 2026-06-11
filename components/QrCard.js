export default {
    name: 'QrCard',
    props: {
        qrUrl: String,
        text: String,
        source: String
    },
    computed: {
        linkDestino() {
            const match = this.qrUrl.match(/data=(.*)/);
            return match ? match[1] : '#';
        },
        qrUrlMaior() {
            // Aumentado para 300x300
            return this.qrUrl.replace('size=180x180', 'size=350x350');
        }
    },
    template: `
        <div class="qr-container">
            <!-- A imagem agora é clicável e tem efeito de hover -->
            <a :href="linkDestino" target="_blank" title="Clique para acessar a notícia" class="qr-link-wrapper">
                <img :src="qrUrlMaior" alt="QR Code" class="qr-image">
            </a>
            
            <p class="qr-text" v-html="text"></p>
            <span class="qr-source">{{ source }}</span>
            
            <!-- Botão extra para quem está acessando pelo computador -->
            <a :href="linkDestino" target="_blank" class="qr-direct-link">
                <i class="fas fa-external-link-alt"></i> Acessar Notícia
            </a>
        </div>
    `
}