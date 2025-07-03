<template>
    <div>
        <h1>Signup</h1>
        <form>
            <!-- could consider submit.prevent as needed -->
             <div class="mb-3">
                <label for="fName" class="form-label">First Name</label>
                <input type="text" class="form-control" id="fName" required placeholder="First Name" v-model="firstName">
             </div>
             <div class="mb-3">
                <label for="lName" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="lName" required placeholder="Last Name" v-model="lastName">
             </div>
             <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="text" class="form-control" id="email" required placeholder="Email" v-model="email">
             </div>
             <small v-if="dupeEmail" class="text-danger">Please choose a different email, duplicate found</small>
             <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="text" class="form-control" id="password" required placeholder="Password" v-model="password">
             </div>
          <input type="button" @click="onSubmit" class="btn btn-primary" value="Submit">
          <p id="error-signup" class="text-danger">{{ errorMessage }}</p>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            errorMessage: "",
            dupeEmail: false
        }
    },
    methods: {
        onSubmit() {
            console.log("form submitted");
            // build a JS object to capture API required fields
            const formData = {
                nameFirst: this.firstName,
                nameLast: this.lastName,
                email: this.email,
                password: this.password
            };
            // post via axios to API endpoint/contacts
            axios.post("/contacts", formData).then((resp) => {
                console.log("response", resp)
            })
                .catch((err) => {
                    console.log(err);
                    if (err.response.status === 409) {
                        // duplicate email status message
                        this.dupeEmail = true;
                    }
                    else {
                        this.errorMessage = "General signup error, please try again";
                    }
                });
        }
    }
};

</script>
<style>
div{
    text-align: left;
}
</style>