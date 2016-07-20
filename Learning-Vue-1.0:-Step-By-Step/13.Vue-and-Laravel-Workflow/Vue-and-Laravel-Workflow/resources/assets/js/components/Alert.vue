<template>
     <div :class="alertClasses" v-show="show">
        <slot></slot>
        <span class="Alert__close" @click="show = false">X </span>
    </div>
</template>

<script type="text/javascript">
  export default{
        template: "#alert-template",

        props: ['type'],

        data() {
            return {
                show: true
            }
        },

        computed: {
            alertClasses() {
                var type = this.type;

                return {
                    'Alert': true,
                    'Alert-Success': type == 'success',
                    'Alert-Error': type == 'error'
                };
            }
        }
</script>
