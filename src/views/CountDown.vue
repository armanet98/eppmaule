<template>
    <div>
        <div class="card text-white bg-info mb-3" v-if="seconds">
            <div class="card-body">
                <h2>{{ expires_in }}</h2>
            </div>
        </div>
    </div>
</template>

<script>
    import * as moment from 'moment';
    export default {
        name: 'CountDown',
        props: {
            seconds: {
                type: Number,
                required: true,
            }
        },
        data () {
            return {
                countdown: null,
                expires_in: null,
                interval: null,
            }
        },
        mounted () {
            this.countdown = moment.utc(this.seconds).format('ss:mm:HH');
            this._setInterval();
        },
        destroyed () {
            clearInterval(this.interval);
        },
        methods: {
            _setInterval: function() {
                this.interval = setInterval(() => {
                    if (this.expires_in === 0) {
                        clearInterval(this.interval);
                    } else {
                        this.expires_in += 1;
                        this.countdown = moment.utc(this.expires_in * 1000).subtract(1, 'seconds').format('HH:mm:ss');
                    }
                }, 1000);
            },
        }
    }
</script>