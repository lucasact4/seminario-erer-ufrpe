export default {
    name: 'Slide',
    props: {
        index: {
            type: Number,
            required: true
        },
        current: {
            type: Number,
            required: true
        },
        theme: {
            type: String,
            default: 'slide-light'
        },
        bgImage: {
            type: String,
            default: null
        }
    },
    template: `
        <div class="slide" :class="[theme, { active: index === current }]">
            <div v-if="bgImage" class="bg-overlay" :style="{ backgroundImage: 'url(' + bgImage + ')' }"></div>
            
            <div class="slide-content" :class="{ 'glass-box': bgImage }">
                <slot></slot>
            </div>
        </div>
    `
}