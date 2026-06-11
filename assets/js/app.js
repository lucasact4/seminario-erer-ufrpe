import { createApp } from 'vue';

import Slide from '../../components/Slide.js';
import QrCard from '../../components/QrCard.js';

const app = createApp({
    components: {
        'slide': Slide,
        'qr-card': QrCard
    },
    data() {
        return {
            currentSlide: 0,
            totalSlides: 18
        }
    },
    computed: {
        progressPercentage() {
            return ((this.currentSlide + 1) / this.totalSlides) * 100;
        }
    },
    mounted() {
        // O .bind(this) garante que o Vue consiga ler os métodos através do teclado
        this._keyListener = this.handleKeydown.bind(this);
        window.addEventListener('keydown', this._keyListener);
    },
    unmounted() {
        window.removeEventListener('keydown', this._keyListener);
    },
    methods: {
        nextSlide() {
            if (this.currentSlide < this.totalSlides - 1) {
                this.currentSlide++;
            }
        },
        prevSlide() {
            if (this.currentSlide > 0) {
                this.currentSlide--;
            }
        },
        handleKeydown(e) {
            // Permite usar a Seta para Direita, Espaço ou Enter para avançar
            if (e.key === 'ArrowRight' || e.key === 'Space' || e.key === 'Enter') {
                this.nextSlide();
            } 
            // Permite usar a Seta para Esquerda para voltar
            else if (e.key === 'ArrowLeft') {
                this.prevSlide();
            }
        }
    }
});

app.mount('#app');