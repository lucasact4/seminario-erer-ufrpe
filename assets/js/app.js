import { createApp } from 'vue';

// Importa os componentes exportados como módulos
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
        window.addEventListener('keydown', this.handleKeydown);
    },
    unmounted() {
        window.removeEventListener('keydown', this.handleKeydown);
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
            if (e.key === 'ArrowRight' || e.key === 'Space') {
                this.nextSlide();
            } else if (e.key === 'ArrowLeft') {
                this.prevSlide();
            }
        }
    }
});

app.mount('#app');