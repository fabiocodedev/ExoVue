export default {
    data: () => ({
        firstName: "Fabien",
        lastName: "Bourgin",
    }),
    methods: {
        rename () {
            this.firstName = "Elon";
            this.lastName = "Musk";
        },
    },
    computed: {
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
    },
};