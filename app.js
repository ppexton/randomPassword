new Vue({
    el: '#app',
    data: {},
    methods: {
        generatePassword: function(filter, length, current) {
            var types = {
                number: "0123456789",
                lowercase: "abcdefghijklmnopqrstuvwxyz",
                uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                special: "#$£&%!?*"
            };

            var r = '';
            if ( filter[0] === "all" ) {
                r = Object.keys(types);
            } else {
                r = filter;
            }
            r.reduce(function(s, t) {
                s += types[t];
                return s;
            }, "");




        }
    }
});